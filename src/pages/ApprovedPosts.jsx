import React, { useState, useEffect } from "react";
import { Table } from "antd";
import CustomModal from "../components/CustomModal";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { IoEnter } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, resetState } from "../features/Users/usersSlice";
import { getApprovePosts, getPosts } from "../features/Post/postSlice";
import moment from "moment";
/* ant design table header */
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
  },
  // {
  //   title: "Category",
  //   dataIndex: "category",
  // },
  {
    title: "Author",
    dataIndex: "author",
  },
  // {
  //   title: "Views",
  //   dataIndex: "views",
  // },
  // {
  //   title: "Likes",
  //   dataIndex: "likes",
  // },
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const ApprovedPosts = () => {
  const dispatch = useDispatch();
  const postState = useSelector((state) => state.post);
  const [size, setSize] = useState("large");
  const navigate = useNavigate();
  //
  const [open, setOpen] = useState(false);
  const [brandId, setbrandId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setbrandId(e);
  };
  //
  const posts = postState?.approvedPosts;
  console.log(posts);
  const data1 = [];
  for (let i = 0; i < posts?.length; i++) {
    data1.push({
      key: i + 1,
      title: (
        <Link
          style={{
            fontSize: "1rem",
            fontWeight: "600",
          }}
          className="text-primary"
          to={`/admin/post/${posts[i].id}`}
        >
          {posts[i].title}
        </Link>
      ),
      // category: `Encouragement, Identity${i}`,
      author: posts[i]?.User?.username,
      // views: `11${i}`,
      // likes: `1${i}`,
      date: moment(posts[i].createdAt).format("L"),
      status: (
        <span
          style={{
            background: "green",
            color: "white",
            fontSize: "1rem",
            padding: "0.1rem 0.4rem",
            fontWeight: "600",
            borderRadius: "5px",
          }}
        >
          {posts[i].status && "Approved"}
        </span>
      ),
      action: (
        <>
          <Link to={`/admin/post/${posts[i].id}`} className=" fs-3 text-danger">
            <BiEdit />
          </Link>
          <Link className="ms-3 fs-3 text-danger" onClick={() => showModal(i)}>
            <AiFillDelete />
          </Link>
        </>
      ),
    });
  }
  const hideModal = () => {
    setOpen(false);
  };
  // console.log(brandId);
  // const deleteBrand = (e) => {
  //   dispatch(deleteABrand(e));

  //   setOpen(false); // always set open to false after action
  //   setTimeout(() => {
  //     dispatch(getBrands());
  //   }, 100);
  // };

  useEffect(() => {
    dispatch(resetState()); // at first render alway clear the state(like loading, success etc)
    dispatch(getApprovePosts());
  }, []);
  return (
    <div className="mt-1">
      <h3 className="mb-3 title">Approved Posts</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteBrand(brandId);
        }}
        title="Are you sure you want to delete this Post?"
      />
    </div>
  );
};

export default ApprovedPosts;
