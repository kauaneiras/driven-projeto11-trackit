import { useContext } from 'react';
import styled from 'styled-components';
import { LoginResponse } from "./Contexts";


export default function TopBar() {
    const LoginData = useContext(LoginResponse);
    const image = LoginData.loginResponse.image;
    

    return (
        <HeaderApp >
            <HeaderCenter>
                <Logo>TrackIt</Logo>
                <UserPhoto src={image} alt="" />
            </HeaderCenter>
        </HeaderApp>
    )
}


const Logo = styled.h1`
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
`

const UserPhoto = styled.img`   
    width: 16%;
    height: 95%;
    background-color: orange;
    border-radius: 50%;
`

const HeaderCenter = styled.div`   
    height: 80%;
    width: 95%;  
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const HeaderApp = styled.header`   
    position: fixed;
    width: 100%;
    height: 80px;
    background-color: #126BA5;
    display: flex;
    align-items: center;
    justify-content: center;
`

