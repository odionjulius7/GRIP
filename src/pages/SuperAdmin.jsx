import React, { useEffect } from "react";
import { Column } from "@ant-design/plots";
import { Avatar, Badge, Card, Dropdown, Space, Switch, Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { DownOutlined } from "@ant-design/icons";
import PieChart from "../components/Charts/PieChart";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsArrowDownRight } from "react-icons/bs";
import { getUsers, resetState } from "../features/Users/usersSlice";
import moment from "moment";
import { getPosts } from "../features/Post/postSlice";

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

const postColumns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
  },

  {
    title: "Author",
    dataIndex: "author",
  },

  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

/* ant design table data */
const data1 = [];
for (let i = 0; i < 20; i++) {
  data1.push({
    key: i + 1,
    name: `Edward King ${i}`,
    email: `john.doe${i}@gmail.com`,
    subs: `1${i}`,
    date: `07/${i + 1}/2023`,
  });
}

const SuperAdmin = () => {
  const dispatch = useDispatch();

  const postState = useSelector((state) => state.post);
  const usersState = useSelector((state) => state.users);
  /* Users Details */
  let data2 = usersState?.users?.data;
  data2 = data2?.filter((user) => user?.role === "user");

  const dataHome = [];
  for (let i = 0; i < data2?.length; i++) {
    dataHome.push({
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
  /* Users Details Ends Here */

  /* Posts Details */
  const posts = postState?.posts;
  const postData = [];
  for (let i = 0; i < posts?.length; i++) {
    postData.push({
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
      action: (
        <>
          <Link to={`/admin/post/${posts[i].id}`} className=" fs-3 text-danger">
            <BiEdit />
          </Link>
          {/* <Link className="ms-3 fs-3 text-danger" onClick={() => showModal(i)}>
            <AiFillDelete />
          </Link> */}
        </>
      ),
    });
  }
  /* Posts Details Ends Here */

  useEffect(() => {
    dispatch(resetState());
    dispatch(getUsers());
    dispatch(getPosts());
  }, []);

  /* ant design chart data */
  const data = [
    {
      type: "Jan",
      sales: 38,
    },
    {
      type: "Feb",
      sales: 52,
    },
    {
      type: "Mar",
      sales: 61,
    },
    {
      type: "Apr",
      sales: 145,
    },
    {
      type: "May",
      sales: 48,
    },
    {
      type: "Jun",
      sales: 38,
    },
    {
      type: "July",
      sales: 38,
    },
    {
      type: "Aug",
      sales: 38,
    },
    {
      type: "Sept",
      sales: 38,
    },
    {
      type: "Oct",
      sales: 38,
    },
    {
      type: "Nov",
      sales: 38,
    },
    {
      type: "Dec",
      sales: 38,
    },
  ];

  /* ant design chart config */
  const config = {
    data,
    xField: "type",
    yField: "sales",
    color: ({ type }) => {
      return "#ffd333";
    },
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Month",
      },
      sales: {
        alias: "Income",
      },
    },
  };

  let creatorData = usersState?.users?.data;
  creatorData = creatorData?.filter((user) => user?.role !== "user");
  console.log(creatorData);
  return (
    <div>
      <h3 className="mb-4 title">Admin Dashboard </h3>
      <div className="row">
        <div className="col-8">
          <div className="d-flex justify-content-between align-items-center gap-3">
            <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
              <div>
                <p className="desc">Posts</p>
                <h4 className="mb-0 sub-title">{postState?.length}</h4>
              </div>
              <div className="d-flex flex-column align-items-end">
                <h6>
                  <BsArrowDownRight />
                  {/* <FaChevronDown /> */}
                </h6>
                <p className="mb-0  desc"> April 2022</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
              <div>
                <p className="desc">Devotionals</p>
                <h4 className="mb-0 sub-title">1100</h4>
              </div>
              <div className="d-flex flex-column align-items-end">
                <h6 className="red">
                  <BsArrowDownRight />
                  {/* 32% */}
                </h6>
                <p className="mb-0  desc">April 2022</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
              <div>
                <p className="desc">Users</p>
                <h4 className="mb-0 sub-title">{data2?.length}</h4>
              </div>
              <div className="d-flex flex-column align-items-end">
                <h6 className="green">
                  <BsArrowDownRight />
                  {/* 32% */}
                </h6>
                <p className="mb-0 desc"> As At April 2022</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-between px-2">
            <div className="mt-5 bg-white p-2">
              <h3 className="mb-4 title">Mobile app users </h3>
              <div>
                <Column {...config} />
              </div>
            </div>
            {/*  */}
          </div>
          <div className="mt-5 pt-5">
            <h3 className="mb-3 title">Recent Sign-Ups</h3>
            <div>
              <Table columns={columns} dataSource={dataHome} />
            </div>
          </div>
          <div className="mt-5 ">
            <h3 className="mb-2 title">Recent Posts</h3>
            <div>
              <Table columns={postColumns} dataSource={postData} />
            </div>
          </div>
        </div>
        <div className="col-4">
          <Card
            // title="Card title"
            bordered={false}
            style={{
              width: "100%",
              background: "#886c6c52",
            }}
          >
            <div className="row" style={{ gap: "1.9rem" }}>
              <div>
                <h4>Content Creators</h4>
              </div>
              {creatorData?.map((creator, i) => {
                const items = [
                  {
                    key: "1",
                    label: <Link to={`/admin/user/${creator?.id}`}>view</Link>,
                  },
                ];
                return (
                  <div
                    key={i}
                    className="d-flex flex-row justify-content-between bg-muted  border-bottom py-1"
                  >
                    <Space size={24}>
                      <Badge dot={false}>
                        {/* <Avatar
                        shape="circle"
                        src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
                      /> */}
                        <FaUserCircle className="imgSvg" />
                      </Badge>
                      <div className="d-flex flex-column gap-1">
                        <h6 className="p-0 m-0" style={{ fontWeight: "600" }}>
                          Name:
                        </h6>
                        <span>Status:</span>
                      </div>
                    </Space>
                    <div>
                      <Dropdown menu={{ items }} className="py-1 my-2">
                        <a
                          style={{ fontWeight: "600" }}
                          onClick={(e) => e.preventDefault()}
                        >
                          <Space>
                            {creator?.username}
                            <DownOutlined />
                          </Space>
                        </a>
                      </Dropdown>

                      {/* <p className="text-info p-0 m-0">Mark as leader</p> */}
                      <p className=" p-0 m-0">
                        <em
                          className="text-warning text-white"
                          style={{ fontWeight: "600" }}
                        >
                          Creator
                        </em>{" "}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
          <div className=" mt-4 bg-white pb-2 px-4">
            <div>
              <PieChart />
            </div>
            <h4 className="mb-4 ml-2 title">User Distribution</h4>
            <span className="mb-4 ml-2 title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              repellendus
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdmin;
