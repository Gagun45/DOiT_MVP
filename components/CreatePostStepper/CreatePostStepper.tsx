"use client";

import { Box, Button, Paper } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useState } from "react";
import StepOne from "./StepContent/StepOne/StepOne";
import StepTwo from "./StepContent/StepTwo/StepTwo";
import { Save } from "@mui/icons-material";
import StepLast from "./StepContent/StepLast/StepLast";

const STEPS = ["Заголовок", "тіло", "Попередній перегляд"];

const CreatePostStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const resetStepper = () => {
    setActiveStep(0);
    setTitle("");
    setBody("");
  };

  const nextBtnIsDisabled =
    (activeStep === 0 && !title) || (activeStep === 1 && !body);

  const handleNext = () => {
    if (activeStep < STEPS.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const stepContent = [
    <StepOne key={"step-one"} setTitle={setTitle} title={title} />,
    <StepTwo key={"step-two"} setBody={setBody} body={body} />,
  ];
  return (
    <Paper sx={{ padding: 4, width: "100%", maxWidth: "550px" }} elevation={12}>
      <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 3 }}>
        {STEPS.map((step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {stepContent[activeStep]}

      {activeStep === STEPS.length - 1 && (
        <StepLast
          body={body}
          open={true}
          title={title}
          onCancel={() => setActiveStep(0)}
          resetStepper={resetStepper}
        />
      )}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <Button onClick={handleBack} disabled={activeStep === 0}>
          Назад
        </Button>
        <Button
          sx={{
            color: "white",
            bgcolor: "var(--color-primary)",
            ":hover": { bgcolor: "var(--color-primary)" },
          }}
          endIcon={<Save />}
          onClick={handleNext}
          disabled={nextBtnIsDisabled}
        >
          {activeStep === STEPS.length - 1 ? "Зберегти" : "Далі"}
        </Button>
      </Box>
    </Paper>
  );
};
export default CreatePostStepper;
