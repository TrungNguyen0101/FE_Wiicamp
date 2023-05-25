import { NextPage } from "next";
import Header from "@/src/components/home/Header";
import Nav from "@/src/components/home/Nav";
import Card from "@/src/components/home/Card";
import BestProduct from "@/src/components/home/BestProduct";
import Category from "@/src/components/home/Category";
import Sales from "@/src/components/home/Sales";
import Image from "next/image";
import Banner from "@/src/components/home/Banner";
import Tag from "../components/tag/Tag";
import ItemSales from "../components/item/ItemSales";
import ItemNoSales from "../components/item/ItemNoSales";
export interface Props {}
const HomePage: NextPage<Props> = () => {
  return (
    <main>
      <Header></Header>
      <Nav></Nav>
      <Card></Card>
      <Sales></Sales>
      <Category></Category>
      <BestProduct></BestProduct>
      <Banner></Banner>
      <section className="container relative outProduct">
        <Tag
          status={false}
          text={"Our Products"}
          desc={"Explore Our Products"}
        ></Tag>
        <div className="grid grid-cols-4 sales_list gap-y-[60px]">
          <ItemNoSales number={"(2)"}></ItemNoSales>
          <ItemNoSales number={"(2)"}></ItemNoSales>
          <ItemNoSales number={"(2)"}></ItemNoSales>
          <ItemNoSales number={"(2)"}></ItemNoSales>
          <ItemNoSales number={"(2)"} color={true}></ItemNoSales>
          <ItemNoSales number={"(2)"} color={true}></ItemNoSales>
          <ItemNoSales number={"(2)"} color={true}></ItemNoSales>
          <ItemNoSales number={"(2)"} color={true}></ItemNoSales>
        </div>
        <div className="flex items-center justify-center mt-[60px]">
          <button type="button" className="btn btn-danger">
            View All Product
          </button>
        </div>
      </section>
    </main>
  );
};
export default HomePage;
