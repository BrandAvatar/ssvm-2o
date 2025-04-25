import React from "react";
import blogData from "@/constant/personal-portfolio/blog-data";
import BlogItem from "@/components/personal-portfolio/BlogItem";

const BlogSection = () => {
  return (
    <section className="blog-area section-padding-top-bottom">
      <div className="container">
        <div className="row section-mini-padding-bottom justify-content-center">
          <div className="col-12">
            <div className="blog__header section__header">
              <h2 className="section__title split-text right text-initial">
                {blogData?.sectionTitle}
              </h2>
            </div>
          </div>
        </div>
        <div className="row blog__items overflow-hidden">
          {blogData?.blogs?.map((blog) => (
            <BlogItem key={blog?.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
