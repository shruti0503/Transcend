// import React from 'react'
// import Sidebar from '@/app/components/global/Sidebar'
// import Header from '@/app/components/global/header'

// const Layout = ({children}) => {
//   return (
//     <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
       
//     <div className="w-full flex-none">
//       <Header />
//       <Sidebar />
//     </div>
//     <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
//   </div>
//   )
// }

// export default Layout


import Header from "../components/global/header";
import Sidebar from "../components/global/Sidebar";
import { Inter } from "next/font/google";
import Main from "../components/global/Main";
import Content from "./home/main";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="flex">
           <Sidebar />
           {children}

        </div>
       
      {/* <Main  Content={Content} /> */}
       
        </body>
    </html>
  );
}
