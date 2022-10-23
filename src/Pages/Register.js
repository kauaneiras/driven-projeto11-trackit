// MODULES
import styled from "styled-components";
import { Link, Navigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";

// FILES
import logo from "../Assets/Logo.svg";


export default function Register(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    function registeruser(e){
        console.log("ENTROU NA FUNÇÃO DE REGISTRO");	
        e.preventDefault();
        
        const body = {email, password, name, image}

            if(email === "" || password === "" || name === ""){
                alert("Preencha todos os campos");
            }
            else{
            console.log("CAMPOS FORAM PREENCHIDOS CORRETAMENTE");
            const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body);
            promise.then(response => {
                console.log(response);
                console.log("CADASTROU USUARIO");
                console.log(body);
                <Navigate to={"/"}/>
            })
            promise.catch(error => {
                console.log("DEU ERRADO: ",error);
            })
        }
    }

    return(
        <AlignItems>
            <Logo src={logo} alt="Logo"/>
            <Form onSubmit={registeruser}>
                <Email porps={email} data-identifier="input-email" type="email" placeholder="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                <Password props={password} data-identifier="input-password" type="password" placeholder="senha" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                <Name props={name} data-identifier="input-name" placeholder="nome" value={name} onChange={(e) => {setName(e.target.value)}}/>
                <Photo props={image} data-identifier="input-photo" placeholder="foto" value={image} onChange={(e) => {setImage(e.target.value)}}/>
                <Button data-identifier="sign-up-btn" type="submit">Cadastrar</Button>
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
    color: ${props => props.props !== "" ? "black" : "#DBDBDB"};
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
    color: ${props => props.props !== "" ? "black" : "#DBDBDB"};
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
    color: ${props => props.props !== "" ? "black" : "#DBDBDB"};
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
    color: ${props => props.props !== "" ? "black" : "#DBDBDB"};
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