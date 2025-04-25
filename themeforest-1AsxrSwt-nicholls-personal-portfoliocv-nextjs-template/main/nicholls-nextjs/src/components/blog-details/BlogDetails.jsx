import React from "react";
import Link from "next/link";
import blogDetailsData from "@/constant/blog-details/blog-details-data";
import CommentForm from "@/components/blog-details/CommentForm";

const BlogDetails = () => {
  const { bannerImage, content, tags, socialLinks } = blogDetailsData;

  return (
    <div className="blog-details-area section-padding-bottom overflow-hidden">
      <div className="container-fluid section-mini-padding-top-bottom">
        <div className="row">
          <div className="col-12 p-xxl-0">
            <div className="blog-details__thumb reveal left overflow-hidden">
              <img src={bannerImage} alt="blog banner" />
            </div>
          </div>
        </div>
      </div>
      <div className="container container--extend">
        <div className="row justify-content-center">
          <div className="col-sm-9 col-lg-8 col-xl-7 col-xxl-6">
            <article
              className="blog-details__content"
              dangerouslySetInnerHTML={{ __html: content }}
            ></article>
            <div className="blog-details__tagsAndSocial section-mini-margin-top">
              <div className="tags">
                <h6>Tags:</h6>
                <ul>
                  {tags.map((tag, index) => (
                    <li key={index}>
                      <Link href="/blog-details">{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="social-share">
                <h6>Share This :</h6>
                <ul>
                  {socialLinks.map((social, index) => (
                    <li key={index}>
                      <a href={social.url}>
                        <i className={social.icon}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center section-padding-top">
          <div className="col-sm-9 col-lg-8 col-xl-7 col-xxl-6">
            <div className="comment-area">
              <h3 className="form-title split-text right text-initial">
                Leave a Comment
              </h3>
              <CommentForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
