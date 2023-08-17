import React, { useEffect, useState } from "react";
// import CustomInput from "../components/CustomInput";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { approvePost, deletePost, getAPost } from "../features/Post/postSlice";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import CustomModal from "../components/CustomModal";
import { resetState } from "../features/Users/usersSlice";

const Post = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const postState = useSelector((state) => state.post);
  const { isSuccess, isError, isLoading, updatedPost, post, deletedPost } =
    postState;
  const { id } = useParams();
  console.log(post);

  //
  const [open, setOpen] = useState(false);
  // const [brandId, setbrandId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setbrandId(e);
  };
  const hideModal = () => {
    setOpen(false);
  };

  const handleDeletePost = (e) => {
    dispatch(deletePost(e));

    setOpen(false);
    if (isSuccess) {
      // setTimeout(() => {
      toast.success("Post Deleted Successfully");
      navigate("/admin/posts");
      // dispatch(resetState());
      // dispatch(getBlogs());
    }
    // }, 100);
  };
  //

  const renderMedia = () => {
    if (post?.file_type === "image") {
      return (
        <img
          width="100%"
          style={{
            maxHeight: "400px",
            marginBottom: "1rem",
            border: "1px solid #e3e3e3",
            objectFit: "fill",
          }}
          src={post?.file}
          alt={post?.title}
        />
      );
    } else if (post?.file_type === "video") {
      return (
        // <video
        //   width="100%"
        //   style={{ height: "400px" }}
        //   controls
        //   src={post?.file}
        // />
        <ReactPlayer
          url={post?.file}
          controls
          width="100%"
          style={{ height: "400px" }}
        />
      );
    } else if (post?.file_type === "audio") {
      return (
        <audio
          // width="100%"
          style={{ marginBottom: "1rem" }}
          controls
          src={post?.file}
        />
      );
    } else {
      return null; // Return null if file_type is not recognized
    }
  };
  // console.log(deletedPost);
  useEffect(() => {
    if (isSuccess && deletedPost) {
      toast.success("Post Deleted Successfully!");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, deletedPost]);

  useEffect(() => {
    if (isSuccess && updatedPost) {
      toast.success("Post Approved Successfully!");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, updatedPost]);

  useEffect(() => {
    dispatch(resetState());
    dispatch(getAPost(id));
  }, [id, updatedPost, deletePost]);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-8">
                  <div className="card mb-3 border-0">
                    <div className="card-header border-0">
                      <h5 className="card-title">{post?.title}</h5>
                    </div>
                    <div className="video p-2" style={{ minHeight: "450px" }}>
                      {/* <video controls style={{ height: "350px" }}>
                      <source
                        src="https://www.youtube.com/watch?v=nZLqZUkw_OA"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video> */}
                      {/* <ReactPlayer
                      url="https://www.youtube.com/watch?v=nZLqZUkw_OA"
                      controls
                      width="100%"
                      style={{ height: "400px" }}
                    /> */}
                      {renderMedia()}

                      <div className="mt-4">
                        <p>{post?.description}</p>
                        <div>
                          {post?.bible_book && (
                            <p>Bible Book: {post?.bible_book} </p>
                          )}
                          {post?.bible_chapter && (
                            <p>Bible Chapter: {post?.bible_chapter} </p>
                          )}
                          {post?.bible_verse && (
                            <p>Bible Verse: {post?.bible_verse} </p>
                          )}
                        </div>
                      </div>
                      <div className="mt-4 mb-2 text-right d-flex justify-content-between">
                        <button
                          type="button"
                          className="btn btn-danger ml-2"
                          // data-toggle="modal"
                          // data-target="#deletePost"
                          onClick={() => showModal(id)}
                        >
                          &nbsp; Delete Post
                        </button>
                        {!post?.status && (
                          <button
                            type="button"
                            className="btn btn-primary ml-2"
                            // data-toggle="modal"
                            // data-target="#deletePost"
                            onClick={() => dispatch(approvePost(id))}
                          >
                            &nbsp;{isLoading ? "loading..." : "Approve Post"}
                          </button>
                        )}
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
                      // src="https://res.cloudinary.com/gripdevotional/image/upload/v1678371987/posts/0J04936/cover_images/yg1ritydkclnhgtvaecp.jpg"
                      src={post?.cover_image}
                      alt="Love"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          handleDeletePost(id);
        }}
        title="Are you sure you want to delete this Post?"
      />
    </>
  );
};

export default Post;
