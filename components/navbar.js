import Link from "next/link";
import Button from "./button";

const Navbar = () => {
  return (
    <nav className="max-width justify-center flex py-4 md:justify-between items-center scroll-smooth">
      <Link
        href="/"
        className="relative flex items-center h-full font-black leading-none"
      >
        <img src="/logo.svg" alt="Logo of MedBook" />
        <span className="ml-3 text-xl text-gray">
          MedBook
          <span className="text-pink">.</span>
        </span>
      </Link>

      <ul className="hidden md:flex md:justify-between md:w-4/12 lg:w-3/12">
        <li className="mx-1 lg:mx-2 hover:text-green transition-all font-medium">
          <Link href="/">Home</Link>
        </li>
        <li className="mx-1 lg:mx-2 hover:text-green transition-all font-medium">
          <Link href="/about">About</Link>
        </li>
        <li className="mx-1 lg:mx-2 hover:text-green transition-all font-medium">
          <Link href="#services">Services</Link>
        </li>
      </ul>

      <div className="hidden md:block login-btn">
        <Button name="Login" link="#login-container"/>
      </div>
    </nav>
  )
}

export default Navbar;
