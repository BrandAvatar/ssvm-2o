"use client";
import React, { useState } from "react";
import Link from "next/link";
import blogPosts from "@/constant/blog/blog-data";

// const categories = ["all", "marketing", "branding", "video", "web-design"];
const categories = [
  "all",
  ...[...new Set(blogPosts.flatMap((post) => post?.categories))],
];
const BlogSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredPosts = blogPosts.filter((post) =>
    activeFilter === "all" ? true : post?.categories?.includes(activeFilter)
  );

  return (
    <section className="blog-area blog-filter-area section-padding-top-bottom before-shape after-shape">
      <div className="container">
        {/* Filter Links */}
        <div className="row section-mini-padding-bottom justify-content-center">
          <div className="col-12">
            <div className="blog-filter__links">
              <ul>
                {categories.map((category, index) => (
                  <React.Fragment key={category}>
                    <li
                      className={`filter ${
                        activeFilter === category ? "active" : ""
                      }`}
                      onClick={() => setActiveFilter(category)}
                    >
                      {category}
                    </li>
                    {index < categories.length - 1 && <li>/</li>}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Blog Posts Row */}
        <div className="row blog__items blog-filter__mixItUp">
          {filteredPosts.map((post) => (
            <div
              key={post?.id}
              className={`col-12 branding web-design ${post?.categories
                ?.map((category) => category)
                .join(" ")}`}
            >
              <div className={`blog__item ${post?.effect}`}>
                <div className="blog-content">
                  <div className="blog-meta">
                    <ul>
                      <li>
                        By : <Link href="/blog-details">{post?.author}</Link>
                      </li>
                      <li>
                        Date : <Link href="/blog-details">{post?.date}</Link>
                      </li>
                    </ul>
                  </div>
                  <h4 className="blog-title split-text left text-initial">
                    <Link href="/blog-details">{post?.title}</Link>
                  </h4>
                  <Link
                    href="/blog-details"
                    className="common-btn common-btn--color-reverse"
                  >
                    Read More
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
                <figure className="blog-thumb">
                  <Link href="/blog-details">
                    <img src={post?.image} alt={post.title} />
                  </Link>
                </figure>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
