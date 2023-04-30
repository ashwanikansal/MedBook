import React from "react";

export default function Footer() {
  return (
    <>
      <div className="max-width bg-dark flex flex-col md:flex-row justify-between py-10 text-light">
        <div className="w-30 flex flex-col items-center md:block mb-10 md:mb-0 ">
          <img src="logo.svg" className="mb-3"></img>
          <p className="font-bold text-center">Decentralized Electronic Health Records</p>
        </div>
        <ul className="mb-10 md:mb-0 text-center md:text-left ">
          <li className="font-bold mb-2 uppercase">Features</li>
          <li>Secure</li>
          <li>Decentralized</li>
          <li></li>
        </ul>
        <ul className="text-center md:text-left">
          <li className="font-bold mb-2 uppercase">Frontend</li>
          <li>Tailwind css</li>
          <li>Next.js</li>
        </ul>
      </div>
      <div className="bg-dark py-3 border-t border-gray">
        <p className="flex justify-center text-light">All rights reserved. ©MedBook 2023</p>
      </div>
    </>
  );
}
