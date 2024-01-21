import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/material";

function App() {
  return (
    <Router future={{ v7_startTransition: true }}>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Typography variant="h2" fontWeight="bold">
            Quiz App
          </Typography>
          <Routes>
            <Route path="/" element={<Settings />}></Route>
            <Route path="/questions" element={<Questions />}></Route>
            <Route path="/score" element={<FinalScreen />}></Route>
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
