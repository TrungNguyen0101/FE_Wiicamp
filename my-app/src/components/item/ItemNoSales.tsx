import { NextPage } from "next";
import Image from "next/image";
import image from "@/public/images/g92-2-500x500 1.png";
import view from "@/public/images/Quick View.png";
import heart from "@/public/images/Wishlist.png";
import star from "@/public/images/Vector.png";
export interface Props {
  number?: string;
  color?: boolean;
}
const ItemNoSales: NextPage<Props> = ({ number, color }) => {
  return (
    <div className="sales_item">
      <div className="sales_item-show">
        <div className="sales_item-image">
          <Image src={image} alt=""></Image>
        </div>

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
        <div className="flex items-center gap-x-[8px] sales_item-number">
          <span>$120</span>
          <div className="mt-0 sales_item-star">
            <Image src={star} alt=""></Image>
            <Image src={star} alt=""></Image>
            <Image src={star} alt=""></Image>
            <Image src={star} alt=""></Image>
            <Image src={star} alt=""></Image>
          </div>
          <span className="text-[#000000]">{number}</span>
        </div>
        {color === true && (
          <div className="flex flex-row gap-x-[8px] mt-[8px] ">
            <div className="relative sales_item-circle">
              <div className="active"></div>
            </div>
            <div className="bg-red-500 border-0 sales_item-circle"></div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ItemNoSales;
