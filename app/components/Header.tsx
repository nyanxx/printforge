import Image from "next/image";
import Link from "next/link";
import LogoMobile from "../../public/assets/printforge-logo.svg";
import LogoDesktop from "../../public/assets/printforge-logo-desktop.png";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <header className="flex justify-between w-full py-2.5 px-5 mb-7.5">
      <Link href="/" className="cursor-pointer">
        <Image
          src={LogoMobile}
          alt="Print Forge Logo"
          width={39}
          height={39}
          className="lg:hidden w-9.75 h-auto"
        />{" "}
        <Image
          src={LogoDesktop}
          alt="Print Forge Logo"
          width={150}
          height={39}
          className="hidden lg:block w-37.5 h-auto"
        />{" "}
      </Link>

      <nav>
        <ul className="flex gap-10  text-[#606060] font-medium tracking-[5%] text-[14px] h-full">
          <li className="flex h-full items-center">
            <NavLink
              to="/3d-models"
              className="border-b-2 border-b-transparent h-full inline-flex items-center uppercase"
              activeClassName="text-[#F77429] border-b-2 border-b-[#F77429]"
              exact={false}
            >
              3D Models
            </NavLink>
          </li>
          <li className="flex h-full items-center">
            <NavLink
              to="/about"
              className="border-b-2 border-b-transparent h-full inline-flex items-center uppercase"
              activeClassName="text-[#F77429] border-b-2 border-b-[#F77429]"
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
