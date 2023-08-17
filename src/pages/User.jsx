import { Button, Card } from "antd";
import React, { useEffect } from "react";

import SVG from "../IMG/SVGImg.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUserRole, getAUser } from "../features/Users/usersSlice";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const User = () => {
  const dispatch = useDispatch();
  const [creator, setCreator] = useState(false);
  const [size, setSize] = useState("large");
  const [size1, setSize1] = useState("small");
  const userState = useSelector((state) => state.users);

  const { isSuccess, isError, isLoading, user, updatedRole } = userState;

  const { id } = useParams();

  useEffect(() => {
    if (isSuccess && updatedRole) {
      toast.success("Role Updated Successfully!");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading]);

  useEffect(() => {
    dispatch(getAUser(id));
  }, [id, updatedRole]);

  return (
    <div>
      <div className="row">
        <div className="col mb-2 bg-white pt-2 pb-4">
          <Card
            // title="Card title"
            bordered={false}
            style={{
              width: "100%",
              background: "#6259ca",
              color: "white",
            }}
          >
            <div className="row justify-content-between p-2 mt-3">
              <div className="col-4 align-self-lg-stretch">
                <img
                  src={SVG}
                  alt=""
                  width={150}
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                />
                <h5>{user?.username}</h5>
              </div>
              {user?.role === "creator" && (
                <div className="col-6">
                  <h4>Personal Information</h4>
                  <div className="">
                    <p className="col">
                      <h6 style={{ padding: "0", margin: "0" }}>Full Name :</h6>{" "}
                      {user?.username}
                    </p>
                    <p className="col">
                      <h6 style={{ padding: "0", margin: "0" }}>Phone :</h6>{" "}
                      {user?.phone}
                    </p>
                    <p className="col">
                      <h6 style={{ padding: "0", margin: "0" }}>Email :</h6>{" "}
                      {user?.email}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Card>
          <h6 style={{ fontSize: "1.4rem" }} className="ml-5 mt-2 p-2">
            {user?.role}
          </h6>
          <div className="d-flex gap-5 m-3">
            <div style={{ marginRight: "9rem", marginLeft: "2rem" }}>
              <div className="d-flex gap-5 my-3">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h4>{user?.followingCount}</h4>
                  <p>Following</p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h4>{user?.followersCount}</h4>
                  <p>Followers</p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h4>{user?.categories?.length}</h4>
                  <p>Topics</p>
                </div>
              </div>
              <div className="d-flex gap-2">
                {user?.role === "creator" && (
                  <div>
                    <Button
                      type="primary"
                      size={size}
                      shape="round"
                      // onClick={() => navigate("/admin/add-new-creator")}
                    >
                      Message
                    </Button>
                  </div>
                )}
                {user?.role === "user" && (
                  <div>
                    <Button
                      type="primary"
                      size={size}
                      shape="round"
                      onClick={() => dispatch(changeUserRole(id))}
                    >
                      {isLoading ? "loading..." : "Make Creator"}
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-3">
              <h5>Topics Followed</h5>
              <div
                className="d-flex gap-2 p-2"
                style={{ width: "80%", flexWrap: "wrap" }}
              >
                {user?.categories?.map((cat, i) => (
                  <div key={i}>
                    <Button
                      type="primary"
                      shape="round"
                      style={{
                        background: "#d3cef5",
                        color: "#5341BF",
                        border: "1px solid #d3cef5",
                      }}
                    >
                      {cat?.name}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
