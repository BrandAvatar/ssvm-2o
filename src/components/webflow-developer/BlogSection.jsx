// BlogSection.js
import React from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import blogData from "@/constant/webflow-developer/blog-data";
import BlogItem from "@/components/webflow-developer/BlogItem";
const BlogSection = () => {
  return (
    <section className="blog-2-area section-padding-bottom">
      <div className="container-fluid overflow-hidden">
        <h2 className="section__big-title marquee-text ff-six-caps fw-normal">
          <Marquee pauseOnHover speed={200} className="overflow-hidden">
            {Array(5)
              .fill()
              .map((_, index) => (
                <span key={index}>
                  <Link href={blogData?.sectionTitle.link}>
                    {blogData?.sectionTitle.text}
                  </Link>
                  {index < 4 && <>&nbsp;-&nbsp;</>}
                </span>
              ))}
          </Marquee>
        </h2>
      </div>
      <div className="container container--extend section-mini-padding-top">
        <div className="row">
          <div className="col-12">
            <div className="blog-2__item-wrapper">
              {blogData?.blogs.map((blog) => (
                <BlogItem key={blog?.id} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
