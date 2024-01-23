import { Box, Typography, Button, CircularProgress } from "@mui/material";
import useAxios from "../hooks/useAxios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { handleScoreChange } from "../redux/actions";
import { decode } from "html-entities";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const Questions = () => {
  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_questions,
    score,
  } = useSelector((state) => state);

  const history = useNavigate();
  const dispatch = useDispatch();
  let apiUrl = `/api.php?amount=${amount_of_questions}`;

  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`);
  }
  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }
  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }

  const { response, loading, error } = useAxios({ url: apiUrl });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length + 1),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [response, questionIndex]);

  if (error) {
    console.log("THIS IS THE ERROR: " + error);
    history("/");
  }

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
    }

    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      history("/score");
    }
  };

  return (
    <>
      <Box>
        <Typography variant="h4">Question {questionIndex + 1}</Typography>
        <Typography mt={5}>
          {response.results[questionIndex] !== undefined &&
          response.results !== null
            ? decode(response.results[questionIndex].question)
            : history("/issue")}
        </Typography>
        <Box mt={5}>
          Score: {score}/{response.results.length}
        </Box>
        {options.map((data, id) => (
          <Box mt={2} key={id}>
            <Button onClick={handleClickAnswer} variant="contained">
              {decode(data)}
            </Button>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Questions;
