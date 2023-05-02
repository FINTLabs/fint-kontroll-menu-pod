import React from 'react';
import {ThemeProvider} from "@mui/styles";
import Main from './main/Main'
import MenuProvider from "./context/menuContext";
import theme from "./template/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <MenuProvider>
                <Main/>
            </MenuProvider>
        </ThemeProvider>
    );
}

export default App;
