// MODULES
import styled from "styled-components";
import { Link } from "react-router-dom";


// FILES
import logo from "../Assets/Logo.svg";

export default function App() {
  return (
    <AlignItems>
        <Logo src={logo} alt="Logo"/>
        <Email data-identifier="input-email" type="email" placeholder="email"/>
        <Password data-identifier="input-password" type="password" placeholder="senha"/>
        <Button data-identifier="login-btn">Entrar</Button>
        <Link data-identifier="sign-up-action" to={"/cadastro"}><Cadastrese>Não tem uma conta? Cadastre-se!</Cadastrese></Link>
    </AlignItems>
  );
}

const AlignItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Logo = styled.img`
    width: 180px;
    height: 180px;
`

const Email = styled.input`
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
    `

const Password = styled.input`
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
`
const Button = styled.button`
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
`

const Cadastrese = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
`