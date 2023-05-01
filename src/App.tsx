import React from 'react';
import {ThemeProvider} from "@mui/styles";
import {Route, Routes} from 'react-router-dom';
import Main from './main/Main'
import MenuProvider from "./context/menuContext";
import theme from "./template/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <MenuProvider>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                </Routes>
            </MenuProvider>
        </ThemeProvider>
    );
}

export default App;
