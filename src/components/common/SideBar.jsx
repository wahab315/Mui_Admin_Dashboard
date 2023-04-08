import React, { useState } from "react";

// import "react-pro-sidebar/dist/css/style.css";

// import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";

import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { tokens } from "../../theme/theme";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { Box, useTheme, IconButton, Typography } from "@mui/material";

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const { toggleSidebar } = useProSidebar(false);

  return (
    <>
      <Box
      // sx={{
      //   "& .pro-sidebar-inner": {
      //     background: `${colors.primary[400]} !important`,
      //   },
      //   "& .pro-icon-wrapper": {
      //     backgroundColor: "transparent !important",
      //   },
      //   "& .pro-inner-item": {
      //     padding: "5px 35px 5px 20px !important",
      //   },
      //   "& .pro-inner-item:hover": {
      //     color: "#868dfb !important",
      //   },
      //   "& .pro-menu-item.active": {
      //     color: "#6870fa !important",
      //   },
      // }}
      >
        <Sidebar
          backgroundColor="transparent"
          rootStyles={{
            background: `${colors.primary[400]} !important`,
          }}
        >
          <Menu
            menuItemStyles={{
              "& .pro-inner-item:hover": {
                color: "#868dfb !important",
              },

              button: ({ level, active, disabled, hover }) => {
                // only apply styles on first level elements of the tree

                if (level === 0)
                  return {
                    color: disabled ? "#6870fa " : "#ffffff",

                    // backgroundColor: active ? "#6870fa " : "#ffffff",
                  };
              },
            }}
          >
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
              style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100],
              }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <Typography variant="h5" color={colors.grey[100]}>
                    ADMINIS
                  </Typography>
                  <IconButton
                    onClick={() => {
                      toggleSidebar();
                      setIsCollapsed(!isCollapsed);
                    }}

                    // onClick={() => setIsCollapsed(!isCollapsed)}
                  >
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem>

            <MenuItem> Documentation </MenuItem>
            <MenuItem> Calendar </MenuItem>
          </Menu>
        </Sidebar>
      </Box>
    </>
  );
};

export default SideBar;
