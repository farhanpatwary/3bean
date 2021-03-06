import type { NextPage } from "next";
import Head from "next/head";
import { AuthPanel } from "../components/auth-panel/auth-panel.component";
import Image from "next/image";
import SplashImage from "../public/assets/splash/splash-image.jpg";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>3bean</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1">
          <div className="h-screen flex justify-center items-center flex-col bg-gray-50">
            <AuthPanel />
          </div>
          <div className="h-screen w-full overflow-hidden lg:block hidden splash-gradient-1 opacity-95"></div>
        </div>
      </main>
    </div>
  );
};

export default Home;
