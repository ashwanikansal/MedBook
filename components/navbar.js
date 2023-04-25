import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex py-3 max-width justify-between items-center">
      <Link
        href="/"
        className="relative flex items-center h-full font-black leading-none"
      >
        <img src="/logo.svg" alt="Logo of MedBook" />
        <span className="ml-3 text-xl text-gray-800">
          MedBook
          <span className="text-pink-500">.</span>
        </span>
      </Link>

      <ul className="lg:w-3/12 md:w-4/12 flex justify-between">
        <li className="mx-2">
          <Link href="/">Home</Link>
        </li>
        <li className="mx-2">
          <Link href="/about">About</Link>
        </li>
        <li className="mx-2">
          <Link href="/services">Services</Link>
        </li>
      </ul>

      <div className="login-btn">
        <button className="rounded-full bg-pink-500 text-white py-1 px-4">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
