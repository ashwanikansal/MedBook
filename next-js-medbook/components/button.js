import Link from "next/link";

const Button = ({ name, link }) => {
  return (
    <Link
      href={link}
      className="transition font-sans text-base capitalize font-semibold border-2 border-transparent ease-in-out  rounded-2xl duration-100 bg-pink-light text-pink py-1 px-4 hover:border-pink flex justify-center items-center w-fit"
    >
      {name}
    </Link>
  );
};

export default Button
