"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Link from "next/link";

const page = ({ params }) => {
  const [products, setProducts] = useState([]);

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

  return (
    <div className=" mt-16 text-white bg-[#2d2f31] py-5 pl-[200px] pr-[100px]">
      {products
        .filter((item) => item.id === parseInt(params.id))
        .map((item, index) => (
          <div key={index} className="grid grid-cols-2">
            <div className="p-5">
              <p class="flex items-center font-bold text-blue-200 text-[12px]">
                <span>Development</span>
                <span class="mx-2">&gt;</span>
                <span>Data Science</span>
                <span class="mx-2">&gt;</span>
                <span>Python</span>
              </p>
              <div className="font-bold text-[30px]">{item.title}</div>
              <div>{item.description}</div>
              <div className="flex items-center justify-start ">
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
              <div>{item.category}</div>
            </div>
            <div className=" w-[350px] rounded ml-5">
              <Link
                href={"/"}
                className="flex flex-col items-center justify-center bg-white text-black px-5 pt-10 pb-[200px]"
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
                <div className="text-gray-600 text-sm">{item.category}</div>
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
                <div className=" font-bold">${item.price.toFixed(2)}</div>
                <div className=" cursor-pointer bg-purple-700 rounded font-semibold text-white hover:bg-purple-600 px-3 py-2 w-full text-center mt-5">
                  Add to cart
                </div>
              </Link>
            </div>
          </div>
        ))}
      <div className="bg-gray-200 w-full h-[400px] flex items-center justify-center mt-36 text-3xl">
        Free Space
      </div>
    </div>
  );
};

export default page;
