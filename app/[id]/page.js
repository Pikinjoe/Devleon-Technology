import BlogNav from "@/components/BlogNav";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import { details } from "@/data";
import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";

const ContentData = ({ params }) => {
  const content = details.find(
    (item) => item.id.toLowerCase() === params.id.toLowerCase()
  );
  if (!content) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <BlogNav />
      <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:!bg-black dark:bg-none">
        <Heading title={content.title} />
        <div className="flex justify-center items-center text-black-60 dark:text-cyan-100 font-semibold py-10">
          {content.img ? (
            <div className="flex flex-col lg:flex-row lg:gap-4 gap-10 w-11/12 mx-auto my-5">
              <div className="w-full lg:w-1/2 h-72 md:h-[420px] lg:h-[500px]">
                <Image
                  src={content.img}
                  alt={content.title}
                  width={500}
                  height={256}
                  className="w-full h-full object-cover shadow-2xl rounded"
                />
              </div>
              <div className="w-full lg:w-1/2 flex items-center">
                <p className="text-lg">{content.des}</p>
              </div>{" "}
            </div>
          ) : (
            <div className="text-center w-11/12 mx-auto py-20">
              <p>{content.des}</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContentData;
