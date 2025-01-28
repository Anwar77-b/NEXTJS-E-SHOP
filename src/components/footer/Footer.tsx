import Link from "next/link";
import Socials from "../Socials";

function Footer() {
  return (
    <footer className="bg-[#141718] text-[#E8ECEF] p-6 text-[11px]">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between py-5">
          <div className="sm:flex items-center text-center mb-4">
            <h2 className="text-xl font-bold">3legant</h2>
            <p className="hidden sm:block w-[1px] h-4 bg-gray-500 mx-6"></p>
            <p className="sm:hidden h-[2px] w-6 bg-gray-500 rounded-sm my-4 mx-auto"></p>
            <p>Gift & Decoration Store</p>
          </div>
          <ul className="flex flex-col text-center gap-4 sm:flex-row">
            <li>
              <Link href={"#"}>Home</Link>
            </li>
            <li>
              <Link href={"#"}>Shop</Link>
            </li>
            <li>
              <Link href={"#"}>Product</Link>
            </li>
            <li>
              <Link href={"#"}>Blog</Link>
            </li>
            <li>
              <Link href={"#"}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="border-t border-t-gray-400  flex flex-col-reverse sm:flex-row sm:justify-between">
          <div className="flex flex-col-reverse sm:flex-row gap-4 sm:items-center">
            <p className="text-center">
              Copyright © 2023 3legant. All rights reserved
            </p>
            <div className="flex justify-center gap-2 font-bold text-white">
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
            </div>
          </div>
          <div className="invert mx-auto sm:mx-0 mb-4">
            <Socials></Socials>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
