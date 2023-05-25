import { NextPage } from "next";
import phone from "@/public/images/phone.png";
import Image from "next/image";

export interface Props {}
const ItemCategory: NextPage<Props> = () => {
  return (
    <div className="category_item">
      <Image src={phone} alt=""></Image>
      <span className="w-full break-words category_item-text">Phones</span>
    </div>
  );
};
export default ItemCategory;
