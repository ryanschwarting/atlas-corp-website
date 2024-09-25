import { redirect } from "next/navigation";
import Markdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const fetchBlogs = async (params: string) => {
  const res = await fetch(
    `https://atlas-cms.atlascorp.io/api/blogs?filters[Title][$eq]=${params}&populate=*&sort[0]=createdAt:desc`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Page = async ({ params }: { params: { blog: string } }) => {
  const data: StrapiResponse<BlogData[]> = await fetchBlogs(params.blog);

  if (!data.data.length) {
    redirect("/blogs");
  }

  console.log(data.data);

  const imageUrl = data.data[0].attributes.thumbnail.data?.attributes.url
    ? `https://atlas-cms.atlascorp.io${data.data[0].attributes.thumbnail.data?.attributes.url}`
    : "/atlas-logo.png";

  const formatDateToEasternTime = (timestamp: string) => {
    // Create a new date object from the timestamp string
    const date = new Date(timestamp);

    // Format the date to Eastern Time (ET) using toLocaleString
    const options: any = {
      timeZone: "America/New_York",
      year: "numeric",
      month: "short",
      day: "2-digit",
    };
    const formattedDate = date.toLocaleString("en-US", options);

    // const timeOptions: any = {
    //   timeZone: "America/New_York",
    //   hour: "2-digit",
    //   minute: "2-digit",
    //   hour12: true,
    // };
    // const formattedTime = date.toLocaleString("en-US", timeOptions);

    return `${formattedDate}`;
  };

  const timestamp = data.data[0].attributes.createdAt;
  const formattedTimestamp = formatDateToEasternTime(timestamp);

  return (
    <div className="mx-auto max-w-4xl bg-white p-5 md:p-2 lg:p-0 mb-5">
      {/* Back Button */}
      <Link href={"/blogs"}>
        <button className="flex items-center gap-1 font-medium text-[18px] transform hover:scale-105 transition-transform duration-500 ease-in-out">
          <AiOutlineArrowLeft /> Blogs
        </button>
      </Link>

      <h1 className="text-center text-4xl font-bold p-3">
        {decodeURIComponent(params.blog)}
      </h1>

      {/* Thumbnail Image */}
      <div className="flex justify-center py-2 items-center">
        <Image
          src={imageUrl}
          alt="Thumbnail"
          width={800}
          height={400}
          className="rounded-xl w-[800px] h-[400px] object-cover"
        />
      </div>
      <div className="flex justify-center gap-8 items-center pt-4 pb-8">
        <p className="text-black font-light text-[18px] mr-5">
          {formattedTimestamp}
        </p>
        {/* Twitter Link */}
        <a
          href="https://x.com/AtlasCorp_dcl"
          target="_blank"
          rel="noopener noreferrer"
          className="transform hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          <RiTwitterXFill size={22} />
        </a>
        {/* LinkedIn Link */}
        <a
          href="https://www.linkedin.com/company/atlas-c-o-r-p/"
          target="_blank"
          rel="noopener noreferrer"
          className="transform hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          <FaLinkedinIn size={22} />
        </a>
      </div>
      {/* Overlaying Content */}
      <div className="w-full h-full rounded-2xl md:px-2">
        <div className="flex flex-col py-3">
          <Markdown
            remarkPlugins={[gfm]}
            rehypePlugins={[rehypeHighlight]}
            className={"markdown"}
            components={{
              h1(props) {
                return (
                  <h1 className="text-3xl my-2" {...props}>
                    {props.children}
                  </h1>
                );
              },
              h2(props) {
                return (
                  <h2 className="text-2xl my-2" {...props}>
                    {props.children}
                  </h2>
                );
              },
              h3(props) {
                return (
                  <h3 className="text-xl my-2" {...props}>
                    {props.children}
                  </h3>
                );
              },
              a(props) {
                return (
                  <a
                    className="text-blue-600 underline hover:text-blue-500"
                    {...props}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {props.children}
                  </a>
                );
              },
              p(props) {
                return (
                  <p className="mb-5 text-lg text-justify" {...props}>
                    {props.children}
                  </p>
                );
              },
            }}
          >
            {data.data[0].attributes.blog}
          </Markdown>
        </div>
      </div>
    </div>
  );
};

export default Page;
