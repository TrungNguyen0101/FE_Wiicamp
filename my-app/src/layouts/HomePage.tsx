import { NextPage } from "next";
import Header from "@/src/components/home/Header";
import Nav from "@/src/components/home/Nav";
import left from "@/public/images/DropDownLeft.png";
import banner from "@/public/images/banner.png";
import image from "@/public/images/g92-2-500x500 1.png";
import view from "@/public/images/QuWishlist.png";
import star from "@/public/images/Vick View.png";
import heart from "@/public/images/ector.png";
import phone from "@/public/images/phone.png";
import Card from "@/src/components/home/Card";
import ItemSales from "@/src/components/item/ItemSales";
import Tag from "@/src/components/tag/Tag";
import Image from "next/image";
import ItemCategory from "@/src/components/item/ItemCategory";
export interface Props {}
const HomePage: NextPage<Props> = () => {
  return (
    <main>
      <Header></Header>
      <Nav></Nav>
      <Card></Card>
      <div className="container sales ">
        <Tag status={true} text={"Today’s"} desc={"Flash Sales"}></Tag>
        <div className="sales_list">
          <ItemSales sale={true}></ItemSales>
          <ItemSales sale={true}></ItemSales>
          <ItemSales sale={true}></ItemSales>
          <ItemSales sale={true}></ItemSales>
        </div>
        <div className="btn-123">
          <button type="button" className="btn btn-outline-danger">
            View All Product
          </button>
        </div>
      </div>
      <section className="container category">
        <Tag
          status={false}
          text={"Categories"}
          desc={"Browse By Category"}
        ></Tag>
        <div className="category_list">
          <ItemCategory></ItemCategory>
          <ItemCategory></ItemCategory>
          <ItemCategory></ItemCategory>
          <ItemCategory></ItemCategory>
          <ItemCategory></ItemCategory>
          <ItemCategory></ItemCategory>
        </div>
      </section>
      <section className="container product">
        <Tag
          status={false}
          text={"This Month"}
          desc={"Best Selling Products"}
          btn={true}
        ></Tag>
        <div className="sales_list">
          <ItemSales sale={false}></ItemSales>
          <ItemSales sale={false}></ItemSales>
          <ItemSales sale={false}></ItemSales>
          <ItemSales sale={false}></ItemSales>
        </div>
      </section>
    </main>
  );
};
export default HomePage;
