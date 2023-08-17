import React, { useState } from "react";
import { Button, Table } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { IoEnter } from "react-icons/io5";
import {
  getCreatorUsers,
  getUsers,
  resetState,
} from "../features/Users/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useEffect } from "react";
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
    title: "Role",
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
  const dispatch = useDispatch();
  const usersState = useSelector((state) => state.users);

  let data2 = usersState?.creators?.data;
  data2 = data2?.filter((user) => user?.role === "creator");

  const data = [];

  for (let i = 0; i < data2?.length; i++) {
    data.push({
      key: i + 1,
      name: (
        <Link
          style={{
            fontSize: "1rem",
            fontWeight: "600",
          }}
          className="text-primary"
          to={`/admin/user/${data2[i].id}`}
        >
          {data2[i].username}
        </Link>
      ),
      email: data2[i].email,
      subs: (
        <span
          style={{ color: "#001529", fontSize: "1.1rem", fontWeight: "600" }}
        >
          {data2[i].role}
        </span>
      ),
      date: moment(data2[i].createdAt).format("L"),
    });
  }

  useEffect(() => {
    dispatch(resetState());
    dispatch(getCreatorUsers());
  }, []);
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
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default ContentCreator;
