import React, { useEffect, useState } from "react";
import "../components/Value/Value.css";

import { useFormik } from "formik";
import * as Yup from "yup";

import CustomInput from "../components/CustomInput.jsx";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Row } from "antd";
import { toast } from "react-toastify";

//
//
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[A-Za-z]).{6,}$/,
      "Password must contain at least one special character, one number, and be at least 6 characters long"
    ),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Formik state, check doc
  const formik = useFormik({
    // initial form state
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema, // to validate the yup setup schema
    onSubmit: (values) => {
      // pass the value of the data got from formik to the login action
      dispatch(login(values));
    },
  });

  const authState = useSelector((state) => state);

  const { user, isError, isSuccess, isLoading, message } = authState.auth;
  const token = user?.data?.token;
  useEffect(() => {
    if (isSuccess) {
      navigate("admin");
    } else {
      // toast.error("Something Went Wrong!");
      navigate("/");
    }
  }, [user, isError, isSuccess, isLoading]);

  // useEffect(() => {
  //   if (isError) {
  //     toast.error("Something Went Wrong!");
  //   }
  // }, [isError]);
  // console.log(token);
  return (
    <Row
      className="mt-5 one-row"
      // style={{
      //   position: "relative !important",
      //   margin: "50px auto !important",
      //   height: "600px !important",
      //   width: "100vw !important",
      // }}
    >
      <Col span={12} offset={6}>
        <form
          onSubmit={formik.handleSubmit}
          className="paddings one-form flexCenter v-container gap-5"
          // style={{
          //   position: "absolute",
          //   top: "50%",
          //   left: "50%",
          //   transform: "translate(-50%, 12%)",
          //   width: "60%",
          //   height: "auto",
          //   backgroundColor: "#f0f0f0",
          //   borderRadius: "10px",
          //   boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
          //   padding: "2rem 0",
          // }}
        >
          <div
            className="flexColStart v-right one-div"
            // style={{
            //   display: "flex",
            //   flexDirection: "column",
            //   width: "80%",
            //   justifyContent: "center",
            //   alignItems: "center",
            //   padding: 0,
            // }}
          >
            <span className="orangeText">Login</span>

            <div>
              <CustomInput
                type="email"
                label="Email"
                name="email"
                val={formik.values.email}
                onChng={formik.handleChange}
                onBlr={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-danger error-form">
                  {formik.errors.email}
                </div>
              )}
            </div>
            <div>
              <CustomInput
                type="password"
                label="Password"
                name="password"
                val={formik.values.password}
                onChng={formik.handleChange}
                onBlr={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-danger error-form">
                  {formik.errors.password}
                </div>
              )}
            </div>
            <div>
              <Button type="link">
                <Link to="/">forgot Password</Link>
              </Button>
            </div>
            <div style={{ width: "60%", textAlign: "center" }} className="mt-3">
              {/* <span className="primaryText">Email</span> */}

              <button
                type="submit"
                style={{ width: "30%" }}
                className="flexCenter button"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </Col>
    </Row>
  );
};

export default Login;
