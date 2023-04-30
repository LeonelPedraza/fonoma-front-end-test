import styled from "styled-components";

export const SelectCurrencySection = styled.div({
    width: '100%',
    display: 'flex',
    gap: '1rem'
})

export const SelectCurrencyContainer = styled.div({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
})

export const CurrencySelect = styled.select({
    width: '100%',
    border: '1px solid rgba(0, 0, 0, .2)',
    fontSize: '16px',
    outline: 'none',
    padding: '8px 10px',
    borderRadius: '8px',
    background: 'transparent',
    color: 'rgba(0, 0, 0, .8)',
    fontWeight: '600',
    zIndex: '50'
})