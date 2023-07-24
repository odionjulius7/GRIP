import React from "react";
import { Badge, Button, Descriptions } from "antd";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
const AddCreator = () => {
  const [size, setSize] = useState("large");
  return (
    <div className="container">
      <div className="row">
        <div className="col justify-content-center">
          <div
            className=" bg-white px-4 pb-4 pt-4"
            style={{
              width: "45%",
              margin: "3rem auto",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            <div>
              <h5>Add New Content Creator</h5>
            </div>
            <CustomInput type="text" label="Name" name="name" />
            <CustomInput type="email" label="Email" name="email" />
            <div>
              <Button
                type="primary"
                size={size}
                shape="round"
                style={{
                  background: "#5341BF",
                  color: "white",
                  border: "1px solid #d3cef5",
                  marginTop: "1.4rem",
                }}
                // onClick={() => navigate("/admin/add-new-creator")}
              >
                Create Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddCreator;
