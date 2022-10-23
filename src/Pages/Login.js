// MODULES
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";



// FILES
import logo from "../Assets/Logo.svg";
import RenderButton from "../Components/RenderButton";

export default function App() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [nextPage, setNextPage] = useState(false);

    function loginuser(e){
        e.preventDefault();
        console.log("ENTROU NA FUNÇÃO DE LOGIN");
        const body = {email, password}
        setDisabled(true);
        if(email === "" || password === ""){
            alert("Preencha todos os campos");
            setDisabled(false);
        }
        else{
            console.log("CAMPOS FORAM PREENCHIDOS CORRETAMENTE");
            const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body);
            promise.then(response => {
                console.log(response);
                console.log("LOGOU USUARIO");
                console.log(body);
                localStorage.setItem("user", JSON.stringify({token: response.data.token, image: response.data.image, name: response.data.name}));
                setNextPage(true);
            })
            promise.catch(error => {
                console.log("DEU ERRADO: ",error);
            })
        }
    }

    if(nextPage){
        return <Navigate to={"/habitos"} />
    }else
        {return (
                <AlignItems>
                    <Logo src={logo} alt="Logo"/>
                    <Form onSubmit={loginuser}>
                        <Email data-identifier="input-email" props={email} type="email" placeholder="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                        <Password data-identifier="input-password" props={password} type="password" placeholder="senha" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                        <Button data-identifier="login-btn" type="submit"><RenderButton text={"Entrar"} state={disabled}/></Button>
                    </Form>
                    <Link data-identifier="sign-up-action" to={"/cadastro"}><Cadastrese>Não tem uma conta? Cadastre-se!</Cadastrese></Link>
                </AlignItems>
            );}
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