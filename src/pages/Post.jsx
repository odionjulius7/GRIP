import React from "react";
import CustomInput from "../components/CustomInput";
import ReactPlayer from "react-player";

const Post = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                <div className="card mb-3 border-0">
                  <div className="card-header border-0">
                    <h5 className="card-title">Love</h5>
                  </div>
                  <div className="video p-2" style={{ minHeight: "450px" }}>
                    {/* <video controls style={{ height: "350px" }}>
                      <source
                        src="https://www.youtube.com/watch?v=nZLqZUkw_OA"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video> */}
                    <ReactPlayer
                      url="https://www.youtube.com/watch?v=nZLqZUkw_OA"
                      controls
                      width="100%"
                      style={{ height: "400px" }}
                    />
                    <div className="mt-4">
                      <p>Greta way to show Gods love</p>
                    </div>
                    <div className="mt-4 mb-2 text-right">
                      <button
                        type="button"
                        className="btn btn-danger ml-2"
                        data-toggle="modal"
                        data-target="#deletePost"
                      >
                        &nbsp; Delete Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="card border-0 mb-3"
                  style={{ height: "inherit" }}
                >
                  <div className="card-header">
                    <h5 className="card-title">Cover Image</h5>
                  </div>
                  <img
                    className="card-img-bottom img-fluid"
                    src="https://res.cloudinary.com/gripdevotional/image/upload/v1678371987/posts/0J04936/cover_images/yg1ritydkclnhgtvaecp.jpg"
                    alt="Love"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
