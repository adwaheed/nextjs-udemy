"use client";

import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import Tippy from "@tippyjs/react";
import Link from "next/link";
import Image from "next/image";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

const Courses = () => {
  const [products, setProducts] = useState([]);
  const slider = useRef(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // Work with the response...
        setProducts(res.data);
      })
      .catch((err) => {
        // Handle error
        console.log(err);
      });
  }, []);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const [value, setValue] = useState(0);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        // Work with the response...
        setCategories(res.data);
      })
      .catch((err) => {
        // Handle error
        console.log(err);
      });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <div>{children}</div>
          </Box>
        )}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box className="px-20 mt-5 ">
      <Box className="flex flex-col items-start justify-center gap-4">
        <div className="font-bold text-[30px]">
          A broad selection of courses
        </div>
        <div className="text-[16px]">
          Choose from over 210,000 online video courses with new additions
          published every month
        </div>
      </Box>
      <div className="mt-5 mb-20">
        <Box>
          <Tabs
            TabIndicatorProps={{
              sx: { backgroundColor: "transparent" },
            }}
            value={value}
            onChange={handleChange}
            aria-label="tabs"
          >
            {categories.map((item, index) => (
              <Tab
                className="!border-none text-black/60 font-semibold text-[14px] capitalize"
                key={index}
                label={item}
                {...a11yProps({ index })}
              />
            ))}
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className="border border-black/20 w-full px-5 py-5">
            <div className="space-y-2">
              <h4 className="font-bold text-[20px]">
                Expand your career opportunities with Python
              </h4>
              <div className="text-black/90 text-[14px] w-[70%] line-clamp-3 min-sm:bg-[red]">
                Take one of Udemy’s range of Python courses and learn how to
                code using this incredibly useful language. Its simple syntax
                and readability makes Python perfect for Flask, Django, data
                science, and machine learning. You’ll learn how to build
                everything from games to sites to apps. Choose from a range of
                courses that will appeal to and machine learning. You’ll learn
                how to build everything from games to sites to apps. Choose from
                a range of courses that will appeal to
              </div>
              <div className="border border-black w-fit px-2 py-2 font-bold text-[12px] hover:bg-gray-100 hover:cursor-pointer">
                Explore More
              </div>
            </div>

            <div className="relative">
              <Slider ref={slider} className="mt-10 py-10 " {...settings}>
                {products
                  .filter((item) => item.category == "electronics")
                  .map((item, index) => (
                    <Tippy
                      offset={[0, -20]}
                      interactive="true"
                      animation="fade"
                      placement="right"
                      arrow={false}
                      key={index}
                      className="p-5  rounded h-fit w-[270px] border border-black !bg-white !text-black"
                      content={
                        <div className="flex flex-col items-center justify-center">
                          <div className=" font-semibold">{item.title}</div>
                          <div className="text-md line-clamp-3 mt-2">
                            {item.description}
                          </div>
                          <div className="">
                            <div className="bg-purple-800 hover:bg-purple-700 text-white px-3 py-1 rounded mt-2 cursor-pointer">
                              Add to cart
                            </div>
                          </div>
                        </div>
                      }
                    >
                      <Link
                        href={`/product/${item.id}`}
                        className="flex flex-col items-center justify-center hover:bg-gray-200 transition-all duration-300"
                      >
                        <div className="w-[200px] h-[150px]">
                          <Image
                            className="w-full h-full object-contain"
                            src={item.image}
                            width={100}
                            height={100}
                            alt={"pic-" + item.index}
                          />
                        </div>
                        <div className=" line-clamp-2 font-semibold text-left">
                          {item.title}
                        </div>
                        <div className="text-gray-600 text-sm"></div>
                        <div className="flex items-center justify-center">
                          <span className="text-md pt-1 font-medium">
                            {Math.round(item.rating.rate)}
                          </span>
                          {Math.round(item.rating.rate) === 5 && (
                            <span className="ml-1">
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                            </span>
                          )}
                          {Math.round(item.rating.rate) === 4 && (
                            <span className="ml-1">
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                            </span>
                          )}
                          {Math.round(item.rating.rate) === 3 && (
                            <span className="ml-1">
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                            </span>
                          )}
                          {Math.round(item.rating.rate) === 2 && (
                            <span className="ml-1">
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                            </span>
                          )}
                          {Math.round(item.rating.rate) === 1 && (
                            <span className="ml-1">
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                            </span>
                          )}
                        </div>
                        <div className=" font-bold">
                          ${item.price.toFixed(2)}
                        </div>
                      </Link>
                    </Tippy>
                  ))}
              </Slider>
              <button
                className="p-2 opacity-90 hover:opacity-80 bg-black rounded-full -left-2 !top-20 absolute"
                onClick={() => slider?.current?.slickPrev()}
              >
                <ArrowBackIosOutlinedIcon className="text-white" />
              </button>
              <button
                className="p-2 opacity-90 hover:opacity-80 bg-black rounded-full -right-2 !top-20 absolute"
                onClick={() => slider?.current?.slickNext()}
              >
                <ArrowForwardIosOutlinedIcon className="text-white" />
              </button>
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className="border border-black/20 w-full px-5 py-5">
            <div className="space-y-2">
              <h4 className="font-bold text-[20px]">
                Expand your career opportunities with Python
              </h4>
              <div className="text-black/90 text-[14px] w-[70%] line-clamp-3">
                Take one of Udemy’s range of Python courses and learn how to
                code using this incredibly useful language. Its simple syntax
                and readability makes Python perfect for Flask, Django, data
                science, and machine learning. You’ll learn how to build
                everything from games to sites to apps. Choose from a range of
                courses that will appeal to and machine learning. You’ll learn
                how to build everything from games to sites to apps. Choose from
                a range of courses that will appeal to
              </div>
              <div className="border border-black w-fit px-2 py-2 font-bold text-[12px] hover:bg-gray-100 hover:cursor-pointer">
                Explore More
              </div>
            </div>

            <div className="relative">
              <Slider
                ref={slider}
                className="mt-10 py-10 h-[290px] overflow-hidden"
                {...settings}
              >
                {products
                  .filter((item) => item.category == "jewelery")
                  .map((item, index) => (
                    <Tippy
                      arrow={false}
                      offset={[0, -20]}
                      interactive="true"
                      animation="fade"
                      placement="right"
                      key={index}
                      className="p-5  rounded h-fit w-[270px] border border-black !bg-white !text-black "
                      content={
                        <div className="flex flex-col items-center justify-center">
                          <div className=" font-semibold">{item.title}</div>
                          <div className="text-md line-clamp-3 mt-2">
                            {item.description}
                          </div>
                          <div className="">
                            <div className="bg-purple-800 hover:bg-purple-700 text-white px-3 py-1 rounded mt-2 cursor-pointer">
                              Add to cart
                            </div>
                          </div>
                        </div>
                      }
                    >
                      <Link
                        href={`/product/${item.id}`}
                        className="flex flex-col items-center justify-center hover:bg-gray-200 transition-all duration-300"
                      >
                        <div className="w-[200px] h-[150px]">
                          <Image
                            className="w-full h-full object-contain"
                            src={item.image}
                            width={100}
                            height={100}
                            alt={"pic-" + item.index}
                          />
                        </div>
                        <div className=" line-clamp-2 font-semibold text-left">
                          {item.title}
                        </div>
                        <div className="text-gray-600 text-sm"></div>
                        <div className="flex items-center justify-center">
                          <span className="text-md pt-1 font-medium">
                            {Math.round(item.rating.rate)}
                          </span>
                          {Math.round(item.rating.rate) === 5 && (
                            <span className="ml-1">
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                            </span>
                          )}
                          {Math.round(item.rating.rate) === 4 && (
                            <span className="ml-1">
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                            </span>
                          )}
                          {Math.round(item.rating.rate) === 3 && (
                            <span className="ml-1">
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                            </span>
                          )}
                          {Math.round(item.rating.rate) === 2 && (
                            <span className="ml-1">
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                            </span>
                          )}
                          {Math.round(item.rating.rate) === 1 && (
                            <span className="ml-1">
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                            </span>
                          )}
                        </div>
                        <div className=" font-bold">
                          ${item.price.toFixed(2)}
                        </div>
                      </Link>
                    </Tippy>
                  ))}
              </Slider>
              <button
                className="p-2 opacity-90 hover:opacity-80 bg-black rounded-full -left-2 !top-20 absolute"
                onClick={() => slider?.current?.slickPrev()}
              >
                <ArrowBackIosOutlinedIcon className="text-white" />
              </button>
              <button
                className="p-2 opacity-90 hover:opacity-80 bg-black rounded-full -right-2 !top-20 absolute"
                onClick={() => slider?.current?.slickNext()}
              >
                <ArrowForwardIosOutlinedIcon className="text-white" />
              </button>
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <div className="border border-black/20 w-full px-5 py-5">
            <div className="space-y-2">
              <h4 className="font-bold text-[20px]">
                Expand your career opportunities with Python
              </h4>
              <div className="text-black/90 text-[14px] w-[70%] line-clamp-3">
                Take one of Udemy’s range of Python courses and learn how to
                code using this incredibly useful language. Its simple syntax
                and readability makes Python perfect for Flask, Django, data
                science, and machine learning. You’ll learn how to build
                everything from games to sites to apps. Choose from a range of
                courses that will appeal to and machine learning. You’ll learn
                how to build everything from games to sites to apps. Choose from
                a range of courses that will appeal to
              </div>
              <div className="border border-black w-fit px-2 py-2 font-bold text-[12px] hover:bg-gray-100 hover:cursor-pointer">
                Explore More
              </div>
            </div>

            <div className="relative">
              <Slider
                ref={slider}
                className="mt-10 py-10 h-[260px] overflow-hidden"
                {...settings}
              >
                {products
                  .filter((item) => item.category == "men's clothing")
                  .map((item, index) => (
                    <Tippy
                      arrow={false}
                      offset={[0, -20]}
                      interactive="true"
                      animation="fade"
                      placement="right"
                      key={index}
                      className="p-5  rounded h-fit w-[270px] border border-black !bg-white !text-black "
                      content={
                        <div className="flex flex-col items-center justify-center">
                          <div className=" font-semibold">{item.title}</div>
                          <div className="text-md line-clamp-3 mt-2">
                            {item.description}
                          </div>
                          <div className="">
                            <div className="bg-purple-800 hover:bg-purple-700 text-white px-3 py-1 rounded mt-2 cursor-pointer">
                              Add to cart
                            </div>
                          </div>
                        </div>
                      }
                    >
                      <Link
                        href={`/product/${item.id}`}
                        className="flex flex-col items-center justify-center hover:bg-gray-200 transition-all duration-300"
                      >
                        <div className="w-[200px] h-[150px]">
                          <Image
                            className="w-full h-full object-contain"
                            src={item.image}
                            width={100}
                            height={100}
                            alt={"pic-" + item.index}
                          />
                        </div>
                        <div className=" line-clamp-2 font-semibold text-left">
                          {item.title}
                        </div>
                        <div className="text-gray-600 text-sm"></div>
                        <div className="flex items-center justify-center">
                          <span className="text-md pt-1 font-medium">
                            {Math.round(item.rating.rate)}
                          </span>
                          {Math.round(item.rating.rate) === 5 && (
                            <span className="ml-1">
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                            </span>
                          )}
                          {Math.round(item.rating.rate) === 4 && (
                            <span className="ml-1">
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                            </span>
                          )}
                          {Math.round(item.rating.rate) === 3 && (
                            <span className="ml-1">
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                            </span>
                          )}
                          {Math.round(item.rating.rate) === 2 && (
                            <span className="ml-1">
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                            </span>
                          )}
                          {Math.round(item.rating.rate) === 1 && (
                            <span className="ml-1">
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                            </span>
                          )}
                        </div>
                        <div className=" font-bold">
                          ${item.price.toFixed(2)}
                        </div>
                      </Link>
                    </Tippy>
                  ))}
              </Slider>
              <button
                className="p-2 opacity-90 hover:opacity-80 bg-black rounded-full -left-2 !top-20 absolute"
                onClick={() => slider?.current?.slickPrev()}
              >
                <ArrowBackIosOutlinedIcon className="text-white" />
              </button>
              <button
                className="p-2 opacity-90 hover:opacity-80 bg-black rounded-full -right-2 !top-20 absolute"
                onClick={() => slider?.current?.slickNext()}
              >
                <ArrowForwardIosOutlinedIcon className="text-white" />
              </button>
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <div className="border border-black/20 w-full px-5 py-5">
            <div className="space-y-2">
              <h4 className="font-bold text-[20px]">
                Expand your career opportunities with Python
              </h4>
              <div className="text-black/90 text-[14px] w-[70%] line-clamp-3">
                Take one of Udemy’s range of Python courses and learn how to
                code using this incredibly useful language. Its simple syntax
                and readability makes Python perfect for Flask, Django, data
                science, and machine learning. You’ll learn how to build
                everything from games to sites to apps. Choose from a range of
                courses that will appeal to and machine learning. You’ll learn
                how to build everything from games to sites to apps. Choose from
                a range of courses that will appeal to
              </div>
              <div className="border border-black w-fit px-2 py-2 font-bold text-[12px] hover:bg-gray-100 hover:cursor-pointer">
                Explore More
              </div>
            </div>

            <div className="relative">
              <Slider ref={slider} className="mt-10 py-10" {...settings}>
                {products
                  .filter((item) => item.category == "women's clothing")
                  .map((item, index) => (
                    <Tippy
                      arrow={false}
                      offset={[0, -20]}
                      interactive="true"
                      animation="fade"
                      placement="right"
                      key={index}
                      className="p-5  rounded h-fit w-[270px] border border-black !bg-white !text-black "
                      content={
                        <div className="flex flex-col items-center justify-center">
                          <div className=" font-semibold">{item.title}</div>
                          <div className="text-md line-clamp-3 mt-2">
                            {item.description}
                          </div>
                          <div className="">
                            <div className="bg-purple-800 hover:bg-purple-700 text-white px-3 py-1 rounded mt-2 cursor-pointer">
                              Add to cart
                            </div>
                          </div>
                        </div>
                      }
                    >
                      <Link
                        href={`/product/${item.id}`}
                        className="flex flex-col items-center justify-center hover:bg-gray-200 transition-all duration-300"
                      >
                        <div className="w-[200px] h-[150px]">
                          <Image
                            className="w-full h-full object-contain"
                            src={item.image}
                            width={100}
                            height={100}
                            alt={"pic-" + item.index}
                          />
                        </div>
                        <div className=" line-clamp-2 font-semibold text-left">
                          {item.title}
                        </div>
                        <div className="text-gray-600 text-sm"></div>
                        <div className="flex items-center justify-center">
                          <span className="text-md pt-1 font-medium">
                            {Math.round(item.rating.rate)}
                          </span>
                          {Math.round(item.rating.rate) === 5 && (
                            <span className="ml-1">
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                            </span>
                          )}
                          {Math.round(item.rating.rate) === 4 && (
                            <span className="ml-1">
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                            </span>
                          )}
                          {Math.round(item.rating.rate) === 3 && (
                            <span className="ml-1">
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                            </span>
                          )}
                          {Math.round(item.rating.rate) === 2 && (
                            <span className="ml-1">
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                            </span>
                          )}
                          {Math.round(item.rating.rate) === 1 && (
                            <span className="ml-1">
                              <StarIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                              <StarBorderIcon className="text-[#b4690e] text-[16px]" />
                            </span>
                          )}
                        </div>
                        <div className=" font-bold">
                          ${item.price.toFixed(2)}
                        </div>
                      </Link>
                    </Tippy>
                  ))}
              </Slider>
              <button
                className="p-2 opacity-90 hover:opacity-80 bg-black rounded-full -left-2 !top-20 absolute"
                onClick={() => slider?.current?.slickPrev()}
              >
                <ArrowBackIosOutlinedIcon className="text-white" />
              </button>
              <button
                className="p-2 opacity-90 hover:opacity-80 bg-black rounded-full -right-2 !top-20 absolute"
                onClick={() => slider?.current?.slickNext()}
              >
                <ArrowForwardIosOutlinedIcon className="text-white" />
              </button>
            </div>
          </div>
        </CustomTabPanel>
      </div>
    </Box>
  );
};

export default Courses;
