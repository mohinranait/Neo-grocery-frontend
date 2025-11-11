import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatDistanceToNow } from "date-fns";

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

import { getSingleProduct } from "@/actions/productApi";
import { TProduct } from "@/types/product.type";
import { getAllCategorys } from "@/actions/categoriesApi";
import { getAllBrands } from "@/actions/brandApi";
import { TBrandType } from "@/types/brand.type";
import { TCategoryType } from "@/types/category.type";

import StarRating from "@/components/utils/StarRating";
import { getCommentsByProductId } from "@/actions/commentApi";
import { TProductComment as BaseProductComment } from "@/types/comment.type";
import LeftProductBar from "@/components/pages/product/left-product-bar";
import MiddleProductBar from "@/components/pages/product/middle-product-bar";

type TProductComment = BaseProductComment & {
  userId: {
    name: {
      firstName: string;
      lastName: string;
    };
  };
};

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const { payload } = await getSingleProduct(params?.slug);
  const product: TProduct = payload;
  const productBrandIds = product?.brand;
  const productCategoryIds = product?.category;
  const getAllReviews = await getCommentsByProductId(
    product?._id || "",
    "public"
  );
  const reviews: TProductComment[] = getAllReviews?.payload?.comments || [];
  const avgRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews?.length ||
    0;

  const catRes = await getAllCategorys();
  const brandRes = await getAllBrands();

  const brands: TBrandType[] =
    brandRes?.payload?.filter((brand: TBrandType) =>
      productBrandIds?.includes(brand?._id)
    ) || [];

  const categories: TCategoryType[] =
    catRes?.payload?.filter((cat: TCategoryType) =>
      productCategoryIds?.includes(cat?._id)
    ) || [];

  // calculation for ratings progress bar
  const ratings = [1, 2, 3, 4, 5]
    .map((star) => {
      const totalReviews =
        reviews?.filter((st) => st.rating === star).length || 0;
      return {
        label: star,
        width: reviews?.length > 0 ? (totalReviews / reviews?.length) * 100 : 0,
        reviews: totalReviews,
      };
    })
    ?.reverse();

  // revalidate date function formate
  const formateDateRevalidate = (date: string) => {
    const formate = new Date(date);
    return formatDistanceToNow(formate, { addSuffix: true });
  };

  return (
    <section className=" space-y-4">
      <div className="container  px-2 md:px-0">
        <Breadcrumb className="py-2">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/shop">Product</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{product?.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="container  mb-6 px-2 md:px-0">
        {/* Product display component */}
        <div className=" flex-col flex md:grid md:grid-cols-[420px_auto] lg:flex lg:flex-row xl:grid xl:grid-cols-[500px_auto_300px] 2xl:grid-cols-[500px_auto_300px] gap-4">
          <LeftProductBar product={product} />
          <MiddleProductBar
            product={product}
            avgRating={avgRating}
            totalReview={reviews?.length || 0}
            brands={brands}
            categories={categories}
            withBrandCategory
          />

          <div className="md:col-span-2 xl:col-span-1 w-full">
            <div className=" sticky top-0 xl:w-[310px] ">
              <ul className="bg-gray-100 space-y-6 p-10 lg:p-4 xl:p-6 rounded">
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

      <div className="container grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <Tabs defaultValue="details" className="">
            <TabsList className="w-full h-auto ">
              <TabsTrigger value="details" className="w-full py-2">
                Details
              </TabsTrigger>

              <TabsTrigger value="reviews" className="w-full py-2">
                Reviews
              </TabsTrigger>
            </TabsList>
            <TabsContent value="details">
              <div className="bg-white col-span-2 px-5 py-4">
                <p className="font-semibold text-sm mb-2 text-gray-700">
                  Product details of {product?.name}
                </p>
                {product?.details && (
                  <div
                    className="quill-content"
                    dangerouslySetInnerHTML={{ __html: product?.details }}
                  />
                )}
              </div>
            </TabsContent>

            <TabsContent value="reviews">
              <div className="col-span-2  py-4">
                <div className="bg-white text-sm font-semibold text-gray-700 px-5 py-3 border-b border-gray-100 ">
                  Ratings & Reviews of {product?.name}
                </div>
                <div className="md:grid grid-cols-3 pb-5 gap-5 bg-white py-4 px-5">
                  <div className=" space-y-2 mb-6 lg:mb-0">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold">
                        {avgRating?.toFixed(1) || 0}/
                        <span className="text-2xl">5</span>
                      </span>{" "}
                      <span className="text-white text-nowrap bg-[#FD8C00] text-xs py-1 px-3">
                        {avgRating >= 4
                          ? "Top Rated"
                          : avgRating >= 3
                          ? "Excellent"
                          : avgRating >= 2
                          ? "Good"
                          : "Poor"}
                      </span>{" "}
                    </div>
                    <div className="flex items-center gap-2">
                      {" "}
                      <StarRating value={avgRating} />
                    </div>
                    <p className="text-gray500 text-xs font-medium text-gray-600">
                      {reviews?.length || 0} Ratings
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
                  {reviews?.map((review, index) => (
                    <li className="py-3 px-5" key={index}>
                      <div className="mb-2">
                        <StarRating size={12} value={review?.rating} />
                        <div className="flex justify-between items-center">
                          <p className="flex items-center gap-1 text-sm text-gray-600">
                            <span className="text-gray-800">
                              {review?.userId?.name?.firstName}{" "}
                              {review?.userId?.name?.lastName}
                            </span>
                            <VerifiedIcon className="text-main" size={14} />
                          </p>
                          <p className="text-sm text-gray-500">
                            {formateDateRevalidate(review?.createdAt)}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">
                          {review?.comment}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default ProductPage;
