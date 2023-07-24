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
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Subs",
    dataIndex: "subs",
  },
  {
    title: "Reg.",
    dataIndex: "date",
  },
];

/* ant design table data */
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i + 1,
    name: (
      <Link className="text-primary" to={`/admin/user/${i}`}>
        Edward King {i}
      </Link>
    ),
    email: `john.doe${i}@gmail.com`,
    subs: `1${i}`,
    date: `07/${i + 1}/2023`,
  });
}

const ContentCreator = () => {
  const [size, setSize] = useState("large");
  const navigate = useNavigate();
  return (
    <div className="mt-1">
      <div className="d-flex justify-content-between">
        <h3 className="mb-3 title">Content Creators</h3>
        <div>
          {/* <Button>New Creator</Button> */}
          <Button
            type="primary"
            icon={<IoEnter />}
            size={size}
            onClick={() => navigate("/admin/add-new-creator")}
          >
            New Creator
          </Button>
        </div>
      </div>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default ContentCreator;
