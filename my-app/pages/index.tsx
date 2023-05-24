import Image from "next/image";
import { Inter } from "next/font/google";

import Header from "@/src/components/header/Header";
import Nav from "@/src/components/nav/Nav";
import left from "@/public/images/DropDownLeft.png";
import banner from "@/public/images/banner.png";
import image from "@/public/images/g92-2-500x500 1.png";
import view from "@/public/images/Quick View.png";
import heart from "@/public/images/Wishlist.png";
import star from "@/public/images/Vector.png";
import Card from "@/src/components/card/Card";
import ItemSale from "@/src/components/item/Item";
import Item from "@/src/components/item/Item";
import Tag from "@/src/components/tag/Tag";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="wrapper">
      <Header></Header>
      <Nav></Nav>
      <Card></Card>
      <div className="sales container">
        <Tag status={true} text={"Today’s"} desc={"Flash Sales"}></Tag>
        <div className="sales_list">
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </div>
        <div className="btn-123">
          <button type="button" className="btn btn-outline-danger">
            View All Product
          </button>
        </div>
      </div>
      <main className="product container">
        <Tag
          status={false}
          text={"Categories"}
          desc={"Browse By Category"}
        ></Tag>
      </main>
    </main>
  );
}
