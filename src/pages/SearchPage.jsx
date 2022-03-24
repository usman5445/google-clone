import {
  AccountCircleRounded,
  AppsRounded,
  ImageOutlined,
  LocationOnOutlined,
  MicRounded,
  MoreVertOutlined,
  NewspaperOutlined,
  SearchOutlined,
  SearchRounded,
  SellOutlined,
  SettingsRounded,
} from "@mui/icons-material";
import { IconButton, InputBase, Paper, Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Getdata } from "../context";
import HandleSearch from "../handleSearch";

function SearchPage() {
  const [Tabvalue, setTabvalue] = useState(0);
  const navigate = useNavigate();
  const inputValue = useRef();
  const data = Getdata();
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          marginTop: "2%",
          position: "sticky",
          top: "0",
        }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIN7bHMpaAD_RpHSWxMQwBF3jQDDDdF3IfzhRM4TKygk-ASnfRVgBehCKYEiEv9tXG8DA&usqp=CAU"
          alt="Logo"
          style={{ height: "60px", width: "fit-content" }}
          onClick={() => navigate("/")}
        />
        <Paper
          component="form"
          onSubmit={(e) => (
            e.preventDefault(),
            HandleSearch(inputValue.current.value, data.dispatch, navigate)
          )}
          sx={{
            marginLeft: "1%",
            p: "0 10px",
            display: "flex",
            alignItems: "center",
            width: "50%",
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
        <div
          className="rightIcons"
          style={{ position: "absolute", right: "1%" }}
        >
          <IconButton sx={{ p: "10px" }} area-label="Settings">
            <SettingsRounded />
          </IconButton>

          <IconButton sx={{ p: "10px" }} area-label="apps">
            <AppsRounded />
          </IconButton>

          <IconButton sx={{ p: "10px" }} area-label="profile">
            <AccountCircleRounded />
          </IconButton>
        </div>
      </div>
      <Box class="tabs" sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={Tabvalue}
          //   onChange={}
          aria-label="basic tabs example"
        >
          <Tab
            label="All"
            iconPosition="start"
            icon={<SearchOutlined />}
            onClick={() => setTabvalue(0)}
          />
          <Tab
            label="Shopping"
            iconPosition="start"
            icon={<SellOutlined />}
            onClick={() => setTabvalue(1)}
          />
          <Tab
            label="Maps"
            iconPosition="start"
            icon={<LocationOnOutlined />}
            onClick={() => setTabvalue(2)}
          />
          <Tab
            label="News"
            iconPosition="start"
            icon={<NewspaperOutlined />}
            onClick={() => setTabvalue(3)}
          />
          <Tab
            label="Images"
            iconPosition="start"
            icon={<ImageOutlined />}
            onClick={() => setTabvalue(4)}
          />
          <Tab
            label="More"
            iconPosition="start"
            icon={<MoreVertOutlined />}
            onClick={() => setTabvalue(5)}
          />
        </Tabs>
      </Box>
      <div className="results-container">
        <p>
          About {data.state?.searchInformation.formattedTotalResults} results (
          {data.state?.searchInformation.formattedSearchTime} seconds)
        </p>
        <div>
          {data.state?.items.map((item) => (
            <div>
              <span style={{ display: "flex", alignItems: "center" }}>
                {item.displayLink} <MoreVertOutlined size="small" />
              </span>

              <a style={{ fontSize: "x-large" }} href="">
                {item.title}
              </a>
              <br />
              <p>{item.snippet}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
