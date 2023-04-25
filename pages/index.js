import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from '@/components/navbar'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Head>
        <title>MedBook</title>
        <meta name="description" content="MedBook" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Navbar/>
      {/* hero section */}
      <div className="hero max-width grid grid-cols-5 h-[80vh] rounded-3xl">
        <div className="hero-left bg-texture col-span-3 px-10 rounded-l-3xl flex flex-col justify-center">
          <h1 className='text-5xl font-medium uppercase mb-2'> 
            Get your <br />
            medical history <br />
            stored on blockchain
          </h1>
          <p className='mt-2'>Access it from anywhere and anytime. 
          <br /> Trusted by Government authorities.</p>
        </div>
        <div className="hero-right bg-slate-600 col-span-2">
          <img src="/home.png" alt="MedBook" />
        </div>
      </div>

      {/* login container */}
      <div className="login-container max-width grid grid-cols-3 gap-2">
        <div className="hospital-login bg-slate-500">
          <div className="imagee">Image</div>
          <h1>Hospital Login</h1>
          <button>Login</button>
        </div>
        <div className="doctor-login bg-slate-500">doctor</div>
        <div className="patient-login bg-slate-500">patient</div>
      </div>
      {/* features */}

    </ main>
  )
}
