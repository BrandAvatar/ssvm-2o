"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section
      className="video-area"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./assets/images/video-area/video-thumb.png)",
      }}
    >
      <div className="video__content text-center h-100">
        <div className="container h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-xl-8 col-xxl-6">
              <button className="video__btn" onClick={() => setOpen(true)}>
                PLAY
              </button>
              <ModalVideo
                channel="youtube"
                videoId="u31qwQUeGuM"
                youtube={{ mute: 1, autoplay: 1, controls: 0, loop: 1 }}
                // channel="custom"
                // url="https://res.cloudinary.com/dy65k4x9i/video/upload/f_auto:video,q_auto/ghvr9mxbfkdgi46oontp"
                isOpen={isOpen}
                onClose={() => setOpen(false)}
              />
              <h2 className="text">
                Being stable is great. Progress is better.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
