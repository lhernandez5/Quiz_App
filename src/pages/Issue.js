import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router";

const Issue = () => {
  const history = useNavigate();
  const handleBackToSettings = () => {
    history("/");
  };
  return (
    <Box mt={30}>
      <Typography>
        Something sent wrong or there aren't enough questions. Please try again.
      </Typography>
      <Button onClick={handleBackToSettings} variant="outlined">
        Back to settings!
      </Button>
    </Box>
  );
};

export default Issue;
