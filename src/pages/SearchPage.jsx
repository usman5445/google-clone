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
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchPage() {
  const [Tabvalue, setTabvalue] = useState(0);
  const navigate = useNavigate();
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
        <p>About 20,90,000 results (0.43 seconds) </p>
        <div>
          <div>
            <span style={{ display: "flex", alignItems: "center" }}>
              https://www.halo.co.in <MoreVertOutlined size="small" />
            </span>

            <a style={{ fontSize: "x-large" }} href="">
              NMIMS Online - Distance & Online Programs
            </a>
            <br />
            <p>
              ... in career-led education; NMIMS Global empowers you by bringing
              the same educational tradition, ethic & pedagogy to the online
              medium of learning.
            </p>
          </div>
          {/* brk */}
          <div>
            <span style={{ display: "flex", alignItems: "center" }}>
              https://www.halo.co.in <MoreVertOutlined size="small" />
            </span>

            <a style={{ fontSize: "x-large" }} href="">
              NMIMS Online - Distance & Online Programs
            </a>
            <br />
            <p>
              ... in career-led education; NMIMS Global empowers you by bringing
              the same educational tradition, ethic & pedagogy to the online
              medium of learning.
            </p>
          </div>
          {/* brk */}
          <div>
            <span style={{ display: "flex", alignItems: "center" }}>
              https://www.halo.co.in <MoreVertOutlined size="small" />
            </span>

            <a style={{ fontSize: "x-large" }} href="">
              NMIMS Online - Distance & Online Programs
            </a>
            <br />
            <p>
              ... in career-led education; NMIMS Global empowers you by bringing
              the same educational tradition, ethic & pedagogy to the online
              medium of learning.
            </p>
          </div>
          {/* brk */}
          <div>
            <span style={{ display: "flex", alignItems: "center" }}>
              https://www.halo.co.in <MoreVertOutlined size="small" />
            </span>

            <a style={{ fontSize: "x-large" }} href="">
              NMIMS Online - Distance & Online Programs
            </a>
            <br />
            <p>
              ... in career-led education; NMIMS Global empowers you by bringing
              the same educational tradition, ethic & pedagogy to the online
              medium of learning.
            </p>
          </div>
          {/* brk */}
          <div>
            <span style={{ display: "flex", alignItems: "center" }}>
              https://www.halo.co.in <MoreVertOutlined size="small" />
            </span>

            <a style={{ fontSize: "x-large" }} href="">
              NMIMS Online - Distance & Online Programs
            </a>
            <br />
            <p>
              ... in career-led education; NMIMS Global empowers you by bringing
              the same educational tradition, ethic & pedagogy to the online
              medium of learning.
            </p>
          </div>
          {/* brk */}
          <div>
            <span style={{ display: "flex", alignItems: "center" }}>
              https://www.halo.co.in <MoreVertOutlined size="small" />
            </span>

            <a style={{ fontSize: "x-large" }} href="">
              NMIMS Online - Distance & Online Programs
            </a>
            <br />
            <p>
              ... in career-led education; NMIMS Global empowers you by bringing
              the same educational tradition, ethic & pedagogy to the online
              medium of learning.
            </p>
          </div>
          {/* brk */}
          <div>
            <span style={{ display: "flex", alignItems: "center" }}>
              https://www.halo.co.in <MoreVertOutlined size="small" />
            </span>

            <a style={{ fontSize: "x-large" }} href="">
              NMIMS Online - Distance & Online Programs
            </a>
            <br />
            <p>
              ... in career-led education; NMIMS Global empowers you by bringing
              the same educational tradition, ethic & pedagogy to the online
              medium of learning.
            </p>
          </div>
          {/* brk */}
          <div>
            <span style={{ display: "flex", alignItems: "center" }}>
              https://www.halo.co.in <MoreVertOutlined size="small" />
            </span>

            <a style={{ fontSize: "x-large" }} href="">
              NMIMS Online - Distance & Online Programs
            </a>
            <br />
            <p>
              ... in career-led education; NMIMS Global empowers you by bringing
              the same educational tradition, ethic & pedagogy to the online
              medium of learning.
            </p>
          </div>
          {/* brk */}
          <div>
            <span style={{ display: "flex", alignItems: "center" }}>
              https://www.halo.co.in <MoreVertOutlined size="small" />
            </span>

            <a style={{ fontSize: "x-large" }} href="">
              NMIMS Online - Distance & Online Programs
            </a>
            <br />
            <p>
              ... in career-led education; NMIMS Global empowers you by bringing
              the same educational tradition, ethic & pedagogy to the online
              medium of learning.
            </p>
          </div>
          {/* brk */}
          <div>
            <span style={{ display: "flex", alignItems: "center" }}>
              https://www.halo.co.in <MoreVertOutlined size="small" />
            </span>

            <a style={{ fontSize: "x-large" }} href="">
              NMIMS Online - Distance & Online Programs
            </a>
            <br />
            <p>
              ... in career-led education; NMIMS Global empowers you by bringing
              the same educational tradition, ethic & pedagogy to the online
              medium of learning.
            </p>
          </div>
          {/* brk */}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
