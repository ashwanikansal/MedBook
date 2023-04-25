import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/navbar";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Head>
        <title>MedBook</title>
        <meta name="description" content="MedBook" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Navbar />
      {/* hero section */}
      <div className="hero max-width grid grid-cols-5 h-[90vh] rounded-3xl relative">
        <div className="hero-left bg-texture col-span-3 px-10 rounded-l-3xl flex flex-col justify-center">
          <h1 className="text-5xl font-medium uppercase mb-2">
            Get your <br />
            medical history <br />
            stored on blockchain
          </h1>
          <p className="mt-2">
            Access it from anywhere and anytime.
            <br /> Trusted by Government authorities.
          </p>
        </div>
        <div className="hero-right bg-slate-600 col-span-2 h-[90vh] overflow-hidden rounded-r-3xl">
          <img src="/heroImage.jpg" alt="Hero Image" className="object-cover" />
        </div>

        {/* login container */}
        <div className="max-width absolute top-[92%]">
          <div className="grid grid-cols-3 gap-10 mx-12">
          <div className="max-w-sm bg-white rounded-lg shadow h-80">
              <img
                className="rounded-t-3xl shadow-sm h-50 "
                src="/hospital.jpg"
                alt=""
              />
              <div className="p-5 text-center">
                <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray ">
                  Hospital Login & Register
                </h5>
                <button className="transition ease-linear rounded-full bg-pink text-light py-1 px-4 hover:drop-shadow-xl ">
                  Click Here
                </button>
              </div>
            </div>

            <div className="max-w-sm bg-white rounded-lg shadow">
              <img
                className="rounded-t-3xl shadow-sm"
                src="/doctor.jpg"
                alt=""
              />
              <div className="p-5 text-center">
                <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray ">
                  Doctor Login & Register
                </h5>
                <button className="transition ease-linear rounded-full bg-pink text-light py-1 px-4 hover:drop-shadow-xl ">
                  Click Here
                </button>
              </div>
            </div>

            <div className="max-w-sm bg-white rounded-lg shadow">
              <img
                className="rounded-t-3xl shadow-sm"
                src="/patient.jpg"
                alt=""
              />
              <div className="p-5 text-center">
                <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray ">
                  Patient Login & Register
                </h5>
                <button className="transition ease-linear rounded-full bg-pink text-light py-1 px-4 hover:drop-shadow-xl ">
                  Click Here
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
