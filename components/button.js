import Link from "next/link";

const button = ({ name, link }) => {
  return (
    <Link
      href={link}
      className="transition uppercase scale-105 ease-linear rounded-[8px] bg-pink text-light py-1 px-4 hover:drop-shadow-xl "
    >
      {name}
    </Link>
  );
};

export default button;
