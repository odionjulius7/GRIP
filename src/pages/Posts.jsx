import React, { useState } from "react";
import { Button, Table } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { IoEnter } from "react-icons/io5";
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
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Author",
    dataIndex: "author",
  },
  {
    title: "Views",
    dataIndex: "views",
  },
  {
    title: "Likes",
    dataIndex: "likes",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
];

/* ant design table data */
const data1 = [];
for (let i = 0; i < 20; i++) {
  data1.push({
    key: i + 1,
    title: (
      <Link className="text-primary" to={`/admin/post/${i}`}>
        Cool {i}
      </Link>
    ),
    category: `Encouragement, Identity${i}`,
    author: `Encouragement, Identity${i}`,
    views: `1${i + 2}`,
    likes: `1${i}`,
    date: `7th,${i + 1}`,
  });
}

const Posts = () => {
  const [size, setSize] = useState("large");
  const navigate = useNavigate();
  return (
    <div className="mt-1">
      <h3 className="mb-3 title">Posts</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Posts;
