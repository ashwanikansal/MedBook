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
      <div className="hero max-width grid grid-cols-2 h-[80vh] rounded-2xl overflow-hidden">
        <div className="hero-left bg-slate-400">
          <h1 className='pt-4 text-5xl font-medium'> 
            Get your medical history 
            stored on blockchain with us 
          </h1>
          <p>Access it from anywhere and anytime. Trusted by Government authorities</p>
        </div>
        <div className="hero-right bg-slate-600">Image</div>
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
