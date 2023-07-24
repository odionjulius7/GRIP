import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { Dropdown, Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const { Header, Sider, Content } = Layout;

//
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const menu = (
    <Menu>
      <Menu.Item>
        <a href="/">View Profile</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/">Signout</a>
      </Menu.Item>
    </Menu>
  );
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            <span className="sm-logo">LW</span>
            <span className="lg-logo">Loveworld - Cell</span>
          </h2>
        </div>

        <Menu
          className="pb-2"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            navigate(key);
          }}
          items={[
            // ant-design sidebar
            {
              key: "",
              icon: <AiOutlineDashboard className="fs-4" />,
              label: "Dashboard S",
            },
            {
              key: "report",
              icon: <AiOutlineShoppingCart className="fs-4" />,
              label: "Reports",
              children: [
                {
                  key: "all-users",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Users",
                },
                {
                  key: "all-creators",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Creators",
                },
              ],
            },
            {
              key: "Posts",
              icon: <FaClipboardList className="fs-4" />,
              label: "All Posts",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
            background: "#7b7b8838",
            // background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="d-flex gap-4 align-items-center">
            <div className="position-relative">
              <IoIosNotifications className="fs-4" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>

            <div className="container mt-3" style={{ cursor: "pointer" }}>
              <Dropdown overlay={menu} trigger={["click"]}>
                <div className="d-flex gap-3 align-items-center">
                  <div>
                    <img
                      className="rounded-circle"
                      width={35}
                      height={35}
                      src="./favicon.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <h5 className="mb-0">Julius</h5>
                    <p className="mb-0">odionjulius7@gmail.com</p>
                  </div>
                </div>
              </Dropdown>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "green",
            // background: colorBgContainer,
          }}
        >
          <ToastContainer
            position="top-right"
            autoClose={250}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
