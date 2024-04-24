import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { handleAmountChange, handleScoreChange } from "../Redux/Actions";

const FinalScreen = () => {
  const { amount_of_questions, score } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useNavigate();
  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(50));
    history("/");
  };

  return (
    <Box mt={30}>
      <Typography variant="h4" mb={3}>
        You finished the quiz!
      </Typography>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score {score}/{amount_of_questions}
      </Typography>
      <Button onClick={handleBackToSettings} variant="contained" size="large">
        Back to settings!
      </Button>
    </Box>
  );
};

export default FinalScreen;
