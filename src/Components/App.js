//MODULES
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from './GlobalStyle';

// PAGES
import Login from '../Pages/Login'; 
import Register from '../Pages/Register'; 
import Habits from '../Pages/Habits'; 
import Today from '../Pages/Today';
import Historic from '../Pages/Historic';


export default function App(){
    return(
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/cadastro" element={<Register/>}/>
                <Route path="/habitos" element={<Habits/>}/>
                <Route path="/hoje" element={<Today/>}/>
                <Route path="/historico" element={<Historic/>}/>
            </Routes>
        </BrowserRouter>      
    )

}