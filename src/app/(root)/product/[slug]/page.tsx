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
  ShieldCheck,
  Truck,
  VerifiedIcon,
} from "lucide-react";
import Link from "next/link";

import ProductViewSlider from "@/components/sliders/ProductViewSlider";
import { getSingleProductBySlug } from "@/actions/productApi";
import { TProduct } from "@/types/product.type";
import { getAllCategorys } from "@/actions/categoriesApi";
import { getAllBrands } from "@/actions/brandApi";
import { TBrandType } from "@/types/brand.type";
import { TCategoryType } from "@/types/category.type";
import ActionsButton from "@/components/pages/product/ActionsButton";

import StarRating from "@/components/utils/StarRating";

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const { payload } = await getSingleProductBySlug(params?.slug);
  const product: TProduct = payload;
  const productBrandIds = product?.brand;
  const productCategoryIds = product?.category;

  const catRes = await getAllCategorys();
  const brandRes = await getAllBrands();

  const brands: TBrandType[] =
    brandRes?.payload?.filter((brand: TBrandType) =>
      productBrandIds?.includes(brand?._id)
    ) || [];

  const categories =
    catRes?.payload?.filter((cat: TCategoryType) =>
      productCategoryIds?.includes(cat?._id)
    ) || [];

  const ratings = [
    { _id: 1, label: 5, width: 80, reviews: 140 },
    { _id: 2, label: 4, width: 45, reviews: 54 },
    { _id: 3, label: 3, width: 40, reviews: 4 },
    { _id: 4, label: 2, width: 45, reviews: 5 },
    { _id: 5, label: 1, width: 10, reviews: 9 },
  ];

  return (
    <section className="">
      <div className="container  px-2 md:px-0">
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

      <div className="container mb-6 px-2 md:px-0">
        {/* Product display component */}
        {/* <DisplayProduct /> */}
        <div className=" flex-col flex md:grid md:grid-cols-[420px_auto] lg:flex lg:flex-row xl:grid xl:grid-cols-[420px_auto_300px] gap-4">
          <div className="w-full">
            <div className="  md:w-[400px] ">
              <ProductViewSlider product={product} />
            </div>
          </div>
          <div className="space-y-5 flex-grow">
            <div>
              <h1 className="text-3xl font-semibold ">{product?.name}</h1>
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
              adipiscing.
            </p>

            <div>
              {product?.skuCode && (
                <p className="text-sm text-gray-600">
                  SKU: <span>{product?.skuCode}</span>
                </p>
              )}
              <p className="text-sm text-gray-600">
                Stock:{" "}
                {product?.isStock > 0 ? (
                  <span className="text-green-600 font-semibold">In-stock</span>
                ) : (
                  <span className="text-red-600 font-semibold"> Out-stock</span>
                )}
              </p>
              <p className="text-sm text-gray-600">
                Type: <span className=" ">Organic</span>
              </p>
            </div>
            <ActionsButton product={product} />
            <div>
              {brands?.length > 0 && (
                <p className="text-gray-500 text-sm">
                  Brand:
                  {brands?.map((brand, index) => (
                    <Link
                      key={index}
                      href={`/brand/${brand?.slug}`}
                      className="text-gray-500 hover:underline hover:text-gray-700 text-sm"
                    >
                      {brand?.name},
                    </Link>
                  ))}
                </p>
              )}

              {categories?.length > 0 && (
                <p className="text-gray-500 text-sm">
                  Category:
                  {categories?.map((cat: TCategoryType, index: number) => (
                    <Link
                      key={index}
                      href={`/brand/${cat?.slug}`}
                      className="text-gray-500 hover:underline hover:text-gray-700 text-sm"
                    >
                      {cat?.name},
                    </Link>
                  ))}
                </p>
              )}
            </div>
          </div>
          <div className="md:col-span-2 xl:col-span-1 w-full">
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

      {product?.details && (
        <div className="container mb-6 lg:grid grid-cols-3 px-2 md:px-0">
          <div className="bg-white col-span-2 px-5 py-4">
            <p className="font-semibold text-sm mb-2 text-gray-700">
              Product details of {product?.name}
            </p>
            <div
              className="quill-content"
              dangerouslySetInnerHTML={{ __html: product?.details }}
            />
          </div>
        </div>
      )}

      <div className="container lg:grid grid-cols-3 mb-6 px-2 md:px-0">
        <div className="col-span-2  py-4">
          <div className="bg-white text-sm font-semibold text-gray-700 px-5 py-3 border-b border-gray-100 ">
            Ratings & Reviews of Running Shoes Sneakers Casual Mens Outdoor
          </div>
          <div className="md:grid grid-cols-3 pb-5 gap-5 bg-white py-4 px-5">
            <div className=" space-y-2 mb-6 lg:mb-0">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold">
                  {product?.rating?.toFixed(1) || 0}/
                  <span className="text-2xl">5</span>
                </span>{" "}
                <span className="text-white text-nowrap bg-[#FD8C00] text-xs py-1 px-3">
                  {" "}
                  Top Rated
                </span>{" "}
              </div>
              <div className="flex items-center gap-2">
                {" "}
                <StarRating value={3.5} />
              </div>
              <p className="text-gray500 text-xs font-medium text-gray-600">
                {product?.reviews || 0} Ratings
              </p>
            </div>
            <div className="col-span-2">
              <ul className="space-y-1">
                {ratings?.map((star, i) => (
                  <li key={i} className="flex gap-5 items-center">
                    <div className=" gap-2 w-[100px] ">
                      <StarRating value={5 - i} />
                    </div>

                    <span className="w-[120px] sm:w-[200px] h-2  bg-[#E5E5E5] inline-block relative">
                      <span
                        className="bg-[#FD8C00] absolute left-0 top-0 inline-block h-2"
                        style={{ width: `${star?.width}%` }}
                      ></span>
                    </span>
                    <span className="text-sm text-gray-700">
                      {star?.reviews}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white text-sm text-gray-700 px-5 py-3 border-y border-gray-100 ">
            Product Reviews
          </div>
          <ul className="bg-white divide-y divide-gray-100">
            <li className="py-3 px-5">
              <div className="mb-2">
                <StarRating size={12} value={5} />
                <div className="flex justify-between items-center">
                  <p className="flex items-center gap-1 text-sm text-gray-600">
                    <span className="text-gray-800">Mohin Rana</span>
                    <VerifiedIcon className="text-main" size={14} />
                  </p>
                  <p className="text-sm text-gray-500">1 Week ago</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Received another shoe, not that what I had ordered. Also,
                  Received with torn right shoe.Agreed, pricen is very low but
                  should have been given without defective products...BIG
                  DISAPPOINTING ...to the sellers and Daraz Team
                </p>
              </div>
            </li>
            <li className="py-3 px-5">
              <div className="mb-2">
                <StarRating size={12} value={5} />
                <div className="flex justify-between items-center">
                  <p className="flex items-center gap-1 text-sm text-gray-600">
                    <span className="text-gray-800">Mohin Rana</span>
                    <VerifiedIcon className="text-main" size={14} />
                  </p>
                  <p className="text-sm text-gray-500">1 Week ago</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Received another shoe, not that what I had ordered. Also,
                  Received with torn right shoe.Agreed, pricen is very low but
                  should have been given without defective products...BIG
                  DISAPPOINTING ...to the sellers and Daraz Team
                </p>
              </div>
            </li>
            <li className="py-3 px-5">
              <div className="mb-2">
                <StarRating size={12} value={5} />
                <div className="flex justify-between items-center">
                  <p className="flex items-center gap-1 text-sm text-gray-600">
                    <span className="text-gray-800">Mohin Rana</span>
                    <VerifiedIcon className="text-main" size={14} />
                  </p>
                  <p className="text-sm text-gray-500">1 Week ago</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Received another shoe, not that what I had ordered. Also,
                  Received with torn right shoe.Agreed, pricen is very low but
                  should have been given without defective products...BIG
                  DISAPPOINTING ...to the sellers and Daraz Team
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
