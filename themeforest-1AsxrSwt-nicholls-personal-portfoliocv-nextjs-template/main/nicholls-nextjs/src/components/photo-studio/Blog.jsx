import React from 'react'
import blogData from '@/constant/photo-studio/blog-data';
import BlogItem from '@/components/photo-studio/BlogItem';

const Blog = () => {
  return (
    <div className="blog-3-area section-padding-top-bottom bg-white">
    <div className="container container--extend">
      <div className="row">
        <div className="col-12">
          <div className="section__header text-center text-black">
            <h2
              className="section__title ff-six-caps fs-200 fw-normal title-stretch"
            >
              LATEST ARTICLES
            </h2>
          </div>
        </div>
      </div>
      <div className="row g-4 g-xxl-5 section-mini-padding-top">
        {blogData.map(data=> <BlogItem key={data?.id} data={data}/>)}
      </div>
    </div>
  </div>
  )
}

export default Blog