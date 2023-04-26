import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
      <div className="max-width grid grid-cols-5 h-[90vh] rounded-3xl relative">
        <div className="hero-left bg-texture col-span-3 px-10 rounded-l-3xl flex flex-col justify-center">
          <h1 className="text-5xl font-medium uppercase mb-2 text-light">
            Get your <br />
            medical history <br />
            stored on blockchain
          </h1>
          <p className="mt-2 text-light">
            Access it from anywhere and anytime.
            <br /> Trusted by Government authorities.
          </p>
        </div>
        <div className="hero-right bg-slate-600 col-span-2 h-[90vh] overflow-hidden rounded-r-3xl">
          <img src="/heroImage.jpg" alt="Hero Image" className="object-cover" />
        </div>

        {/* login container */}
        <div className="max-width absolute top-[90%]">
          <div className="grid grid-cols-3 gap-10 mx-12">
            {/* hospital card */}
            <div className="max-w-sm bg-white rounded-lg shadow overflow-hidden">
              <div className="container overflow-hidden h-[300px] object-cover">
                <img
                  className="rounded-t-3xl shadow-sm object-cover h-full"
                  src="/hospital.jpg"
                  alt=""
                />
              </div>
              <div className="p-5 text-center">
                <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray ">
                  Hospital Login & Register
                </h5>
                <button className="transition ease-linear rounded-full bg-pink text-light py-1 px-4 hover:drop-shadow-xl ">
                  Click Here
                </button>
              </div>
            </div>

            {/* doctor card */}
            <div className="max-w-sm bg-white rounded-lg shadow overflow-hidden h-[65vh]">
              <div className="container h-[300px] overflow-hidden">
                <img
                  className="rounded-t-3xl shadow-sm object-cover"
                  src="/doctor.jpg"
                  alt=""
                />
              </div>
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
              <div className="container h-[300px] overflow-hidden">
                <img
                  className="rounded-t-3xl shadow-sm object-cover"
                  src="/patient.jpg"
                  alt=""
                />
              </div>
              <div className="p-5 text-center">
                <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray ">
                  Patient Login & Register
                </h5>
                <Link href="/loginPage" className="transition ease-linear rounded-full bg-pink text-light py-1 px-4 hover:drop-shadow-xl ">
                  Click Here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* services */}
      <div className="max-width mt-[450px]">
        <h1 className="text-center font-medium text-2xl">Services</h1>
        <div className="grid grid-cols-3 gap-20">

          <div className="max-w-sm overflow-hidden h-[65vh]">
            <div className="container h-[300px] overflow-hidden">
              <img
                className="shadow-sm object-cover"
                src="/doctor.jpg"
                alt=""
              />
            </div>
            <div className="p-5 text-center">
              <h5 className="mb-5 text-xl tracking-tight text-gray ">
                Access from anywhere and anytime
              </h5>
            </div>
          </div>

          <div className="max-w-sm overflow-hidden h-[65vh]">
            <div className="container h-[300px] overflow-hidden">
              <img
                className="shadow-sm object-cover"
                src="/doctor.jpg"
                alt=""
              />
            </div>
            <div className="p-5 text-center">
              <h5 className="mb-5 text-xl tracking-tight text-gray ">
                Decentralized platform for highest safety
              </h5>
            </div>
          </div>

          <div className="max-w-sm overflow-hidden h-[65vh]">
            <div className="container h-[300px] overflow-hidden">
              <img
                className="shadow-sm object-cover"
                src="/doctor.jpg"
                alt=""
              />
            </div>
            <div className="p-5 text-center">
              <h5 className="mb-5 text-xl tracking-tight text-gray ">
                No need to carry your medical reports everywhere
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
      
    </main>
  );
}
