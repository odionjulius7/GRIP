import React, { useEffect, useState } from "react";
import "../components/Value/Value.css";

import { useFormik } from "formik";
import * as Yup from "yup";

import CustomInput from "../components/CustomInput.jsx";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Row } from "antd";

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
  role: Yup.string().required("Role is required"),
});

const Login = () => {
  const userData = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
      role: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const { password, email, role } = values;
      dispatch(loginUser({ password, email, role }));
      // Reset the form after successful login
      // resetForm();
    },
  });

  useEffect(() => {
    if (userData.email) {
      navigate("/admin");
    }
  }, [userData]);

  return (
    <Row className="mt-5">
      <Col span={12} offset={6}>
        <form
          onSubmit={formik.handleSubmit}
          className="paddings  flexCenter v-container gap-5"
        >
          <div className="flexColStart v-right">
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
