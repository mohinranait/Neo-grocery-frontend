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
  Check,
  CircleX,
  Heart,
  Share2,
  ShieldCheck,
  Star,
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
import { Badge } from "@/components/ui/badge";
import ProductGrid from "@/components/pages/product/product-grid";
import { getCommentsByProductId } from "@/actions/commentApi";
import { TProductComment as BaseProductComment } from "@/types/comment.type";
import { Button } from "@/components/ui/button";

type TProductComment = BaseProductComment & {
  userId: {
    name: {
      firstName: string;
      lastName: string;
    };
  };
};

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const { payload } = await getSingleProductBySlug(params?.slug);
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

  const categories =
    catRes?.payload?.filter((cat: TCategoryType) =>
      productCategoryIds?.includes(cat?._id)
    ) || [];

  // const ratings = [
  //   { _id: 1, label: 5, width: 80, reviews: 140 },
  //   { _id: 2, label: 4, width: 45, reviews: 54 },
  //   { _id: 3, label: 3, width: 40, reviews: 4 },
  //   { _id: 4, label: 2, width: 45, reviews: 5 },
  //   { _id: 5, label: 1, width: 10, reviews: 9 },
  // ];

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

  console.log(JSON.stringify(reviews));

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
        {/* <DisplayProduct /> */}
        <div className=" flex-col flex md:grid md:grid-cols-[420px_auto] lg:flex lg:flex-row xl:grid xl:grid-cols-[500px_auto_300px] 2xl:grid-cols-[700px_auto_300px] gap-4">
          <div className="w-full ">
            <div className=" sticky top-0 md:w-[400px] xl:w-[500px] 2xl:w-[700px] ">
              <ProductViewSlider product={product} />
            </div>
          </div>
          <div className="space-y-4 flex-grow">
            <div>
              {/* Header */}
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center gap-3 flex-wrap">
                      <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                        Organic
                      </Badge>
                      <div className="flex gap-2 items-center">
                        <Button
                          variant="link"
                          className="text-gray-600 h-auto py-1 px-1"
                        >
                          <Heart className="w-4 h-4 mr-1" />
                        </Button>
                        <Button
                          variant="link"
                          className="text-gray-600 h-auto py-1 px-1"
                        >
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                      {product?.name}
                    </h1>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(avgRating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-base font-semibold text-gray-900">
                    {avgRating || 0}/5
                  </span>
                  <span className="text-gray-500 text-base">
                    ({reviews?.length || 0} reviews)
                  </span>
                </div>

                {/* Description */}
                {product?.productShortDesc && (
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {product?.productShortDesc}
                  </p>
                )}
              </div>

              {/* Product Info */}
            </div>
            <div className="flex flex-wrap  gap-4 text-sm">
              {product?.skuCode && (
                <div>
                  <span className="text-gray-500">SKU:</span>
                  <span className="ml-2 font-medium text-gray-900">
                    {product?.skuCode}
                  </span>
                </div>
              )}

              <div className="flex items-center gap-2">
                <span className="text-gray-500">Stock:</span>
                {product?.isStock > 0 ? (
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
                    <Check className="w-3 h-3 mr-1" />
                    In Stock
                  </Badge>
                ) : (
                  <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
                    <CircleX className="w-3 h-3 mr-1" />
                    In Stock
                  </Badge>
                )}
              </div>
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
              <TabsTrigger value="attributes" className="w-full py-2">
                Attribue
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
            <TabsContent value="attributes">
              Change your password here.
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

      <div className="container">
        <p className="text-xl text-black font-semibold mb-2">Relted Products</p>
        <ProductGrid />
      </div>
    </section>
  );
};

export default ProductPage;
