import * as React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import Link from "next/link";
import { Tooltip, Typography } from "@mui/material";

export default function CreatePostSpeedDial() {
  return (
    <Tooltip title={<Typography>Створити пост</Typography>} placement="top">
      <SpeedDial
        ariaLabel="Create post"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        FabProps={{ component: Link, href: "/posts/create" }}
      />
    </Tooltip>
  );
}
