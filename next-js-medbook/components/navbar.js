import Link from "next/link";
import Button from "./button";

const Navbar = () => {
  function scrollToSection() {
    scroller.scrollTo("sectionId", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }

  return (
    <nav className="max-width justify-between flex py-4 md:justify-between items-center scroll-smooth">
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
        <li className="mx-1 lg:mx-2 hover:text-green transition-all font-bold">
          <Link href="/">Home</Link>
        </li>
        <li className="mx-1 lg:mx-2 hover:text-green transition-all font-bold">
          <Link href="/about">About</Link>
        </li>
        <li className="mx-1 lg:mx-2 hover:text-green transition-all font-bold">
          <Link href="#services">Services </Link>
        </li>
      </ul>

      <div className="flex items-center">
        <div className="mx-2">
          <Button name="Login" link="#login-container" />
        </div>
        <div className="mx-2">
          <Button name="owner" link="/ownerDashboard" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
