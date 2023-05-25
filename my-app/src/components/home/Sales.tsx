import { NextPage } from "next";
import Tag from "@/src/components/tag/Tag";
import ItemSales from "@/src/components/item/ItemSales";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper.min.css";
import React, { useRef, useState } from "react";
export interface Props {}
SwiperCore.use([Navigation]);
const Sales: NextPage<Props> = () => {
  const swiperRef: any = useRef(null);

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <div className="container sales ">
      <div className="relative">
        <Tag status={true} text={"Today’s"} desc={"Flash Sales"}></Tag>
        <div className="btn_click">
          <button onClick={handlePrevClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button onClick={handleNextClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        slidesPerView={4}
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="w-[270px] ">
          <ItemSales sale={true} number={"(1)"}></ItemSales>
        </SwiperSlide>
        <SwiperSlide className="w-[270px] ">
          <ItemSales sale={true} number={"(2)"}></ItemSales>
        </SwiperSlide>
        <SwiperSlide className="w-[270px] ">
          <ItemSales sale={true} number={"(3)"}></ItemSales>
        </SwiperSlide>
        <SwiperSlide className="w-[270px] ">
          <ItemSales sale={true} number={"(4)"}></ItemSales>
        </SwiperSlide>
        <SwiperSlide className="w-[270px] ">
          <ItemSales sale={true} number={"(5)"}></ItemSales>
        </SwiperSlide>
        <SwiperSlide className="w-[270px] ">
          <ItemSales sale={true} number={"(6)"}></ItemSales>
        </SwiperSlide>
        <SwiperSlide className="w-[270px] ">
          <ItemSales sale={true} number={"(7)"}></ItemSales>
        </SwiperSlide>
        <SwiperSlide className="w-[270px] ">
          <ItemSales sale={true} number={"(8)"}></ItemSales>
        </SwiperSlide>
      </Swiper>

      {/* <ItemSales sale={true} number={"(5)"}></ItemSales>
      <ItemSales sale={true} number={"(6)"}></ItemSales>
      <ItemSales sale={true} number={"(7)"}></ItemSales> */}
      {/* </div> */}
      {/* </div> */}
      <div className="btn-123">
        <button type="button" className="btn btn-outline-danger">
          View All Product
        </button>
      </div>
    </div>
  );
};
export default Sales;
