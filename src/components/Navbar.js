"use client";

import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [drawerL2, setDrawerL2] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
    if (mobileOpen === false) {
      setDrawerL2(false);
    }
  };

  const handleDrawerL2 = () => {
    setDrawerL2((prevState) => !prevState);
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      className="h-screen w-[240px] overflow-hidden"
    >
      <div className="flex flex-col items-start justify-center text-[14px] text-blue-800 gap-3">
        <Link href={"/"} className=" w-full px-3 pt-3">
          Log in
        </Link>
        <Link href={"/"} className=" w-full px-3 pb-3">
          Sign up
        </Link>
      </div>
      <Divider />
      <Box className="text-black px-3 flex items-start justify-between flex-col gap-3 !overflow-x-hidden">
        <div className="text-[12px] font-bold">Most Popular</div>
        <Link
          onClick={handleDrawerL2}
          href={"/"}
          className="text-[14px] flex items-start justify-between w-full"
        >
          <span>Web Development</span>
          <span className="">
            <ArrowForwardIosOutlinedIcon sx={{ fontSize: "12px" }} />
          </span>
        </Link>
        <Link
          onClick={handleDrawerL2}
          href={"/"}
          className="text-[14px] flex items-start justify-between w-full"
        >
          Mobile Development
          <span className="">
            <ArrowForwardIosOutlinedIcon sx={{ fontSize: "12px" }} />
          </span>
        </Link>
        <Link
          onClick={handleDrawerL2}
          href={"/"}
          className="text-[14px] flex items-start justify-between w-full"
        >
          Game Development
          <span className="">
            <ArrowForwardIosOutlinedIcon sx={{ fontSize: "12px" }} />
          </span>
        </Link>
        <Link
          onClick={handleDrawerL2}
          href={"/"}
          className="text-[14px] flex items-start justify-between w-full"
        >
          Entrepreneurship
          <span className="">
            <ArrowForwardIosOutlinedIcon sx={{ fontSize: "12px" }} />
          </span>
        </Link>
        <Link
          onClick={handleDrawerL2}
          href={"/"}
          className="text-[14px] flex items-start justify-between w-full"
        >
          <span className="w-[130px]">Business Analytics & Intelligence</span>
          <span className="mt-[10px]">
            <ArrowForwardIosOutlinedIcon sx={{ fontSize: "12px" }} />
          </span>
        </Link>
        <Link
          onClick={handleDrawerL2}
          href={"/"}
          className="text-[14px] flex items-start justify-between w-full"
        >
          Finance
          <span className="">
            <ArrowForwardIosOutlinedIcon sx={{ fontSize: "12px" }} />
          </span>
        </Link>
        <Link
          onClick={handleDrawerL2}
          href={"/"}
          className="text-[14px] flex items-start justify-between w-full"
        >
          IT Certifications
          <span className="">
            <ArrowForwardIosOutlinedIcon sx={{ fontSize: "12px" }} />
          </span>
        </Link>
        <Link
          onClick={handleDrawerL2}
          href={"/"}
          className="text-[14px] flex items-start justify-between w-full"
        >
          Personal Transformation
          <span className="">
            <ArrowForwardIosOutlinedIcon sx={{ fontSize: "12px" }} />
          </span>
        </Link>
        <Link
          onClick={handleDrawerL2}
          href={"/"}
          className="text-[14px] flex items-start justify-between w-full"
        >
          Graphic Design & Illustration
          <span className="">
            <ArrowForwardIosOutlinedIcon sx={{ fontSize: "12px" }} />
          </span>
        </Link>
        <Link
          onClick={handleDrawerL2}
          href={"/"}
          className="text-[14px] flex items-start justify-between w-full"
        >
          Digital Marketing
          <span className="">
            <ArrowForwardIosOutlinedIcon sx={{ fontSize: "12px" }} />
          </span>
        </Link>
        <Link
          onClick={handleDrawerL2}
          href={"/"}
          className="text-[14px] flex items-start justify-between w-full"
        >
          All categories
          <span className="text-normal">
            <ArrowForwardIosOutlinedIcon sx={{ fontSize: "12px" }} />
          </span>
        </Link>
        <Box
          className={
            drawerL2
              ? "absolute bg-white transition-all overflow-hidden w-full h-screen top-0 left-0"
              : "absolute bg-white transition-all overflow-hidden w-full h-screen top-0 left-[100%]"
          }
        >
          <Link
            onClick={handleDrawerL2}
            href={"/"}
            className="flex items-center gap-4 bg-gray-100 px-2 py-4 "
          >
            <ArrowForwardIosOutlinedIcon className="text-[10px] rotate-180 ml-2" />
            <div className="text-[14px]">Menu</div>
          </Link>
          <div className="flex flex-col justify-center gap-3 text-[14px] px-2 py-2">
            <Link
              href={"/"}
              className="text-[14px] flex items-start justify-between w-full"
            >
              <span>JavaScript</span>
            </Link>
            <Link
              href={"/"}
              className="text-[14px] flex items-start justify-between w-full"
            >
              <span>React JS</span>
            </Link>
            <Link
              href={"/"}
              className="text-[14px] flex items-start justify-between w-full"
            >
              <span>Angular</span>
            </Link>
            <Link
              href={"/"}
              className="text-[14px] flex items-start justify-between w-full"
            >
              <span>CSS</span>
            </Link>
            <Link
              href={"/"}
              className="text-[14px] flex items-start justify-between w-full"
            >
              <span>Node.Js</span>
            </Link>
            <Link
              href={"/"}
              className="text-[14px] flex items-start justify-between w-full"
            >
              <span>ASP.NET Core</span>
            </Link>
            <Link
              href={"/"}
              className="text-[14px] flex items-start justify-between w-full"
            >
              <span>Redux Framework</span>
            </Link>
            <Link
              href={"/"}
              className="text-[14px] flex items-start justify-between w-full"
            >
              <span>Typescript</span>
            </Link>
            <Link
              href={"/"}
              className="text-[14px] flex items-start justify-between w-full"
            >
              <span>WordPress</span>
            </Link>
          </div>
        </Box>
      </Box>
      <Divider className="mt-2" />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" className="bg-[white] text-black">
        <Toolbar className="text-black gap-5">
          <IconButton
            className="hover:bg-white"
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ fontSize: "21px" }} className="text-black/80" />
          </IconButton>
          <Typography
            className="flex items-center justify-between gap-5 max-sm:mx-auto"
            variant="h6"
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Link
              href={"/"}
              className="flex items-center justify-center max-sm:w-[70px]"
            >
              <Image
                src={
                  "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                }
                alt="logo"
                width={80}
                height={80}
              />
            </Link>
            <div className="flex items-center justify-center text-[13px] text-black/80 tracking-tight hover:text-blue-700 hover:cursor-pointer max-sm:hidden -mr-2 relative group h-16">
              Categories
              <div className="absolute top-16 -left-3 h-screen w-[260px] group-hover:flex flex-col px-4 py-3 gap-3 text-black/60 hidden bg-white text-[14px] ">
                <div className="flex items-start  justify-between group/1 ">
                  <Link href={"/"} className="group-hover/1:text-blue-700">
                    Development
                  </Link>
                  <span>
                    <ArrowForwardIosOutlinedIcon
                      sx={{ fontSize: "10px" }}
                      className="text-black/80 mr-2 group-hover/1:text-blue-700"
                    />
                  </span>
                  <div className="absolute top-0 left-[240px] h-screen  w-[260px] group-hover/1:flex flex-col px-4 py-3 gap-3 text-black/60 hidden bg-white text-[14px]">
                    <div className="flex items-start justify-between group/14">
                      <Link href={"/"} className="group-hover/14:text-blue-700">
                        Web Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/14:text-blue-700"
                        />
                      </span>
                      <div className="absolute top-0 left-[240px] h-screen  w-[260px] group-hover/14:flex flex-col px-4 py-3 gap-3 text-black/60 hidden bg-white text-[14px]">
                        <div className="flex items-start justify-between tracking-tight font-bold text-black/60">
                          Popular topics
                        </div>
                        <div className="flex items-start justify-between group/24">
                          <Link
                            href={"/"}
                            className="group-hover/24:text-blue-700"
                          >
                            JavaScript
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/25">
                          <Link
                            href={"/"}
                            className="group-hover/25:text-blue-700"
                          >
                            React JS
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/26">
                          <Link
                            href={"/"}
                            className="group-hover/26:text-blue-700"
                          >
                            Angular
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/27">
                          <Link
                            href={"/"}
                            className="group-hover/27:text-blue-700"
                          >
                            CSS
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/28">
                          <Link
                            href={"/"}
                            className="group-hover/28:text-blue-700"
                          >
                            Node.Js
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/29">
                          <Link
                            href={"/"}
                            className="group-hover/29:text-blue-700"
                          >
                            ASP.NET Core
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/30">
                          <Link
                            href={"/"}
                            className="group-hover/30:text-blue-700"
                          >
                            Redux Framework
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/31">
                          <Link
                            href={"/"}
                            className="group-hover/31:text-blue-700"
                          >
                            Typescript
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start justify-between group/15">
                      <Link href={"/"} className="group-hover/15:text-blue-700">
                        Data Science
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/15:text-blue-700"
                        />
                      </span>
                      <div className="absolute top-0 left-[240px] h-screen  w-[260px] group-hover/15:flex flex-col px-4 py-3 gap-3 text-black/60 hidden bg-white text-[14px]">
                        <div className="flex items-start justify-between tracking-tight font-bold text-black/60">
                          Popular topics
                        </div>
                        <div className="flex items-start justify-between group/24">
                          <Link
                            href={"/"}
                            className="group-hover/24:text-blue-700"
                          >
                            JavaScript
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/25">
                          <Link
                            href={"/"}
                            className="group-hover/25:text-blue-700"
                          >
                            React JS
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/26">
                          <Link
                            href={"/"}
                            className="group-hover/26:text-blue-700"
                          >
                            Angular
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/27">
                          <Link
                            href={"/"}
                            className="group-hover/27:text-blue-700"
                          >
                            CSS
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/28">
                          <Link
                            href={"/"}
                            className="group-hover/28:text-blue-700"
                          >
                            Node.Js
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/29">
                          <Link
                            href={"/"}
                            className="group-hover/29:text-blue-700"
                          >
                            ASP.NET Core
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/30">
                          <Link
                            href={"/"}
                            className="group-hover/30:text-blue-700"
                          >
                            Redux Framework
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/31">
                          <Link
                            href={"/"}
                            className="group-hover/31:text-blue-700"
                          >
                            Typescript
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start justify-between group/16">
                      <Link href={"/"} className="group-hover/16:text-blue-700">
                        Mobile Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/16:text-blue-700"
                        />
                      </span>
                      <div className="absolute top-0 left-[240px] h-screen  w-[260px] group-hover/16:flex flex-col px-4 py-3 gap-3 text-black/60 hidden bg-white text-[14px]">
                        <div className="flex items-start justify-between tracking-tight font-bold text-black/60">
                          Popular topics
                        </div>
                        <div className="flex items-start justify-between group/24">
                          <Link
                            href={"/"}
                            className="group-hover/24:text-blue-700"
                          >
                            JavaScript
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/25">
                          <Link
                            href={"/"}
                            className="group-hover/25:text-blue-700"
                          >
                            React JS
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/26">
                          <Link
                            href={"/"}
                            className="group-hover/26:text-blue-700"
                          >
                            Angular
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/27">
                          <Link
                            href={"/"}
                            className="group-hover/27:text-blue-700"
                          >
                            CSS
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/28">
                          <Link
                            href={"/"}
                            className="group-hover/28:text-blue-700"
                          >
                            Node.Js
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/29">
                          <Link
                            href={"/"}
                            className="group-hover/29:text-blue-700"
                          >
                            ASP.NET Core
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/30">
                          <Link
                            href={"/"}
                            className="group-hover/30:text-blue-700"
                          >
                            Redux Framework
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/31">
                          <Link
                            href={"/"}
                            className="group-hover/31:text-blue-700"
                          >
                            Typescript
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start justify-between group/17">
                      <Link href={"/"} className="group-hover/17:text-blue-700">
                        Programming Languages
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/17:text-blue-700"
                        />
                      </span>
                      <div className="absolute top-0 left-[240px] h-screen  w-[260px] group-hover/17:flex flex-col px-4 py-3 gap-3 text-black/60 hidden bg-white text-[14px]">
                        <div className="flex items-start justify-between tracking-tight font-bold text-black/60">
                          Popular topics
                        </div>
                        <div className="flex items-start justify-between group/24">
                          <Link
                            href={"/"}
                            className="group-hover/24:text-blue-700"
                          >
                            JavaScript
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/25">
                          <Link
                            href={"/"}
                            className="group-hover/25:text-blue-700"
                          >
                            React JS
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/26">
                          <Link
                            href={"/"}
                            className="group-hover/26:text-blue-700"
                          >
                            Angular
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/27">
                          <Link
                            href={"/"}
                            className="group-hover/27:text-blue-700"
                          >
                            CSS
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/28">
                          <Link
                            href={"/"}
                            className="group-hover/28:text-blue-700"
                          >
                            Node.Js
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/29">
                          <Link
                            href={"/"}
                            className="group-hover/29:text-blue-700"
                          >
                            ASP.NET Core
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/30">
                          <Link
                            href={"/"}
                            className="group-hover/30:text-blue-700"
                          >
                            Redux Framework
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/31">
                          <Link
                            href={"/"}
                            className="group-hover/31:text-blue-700"
                          >
                            Typescript
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start justify-between group/18">
                      <Link href={"/"} className="group-hover/18:text-blue-700">
                        Game Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/18:text-blue-700"
                        />
                      </span>
                      <div className="absolute top-0 left-[240px] h-screen  w-[260px] group-hover/18:flex flex-col px-4 py-3 gap-3 text-black/60 hidden bg-white text-[14px]">
                        <div className="flex items-start justify-between tracking-tight font-bold text-black/60">
                          Popular topics
                        </div>
                        <div className="flex items-start justify-between group/24">
                          <Link
                            href={"/"}
                            className="group-hover/24:text-blue-700"
                          >
                            JavaScript
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/25">
                          <Link
                            href={"/"}
                            className="group-hover/25:text-blue-700"
                          >
                            React JS
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/26">
                          <Link
                            href={"/"}
                            className="group-hover/26:text-blue-700"
                          >
                            Angular
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/27">
                          <Link
                            href={"/"}
                            className="group-hover/27:text-blue-700"
                          >
                            CSS
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/28">
                          <Link
                            href={"/"}
                            className="group-hover/28:text-blue-700"
                          >
                            Node.Js
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/29">
                          <Link
                            href={"/"}
                            className="group-hover/29:text-blue-700"
                          >
                            ASP.NET Core
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/30">
                          <Link
                            href={"/"}
                            className="group-hover/30:text-blue-700"
                          >
                            Redux Framework
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/31">
                          <Link
                            href={"/"}
                            className="group-hover/31:text-blue-700"
                          >
                            Typescript
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start justify-between group/19">
                      <Link href={"/"} className="group-hover/19:text-blue-700">
                        Database Design & Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/19:text-blue-700"
                        />
                      </span>
                      <div className="absolute top-0 left-[240px] h-screen  w-[260px] group-hover/19:flex flex-col px-4 py-3 gap-3 text-black/60 hidden bg-white text-[14px]">
                        <div className="flex items-start justify-between tracking-tight font-bold text-black/60">
                          Popular topics
                        </div>
                        <div className="flex items-start justify-between group/24">
                          <Link
                            href={"/"}
                            className="group-hover/24:text-blue-700"
                          >
                            JavaScript
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/25">
                          <Link
                            href={"/"}
                            className="group-hover/25:text-blue-700"
                          >
                            React JS
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/26">
                          <Link
                            href={"/"}
                            className="group-hover/26:text-blue-700"
                          >
                            Angular
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/27">
                          <Link
                            href={"/"}
                            className="group-hover/27:text-blue-700"
                          >
                            CSS
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/28">
                          <Link
                            href={"/"}
                            className="group-hover/28:text-blue-700"
                          >
                            Node.Js
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/29">
                          <Link
                            href={"/"}
                            className="group-hover/29:text-blue-700"
                          >
                            ASP.NET Core
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/30">
                          <Link
                            href={"/"}
                            className="group-hover/30:text-blue-700"
                          >
                            Redux Framework
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/31">
                          <Link
                            href={"/"}
                            className="group-hover/31:text-blue-700"
                          >
                            Typescript
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start justify-between group/20">
                      <Link href={"/"} className="group-hover/20:text-blue-700">
                        Software Testing
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/20:text-blue-700"
                        />
                      </span>
                      <div className="absolute top-0 left-[240px] h-screen  w-[260px] group-hover/20:flex flex-col px-4 py-3 gap-3 text-black/60 hidden bg-white text-[14px]">
                        <div className="flex items-start justify-between tracking-tight font-bold text-black/60">
                          Popular topics
                        </div>
                        <div className="flex items-start justify-between group/24">
                          <Link
                            href={"/"}
                            className="group-hover/24:text-blue-700"
                          >
                            JavaScript
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/25">
                          <Link
                            href={"/"}
                            className="group-hover/25:text-blue-700"
                          >
                            React JS
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/26">
                          <Link
                            href={"/"}
                            className="group-hover/26:text-blue-700"
                          >
                            Angular
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/27">
                          <Link
                            href={"/"}
                            className="group-hover/27:text-blue-700"
                          >
                            CSS
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/28">
                          <Link
                            href={"/"}
                            className="group-hover/28:text-blue-700"
                          >
                            Node.Js
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/29">
                          <Link
                            href={"/"}
                            className="group-hover/29:text-blue-700"
                          >
                            ASP.NET Core
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/30">
                          <Link
                            href={"/"}
                            className="group-hover/30:text-blue-700"
                          >
                            Redux Framework
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/31">
                          <Link
                            href={"/"}
                            className="group-hover/31:text-blue-700"
                          >
                            Typescript
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start justify-between group/21">
                      <Link href={"/"} className="group-hover/21:text-blue-700">
                        Software Engineering
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/21:text-blue-700"
                        />
                      </span>
                      <div className="absolute top-0 left-[240px] h-screen  w-[260px] group-hover/21:flex flex-col px-4 py-3 gap-3 text-black/60 hidden bg-white text-[14px]">
                        <div className="flex items-start justify-between tracking-tight font-bold text-black/60">
                          Popular topics
                        </div>
                        <div className="flex items-start justify-between group/24">
                          <Link
                            href={"/"}
                            className="group-hover/24:text-blue-700"
                          >
                            JavaScript
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/25">
                          <Link
                            href={"/"}
                            className="group-hover/25:text-blue-700"
                          >
                            React JS
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/26">
                          <Link
                            href={"/"}
                            className="group-hover/26:text-blue-700"
                          >
                            Angular
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/27">
                          <Link
                            href={"/"}
                            className="group-hover/27:text-blue-700"
                          >
                            CSS
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/28">
                          <Link
                            href={"/"}
                            className="group-hover/28:text-blue-700"
                          >
                            Node.Js
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/29">
                          <Link
                            href={"/"}
                            className="group-hover/29:text-blue-700"
                          >
                            ASP.NET Core
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/30">
                          <Link
                            href={"/"}
                            className="group-hover/30:text-blue-700"
                          >
                            Redux Framework
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/31">
                          <Link
                            href={"/"}
                            className="group-hover/31:text-blue-700"
                          >
                            Typescript
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start justify-between group/22">
                      <Link href={"/"} className="group-hover/22:text-blue-700">
                        Software Development Tools
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/22:text-blue-700"
                        />
                      </span>
                      <div className="absolute top-0 left-[240px] h-screen  w-[260px] group-hover/22:flex flex-col px-4 py-3 gap-3 text-black/60 hidden bg-white text-[14px]">
                        <div className="flex items-start justify-between tracking-tight font-bold text-black/60">
                          Popular topics
                        </div>
                        <div className="flex items-start justify-between group/24">
                          <Link
                            href={"/"}
                            className="group-hover/24:text-blue-700"
                          >
                            JavaScript
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/25">
                          <Link
                            href={"/"}
                            className="group-hover/25:text-blue-700"
                          >
                            React JS
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/26">
                          <Link
                            href={"/"}
                            className="group-hover/26:text-blue-700"
                          >
                            Angular
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/27">
                          <Link
                            href={"/"}
                            className="group-hover/27:text-blue-700"
                          >
                            CSS
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/28">
                          <Link
                            href={"/"}
                            className="group-hover/28:text-blue-700"
                          >
                            Node.Js
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/29">
                          <Link
                            href={"/"}
                            className="group-hover/29:text-blue-700"
                          >
                            ASP.NET Core
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/30">
                          <Link
                            href={"/"}
                            className="group-hover/30:text-blue-700"
                          >
                            Redux Framework
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/31">
                          <Link
                            href={"/"}
                            className="group-hover/31:text-blue-700"
                          >
                            Typescript
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start justify-between group/23">
                      <Link href={"/"} className="group-hover/23:text-blue-700">
                        No-Code Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/23:text-blue-700"
                        />
                      </span>
                      <div className="absolute top-0 left-[240px] h-screen  w-[260px] group-hover/23:flex flex-col px-4 py-3 gap-3 text-black/60 hidden bg-white text-[14px]">
                        <div className="flex items-start justify-between tracking-tight font-bold text-black/60">
                          Popular topics
                        </div>
                        <div className="flex items-start justify-between group/24">
                          <Link
                            href={"/"}
                            className="group-hover/24:text-blue-700"
                          >
                            JavaScript
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/25">
                          <Link
                            href={"/"}
                            className="group-hover/25:text-blue-700"
                          >
                            React JS
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/26">
                          <Link
                            href={"/"}
                            className="group-hover/26:text-blue-700"
                          >
                            Angular
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/27">
                          <Link
                            href={"/"}
                            className="group-hover/27:text-blue-700"
                          >
                            CSS
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/28">
                          <Link
                            href={"/"}
                            className="group-hover/28:text-blue-700"
                          >
                            Node.Js
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/29">
                          <Link
                            href={"/"}
                            className="group-hover/29:text-blue-700"
                          >
                            ASP.NET Core
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/30">
                          <Link
                            href={"/"}
                            className="group-hover/30:text-blue-700"
                          >
                            Redux Framework
                          </Link>
                        </div>
                        <div className="flex items-start justify-between group/31">
                          <Link
                            href={"/"}
                            className="group-hover/31:text-blue-700"
                          >
                            Typescript
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-between group/2 ">
                  <Link href={"/"} className="group-hover/2:text-blue-700">
                    Business
                  </Link>
                  <span>
                    <ArrowForwardIosOutlinedIcon
                      sx={{ fontSize: "10px" }}
                      className="text-black/80 mr-2 group-hover/2:text-blue-700"
                    />
                  </span>
                  <div className="absolute top-0 left-[240px] h-screen w-[260px] group-hover/2:flex flex-col px-4 py-3 gap-3 text-black/60 hidden bg-white text-[14px] ">
                    <div className="flex items-start justify-between group/14">
                      <Link href={"/"} className="group-hover/14:text-blue-700">
                        Web Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/14:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/15">
                      <Link href={"/"} className="group-hover/15:text-blue-700">
                        Data Science
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/15:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/16">
                      <Link href={"/"} className="group-hover/16:text-blue-700">
                        Mobile Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/16:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/17">
                      <Link href={"/"} className="group-hover/17:text-blue-700">
                        Programming Languages
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/17:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/18">
                      <Link href={"/"} className="group-hover/18:text-blue-700">
                        Game Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/18:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/19">
                      <Link href={"/"} className="group-hover/19:text-blue-700">
                        Database Design & Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/19:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/20">
                      <Link href={"/"} className="group-hover/20:text-blue-700">
                        Software Testing
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/20:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/21">
                      <Link href={"/"} className="group-hover/21:text-blue-700">
                        Software Engineering
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/21:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/22">
                      <Link href={"/"} className="group-hover/22:text-blue-700">
                        Software Development Tools
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/22:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/23">
                      <Link href={"/"} className="group-hover/23:text-blue-700">
                        No-Code Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/23:text-blue-700"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-between group/3 ">
                  <Link href={"/"} className="group-hover/3:text-blue-700">
                    Finance & Accounting
                  </Link>
                  <span>
                    <ArrowForwardIosOutlinedIcon
                      sx={{ fontSize: "10px" }}
                      className="text-black/80 mr-2 group-hover/3:text-blue-700"
                    />
                  </span>
                  <div className="absolute top-0 left-[240px] h-screen w-[260px] group-hover/3:flex flex-col px-4 py-3 gap-3 text-black/60 hidden bg-white text-[14px] ">
                    <div className="flex items-start justify-between group/14">
                      <Link href={"/"} className="group-hover/14:text-blue-700">
                        Web Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/14:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/15">
                      <Link href={"/"} className="group-hover/15:text-blue-700">
                        Data Science
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/15:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/16">
                      <Link href={"/"} className="group-hover/16:text-blue-700">
                        Mobile Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/16:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/17">
                      <Link href={"/"} className="group-hover/17:text-blue-700">
                        Programming Languages
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/17:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/18">
                      <Link href={"/"} className="group-hover/18:text-blue-700">
                        Game Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/18:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/19">
                      <Link href={"/"} className="group-hover/19:text-blue-700">
                        Database Design & Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/19:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/20">
                      <Link href={"/"} className="group-hover/20:text-blue-700">
                        Software Testing
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/20:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/21">
                      <Link href={"/"} className="group-hover/21:text-blue-700">
                        Software Engineering
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/21:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/22">
                      <Link href={"/"} className="group-hover/22:text-blue-700">
                        Software Development Tools
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/22:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/23">
                      <Link href={"/"} className="group-hover/23:text-blue-700">
                        No-Code Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/23:text-blue-700"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-between group/4 ">
                  <Link href={"/"} className="group-hover/4:text-blue-700">
                    IT & Software
                  </Link>
                  <span>
                    <ArrowForwardIosOutlinedIcon
                      sx={{ fontSize: "10px" }}
                      className="text-black/80 mr-2 group-hover/4:text-blue-700"
                    />
                  </span>
                  <div className="absolute top-0 left-[240px] h-screen w-[260px] group-hover/4:flex flex-col px-4 py-3 gap-3 text-black/60 hidden bg-white text-[14px] ">
                    <div className="flex items-start justify-between group/14">
                      <Link href={"/"} className="group-hover/14:text-blue-700">
                        Web Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/14:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/15">
                      <Link href={"/"} className="group-hover/15:text-blue-700">
                        Data Science
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/15:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/16">
                      <Link href={"/"} className="group-hover/16:text-blue-700">
                        Mobile Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/16:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/17">
                      <Link href={"/"} className="group-hover/17:text-blue-700">
                        Programming Languages
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/17:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/18">
                      <Link href={"/"} className="group-hover/18:text-blue-700">
                        Game Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/18:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/19">
                      <Link href={"/"} className="group-hover/19:text-blue-700">
                        Database Design & Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/19:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/20">
                      <Link href={"/"} className="group-hover/20:text-blue-700">
                        Software Testing
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/20:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/21">
                      <Link href={"/"} className="group-hover/21:text-blue-700">
                        Software Engineering
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/21:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/22">
                      <Link href={"/"} className="group-hover/22:text-blue-700">
                        Software Development Tools
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/22:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/23">
                      <Link href={"/"} className="group-hover/23:text-blue-700">
                        No-Code Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/23:text-blue-700"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-between group/5 ">
                  <Link href={"/"} className="group-hover/5:text-blue-700">
                    Office Productivity
                  </Link>
                  <span>
                    <ArrowForwardIosOutlinedIcon
                      sx={{ fontSize: "10px" }}
                      className="text-black/80 mr-2 group-hover/5:text-blue-700"
                    />
                  </span>
                  <div className="absolute top-0 left-[240px] h-screen w-[260px] group-hover/5:flex flex-col px-4 py-3 gap-3 text-black/60 hidden bg-white text-[14px] ">
                    <div className="flex items-start justify-between group/14">
                      <Link href={"/"} className="group-hover/14:text-blue-700">
                        Web Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/14:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/15">
                      <Link href={"/"} className="group-hover/15:text-blue-700">
                        Data Science
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/15:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/16">
                      <Link href={"/"} className="group-hover/16:text-blue-700">
                        Mobile Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/16:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/17">
                      <Link href={"/"} className="group-hover/17:text-blue-700">
                        Programming Languages
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/17:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/18">
                      <Link href={"/"} className="group-hover/18:text-blue-700">
                        Game Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/18:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/19">
                      <Link href={"/"} className="group-hover/19:text-blue-700">
                        Database Design & Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/19:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/20">
                      <Link href={"/"} className="group-hover/20:text-blue-700">
                        Software Testing
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/20:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/21">
                      <Link href={"/"} className="group-hover/21:text-blue-700">
                        Software Engineering
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/21:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/22">
                      <Link href={"/"} className="group-hover/22:text-blue-700">
                        Software Development Tools
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/22:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/23">
                      <Link href={"/"} className="group-hover/23:text-blue-700">
                        No-Code Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/23:text-blue-700"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-between group/6 ">
                  <Link href={"/"} className="group-hover/6:text-blue-700">
                    Personal Development
                  </Link>
                  <span>
                    <ArrowForwardIosOutlinedIcon
                      sx={{ fontSize: "10px" }}
                      className="text-black/80 mr-2 group-hover/6:text-blue-700"
                    />
                  </span>
                  <div className="absolute top-0 left-[240px] h-screen w-[260px] group-hover/6:flex flex-col px-4 py-3 gap-3 text-black/60 hidden bg-white text-[14px] ">
                    <div className="flex items-start justify-between group/14">
                      <Link href={"/"} className="group-hover/14:text-blue-700">
                        Web Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/14:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/15">
                      <Link href={"/"} className="group-hover/15:text-blue-700">
                        Data Science
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/15:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/16">
                      <Link href={"/"} className="group-hover/16:text-blue-700">
                        Mobile Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/16:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/17">
                      <Link href={"/"} className="group-hover/17:text-blue-700">
                        Programming Languages
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/17:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/18">
                      <Link href={"/"} className="group-hover/18:text-blue-700">
                        Game Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/18:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/19">
                      <Link href={"/"} className="group-hover/19:text-blue-700">
                        Database Design & Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/19:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/20">
                      <Link href={"/"} className="group-hover/20:text-blue-700">
                        Software Testing
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/20:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/21">
                      <Link href={"/"} className="group-hover/21:text-blue-700">
                        Software Engineering
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/21:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/22">
                      <Link href={"/"} className="group-hover/22:text-blue-700">
                        Software Development Tools
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/22:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/23">
                      <Link href={"/"} className="group-hover/23:text-blue-700">
                        No-Code Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/23:text-blue-700"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-between group/7 ">
                  <Link href={"/"} className="group-hover/7:text-blue-700">
                    Design
                  </Link>
                  <span>
                    <ArrowForwardIosOutlinedIcon
                      sx={{ fontSize: "10px" }}
                      className="text-black/80 mr-2 group-hover/7:text-blue-700"
                    />
                  </span>
                  <div className="absolute top-0 left-[240px] h-screen w-[260px] group-hover/7:flex flex-col px-4 py-3 gap-3 text-black/60 hidden bg-white text-[14px] ">
                    <div className="flex items-start justify-between group/14">
                      <Link href={"/"} className="group-hover/14:text-blue-700">
                        Web Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/14:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/15">
                      <Link href={"/"} className="group-hover/15:text-blue-700">
                        Data Science
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/15:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/16">
                      <Link href={"/"} className="group-hover/16:text-blue-700">
                        Mobile Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/16:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/17">
                      <Link href={"/"} className="group-hover/17:text-blue-700">
                        Programming Languages
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/17:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/18">
                      <Link href={"/"} className="group-hover/18:text-blue-700">
                        Game Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/18:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/19">
                      <Link href={"/"} className="group-hover/19:text-blue-700">
                        Database Design & Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/19:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/20">
                      <Link href={"/"} className="group-hover/20:text-blue-700">
                        Software Testing
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/20:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/21">
                      <Link href={"/"} className="group-hover/21:text-blue-700">
                        Software Engineering
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/21:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/22">
                      <Link href={"/"} className="group-hover/22:text-blue-700">
                        Software Development Tools
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/22:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/23">
                      <Link href={"/"} className="group-hover/23:text-blue-700">
                        No-Code Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/23:text-blue-700"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-between group/8 ">
                  <Link href={"/"} className="group-hover/8:text-blue-700">
                    Marketing
                  </Link>
                  <span>
                    <ArrowForwardIosOutlinedIcon
                      sx={{ fontSize: "10px" }}
                      className="text-black/80 mr-2 group-hover/8:text-blue-700"
                    />
                  </span>
                  <div className="absolute top-0 left-[240px] h-screen w-[260px] group-hover/8:flex flex-col px-4 py-3 gap-3 text-black/60 hidden bg-white text-[14px] ">
                    <div className="flex items-start justify-between group/14">
                      <Link href={"/"} className="group-hover/14:text-blue-700">
                        Web Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/14:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/15">
                      <Link href={"/"} className="group-hover/15:text-blue-700">
                        Data Science
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/15:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/16">
                      <Link href={"/"} className="group-hover/16:text-blue-700">
                        Mobile Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/16:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/17">
                      <Link href={"/"} className="group-hover/17:text-blue-700">
                        Programming Languages
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/17:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/18">
                      <Link href={"/"} className="group-hover/18:text-blue-700">
                        Game Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/18:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/19">
                      <Link href={"/"} className="group-hover/19:text-blue-700">
                        Database Design & Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/19:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/20">
                      <Link href={"/"} className="group-hover/20:text-blue-700">
                        Software Testing
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/20:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/21">
                      <Link href={"/"} className="group-hover/21:text-blue-700">
                        Software Engineering
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/21:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/22">
                      <Link href={"/"} className="group-hover/22:text-blue-700">
                        Software Development Tools
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/22:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/23">
                      <Link href={"/"} className="group-hover/23:text-blue-700">
                        No-Code Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/23:text-blue-700"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-between group/9 ">
                  <Link href={"/"} className="group-hover/9:text-blue-700">
                    Lifestyle
                  </Link>
                  <span>
                    <ArrowForwardIosOutlinedIcon
                      sx={{ fontSize: "10px" }}
                      className="text-black/80 mr-2 group-hover/9:text-blue-700"
                    />
                  </span>
                  <div className="absolute top-0 left-[240px] h-screen w-[260px] group-hover/9:flex flex-col px-4 py-3 gap-3 text-black/60 hidden bg-white text-[14px] ">
                    <div className="flex items-start justify-between group/14">
                      <Link href={"/"} className="group-hover/14:text-blue-700">
                        Web Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/14:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/15">
                      <Link href={"/"} className="group-hover/15:text-blue-700">
                        Data Science
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/15:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/16">
                      <Link href={"/"} className="group-hover/16:text-blue-700">
                        Mobile Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/16:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/17">
                      <Link href={"/"} className="group-hover/17:text-blue-700">
                        Programming Languages
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/17:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/18">
                      <Link href={"/"} className="group-hover/18:text-blue-700">
                        Game Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/18:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/19">
                      <Link href={"/"} className="group-hover/19:text-blue-700">
                        Database Design & Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/19:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/20">
                      <Link href={"/"} className="group-hover/20:text-blue-700">
                        Software Testing
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/20:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/21">
                      <Link href={"/"} className="group-hover/21:text-blue-700">
                        Software Engineering
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/21:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/22">
                      <Link href={"/"} className="group-hover/22:text-blue-700">
                        Software Development Tools
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/22:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/23">
                      <Link href={"/"} className="group-hover/23:text-blue-700">
                        No-Code Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/23:text-blue-700"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-between group/10 ">
                  <Link href={"/"} className="group-hover/10:text-blue-700">
                    Photography & Video
                  </Link>
                  <span>
                    <ArrowForwardIosOutlinedIcon
                      sx={{ fontSize: "10px" }}
                      className="text-black/80 mr-2 group-hover/10:text-blue-700"
                    />
                  </span>
                  <div className="absolute top-0 left-[240px] h-screen w-[260px] group-hover/10:flex flex-col px-4 py-3 gap-3 text-black/60 hidden bg-white text-[14px] ">
                    <div className="flex items-start justify-between group/14">
                      <Link href={"/"} className="group-hover/14:text-blue-700">
                        Web Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/14:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/15">
                      <Link href={"/"} className="group-hover/15:text-blue-700">
                        Data Science
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/15:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/16">
                      <Link href={"/"} className="group-hover/16:text-blue-700">
                        Mobile Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/16:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/17">
                      <Link href={"/"} className="group-hover/17:text-blue-700">
                        Programming Languages
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/17:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/18">
                      <Link href={"/"} className="group-hover/18:text-blue-700">
                        Game Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/18:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/19">
                      <Link href={"/"} className="group-hover/19:text-blue-700">
                        Database Design & Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/19:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/20">
                      <Link href={"/"} className="group-hover/20:text-blue-700">
                        Software Testing
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/20:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/21">
                      <Link href={"/"} className="group-hover/21:text-blue-700">
                        Software Engineering
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/21:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/22">
                      <Link href={"/"} className="group-hover/22:text-blue-700">
                        Software Development Tools
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/22:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/23">
                      <Link href={"/"} className="group-hover/23:text-blue-700">
                        No-Code Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/23:text-blue-700"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-between group/11 ">
                  <Link href={"/"} className="group-hover/11:text-blue-700">
                    Health & Fitness
                  </Link>
                  <span>
                    <ArrowForwardIosOutlinedIcon
                      sx={{ fontSize: "10px" }}
                      className="text-black/80 mr-2 group-hover/11:text-blue-700"
                    />
                  </span>
                  <div className="absolute top-0 left-[240px] h-screen w-[260px] group-hover/11:flex flex-col px-4 py-3 gap-3 text-black/60 hidden bg-white text-[14px] ">
                    <div className="flex items-start justify-between group/14">
                      <Link href={"/"} className="group-hover/14:text-blue-700">
                        Web Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/14:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/15">
                      <Link href={"/"} className="group-hover/15:text-blue-700">
                        Data Science
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/15:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/16">
                      <Link href={"/"} className="group-hover/16:text-blue-700">
                        Mobile Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/16:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/17">
                      <Link href={"/"} className="group-hover/17:text-blue-700">
                        Programming Languages
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/17:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/18">
                      <Link href={"/"} className="group-hover/18:text-blue-700">
                        Game Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/18:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/19">
                      <Link href={"/"} className="group-hover/19:text-blue-700">
                        Database Design & Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/19:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/20">
                      <Link href={"/"} className="group-hover/20:text-blue-700">
                        Software Testing
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/20:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/21">
                      <Link href={"/"} className="group-hover/21:text-blue-700">
                        Software Engineering
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/21:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/22">
                      <Link href={"/"} className="group-hover/22:text-blue-700">
                        Software Development Tools
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/22:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/23">
                      <Link href={"/"} className="group-hover/23:text-blue-700">
                        No-Code Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/23:text-blue-700"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-between group/12 ">
                  <Link href={"/"} className="group-hover/12:text-blue-700">
                    Music
                  </Link>
                  <span>
                    <ArrowForwardIosOutlinedIcon
                      sx={{ fontSize: "10px" }}
                      className="text-black/80 mr-2 group-hover/12:text-blue-700"
                    />
                  </span>
                  <div className="absolute top-0 left-[240px] h-screen w-[260px] group-hover/12:flex flex-col px-4 py-3 gap-3 text-black/60 hidden bg-white text-[14px] ">
                    <div className="flex items-start justify-between group/14">
                      <Link href={"/"} className="group-hover/14:text-blue-700">
                        Web Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/14:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/15">
                      <Link href={"/"} className="group-hover/15:text-blue-700">
                        Data Science
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/15:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/16">
                      <Link href={"/"} className="group-hover/16:text-blue-700">
                        Mobile Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/16:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/17">
                      <Link href={"/"} className="group-hover/17:text-blue-700">
                        Programming Languages
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/17:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/18">
                      <Link href={"/"} className="group-hover/18:text-blue-700">
                        Game Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/18:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/19">
                      <Link href={"/"} className="group-hover/19:text-blue-700">
                        Database Design & Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/19:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/20">
                      <Link href={"/"} className="group-hover/20:text-blue-700">
                        Software Testing
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/20:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/21">
                      <Link href={"/"} className="group-hover/21:text-blue-700">
                        Software Engineering
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/21:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/22">
                      <Link href={"/"} className="group-hover/22:text-blue-700">
                        Software Development Tools
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/22:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/23">
                      <Link href={"/"} className="group-hover/23:text-blue-700">
                        No-Code Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/23:text-blue-700"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-between group/13 ">
                  <Link href={"/"} className="group-hover/13:text-blue-700">
                    Teaching & Academics
                  </Link>
                  <span>
                    <ArrowForwardIosOutlinedIcon
                      sx={{ fontSize: "10px" }}
                      className="text-black/80 mr-2 group-hover/13:text-blue-700"
                    />
                  </span>
                  <div className="absolute top-0 left-[240px] h-screen w-[260px] group-hover/13:flex flex-col px-4 py-3 gap-3 text-black/60 hidden bg-white text-[14px] ">
                    <div className="flex items-start justify-between group/14">
                      <Link href={"/"} className="group-hover/14:text-blue-700">
                        Web Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/14:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/15">
                      <Link href={"/"} className="group-hover/15:text-blue-700">
                        Data Science
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/15:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/16">
                      <Link href={"/"} className="group-hover/16:text-blue-700">
                        Mobile Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/16:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/17">
                      <Link href={"/"} className="group-hover/17:text-blue-700">
                        Programming Languages
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/17:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/18">
                      <Link href={"/"} className="group-hover/18:text-blue-700">
                        Game Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/18:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/19">
                      <Link href={"/"} className="group-hover/19:text-blue-700">
                        Database Design & Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/19:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/20">
                      <Link href={"/"} className="group-hover/20:text-blue-700">
                        Software Testing
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/20:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/21">
                      <Link href={"/"} className="group-hover/21:text-blue-700">
                        Software Engineering
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/21:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/22">
                      <Link href={"/"} className="group-hover/22:text-blue-700">
                        Software Development Tools
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/22:text-blue-700"
                        />
                      </span>
                    </div>
                    <div className="flex items-start justify-between group/23">
                      <Link href={"/"} className="group-hover/23:text-blue-700">
                        No-Code Development
                      </Link>
                      <span>
                        <ArrowForwardIosOutlinedIcon
                          sx={{ fontSize: "10px" }}
                          className="text-black/80 mr-2 group-hover/23:text-blue-700"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Typography>
          <Box className="flex items-center flex-1 relative max-sm:hidden">
            <span className="absolute left-5">
              <SearchOutlinedIcon
                sx={{ fontSize: "21px" }}
                className="text-gray-500"
              />
            </span>
            <input
              type="text"
              placeholder="Search for anything"
              className="w-full px-3 py-2.5 bg-gray-100 rounded-full border-black border outline-none text-[13px] font-normal text-black/90 placeholder:text-black/70 pl-10 tracking-tight ml-2"
            />
          </Box>

          <Box className="items-center gap-4 text-[.8rem] flex">
            <div className="flex items-center justify-center gap-2">
              <div className="min-[1080px]:flex-1 min-[1080px]:flex hidden text-[13px] h-5 min-w-[101px] hover:text-blue-700 hover:cursor-pointer tracking-tight text-black/90">
                <Link href={"/"}>Udemy Business</Link>
              </div>
              <div className="min-[920px]:flex-1 min-[920px]:flex hidden text-[13px] h-5 min-w-[104px] hover:text-blue-700 hover:cursor-pointer tracking-tight text-black/90 -ml-1">
                <Link href={"/"}>Teach on Udemy</Link>
              </div>
              <Link href={"/"} className="max-sm:block hidden">
                <SearchOutlinedIcon
                  sx={{ fontSize: "21px" }}
                  className="text-black/80"
                />
              </Link>
              <Link href={"/"}>
                <ShoppingCartOutlinedIcon
                  sx={{ fontSize: "21px" }}
                  className="text-black/80"
                />
              </Link>
            </div>
          </Box>
          <Box className="flex items-center justify-center gap-2 text-[13px] font-bold max-[800px]:hidden">
            <div>
              <Link
                href={"/"}
                className="py-[.6rem] px-[1rem] border-black border hover:bg-gray-200 hover:cursor-pointer "
              >
                Log in
              </Link>
            </div>
            <div>
              <Link
                href={"/"}
                className="py-[.6rem] px-[1rem] border-black border bg-black text-white "
              >
                Sign up
              </Link>
            </div>
            <div className=" border-black border hover:bg-gray-200 hover:cursor-pointer ">
              <Link
                href={"/"}
                className="flex items-center justify-center p-[6.5px]"
              >
                <LanguageOutlinedIcon
                  sx={{ fontSize: "21px" }}
                  className="text-black/80"
                />
              </Link>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "252",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navbar;
