import { Button, Card } from "antd";
import React from "react";

import SVG from "../IMG/SVGImg.png";
import { useState } from "react";

const User = () => {
  const [creator, setCreator] = useState(false);
  const [size, setSize] = useState("large");
  const [size1, setSize1] = useState("small");
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
                <h5>JonDeo.1 </h5>
              </div>
              {creator && (
                <div className="col-6">
                  <h4>Personal Information</h4>
                  <div className="">
                    <p className="col">
                      <h6 style={{ padding: "0", margin: "0" }}>Full Name :</h6>{" "}
                      Jon Doe
                    </p>
                    <p className="col">
                      <h6 style={{ padding: "0", margin: "0" }}>Phone :</h6>{" "}
                      0987654321
                    </p>
                    <p className="col">
                      <h6 style={{ padding: "0", margin: "0" }}>Bio :</h6> God
                      is alive
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Card>
          <h6 className="ml-5 mt-2">User | Content Creator</h6>
          <div className="d-flex gap-5 m-3">
            <div style={{ marginRight: "9rem", marginLeft: "2rem" }}>
              <div className="d-flex gap-5 my-3">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h4>8</h4>
                  <p>Subscriptions</p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h4>11</h4>
                  <p>Topics</p>
                </div>
              </div>
              <div className="d-flex gap-2">
                {creator && (
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
                {!creator && (
                  <div>
                    <Button
                      type="primary"
                      size={size}
                      shape="round"
                      // onClick={() => navigate("/admin/add-new-creator")}
                    >
                      Make Creator
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
                <div>
                  <Button
                    type="primary"
                    shape="round"
                    style={{
                      background: "#d3cef5",
                      color: "#5341BF",
                      border: "1px solid #d3cef5",
                    }}
                  >
                    Inspiration
                  </Button>
                </div>
                <div>
                  <Button
                    type="primary"
                    shape="round"
                    style={{
                      background: "#d3cef5",
                      color: "#5341BF",
                      border: "1px solid #d3cef5",
                    }}
                  >
                    Love
                  </Button>
                </div>
                <div>
                  <Button
                    type="primary"
                    shape="round"
                    style={{
                      background: "#d3cef5",
                      color: "#5341BF",
                      border: "1px solid #d3cef5",
                    }}
                  >
                    Praise
                  </Button>
                </div>
                <div>
                  <Button
                    type="primary"
                    shape="round"
                    style={{
                      background: "#d3cef5",
                      color: "#5341BF",
                      border: "1px solid #d3cef5",
                    }}
                  >
                    Prayer
                  </Button>
                </div>
                <div>
                  <Button
                    type="primary"
                    shape="round"
                    style={{
                      background: "#d3cef5",
                      color: "#5341BF",
                      border: "1px solid #d3cef5",
                    }}
                  >
                    Peace
                  </Button>
                </div>
                <div>
                  <Button
                    type="primary"
                    shape="round"
                    style={{
                      background: "#d3cef5",
                      color: "#5341BF",
                      border: "1px solid #d3cef5",
                    }}
                  >
                    Heaven
                  </Button>
                </div>
                <div>
                  <Button
                    type="primary"
                    shape="round"
                    style={{
                      background: "#d3cef5",
                      color: "#5341BF",
                      border: "1px solid #d3cef5",
                    }}
                  >
                    Self Control
                  </Button>
                </div>
                <div>
                  <Button
                    type="primary"
                    shape="round"
                    style={{
                      background: "#d3cef5",
                      color: "#5341BF",
                      border: "1px solid #d3cef5",
                    }}
                  >
                    Faith
                  </Button>
                </div>
                <div>
                  <Button
                    type="primary"
                    shape="round"
                    style={{
                      background: "#d3cef5",
                      color: "#5341BF",
                      border: "1px solid #d3cef5",
                    }}
                  >
                    Joy
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
