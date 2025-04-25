// BlogItem.js
import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const BlogItem = ({ blog }) => {
  return (
    <div className="blog-2__item">
      <div className="blog-content">
        <div className="blog-header">
          <span className="catagory">{blog?.category}</span>
          <span className="reading-time">{blog?.readingTime}</span>
        </div>
        <h3 className="blog-title">
          <Link href={blog?.link}>{blog?.title}</Link>
        </h3>
        <div className="blog-meta">
          <ul>
            <li>
              <Link href={blog?.link}>By : {blog?.author}</Link>
            </li>
            <li>
              <Link href={blog?.link}>{blog?.date}</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="blog-thumb">
        <img src={blog?.image} alt="blog-thumb" className="w-100" />
        <Link href={blog?.link} className="hover-arrow">
          <FiArrowUpRight size={22}/>
        </Link>
      </div>
      <div className="blog-info">
        <p>{blog?.description}</p>
      </div>
    </div>
  );
};

export default BlogItem;
