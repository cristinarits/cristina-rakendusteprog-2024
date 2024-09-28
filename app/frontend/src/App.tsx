import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Box } from "@mui/material";
import Cats from "./components/Cats";
import Todos from "./components/Todo";

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <Box
                sx={{
                  backgroundColor: "#ffe4e6",
                  padding: "20px",
                  borderRadius: "15px",
                  margin: "20px",
                }}
              >
                <Cats />
                <Todos />
              </Box>
            }
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;