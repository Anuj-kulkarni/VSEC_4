import { BrowserRouter, Routes, Route } from "react-router-dom";
import { use, useState } from "react";
import Input from "./Input";
import Display from "./Display";

function App() {
    const [ name, setName ] = useState("");
    const [ city, setCity ] = useState("");

    return (
        <BrowserRouter>
            <Route path="/"
            element={<input 
                    setName = {setName}
                    setCity = {setCity}
                    />}>
            </Route>
            <Route
                path="/display"
                element={
                    <Display
                        name={name}
                        city={city}/>
                }
            />
        </BrowserRouter>
    );
}

