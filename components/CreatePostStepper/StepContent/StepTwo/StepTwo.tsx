import { TextField } from "@mui/material";
import { useState, type Dispatch, type SetStateAction } from "react";

interface Props {
  body: string;
  setBody: Dispatch<SetStateAction<string>>;
}

const StepTwo = ({ body, setBody }: Props) => {
  const [touched, setTouched] = useState(false);
  const error = touched && !body.trim();
  return (
    <TextField
      placeholder="Тіло"
      fullWidth
      multiline
      onBlur={() => setTouched(true)}
      error={!!error}
      helperText={error ? "Тіло не може бути пустим" : ""}
      rows={3}
      value={body}
      onChange={({ target }) => setBody(target.value)}
    />
  );
};
export default StepTwo;
