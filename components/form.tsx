import styled from 'styled-components'

export const Form = styled.form`
    width: max-content;
    height: max-content;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding: 25px;
    border: 5px solid transparent;
    border-radius: 25px;
    text-align: center;
    box-shadow: -5px -5px 15px rgba(255, 255, 255, 1), 
                5px 5px 15px rgba(0, 0, 0, .1),
                inset -5px -5px 15px rgba(255, 255, 255, 1),
                inset 5px 5px 15px rgba(0, 0, 0, .1);
    overflow: hidden;
    &::before {
        content: "";
        position: absolute;
        left: -3rem;
        top: -5rem;
        width: 15rem;
        height: 15rem;
        border-radius: 50%;
        background: #1A73E8;
        opacity: .1;
        z-index: 10;
    }
    &::after {
        content: "";
        position: absolute;
        right: -5rem;
        bottom: -5rem;
        width: 15rem;
        height: 15rem;
        border-radius: 50%;
        background: #1A73E8;
        opacity: .1;
        z-index: 10;
    }
`

export const Sendform = styled.div({
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
})

export const Label = styled.label({
    width: '100%',
    marginLeft: 0,
    color: 'rgba(0, 0, 0, .6)',
    textAlign: 'left',
    fontWeight: '600'
})

export const LabelError = styled(Label)({
    color: '#f00'
})

export const SendFormButton = styled.button`
    padding: 10px 20px;
    background: #1A73E8;
    color: #fff;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 600;
    outline: none;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: .2s linear;
    &:hover {
        opacity: .9;
    }
`