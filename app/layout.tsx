/* eslint-disable @next/next/no-head-element */
import './globals.css';
import Image from "next/image";

import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

import tree from "../public/images/tree3.jpg"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="fr" className='relative overflow-x-hidden w-screen'>
      <head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className='relative min-h-screen overflow-x-hidden '>
        <Navbar />
        <main className=''>
          <div className='absolute top-0 left-0 w-full h-96'>
            <div className='relative w-full h-full'>
              <Image src={tree} alt="massage" style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                objectPosition: "bottom"
              }} />
            </div>
          </div>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
