import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Head from 'next/head'
import { GetServerSideProps, GetStaticPropsContext } from 'next'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import axiosFetch from '@/config/axios';
import { Container } from '../components/container'
import { Form, Label, LabelError, SendFormButton, Sendform } from '../components/form'
import { ConvertionResult, Header } from '../components/header'
import { CurrencySelect, SelectCurrencyContainer, SelectCurrencySection } from '../components/selectCurrency'
import { AmountInput, AmountSecion } from '../components/amount'
import { ConvertionData, IProps } from '@/lib/types'

function Home({ coins }: IProps) {

  const convertionSchema = yup.object({
    amount: yup.number().min(1, 'Amount must by grater than 0').required('Please insert a number value')
  })

  const { register, handleSubmit, formState: { errors } } = useForm<ConvertionData>({
    resolver: yupResolver(convertionSchema)
  });
  const [convertion, setConvertion] = useState(null)

  const sendData = handleSubmit(async (data: ConvertionData) => {
    const res = await axiosFetch(`/convert?to=${data.to}&from=${data.from}&amount=${Number(data.amount)}`)
    const resData = res.data.result
    setConvertion(resData)
  })

  return (
    <>
      <Head>
        <title>Exchange rate calculator</title>
        <meta name="description" content="Fonoma front-end test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Form onSubmit={sendData}>
          <Header>Exchange rate calculator</Header>
          <SelectCurrencySection>
            <SelectCurrencyContainer>
              <Label>From:</Label>
              <CurrencySelect
                id='select-coin-from'
                {...register('from')}
              >
                {
                  coins?.map((coin) => (
                    <option key={coin[0]} value={coin[0]}>{coin[0]} - {coin[1]}</option>
                  ))
                }
              </CurrencySelect>
            </SelectCurrencyContainer>
            <SelectCurrencyContainer>
              <Label>To:</Label>
              <CurrencySelect
                data-testid='selectCoin'
                {...register('to')}
              >
                {
                  coins?.map((coin) => (
                    <option key={coin[0]} value={coin[0]}>{coin[0]} - {coin[1]}</option>
                  ))
                }
              </CurrencySelect>
            </SelectCurrencyContainer>
          </SelectCurrencySection>
          <AmountSecion>
            <Label>Amount:</Label>
            <AmountInput
              type='number'
              placeholder='Amount'
              min={1}
              step="any"
              {...register('amount')}
            />
            <LabelError>{errors.amount?.message}</LabelError>
          </AmountSecion>
          <Sendform>
            <SendFormButton type='submit'>Convert</SendFormButton>
          </Sendform>
          {
            convertion !== null &&
            <ConvertionResult>Convertion: ${Number(convertion).toFixed(2)}</ConvertionResult>
          }
        </Form>
      </Container>
    </>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const res = await axiosFetch('/symbols')
  const coins = Object.entries(res.data.symbols)
  return {props: { coins }}
}
// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const res = await axiosFetch('/symbols')
//   const coins = Object.entries(res.data.symbols)
//   return {props: { coins }}
// }

export default Home