import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex py-4 max-width justify-between items-center">
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

      <ul className="lg:w-3/12 md:w-4/12 flex justify-between">
        <li className="mx-2 hover:text-green font-medium">
          <Link href="/">Home</Link>
        </li>
        <li className="mx-2 hover:text-green font-medium">
          <Link href="/about">About</Link>
        </li>
        <li className="mx-2 hover:text-green font-medium">
          <Link href="/services">Services</Link>
        </li>
      </ul>

      <div className="login-btn">
        <button className="transition ease-linear rounded-full bg-pink text-light py-1 px-4 hover:drop-shadow-xl">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
