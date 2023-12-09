import React from "react";
import { AppBar, Toolbar, Typography, Button, Tab, Tabs } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to My App</h1>
      <p>This is the home page content.</p>
    </div>
  );
};

export default Home;
