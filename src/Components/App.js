// MODULES
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from './GlobalStyle';
import { Provider } from "react";

// PAGES
import Login from '../Pages/Login'; 
import Register from '../Pages/Register'; 
import Habits from '../Pages/Habits'; 
import Today from '../Pages/Today';
import Historic from '../Pages/Historic';

// CONTEXTS
import { LoginResponse, AllHabits, NewHabit, Requisition, DailyHabit, Progress } from './Contexts';

export default function App(){
    
    const [loginResponse, setLoginResponse] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null); // TOKEN, IMAGE, NAME
    const [habits, setHabits] = useState([]);
    const [addNewHabit, setAddNewHabit] = useState(false);
    const [requisition, setRequisition] = useState(false);
    const [dailyHabit, setDailyHabit] = useState([]);
    const [progress, setProgress] = useState(0);

    return(
        <LoginResponse.Provider value={{loginResponse, setLoginResponse}}>
        <AllHabits.Provider value={{habits, setHabits}}>
        <NewHabit.Provider value={{addNewHabit, setAddNewHabit}}>
        <Requisition.Provider value={{requisition, setRequisition}}>
        <DailyHabit.Provider value={{dailyHabit, setDailyHabit}}>
        <Progress.Provider value={{progress, setProgress}}>


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


        </Progress.Provider>
        </DailyHabit.Provider>
        </Requisition.Provider>
        </NewHabit.Provider>
        </AllHabits.Provider>    
        </LoginResponse.Provider>
        
    )
}