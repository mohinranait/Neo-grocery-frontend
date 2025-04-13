import BannerSection from "@/components/pages/home/BannerSection";
import ProductSection from "@/components/pages/home/ProductSection";
import { Banknote, CarTaxiFront, Headphones, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <main>
      {/* Banner section */}
      <BannerSection />

      <section className="py-10">
        <div className="xl:w-[1000px]  grid grid-cols-1 res5:grid-cols-2  md:grid-cols-4 gap-3 mx-auto">
          <div className="flex flex-col gap-2 justify-center items-center">
            <CarTaxiFront size={36} className="text-main" />
            <p className="text-center font-semibold text-gray-800 ">
              Free Shipping
            </p>
            <p className="text-center text-xs text-gray-500 ">
              1500 BDT order and get free delivery
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Headphones size={36} className="text-main" />
            <p className="text-center font-semibold text-gray-800 ">
              27/7 Hours
            </p>
            <p className="text-center text-xs text-gray-500 ">
              Allows support for your order and quick response
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Banknote size={36} className="text-main" />
            <p className="text-center font-semibold text-gray-800 ">
              100% Money Back
            </p>
            <p className="text-center text-xs text-gray-500 ">
              If your order reject, Return cash.
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <ShieldCheck size={36} className="text-main" />
            <p className="text-center font-semibold text-gray-800 ">
              Secure payment
            </p>
            <p className="text-center text-xs text-gray-500 ">
              All transaction will be secure
            </p>
          </div>
        </div>
      </section>

      {/* Features Display section */}
      <section>
        <div className="container px-2 lg:px-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="h-[140px] lg:h-auto bg-red-300  relative lg:row-span-2">
              <div>
                <Image
                  className=" h-[140px] lg:h-[300px] w-full object-cover"
                  src={"/1.jpg"}
                  width={400}
                  height={200}
                  alt="Image"
                />
              </div>
              <div className="absolute top-0 z-10 left-0 w-full h-full bg-black bg-opacity-55"></div>
              <div className="w-full h-full z-20 relative  p-5 -mt-[140px] lg:-mt-[300px] flex flex-col justify-center  ">
                <p className="text-3xl font-semibold text-white">
                  Fresh Choocolte
                </p>
                <p className="text-base font-normal text-gray-100">
                  Frd justd jalign monntetr nested frouts
                </p>
                <div className="mt-3">
                  <Link
                    href={"/"}
                    className="text-white  bg-main px-3 py-2 rounded inline-block text-sm font-medium"
                  >
                    Details new
                  </Link>
                </div>
              </div>
            </div>
            <div className="h-[140px] bg-green-300 relative ">
              <div>
                <Image
                  className="h-[140px] w-full object-cover"
                  src={"/2.jpg"}
                  width={400}
                  height={200}
                  alt="Image"
                />
              </div>

              <div className="absolute top-0 z-10 left-0 w-full h-full bg-black bg-opacity-55"></div>
              <div className="w-full z-20 relative h-full p-5 -mt-[140px] flex flex-col justify-center ">
                <p className="text-3xl font-semibold text-white">
                  Fresh Choocolte
                </p>

                <div className="mt-3">
                  <Link
                    href={"/"}
                    className="text-white  bg-main px-3 py-2 rounded inline-block text-sm font-medium"
                  >
                    Details new
                  </Link>
                </div>
              </div>
            </div>
            <div className="h-[140px] lg:h-auto bg-yellow-300 relative lg:row-span-2">
              <div>
                <Image
                  className="h-[140px] lg:h-[300px] w-full object-cover"
                  src={"/3.jpg"}
                  width={400}
                  height={200}
                  alt="Image"
                />
              </div>
              <div className="absolute top-0 z-10 left-0 w-full h-full bg-black bg-opacity-55"></div>
              <div className="w-full  z-20 relative h-full p-5 -mt-[140px] lg:-mt-[300px] flex flex-col justify-center ">
                <p className="text-3xl font-semibold text-white">
                  Fresh Choocolte
                </p>
                <p className="text-base font-normal text-gray-100">
                  Frd justd jalign monntetr nested frouts
                </p>
                <div className="mt-3">
                  <Link
                    href={"/"}
                    className="text-white  bg-main px-3 py-2 rounded inline-block text-sm font-medium"
                  >
                    Details new
                  </Link>
                </div>
              </div>
            </div>
            <div className="h-[140px] bg-blue-300 relative ">
              <div>
                <Image
                  className="h-[140px] w-full object-cover"
                  src={"/4.jpg"}
                  width={400}
                  height={200}
                  alt="Image"
                />
              </div>
              <div className="absolute top-0 z-10 left-0 w-full h-full bg-black bg-opacity-55"></div>
              <div className="w-full z-20 relative h-full p-5 -mt-[140px] flex flex-col justify-center ">
                <p className="text-3xl font-semibold text-white">
                  Fresh Choocolte
                </p>

                <div className="mt-3">
                  <Link
                    href={"/"}
                    className="text-white  bg-main px-3 py-2 rounded inline-block text-sm font-medium"
                  >
                    Details new
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categoriys section */}
      {/* <section className="pt-10">
        <div className="container mx-auto bg-green-100 rounded">
          <div className="xl:w-[1000px] py-4 mx-auto">
            <p className=" text-xl font-semibold text-center">Categories</p>
            <div className="flex gap-5 items-center justify-center">
              <div>
                <div className="w-[100px] mx-auto h-[100px] rounded-full">
                  <Image
                    src={"/product-image-45-346x310.jpg"}
                    width={100}
                    height={100}
                    alt="cate"
                    className="w-[100px] mx-auto h-[100px] rounded-full"
                  />
                </div>
                <p className="text-center text-main mt-3">Mate</p>
              </div>
              <div>
                <div className="w-[100px] mx-auto h-[100px] rounded-full">
                  <Image
                    src={"/product-image-45-346x310.jpg"}
                    width={100}
                    height={100}
                    alt="cate"
                    className="w-[100px] mx-auto h-[100px] rounded-full"
                  />
                </div>
                <p className="text-center text-main mt-3">Mate</p>
              </div>
              <div>
                <div className="w-[100px] mx-auto h-[100px] rounded-full">
                  <Image
                    src={"/product-image-45-346x310.jpg"}
                    width={100}
                    height={100}
                    alt="cate"
                    className="w-[100px] mx-auto h-[100px] rounded-full"
                  />
                </div>
                <p className="text-center text-main mt-3">Mate</p>
              </div>
              <div>
                <div className="w-[100px] mx-auto h-[100px] rounded-full">
                  <Image
                    src={"/product-image-45-346x310.jpg"}
                    width={100}
                    height={100}
                    alt="cate"
                    className="w-[100px] mx-auto h-[100px] rounded-full"
                  />
                </div>
                <p className="text-center text-main mt-3">Mate</p>
              </div>
              <div>
                <div className="w-[100px] mx-auto h-[100px] rounded-full">
                  <Image
                    src={"/product-image-45-346x310.jpg"}
                    width={100}
                    height={100}
                    alt="cate"
                    className="w-[100px] mx-auto h-[100px] rounded-full"
                  />
                </div>
                <p className="text-center text-main mt-3">Mate</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Product Section */}
      <ProductSection />

      {/* Features Section */}
      <section className="mb-10">
        <div className="container mt-10 lg:mt-0">
          <div className="grid lg:grid-cols-2 gap-6">
            <div
              className="relative group w-full h-[200px] bg-white p-4"
              style={{
                backgroundImage: `url('/intro.jpg')`,
                backgroundPosition: "right",
                backgroundSize: "cover",
              }}
            >
              <div className="absolute w-full h-full flex items-center  pl-10 top-2/4 left-0 -translate-y-2/4">
                <div className="relative ">
                  <p className="text-xl z-30 text-text-color mb-1 font-semibold">
                    Tomato
                  </p>
                  <p className="text-sm z-30 text-gray-600 font-medium mb-2">
                    Optionals Skins
                  </p>
                  <div>
                    <Link
                      href={"/"}
                      className="text-primary text-sm font-semibold"
                    >
                      Details new
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="relative h-[200px] group w-full bg-white p-4"
              style={{
                backgroundImage: `url('/intro2.jpg')`,
                backgroundPosition: "right",
                backgroundSize: "cover",
              }}
            >
              <div className="absolute w-full h-full flex items-center  pl-10 top-2/4 left-0 -translate-y-2/4">
                <div className="relative ">
                  <p className="text-xl z-30 text-text-color mb-1 font-semibold">
                    Tomato
                  </p>
                  <p className="text-sm z-30 text-gray-600 font-medium mb-2">
                    Optionals Skins
                  </p>
                  <div>
                    <Link
                      href={"/"}
                      className="text-primary text-sm font-semibold"
                    >
                      Details new
                    </Link>
                  </div>
                </div>
              </div>
              {/* <Image
                className="w-full"
                src="/intro.jpg"
                alt="avater"
                width={300}
                height={200}
              /> */}
            </div>
          </div>
        </div>
      </section>

      <ProductSection />
    </main>
  );
};

export default HomePage;
