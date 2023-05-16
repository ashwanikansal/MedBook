import Head from 'next/head';
import Image from 'next/image';
import medbookLogo from '../public/logo.svg';
import Button from '@/components/button';

function About() {
  return (
    <>
      <Head>
        <title>About Us | MedBook</title>
        <meta name="description" content="MedBook is a secure and decentralized electronic medical health records storage service using blockchain." />
      </Head>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="w-80 md:w-96 mx-auto flex justify-center">
          <Image src={medbookLogo} alt="MedBook logo" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mt-8 text-center">About Us</h1>
        <p className="text-gray text-lg md:text-xl font-medium mt-4 max-w-lg text-center">
          MedBook is a secure and decentralized electronic medical health records storage service using blockchain. We are committed to providing our users with a safe and efficient way to store and access their medical records.
        </p>
        <div className="my-8 text-gray text-lg md:text-xl max-w-lg text-center">
          <p>
            Made with ❤️ By Ashwani Kansal, Muskan & Deeptika.
          </p>
        </div>
      <Button name="Go Back" link="/" />
      </div>
    </>
  );
}

export default About;
