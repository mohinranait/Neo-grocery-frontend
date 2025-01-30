import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  BadgeDollarSign,
  Heart,
  Share2,
  ShieldCheck,
  Shuffle,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductViewSlider from "@/components/sliders/ProductViewSlider";
import CardCounter from "@/components/pages/product/CardCounter";

const ProductPage = () => {
  return (
    <section>
      <div className="container px-2 md:px-0">
        <Breadcrumb className="py-2">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="container">
        <div className=" flex-col flex md:grid md:grid-cols-[420px_auto] lg:flex lg:flex-row gap-4">
          <div className="w-full">
            <div className="  md:w-[420px] bg-red-500 ">
              <ProductViewSlider />
            </div>
          </div>
          <div className="space-y-5 flex-grow">
            <div>
              <h1 className="text-3xl font-semibold ">Wine bottle lantern</h1>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  4.95
                </p>
                <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  out of
                </p>
                <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  5
                </p>
              </div>
            </div>
            <hr />

            <p className="text-sm text-gray-600">
              Consequat a scelerisque suspendisse vel et eget eu vitae
              adipiscing nibh scelerisque semper cum adipiscing facilisis
              adipiscing est accumsan lorem vestibulum. Aliquet mus a aptent
              ullam corper metus accumsan. Habitasse a purus nec ipsum a urna ac
              ullamcorper varius metus blandit posuere.
            </p>

            <div>
              <p className="text-sm text-gray-600">
                SKU: <span>SDF-454</span>
              </p>
              <p className="text-sm text-gray-600">
                Stock:{" "}
                <span className="text-green-600 font-semibold">In-stock</span>
              </p>
              <p className="text-sm text-gray-600">
                Type: <span className=" ">Organic</span>
              </p>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-2xl font-semibold text-gray-900">
                $24.00 –
              </span>
              <del className="text-xl font-semibold text-gray-400">$40.00</del>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <CardCounter />
              <Button>Add to cart</Button>
              <Button
                variant={"outline"}
                className="bg-main text-white hover:bg-main hover:text-white te"
              >
                Buy Now
              </Button>
            </div>
            <div className="flex items-center xl:gap-3">
              <Button variant={"link"}>
                <Heart /> Add wishlist
              </Button>
              <Button variant={"link"}>
                <Shuffle /> Add Compare
              </Button>
              <Button variant={"link"} className="ml-auto">
                <Share2 />
              </Button>
            </div>
            <div>
              <p className="text-gray-500 text-sm">
                Brand:
                <Link
                  href={"/"}
                  className="text-gray-500 hover:underline hover:text-gray-700 text-sm"
                >
                  Olempic
                </Link>
              </p>
              <p className="text-gray-500 text-sm">
                Category:
                <Link
                  href={"/"}
                  className="text-gray-500 hover:underline hover:text-gray-700 text-sm"
                >
                  Sniccks
                </Link>
                ,
                <Link
                  href={"/"}
                  className="text-gray-500 hover:underline hover:text-gray-700 text-sm"
                >
                  Sock
                </Link>{" "}
              </p>
            </div>
          </div>
          <div className="md:col-span-2 w-full">
            <div className=" xl:w-[310px] ">
              <ul className="bg-gray-100 space-y-6 p-10 lg:p-4 xl:p-10 rounded">
                <li className="items-center flex  gap-2">
                  <div>
                    <div className="w-7 text-gray-500">
                      <Truck />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">
                    Free Shipping apply to all orders over $100
                  </p>
                </li>
                <li className="items-center flex  gap-2">
                  <div>
                    <div className="w-7 text-gray-500">
                      <ShieldCheck />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">
                    Free Shipping apply to all orders over $100
                  </p>
                </li>
                <li className="items-center flex  gap-2">
                  <div>
                    <div className="w-7 text-gray-500">
                      <BadgeDollarSign />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">
                    1 Day Returns if you change your mind
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
