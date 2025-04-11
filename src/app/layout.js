import {  Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: "PYs Portfolio",
  description: "More about me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body  >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
