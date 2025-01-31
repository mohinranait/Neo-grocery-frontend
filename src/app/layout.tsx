import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ReduxProvider from "@/providers/ReduxProvider";
import { Toaster } from "react-hot-toast";
import { getAllCategorys } from "@/actions/categoriesApi";
import { getAllBrands } from "@/actions/brandApi";
import { getAllProducts } from "@/actions/productApi";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Neo grocery frontend",
  description: "Neo grocery super shop frontend",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const catRes = await getAllCategorys();
  const brandRes = await getAllBrands();
  const productRes = await getAllProducts();
  const categories = catRes?.success ? catRes?.payload : [];
  const brands = brandRes?.success ? brandRes?.payload : [];
  const products = productRes?.success ? productRes?.payload?.products : [];
  console.log({ products });

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider
          brands={brands}
          categories={categories}
          products={products}
        >
          {children}
          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
