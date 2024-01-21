import { Box, FormControl, TextField } from "@mui/material";
import React from "react";

const TextFieldComp = (props) => {
  const { label } = props;
  const handleChange = () => {};

  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth size="small">
        <TextField
          onChanges={handleChange}
          variant="outlined"
          label={label}
          type="number"
          size="small"
        />
      </FormControl>
    </Box>
  );
};

export default TextFieldComp;
