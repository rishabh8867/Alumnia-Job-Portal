import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Drawer, IconButton, List, ListItem, ListItemText} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import EventNoteIcon from "@mui/icons-material/EventNote";
import TimelineIcon from "@mui/icons-material/Timeline";
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';

export default function Header({ handleScrollToHero, handleScrollToEventDetails, handleScrollToTimeline,handleScrollToAlumniHighlights,handleOpen }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { name: "HomePage", action: handleScrollToHero, icon: <HomeIcon /> },
    { name: "Events Details", action: handleScrollToEventDetails, icon: <EventNoteIcon /> },
    { name: "Timeline", action: handleScrollToTimeline, icon: <TimelineIcon /> },
    { name: "Alumni Spotlights", action: handleScrollToAlumniHighlights, icon: <LightbulbCircleIcon /> },
  ];

  const DrawerList = (
    <div className="w-52">
      <List>
        {navItems.map((item, index) => (
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
            className="flex justify-between items-center bg-slate-100 my-2 mx-2 rounded-xl"
          >
            <Link
              to={item.link ? item.link : "#"}
              className="w-full flex justify-between items-center"
              style={{ textDecoration: "none" }}
            >
              {/* Text */}
              <ListItemText
                primary={item.name}
                className="text-slate-700 rounded-lg text-sm md:text-base font-medium hover:bg-gray-100 hover:text-[#723F14] hover:border-[#723F14] transition-all duration-300"
              />
              {/* Placeholder Icon */}
              {item.icon}
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
