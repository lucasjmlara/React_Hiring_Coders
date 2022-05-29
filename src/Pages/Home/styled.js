import styled from 'styled-components';

export const Conteiner = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Input = styled.input`
    border: 1px solid #ddd;
    border-radius: .25rem 0 0 .25rem;
    height: 1.5rem;
    padding: 0 .5rem;

    &:focus,
    &:active {
        outline:none;
        box-shadow:none;
    }
`

export const Button = styled.button`
    border: 1px solid #ddd;
    border-radius: 0 .25rem .25rem 0;
    height: 1.6rem;
    background: #000;
    color: #fff;
    
    &:focus,
    &:active {
        outline:none;
        box-shadow:none;
    }
`

export const ErrorMsg = styled.span`
    display: block;
    font-size: 0.65rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
`