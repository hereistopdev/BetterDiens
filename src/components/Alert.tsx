"use client";

import * as React from "react";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { CustomAlertProps } from "@/utils";

export function CustomAlert({ open, setOpen, content, severity, customStyle }: CustomAlertProps) {

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {content}
        </Alert>
      </Snackbar>
    </div>
  );
}