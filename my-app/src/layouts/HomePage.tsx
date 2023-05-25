import { NextPage } from "next";
import Header from "@/src/components/home/Header";
import Nav from "@/src/components/home/Nav";
import Card from "@/src/components/home/Card";
import Product from "@/src/components/home/Product";
import Category from "@/src/components/home/Category";
import Sales from "@/src/components/home/Sales";
import Image from "next/image";
import Loa from "@/public/images/loa1.png";
export interface Props {}
const HomePage: NextPage<Props> = () => {
  return (
    <main>
      <Header></Header>
      <Nav></Nav>
      <Card></Card>
      <Sales></Sales>
      <Category></Category>
      <Product></Product>
      <div className="container banner">
        <div className="text-white banner_content banner_item">
          <span className="text-[#00FF66] font-semibold leading-5">
            Categories
          </span>
          <h2 className="text-[48px] font-semibold leading-[60px] tracking-[0.04em] whitespace-pre-wrap m-0">
            Enhance Your Music Experience
          </h2>
          <div className="banner_time mt-[32px] flex gap-x-[24px]">
            <div className="px-[16px] py-[12px] bg-white rounded-[100%] text-black flex flex-col items-center">
              <span className="font-semibold leading-5">23</span>
              <span className="text-[11px] font-normal leading-[18px]">
                Hours
              </span>
            </div>
            <div className="px-[16px] py-[12px] bg-white rounded-[100%] text-black flex flex-col items-center">
              <span className="font-semibold leading-5">23</span>
              <span className="text-[11px] font-normal leading-[18px]">
                Hours
              </span>
            </div>
            <div className="px-[16px] py-[12px] bg-white rounded-[100%] text-black flex flex-col items-center">
              <span className="font-semibold leading-5">23</span>
              <span className="text-[11px] font-normal leading-[18px]">
                Hours
              </span>
            </div>
            <div className="px-[16px] py-[12px] bg-white rounded-[100%] text-black flex flex-col items-center">
              <span className="font-semibold leading-5">23</span>
              <span className="text-[11px] font-normal leading-[18px]">
                Hours
              </span>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-danger bg-[#00FF66]  mt-[40px] font-medium"
            >
              Buy Now!
            </button>
          </div>
        </div>
        <div className="banner_image ">
          <Image src={Loa} alt=""></Image>
        </div>
      </div>
    </main>
  );
};
export default HomePage;
