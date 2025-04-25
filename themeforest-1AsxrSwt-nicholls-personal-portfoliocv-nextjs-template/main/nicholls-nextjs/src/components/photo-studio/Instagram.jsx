"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import POSTDATA from "@/constant/photo-studio/instagram-posts";

const Instagram = () => {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const slides = POSTDATA.map((post) => ({
    src: post.image,
    alt: post.title,
  }));
  return (
    <>
      <div className="instagram-area section-padding-top">
        <div className="container-fluid px-lg-0 overflow-hidden">
          <div className="row">
            <div className="col-12">
              <div className="instagram__gallery">
                {POSTDATA?.map((post, index) => (
                  <div
                    title="Instagram Post - 1"
                    className="instagram__item d-block"
                    key={post?.id}
                    onClick={(e) => {
                      e.preventDefault();
                      setPhotoIndex(index);
                      setOpen(true);
                    }}
                    role="button"
                  >
                    <img
                      src={post?.image}
                      alt="instagram-post"
                      className="w-100"
                    />
                    <span className="icon-box">
                      <i className="fa-brands fa-instagram"></i>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Lightbox
        plugins={[Thumbnails]}
        open={open}
        close={() => setOpen(false)}
        index={photoIndex}
        slides={slides}
      />
    </>
  );
};

export default Instagram;
