import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
// import { formGetData, formPostData, patchData } from "../Api/ApiRequest"
import ReactModalLogin from "react-modal-login";
import { postData } from "../Api/ApiRequest";

const SignInModel = ({ setCancel }) => {
  //   const [value, setValue] = useState(0);
  const [show, setShow] = useState(true);
  //   const [comment, setComment] = useState("")
  //   const [reviews, setReviews] = useState([]);

  const handleCancel = () => {
    setShow(false);
    setCancel(false);
  };

  async function onLogin() {
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    try {
      const resData = await postData("/auth/login", { email, password });

      console.log(resData.data.user.token);
      localStorage.setItem("token", resData.data.user.token);
      setShow(false);
    } catch (err) {
      console.log(err.response);
    }
  }
  function onRegister() {
    console.log("register");
  }
  return (
    <>
      <ReactModalLogin
        visible={show}
        onCloseModal={handleCancel}
        form={{
          onLogin: onLogin,
          onRegister: onRegister,

          loginBtn: {
            label: "Sign in",
          },
          registerBtn: {
            label: "Sign up",
          },

          loginInputs: [
            {
              containerClass: "RML-form-group",
              label: "Email",
              type: "email",
              inputClass: "RML-form-control",
              id: "email",
              name: "email",
              placeholder: "Email",
            },
            {
              containerClass: "RML-form-group",
              label: "Password",
              type: "password",
              inputClass: "RML-form-control",
              id: "password",
              name: "password",
              placeholder: "Password",
            },
          ],
          registerInputs: [
            {
              containerClass: "RML-form-group",
              label: "Number",
              type: "number",
              inputClass: "RML-form-control",
              id: "login",
              name: "login",
              placeholder: "Whatsapp Number",
            },
            {
              containerClass: "RML-form-group",
              label: "Email",
              type: "email",
              inputClass: "RML-form-control",
              id: "email",
              name: "email",
              placeholder: "Email",
            },
            {
              containerClass: "RML-form-group",
              label: "Password",
              type: "password",
              inputClass: "RML-form-control",
              id: "password",
              name: "password",
              placeholder: "Password",
            },
          ],
          recoverPasswordInputs: [
            {
              containerClass: "RML-form-group",
              label: "Email",
              type: "email",
              inputClass: "RML-form-control",
              id: "email",
              name: "email",
              placeholder: "Email",
            },
          ],
        }}
      />
    </>
  );
};
export default SignInModel;
