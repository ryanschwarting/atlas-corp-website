import { ServiceItems } from "@/components/Blogs";
import Link from "next/link";
import React from "react";

const fetchBlogs = async () => {
  const res = await fetch(
    "https://atlas-cms.atlascorp.io/api/blogs?populate=*&sort[0]=createdAt:desc",
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Page = async () => {
  const data: StrapiResponse<BlogData[]> = await fetchBlogs();

  return (
    <div className="p-10 md:p-5 mx-auto max-w-7xl">
      <h1 className="flex justify-center text-[50px] font-bold p-2">Blogs</h1>
      <div className="flex flex-col gap-3 h-full lg:h-full ">
        <ServiceItems blogs={data.data} />
      </div>
    </div>
  );
};

export default Page;
