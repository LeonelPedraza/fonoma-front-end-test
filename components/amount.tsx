import styled from 'styled-components'

export const AmountSecion = styled.div({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    gap: '10px'
})

export const AmountInput = styled.input`
    width: 100%;
    font-size: 16px;
    background: transparent;
    border: 1px solid rgba(0, 0, 0, .2);
    outline: none;
    padding: 8px 10px;
    border-radius: 8px;
    color: rgba(0, 0, 0, .8);
    font-weight: 600;
    z-index: 50;
`