import { TextField } from "@mui/material";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  body: string;
  setBody: Dispatch<SetStateAction<string>>;
}

const StepTwo = ({ body, setBody }: Props) => {
  return (
    <TextField
      placeholder="Тіло"
      fullWidth
      multiline
      rows={3}
      value={body}
      onChange={({ target }) => setBody(target.value)}
    />
  );
};
export default StepTwo;
