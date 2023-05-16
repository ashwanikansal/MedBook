import Button from "@/components/button";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
      <div className="max-width md:grid md:grid-cols-5 md:h-[calc(100vh-72px)] rounded-3xl md:relative">
        <div className="h-[calc(100vh-100px)] md:h-full bg-texture md:col-span-3 px-10 rounded-2xl md:rounded-l-3xl md:rounded-r-none flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium uppercase mb-2 text-light">
            Get your <br />
            medical history <br />
            stored on blockchain
          </h1>
          <p className="mt-2 text-light">
            Access it from anywhere and anytime.
            <br /> Trusted by Government authorities.
          </p>
        </div>
        <div className="hidden md:block md:col-span-2 h-[100vh-72px] overflow-hidden rounded-r-3xl">
          <img src="/heroImage.jpg" alt="Hero Image" className="object-cover h-full w-full" />
        </div>

        {/* login container */}
        <div id="login-container" className="max-width md:absolute md:top-[90%]">
          <div className="md:grid md:grid-cols-3 md:gap-5 md:mx-6">
            {/* hospital card */}
            <div className="mx-auto h-auto my-10 md:m-0 max-w-sm bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="overflow-hidden h-[200px] md:h-[250px] lg:h-[300px]">
                <img
                  className="rounded-t-2xl shadow-sm object-cover h-full w-full border-b border-pink"
                  src="/hospital.jpg"
                  alt=""
                />
              </div>
              <div className="p-5 flex justify-center flex-col items-center bg-pink-light">
                <h5 className="mb-5 text-xl font-medium text-dark">
                  Hospital Login
                </h5>
                <Button name="Click here" link="/loginPage"/>
              </div>
            </div>

            {/* doctor card */}
            <div className="mx-auto h-auto my-10 md:m-0 max-w-sm bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="overflow-hidden h-[200px] md:h-[250px] lg:h-[300px]">
                <img
                  className="rounded-t-2xl shadow-sm object-cover h-full w-full border-b border-pink"
                  src="/doctor.jpg"
                  alt=""
                />
              </div>
              <div className="p-5 flex justify-center flex-col items-center bg-pink-light">
                <h5 className="mb-5 text-xl font-medium text-dark">
                  Doctor Login
                </h5>
                <Button name="Click here" link="/doctorDashboard"/>
              </div>
            </div>

            {/* patient card */}
            <div className="mx-auto h-auto my-10 md:m-0 max-w-sm bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="overflow-hidden h-[200px] md:h-[250px] lg:h-[300px]">
                <img
                  className="rounded-t-2xl shadow-sm object-cover h-full w-full border-b border-pink"
                  src="/patient.jpg"
                  alt=""
                />
              </div>
              <div className="p-5 flex justify-center flex-col items-center bg-pink-light">
                <h5 className="mb-5 text-xl font-medium text-dark">
                  Patient Login & register
                </h5>
                <Button name="Click here" link="/loginPage"/>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* services */}
      <div id="services" className="max-width md:mt-[430px]">
        <h1 className="text-center font-medium text-2xl mb-10">Services</h1>
        <div className="md:grid md:grid-cols-3 md:gap-20">

          <div className="max-w-sm m-auto md:m-0 overflow-hidden">
            <div className="container h-[250px] md:h-[300px] md:p-3 lg:p-10 p-10 overflow-hidden">
              <img
                className="h-full w-full"
                src="/anywhere.svg"
                alt=""
              />
            </div>
            <div className="p-5 text-center">
              <h5 className="mb-1 md:mb-5 text-xl tracking-tight text-gray ">
                Access from anywhere and anytime
              </h5>
            </div>
          </div>

          <div className="max-w-sm m-auto md:m-0 overflow-hidden">
          <div className="container h-[250px] md:h-[300px] md:p-3 lg:p-10 p-10 overflow-hidden">
              <img
                className="h-full w-full"
                src="/decentralized.svg"
                alt=""
              />
            </div>
            <div className="p-5 text-center">
              <h5 className="mb-1 md:mb-5 text-xl tracking-tight text-gray ">
                Decentralized platform for highest safety
              </h5>
            </div>
          </div>

          <div className="max-w-sm m-auto md:m-0 overflow-hidden">
          <div className="container h-[250px] md:h-[300px] md:p-3 lg:p-10 p-10 overflow-hidden">
              <img
                className="w-full h-full"
                src="/no_carry.svg"
                alt=""
              />
            </div>
            <div className="p-5 text-center">
              <h5 className="mb-1 md:mb-5 text-xl tracking-tight text-gray ">
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
