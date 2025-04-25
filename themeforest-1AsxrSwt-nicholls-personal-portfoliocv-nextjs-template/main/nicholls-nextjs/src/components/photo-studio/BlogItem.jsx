import Link from "next/link";
import React from "react";

const BlogItem = ({ data }) => {
  return (
    <div className="col-md-6 col-xl-4">
      <div className="blog-3__item style-2 item-popup">
        <div className="blog-3__body style-2">
          <Link href={data?.link} className="blog-thumb d-block">
            <img src={data?.image} alt="blog-thumb" className="w-100" />
            <span className="blog-publish-date">{data?.date}</span>
          </Link>
        </div>
        <div className="blog-3__header style-as-body">
          <div className="blog-meta">
            <ul>
              {data?.categories?.map((category, index) => (
                <li key={index}>{category}</li>
              ))}
            </ul>
          </div>
          <h4 className="blog-title">
            <Link href={data?.link}>{data?.title}</Link>
          </h4>
        </div>

        <div className="blog-3__footer style-2">
          <Link href={data?.link} className="common-btn">
            {data?.buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
