import React from "react";
import { Link } from "react-router-dom";
import { Space, Switch, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, resetState } from "../features/Users/usersSlice";
import { useEffect } from "react";
import moment from "moment/moment";
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
  // {
  //   title: "Subs",
  //   dataIndex: "subs",
  //   sorter: (a, b) => a.subs - b.subs,
  // },
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
  const dispatch = useDispatch();
  const usersState = useSelector((state) => state.users);
  /* ant design chart config */
  // console.log(usersState?.users?.data);
  let data2 = usersState?.users?.data;
  data2 = data2?.filter((user) => user?.role === "user");

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
      // subs: `1${i}`,
      date: moment(data2[i].createdAt).format("L"),
    });
  }

  useEffect(() => {
    dispatch(resetState());
    dispatch(getUsers());
  }, []);
  return (
    <div className="mt-1">
      <h3 className="mb-3 title">Users List</h3>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default AllUsers;
