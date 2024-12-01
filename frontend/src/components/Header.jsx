import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Drawer, IconButton, List, ListItem, ListItemText, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header({ handleScrollToHero, handleScrollToEventDetails, handleScrollToTimeline,handleScrollToAlumniHighlights,handleOpen }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { name: "HomePage", action: handleScrollToHero },
    { name: "Events Details", action: handleScrollToEventDetails },
    { name: "Timeline", action: handleScrollToTimeline },
    { name: "Alumni Spotlights", action: handleScrollToAlumniHighlights },
  ];

  const DrawerList = (
    <div className="w-48 p-4">
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.name}
            onClick={() => {
              setDrawerOpen(false);
              if (item.action) {
                item.action();
              } else if (item.link) {
                window.location.href = item.link;
              }
            }}
            className={`${
              location.pathname === item.link ? "text-[#723F14] font-bold" : "text-slate-500"
            }`}
          >
            <Link
              to={item.link ? item.link : '#'}
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
          <img src="/logo.png" alt="Logo" className="h-10 mr-4 cursor-pointer" onClick={handleScrollToHero} />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-12">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={item.action ? item.action : () => window.location.href = item.link}
              className={`text-lg ${
                location.pathname === item.link
                  ? "text-[#723F14] font-bold"
                  : "hover:text-[#723F14]"
              }`}
              style={{ textDecoration: "none", background: "none", border: "none", padding: "0", cursor: "pointer" }}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Register Button (Desktop) */}
        <div className="hidden lg:block">
          <button
            onClick={handleOpen}
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
