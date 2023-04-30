// hospital name, address, phone no, govt. licence no. ,unique id
import Link from "next/link";
import Button from "@/components/button";
const hospitalDashboard = () => {
  return (
    <>
      <nav className="flex py-4 max-width justify-between items-center shadow-md h-[72px]">
        <div className="relative flex items-center h-full font-black leading-none cursor-pointer">
          <img src="/logo.svg" alt="Logo of MedBook" />
          <span className="ml-3 text-xl text-gray">
            MedBook
            <span className="text-pink">.</span>
          </span>
        </div>
        <Button name="Sign Out" link="/loginPage" />
      </nav>

      <section className="md:grid md:grid-cols-5 min-h-[calc(100vh-72px)]">
        <div className="flex flex-col items-center col-span-2  h-full p-8 border-r-2 border-gray-light">
          <div className="h-48 w-5/6 lg:w-4/6 flex justify-center items-center">
            <img src="/hospital.jpg" alt="hospital" />
          </div>
          <article className="text-center md:text-left">
            <h1 className="md:hidden text-2xl font-medium mb-5">
              AHMC Anaheim Regional Medical Center
            </h1>
            <p className="md:hidden mb-5 text-gray">(0x3323545645523654624)</p>
            <h1 className="font-semibold uppercase mb-1 lg:mb-3">Address</h1>
            <p className="mb-5 lg:mb-7 text-gray">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
              dolorum repudiandae incidunt magnam praesentium quae iusto
              voluptates sint rem enim?
            </p>
            <h1 className="font-semibold uppercase mb-1 lg:mb-3">Contact</h1>
            <p className="mb-5 lg:mb-7 text-gray">2342352321</p>
            <h1 className="font-semibold uppercase mb-1 lg:mb-3">
              License No.
            </h1>
            <p className="text-gray">2354234252</p>
          </article>
        </div>
        <div className="flex justify-center items-center col-span-3 text-center p-8 ">
          <div>
            <h1 className="hidden md:block text-4xl font-medium mb-5">
              AHMC Anaheim Regional Medical Center
            </h1>
            <p className="hidden md:block mb-20">(0x3323545645523654624)</p>
            <Button name="Register Doctor" link="/signUpPage" />
          </div>
        </div>
      </section>
    </>
  );
};

export default hospitalDashboard;
