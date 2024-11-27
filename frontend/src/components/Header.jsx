import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Drawer, IconButton, List, ListItem, ListItemText, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation(); // Get the current path to highlight the active link

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { name: "HomePage", link: "/homepage" },
    { name: "Events Details", link: "/event-details" },
    { name: "Timeline", link: "/timeline" },
    { name: "Alumni Spotlights", link: "/alumni-spotlights" },
  ];

  const DrawerList = (
    <div className="w-48 p-4">
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.name}
            onClick={() => setDrawerOpen(false)}
            className={`${
              location.pathname === item.link ? "text-[#723F14] font-bold" : "text-slate-500"
            }`}
          >
            <Link
              to={item.link}
              className="block w-full"
              style={{ textDecoration: "none" }}
            >
              <ListItemText primary={item.name} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <header className="bg-[#fef6ef] shadow-md font-semibold text-slate-500 w-full fixed  z-40">
      <div className="flex items-center justify-between px-4 py-2 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10 mr-4" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className={`text-lg ${
                location.pathname === item.link
                  ? "text-[#723F14] font-bold"
                  : "hover:text-[#723F14]"
              }`}
              style={{ textDecoration: "none" }}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Register Button (Desktop) */}
        <div className="hidden lg:block">
          <button
            variant="contained"
            className="bg-[#723F14] text-white hover:opacity-90 rounded-lg px-6 py-2"
          >
            Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <IconButton onClick={toggleDrawer(true)} className="text-slate-500">
            <MenuIcon />
          </IconButton>
        </div>
      </div>

      {/* Drawer for Mobile Navigation */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </header>
  );
}
