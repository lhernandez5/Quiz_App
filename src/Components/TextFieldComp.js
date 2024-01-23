import { Box, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleAmountChange } from "../redux/actions";

const TextFieldComp = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const input = e.target.value;
    const numericInput = input.replace(/[^0-9]/g, "");
    setValue(numericInput);
    dispatch(handleAmountChange(input));
  };

  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth size="small">
        <TextField
          onChange={handleChange}
          label="Number of Questions"
          type="text"
          value={value}
          size="small"
        />
      </FormControl>
    </Box>
  );
};

export default TextFieldComp;
