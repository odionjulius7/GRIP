import React from "react";
import { Link } from "react-router-dom";
import { Space, Switch, Table } from "antd";
/* ant design table header */
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Subs",
    dataIndex: "subs",
    sorter: (a, b) => a.subs - b.subs,
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

const AllUsers = () => {
  /* ant design chart config */

  return (
    <div className="mt-1">
      <h3 className="mb-3 title">Users List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default AllUsers;
