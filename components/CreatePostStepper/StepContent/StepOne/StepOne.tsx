import { TextField } from "@mui/material";
import { useState, type Dispatch, type SetStateAction } from "react";

interface Props {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
}

const StepOne = ({ setTitle, title }: Props) => {
  const [touched, setTouched] = useState(false);
  const error = touched && !title.trim();
  return (
    <TextField
      placeholder="Заголовок"
      fullWidth
      onBlur={() => setTouched(true)}
      value={title}
      error={!!error}
      helperText={error ? "Введіть заголовок" : ""}
      onChange={({ target }) => setTitle(target.value)}
    />
  );
};
export default StepOne;
