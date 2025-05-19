import type { Metadata } from "next";
import HeaderComp from "./comps/Header";
import FooterComp from "./comps/Footer";
import "./globals.css";
import { Roboto } from "next/font/google";
import localFont from 'next/font/local';


const roboto = Roboto({
  weight: ['300','400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto', // Define CSS variable
})

// Define local fonts
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans', // Define CSS variable
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono', // Define CSS variable
});


export const metadata: Metadata = {
  title: "Automation Works | Industrial Automation & Software Development",
  description: "Automation Works specializes in industrial automation, software development, and training. We help businesses streamline operations, improve efficiency, and prepare for the future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply font variables to the body */}
      <body className={`flex flex-col items-center ${roboto.variable} ${geistSans.variable} ${geistMono.variable}`} >
        <HeaderComp/>
        {children}
        <FooterComp/>
      </body>
    </html>
  );
}
