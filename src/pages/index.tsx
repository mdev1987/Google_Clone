import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import { MagnifyingGlassIcon, MicrophoneIcon } from '@heroicons/react/20/solid';
import google from '../../public/assets/images/google.png'
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="clone google" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Body */}
      <form className="flex flex-col items-center mt-20" >
        <Image src={google}
          alt="google"
          draggable={false}
          className="object-cover"
          placeholder={"blur"}
          width={300} height={100} />
        <div className="flex w-full mt-5 mx-auto 
          max-w-[90%] border border-gray-200
          hover:shadow-lg focus-within:shadow-lg
          px-5 py-3 rounded-full items-center 
          sm:max-w-xl lg:max-w-2xl">
          <MagnifyingGlassIcon className="h-5 text-gray-500 mr-3" />
          <input type="text" className="flex-grow focus:outline-none" />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
          <button className="btn">Google Search</button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>
      {/* Footer */}
      <Footer />
    </div>
  )
}
