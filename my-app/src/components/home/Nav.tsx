import { NextPage } from "next";
import Image from "next/image";
import heart from "@/public/images/Wishlist.png";
import cart from "@/public/images/Cart1 with buy.png";
import search from "@/public/images/search.png";
export interface Props {}
const Nav: NextPage<Props> = () => {
  return (
    <nav className="container navs ">
      <h2 className="navs_title">Exclusive</h2>
      <ul className="navs_menu nav nav-underline justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link ">Sign Up</a>
        </li>
      </ul>
      <div className="navs_search">
        <div className="navs_search-input">
          <input type="text" placeholder="What are you looking for?" />
          <Image src={search} alt="" className="navs_search-icon" />
        </div>

        <Image src={heart} alt="" />
        <Image src={cart} alt="" />
      </div>
    </nav>
  );
};
export default Nav;
