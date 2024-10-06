import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Box, createTheme, ThemeProvider } from "@mui/material";
import Cats from "./components/Cats";
import Todos from "./components/Todo";

const theme = createTheme({
  palette: {
    primary: {
      main: '#C3E6CB',
    },
    secondary: {
      main: '#F9C2A3',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container>
          <Routes>
            <Route path="/" element={
              <Box 
                sx={{ 
                  backgroundColor: "#ffe4e6", 
                  padding: "20px", 
                  borderRadius: "15px", 
                  margin: "20px" 
                }}>
                <Cats />
                <Todos />
              </Box>
            } />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;