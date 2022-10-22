// MODULES
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// FILES
import logo from "../Assets/Logo.svg";


export default function Register(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    function registeruser(e){
        e.preventDefault();
        const body = {
            email,
            password,
            name,
            image
        }
        console.log("CADASTROU USUARIO");
        console.log(body);
        // const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body);
        // request.then(response => {
        //     console.log(response);
        // })
        // request.catch(error => {
        //     console.log(error);
        // })
    }


    return(
        <AlignItems>
            <Logo src={logo} alt="Logo"/>
            <Form onSubmit={registeruser}>
                <Email data-identifier="input-email" type="email" placeholder="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                <Password data-identifier="input-password" type="password" placeholder="senha" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                <Name data-identifier="input-name" placeholder="nome" value={name} onChange={(e) => {setName(e.target.value)}}/>
                <Photo data-identifier="input-photo" placeholder="foto" value={image} onChange={(e) => {setImage(e.target.value)}}/>
                <Button data-identifier="sign-up-btn" type="subimit">Cadastrar</Button>
            </Form>
            <Link data-identifier="sign-in-action" to={"/"}><Cadastrese>Já tem uma conta? Faça login!</Cadastrese></Link>
        </AlignItems>
    )
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

const Form = styled.form`
    display: flex;
    flex-direction: column;
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

const Name = styled.input`
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

const Photo = styled.input`
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