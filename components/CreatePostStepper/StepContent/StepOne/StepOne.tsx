import { TextField } from "@mui/material";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
}

const StepOne = ({ setTitle, title }: Props) => {
  return (
    <TextField
      placeholder="Заголовок"
      fullWidth
      value={title}
      onChange={({ target }) => setTitle(target.value)}
    />
  );
};
export default StepOne;
