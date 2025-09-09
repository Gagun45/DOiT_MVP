"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import ThemeToggleBtn from "./ThemeToggle/ThemeToggleBtn";
import { IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import AppDrawer from "./AppDrawer/AppDrawer";

export default function Header() {
  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={() => ({ backgroundColor: "var(--color-primary)" })}>
          <IconButton
            onClick={() => setDrawerIsOpen((prev) => !prev)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DOiT MVP
          </Typography>
          <ThemeToggleBtn />
        </Toolbar>
      </AppBar>
      <AppDrawer
        drawerIsOpen={drawerIsOpen}
        setDrawerIsOpen={setDrawerIsOpen}
      />
    </Box>
  );
}
