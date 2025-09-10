import {
  Button,
  CircularProgress,
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
  onConfirm: () => void;
  isLoading: boolean;
}

const StepLast = ({
  body,
  open,
  onCancel,
  title,
  onConfirm,
  isLoading,
}: Props) => {
  return (
    <Dialog
      open={open}
      onClose={onCancel}
      maxWidth='md'
      fullWidth
    >
      <DialogTitle>Попередній перегляд</DialogTitle>
      <DialogContent dividers >
        <Typography variant="h4">{title}</Typography>
        <Typography variant="subtitle1">{body}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Редагувати</Button>
        <Button
          onClick={onConfirm}
          disabled={isLoading}
          startIcon={
            isLoading ? (
              <CircularProgress size={12} sx={{ color: "white" }} />
            ) : undefined
          }
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
