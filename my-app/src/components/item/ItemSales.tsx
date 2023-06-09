import { NextPage } from "next";
import Image from "next/image";
import image from "@/public/images/g92-2-500x500 1.png";
import view from "@/public/images/Quick View.png";
import heart from "@/public/images/Wishlist.png";
import star from "@/public/images/Vector.png";
export interface Props {
  sale?: boolean;
  number?: string;
}
const ItemSales: NextPage<Props> = ({ sale, number }) => {
  return (
    <div className="sales_item">
      <div className="sales_item-show ">
        <div className="cursor-pointer activeShow">Add To Cart</div>
        <div className="sales_item-image">
          <Image src={image} alt=""></Image>
        </div>
        {sale === true && <span className="sales_item-discount">-40%</span>}
        <div className="sales_item-icon">
          <div className="sales_item-icon-1">
            <Image src={view} alt="" className="icon" width={12}></Image>
          </div>
          <div className="sales_item-icon-2">
            <Image src={heart} alt="" width={12}></Image>
          </div>
        </div>
      </div>
      <div className="sales_item-desc">
        <span className="text-[16px] font-medium leading-[24px]">
          HAVIT HV-G92 Gamepad
        </span>
        <div className="sales_item-number">
          <span>$120</span>
          <span className="sales_item-number-1">$160</span>
        </div>
        <div className="sales_item-star">
          <Image src={star} alt=""></Image>
          <Image src={star} alt=""></Image>
          <Image src={star} alt=""></Image>
          <Image src={star} alt=""></Image>
          <Image src={star} alt=""></Image>
          <span className="ml-[8px]">{number}</span>
        </div>
      </div>
    </div>
  );
};
export default ItemSales;
