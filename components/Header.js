
import Link from "next/link"

export default function Header() {
    return (
        <header className="relative z-0 w-full h-24 shadow-sm">
            <div className="container flex items-center justify-center h-full max-w-6xl px-8 mx-auto sm:justify-between xl:px-0">
                <Link href="/">
                    <a className="relative flex items-center inline-block h-5 h-full font-black leading-none">
                        {/* We have a SVG here */}
                        <img src="/logo.svg" alt="Logo of MedBook" />
                        <span className="ml-3 text-xl text-dark">
                            MedBook
                            <span className="text-pink">.</span>
                        </span>
                    </a>
                </Link>

                <nav
                    id="nav"
                    className="absolute top-0 left-0 z-50 flex flex-col items-center justify-between hidden w-full h-64 pt-5 mt-24 text-sm text-grey bg-white border-t border-grey md:w-auto md:flex-row md:h-24 lg:text-base md:bg-transparent md:mt-0 md:border-none md:py-0 md:flex md:relative"
                >
                    <Link href="/#">
                        <a className="ml-0 mr-0 font-bold duration-100 md:ml-12 md:mr-3 lg:mr-8 transition-color hover:text-green">
                            Home
                        </a>
                    </Link>
                    <Link href="/#features">
                        <a className="mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-green">
                            Features
                        </a>
                    </Link>
                    <Link href="/hospitalDashboard">
                        <a className="mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-green">
                            Hospital
                        </a>
                    </Link>
                    <Link href="/doctorDashboard">
                        <a className="mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-green">
                            Doctor
                        </a>
                    </Link>
                    {/* <div className="flex flex-col block w-full font-medium border-t border-grey md:hidden">
                        <Link href="/ownerDashboard">
                            <a className="w-full py-2 font-bold text-center text-pink">
                                Owner
                            </a>
                        </Link>
                        <Link href="/patientDashboard">
                            <a className="relative inline-block w-full px-5 py-3 text-sm leading-none text-center text-light bg-green fold-bold">
                                Patient
                            </a>
                        </Link>
                    </div> */}

                </nav>
                <div className=" absolute left-0 flex-col items-center justify-center hidden w-full pb-8 mt-48 border-b border-grey md:relative md:w-auto md:bg-transparent md:border-none md:mt-0 md:flex-row md:p-0 md:items-end md:flex md:justify-between">
                    <Link href="/ownerDashboard">
                        <a className="relative z-40 inline-block mr-2 w-auto h-full px-5 py-3 text-sm font-bold leading-none text-pink transition duration-300 border-2 border-pink rounded-lg shadow-md fold-bold sm:w-full lg:shadow-none hover:shadow-xl">
                            Owner
                        </a>
                    </Link>
                    <Link href="/patientDashboard">
                        <a className="relative z-40 inline-block w-auto h-full ml-2 px-5 py-3 text-sm font-bold leading-none text-light transition duration-300 bg-green rounded-lg shadow-md fold-bold sm:w-full lg:shadow-none hover:shadow-xl">
                            Patient
                        </a>
                    </Link>
                </div>
            </div>
        </header>
    )
}
