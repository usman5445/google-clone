import React from "react";
import { SearchRounded, MicRounded } from "@mui/icons-material";
import { Paper, InputBase, IconButton, Button } from "@mui/material";
function HomePage() {
  return (
    <div
      className="home-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIN7bHMpaAD_RpHSWxMQwBF3jQDDDdF3IfzhRM4TKygk-ASnfRVgBehCKYEiEv9tXG8DA&usqp=CAU"
        alt="Logo"
        style={{ height: "120px", width: "fit-content" }}
      />
      <Paper
        component="form"
        sx={{
          marginTop: "3%",
          p: "2px 10px",
          display: "flex",
          alignItems: "center",
          width: "40%",
          boxShadow: "none",
          borderRadius: "50px",
          border: "solid 1px lightgray",
        }}
      >
        <SearchRounded htmlColor="gray" />
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Google or type a URL"
          inputProps={{ "aria-label": "Search Google or type a URL" }}
        />
        <IconButton sx={{ p: "10px" }} aria-label="search">
          <MicRounded color="primary" />
        </IconButton>
      </Paper>
      <div style={{ marginTop: "3%" }}>
        <Button
          sx={{ marginRight: "15px" }}
          variant="contained"
          color="inherit"
          size="small"
        >
          Google Search
        </Button>

        <Button variant="contained" color="inherit" size="small">
          I'am Feeling lucky
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
