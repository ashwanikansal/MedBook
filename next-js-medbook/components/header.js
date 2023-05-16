import React from 'react'
import { useMoralis } from 'react-moralis'
import Link from 'next/link';

const Header = ({heading}) => {
  const {account} = useMoralis();
  return (
    <div className="max-width grid grid-cols-3 py-4 justify-center items-center border-b-2 border-gray-light">
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

      <ul className="flex justify-center">
        <h1 className="font-bold text-xl">{heading}</h1>
      </ul>

      <div className="flex justify-end">
        <h1 className='transition font-sans text-base capitalize font-semibold border-2 border-transparent ease-in-out  rounded-2xl duration-100 bg-blue-light text-blue py-1 px-4 border-blue flex justify-center items-center w-fit'>{account.slice(0,6)}...{account.slice(account.length-6)}</h1>
      </div>
    </div>
  )
}

export default Header