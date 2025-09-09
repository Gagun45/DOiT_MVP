"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import ThemeToggleBtn from "./ThemeToggle/ThemeToggleBtn";
import { IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import AppDrawer from "./AppDrawer/AppDrawer";
import AppBarTitle from "./AppBarTitle/AppBarTitle";

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
          <AppBarTitle />
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
