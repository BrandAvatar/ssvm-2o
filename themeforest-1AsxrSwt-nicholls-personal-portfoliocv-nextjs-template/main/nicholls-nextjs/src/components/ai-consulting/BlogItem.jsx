// BlogItem.js
import React from "react";
import Link from "next/link";

const BlogItem = ({ post }) => {
  return (
      <div className="blog-3__item item-popup">
        <div className="blog-3__header">
          <div className="blog-meta">
            <ul>
              <li>{post?.category}</li>
              <li>{post?.date}</li>
            </ul>
          </div>
          <h4 className="blog-title">
            <Link href={post?.link}>{post?.title}</Link>
          </h4>
          <p>{post?.description}</p>
        </div>
        <div className="blog-3__body">
          <Link href={post?.link} className="blog-thumb d-block">
            <img src={post?.imageUrl} alt={post?.alt} className="w-100" />
          </Link>
        </div>
        <div className="blog-3__footer">
          <Link href={post?.link} className="common-btn">
            Read More
          </Link>
        </div>
      </div>
  );
};

export default BlogItem;
