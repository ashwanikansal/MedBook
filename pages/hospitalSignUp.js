import Link from "next/link";
import Button from "@/components/button";
import {BiLeftArrowCircle} from "react-icons/bi"

function hospitalSignUp() {
  return (
    <div className="max-width bg-texture h-screen flex items-center justify-center">
      <div className="bg-light items-center w-full sm:w-4/5 lg:w-3/5 h-[85vh] rounded-lg shadow-md md:grid md:grid-cols-5 overflow-hidden">
        <div className="hidden md:block h-[20vh] md:col-span-2 md:h-full">
          <img src="/signup.jpg" className="h-full w-full object-cover"></img>
        </div>
        <div className="right col-span-3 h-full flex justify-center items-center px-10">
          <div className="w-full text-center">
            <h1 className="font-medium sm:text-2xl mb-5 text-dark pb-3 border-b-2 border-gray-light">
              Hospital Registration
            </h1>
            <div className="container flex flex-col text-left">
              <label htmlFor="name" className="text-gray font-medium">
                Hospital Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="border-2 border-gray-light rounded-md p-1 mb-2"
                required
              />

              <label htmlFor="address" className="text-gray font-medium">
                Address
              </label>
              <textarea
                name="address"
                id="address"
                className="border-2 border-gray-light rounded-md p-1 mb-2"
                required
              />

              <label htmlFor="name" className="text-gray font-medium">
                Phone No.
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="border-2 border-gray-light rounded-md p-1 mb-2"
                required
              />

              <label htmlFor="name" className="text-gray font-medium">
                Govt. Licence No.
              </label>
              <input
                type="text"
                name="licence"
                id="licence"
                className="border-2 border-gray-light rounded-md p-1 mb-2"
                required
              />
            </div>
            <div className="container flex flex-col items-center">
              <button className="pt-8 mb-5 mr-2" onClick={() => alert("hey there!")}>
                <Button name="Register" link="/loginPage" />
              </button>
              <Link href="/loginPage" className="mt-2 sm:mt-5">
                <BiLeftArrowCircle className="h-6 w-6 fill-blue hover:fill-blue-dark"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default hospitalSignUp;
