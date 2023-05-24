import { NextPage } from "next";
import Image from "next/image";
import abc from "@/public/images/abc.png";

export interface Props {}
const Header: NextPage<Props> = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header_title">
          <h2 className="header_title-name">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h2>
          <a href="#" className="header_title-link">
            ShopNow
          </a>
        </div>
        <div className="header_language">
          <span className="header_language-text">English</span>
          <div>
            <Image src={abc} alt="ABC" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
