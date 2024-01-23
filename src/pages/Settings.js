import { Box, Button, CircularProgress, Typography } from "@mui/material";
import SelectField from "../Components/SelectField";
import TextFieldComp from "../Components/TextFieldComp";
import useAxios from "../hooks/useAxios";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  const history = useNavigate();

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Something went wrong.
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True/False" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    history("/questions");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h3" fontWeight="bold">
        Build Your Own Trivia Quiz
      </Typography>
      <SelectField
        options={response.trivia_categories ? response.trivia_categories : ""}
        label="Category"
      />
      <SelectField
        options={difficultyOptions ? difficultyOptions : ""}
        label="Difficulty"
      />
      <SelectField options={typeOptions ? typeOptions : ""} label="Type" />
      <TextFieldComp />
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit">
          Get Started
        </Button>
      </Box>
    </form>
  );
};

export default Settings;
