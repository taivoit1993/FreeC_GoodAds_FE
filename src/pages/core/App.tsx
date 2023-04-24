import {ThemeProvider} from "@emotion/react";
import {createTheme} from "@mui/material";
import {blue} from "@mui/material/colors";
import {zhCN} from '@mui/material/locale';
import AlertComponent from "../../components/alert.component";
import ProcessComponent from "../../components/process.component";
import Header from "./headers/Header";
import React from "react";
import {Helmet} from 'react-helmet';

//custom theme
let theme = createTheme({
        palette: {
            primary: {
                main: "#34ac92",
                contrastText: "#fff"
            },
            secondary: {
                main: blue[500]
            }
        },
    },
    zhCN
);

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Helmet>
                    <title>Demo</title>
                    <script src="https://accounts.google.com/gsi/client" async defer></script>
                </Helmet>
                <AlertComponent/>
                <ProcessComponent/>
                <Header/>
            </div>
        </ThemeProvider>
    );
}

export default App;
