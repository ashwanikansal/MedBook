import Link from "next/link";
import { BiLeftArrowCircle } from "react-icons/bi";
import Button from "./button";
const loginCard = () => {
  return (
    <div className="max-width bg-texture h-screen flex items-center justify-center">
      <div className="bg-light items-center w-full sm:w-4/5 lg:w-3/5 max-w-[700px] h-[80vh] rounded-lg shadow-md md:grid md:grid-cols-5 overflow-hidden">
        
        <div className="h-[20vh] md:col-span-2 md:h-full">
          <img src="/loginPage.jpg" alt="Login Page" className="object-cover h-full w-full"/>
        </div>
        <div className="col-span-3 h-full">
          <div className="px-10 py-20 h-full text-center">
            <h1 className="font-medium text-xl sm:text-2xl pb-3 mb-10 border-b-2 border-gray-light">Hospital Login</h1>
            <div className="flex flex-col text-left mb-10 ">
              <label htmlFor="private_key" className="font-medium text-gray">Private Key</label>
              <input
                type="text"
                name="private_key"
                id="private_key"
                className="border-2 border-gray-light rounded-md p-1 my-2"
              />
            </div>
            <Button name="Login" link="/hospitalDashboard"/>
            <p className="mt-8 sm:mt-16">New User? <Link href="/hospitalSignUp" className="text-blue-dark">Register here</Link></p>
            <Link href="/" className="mt-2 sm:mt-5 md:mt-10 w-full flex justify-center">
                <BiLeftArrowCircle className="transition-all h-6 w-6 fill-blue hover:fill-blue-dark"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loginCard;
