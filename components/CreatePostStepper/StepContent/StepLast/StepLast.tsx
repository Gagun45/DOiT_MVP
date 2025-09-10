import { useCreatePost } from "@/hooks/useCreatePost";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

interface Props {
  open: boolean;
  onCancel: () => void;
  title: string;
  body: string;
  resetStepper: () => void;
}

const StepLast = ({ body, open, onCancel, title, resetStepper }: Props) => {
  const handleConfirm = useCreatePost();

  const onConfirm = async () => {
    try {
      const res = await handleConfirm({ body, title });
      if (res.success) {
        resetStepper();
      }
    } catch {
      console.log("smth went wrong");
    } finally {
      onCancel();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      sx={{ width: "600px", marginX: "auto" }}
    >
      <DialogTitle>Попередній перегляд</DialogTitle>
      <DialogContent dividers sx={{ width: "500px" }}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="subtitle1">{body}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Редагувати</Button>
        <Button
          onClick={onConfirm}
          sx={{
            color: "white",
            bgcolor: "var(--color-primary)",
            ":hover": { bgcolor: "var(--color-primary)" },
          }}
        >
          Підтвердити
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default StepLast;
