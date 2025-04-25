// BlogSection.js
import React from "react";
import BlogItem from "@/components/ai-consulting/BlogItem";
import blogData from "@/constant/ai-consulting/blogData";

const BlogSection = () => {
  const { sectionHeader, posts } = blogData;

  return (
    <section className="blog-3-area section-padding-top-bottom bg-white">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header text-center">
              <span className="section__sub-title code text-black">
                {sectionHeader?.subTitle}
              </span>
              <h2 className="section__title text-black split-text right text-initial">
                {sectionHeader?.title}
              </h2>
            </div>
          </div>
        </div>
        <div className="row g-4 section-mini-padding-top">
          {posts.map((post) => (
            <div key={post?.id} className="col-md-6 col-xl-4">
              <BlogItem post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
