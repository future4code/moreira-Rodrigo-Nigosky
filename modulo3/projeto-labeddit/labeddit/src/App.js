import React from "react";
import Routers from "./routes/Router";
import theme from './constants/theme'
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const App = () => {  
  return (
    <ThemeProvider theme = {theme}>
     <Routers />
    </ThemeProvider>
  );
}

export default App;
