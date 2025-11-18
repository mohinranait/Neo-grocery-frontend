"use client";

import ProductCard from "@/components/shared/ProductCard";
import { TProduct } from "@/types/product.type";
import React from "react";
import FilterCharecter from "./FilterCharecter";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  products: TProduct[];
  total: number;
  page?: number;
  limit?: number;
};

const ShopProducts = ({ products, total, page = 1, limit = 20 }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const totalPages = Math.ceil(total / limit);

  // Generate page numbers (show max 5)
  const getPageNumbers = () => {
    const pages = [];
    const start = Math.max(page - 2, 1);
    const end = Math.min(start + 4, totalPages);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  // Handle page click (client-side navigation)
  const handlePageClick = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    params.set("limit", limit.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex-grow space-y-4">
      {/* Filter & Result Count */}
      <div className="py-3 bg-white px-3 flex items-center justify-between rounded shadow">
        <p className="text-gray-600 text-sm">
          Showing {products?.length} of {total} results
        </p>
        <div className="flex">
          <FilterCharecter />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3">
        {products?.length === 0 && (
          <div className="text-center text-gray-600 text-sm col-span-5 py-4">
            Product not found for your request
          </div>
        )}
        {products?.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>

      {/* Pagination UI */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageClick(Math.max(page - 1, 1));
                  }}
                />
              </PaginationItem>

              {getPageNumbers().map((num) => (
                <PaginationItem key={num}>
                  <PaginationLink
                    href="#"
                    isActive={num === page}
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageClick(num);
                    }}
                  >
                    {num}
                  </PaginationLink>
                </PaginationItem>
              ))}

              {totalPages > 5 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageClick(Math.min(page + 1, totalPages));
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default ShopProducts;
