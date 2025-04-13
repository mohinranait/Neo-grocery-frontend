"use client";

import { useAppSelector } from "@/hooks/useRedux";
import { ChevronRight, Cookie } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type TBuildTree = {
  _id: string;
  name: string;
  parent: string;
};

export type TTreeNode = TBuildTree & {
  children?: TBuildTree[];
  createdAt?: string;
};

function buildTree(items: TBuildTree[]): TTreeNode[] {
  const map = new Map();
  items?.forEach((item) => {
    map.set(item?._id, { ...item, children: [] });
  });

  const result: TTreeNode[] = [];

  items?.forEach((item) => {
    if (item.parent) {
      const parent = map.get(item.parent);
      if (parent) {
        parent?.children.push(map.get(item._id));
      }
    } else {
      result.push(map.get(item._id));
    }
  });

  return result;
}

const HeaderBrowsCategory = () => {
  // Redux State
  const { categories } = useAppSelector((state) => state.category);

  const [showCategories, setShowCategories] = useState<TTreeNode[]>([]);

  useEffect(() => {
    const formate = categories?.map((d) => ({
      _id: d?._id,
      name: d.name,
      parent: d.parent,
    }));

    const categoryFormateForTree = buildTree(formate as TBuildTree[]);

    setShowCategories(categoryFormateForTree);
  }, [categories]);

  return (
    <ul className="relative z-[999] bg-white max-h-[400px] ">
      {showCategories?.map((category: TTreeNode, index) => (
        <li key={index} className="group/category">
          <Link
            href={`/shop?cat=${category?._id}`}
            className="inline-flex text-primary hover:text-main w-full px-4 py-2 justify-between items-center"
          >
            <span className="inline-flex gap-1 items-center">
              <Cookie size={14} />

              <span className="text-sm">{category?.name}</span>
            </span>

            {category?.children && category?.children?.length > 0 && (
              <ChevronRight size={16} className="text-gray-600" />
            )}
          </Link>
          {category?.children && category?.children?.length > 0 && (
            <ul className="w-[250px]  h-full border border-border border-l-0 border-t-0 group-hover/category:block hidden absolute top-0 z-10 bg-white left-[279px]">
              {category?.children?.map((subCat: TTreeNode, index) => (
                <li key={index} className="group/subcategory">
                  <Link
                    href={`/shop?cat=${subCat?._id}`}
                    className="inline-flex text-primary hover:text-main w-full px-4 py-2 justify-between items-center"
                  >
                    <span className="inline-flex gap-1 items-center">
                      {/* <Cookie size={14} /> */}
                      🍯
                      <span className="text-sm">{subCat?.name}</span>
                    </span>
                    {subCat?.children && subCat?.children?.length > 0 && (
                      <ChevronRight size={16} className="text-gray-600" />
                    )}
                  </Link>

                  {subCat?.children && subCat?.children?.length > 0 && (
                    <ul className="w-[250px] h-full border border-border border-l-0 border-t-0 group-hover/subcategory:block hidden absolute top-0 z-10 bg-white left-[250px]">
                      {subCat?.children?.map((subSubCat: TTreeNode, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            className="inline-flex  text-primary hover:text-main w-full px-4 py-2 justify-between items-center"
                          >
                            <span className="inline-flex gap-1 items-center">
                              🍯
                              <span className="text-sm">{subSubCat?.name}</span>
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default HeaderBrowsCategory;
