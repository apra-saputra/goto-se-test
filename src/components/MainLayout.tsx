import React, { Suspense } from "react";
import Navbar from "./navbar/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./footer/Footer";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const router = useRouter();
  const pathname = router.pathname.split("/");
  return (
    <>
      <Head>
        <title>MY ANIME | {pathname[1].toUpperCase()}</title>
        <meta name="description" content={pathname[1]} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ minHeight: "88dvh" }}>
        <Navbar />
        <main style={{ marginTop: "6rem", width: "100%" }}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
