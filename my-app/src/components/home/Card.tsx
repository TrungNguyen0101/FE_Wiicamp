import { NextPage } from "next";
import Image from "next/image";
import left from "@/public/images/DropDownLeft.png";
import banner from "@/public/images/banner.png";
export interface Props {}
const Card: NextPage<Props> = () => {
  return (
    <section className="container card1 ">
      <div className="">
        <div className="card1-menu mr-[16px] pr-[16px]">
          <nav className="nav flex-column ">
            <div className="card1_menu-item">
              <a className="nav-link active" aria-current="page" href="#">
                Woman’s Fashion
              </a>
              <Image src={left} alt="" className="card1_menu-icon"></Image>
            </div>
            <div className="card1_menu-item">
              <a className="nav-link" href="#">
                Men’s Fashion
              </a>
              <Image src={left} alt="" className="card1_menu-icon"></Image>
            </div>
            <a className="nav-link" href="#">
              Electronics
            </a>
            <a className="nav-link">Home & Lifestyle</a>
            <a className="nav-link">Medicine</a>
            <a className="nav-link">Sports & Outdoor</a>
            <a className="nav-link">Baby’s & Toys</a>
            <a className="nav-link">Groceries & Pets</a>
            <a className="nav-link">Health & Beauty</a>
          </nav>
        </div>
      </div>
      <div className="card1_image">
        <Image src={banner} alt=""></Image>
      </div>
    </section>
  );
};
export default Card;
