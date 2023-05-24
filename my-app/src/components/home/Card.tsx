import { NextPage } from "next";
import Image from "next/image";
import left from "@/public/images/DropDownLeft.png";
import banner from "@/public/images/banner.png";
export interface Props {}
const Card: NextPage<Props> = () => {
  return (
    <section className="card">
      <div className="container card1">
        <div className="card-menu">
          <nav className="nav flex-column ">
            <div className="card_menu-item">
              <a className="nav-link active" aria-current="page" href="#">
                Woman’s Fashion
              </a>
              <Image src={left} alt="" className="card_menu-icon"></Image>
            </div>
            <div className="card_menu-item">
              <a className="nav-link" href="#">
                Men’s Fashion
              </a>
              <Image src={left} alt="" className="card_menu-icon"></Image>
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
        <div className="card_image">
          <Image src={banner} alt=""></Image>
        </div>
      </div>
    </section>
  );
};
export default Card;
