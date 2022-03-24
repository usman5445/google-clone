import React, { useRef } from "react";
import { SearchRounded, MicRounded } from "@mui/icons-material";
import { Paper, InputBase, IconButton, Button } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { Getdata } from "../context";
import HandleSearch from "../handleSearch";
function HomePage() {
  const navigate = useNavigate();
  const data = Getdata();
  const inputValue = useRef();
  console.log(data.state);
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
        onClick={() => navigate("/")}
      />
      <Paper
        component="form"
        onSubmit={(e) => (
          e.preventDefault(),
          HandleSearch(inputValue.current.value, data.dispatch, navigate)
        )}
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
          inputRef={inputValue}
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
          type="submit"
          onClick={() =>
            HandleSearch(inputValue.current.value, data.dispatch, navigate)
          }
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
