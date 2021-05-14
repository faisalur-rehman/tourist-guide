import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { Row, Col, CardBody, Card, Container, Button } from "reactstrap";
import { formGetData, formUserProfilePost, patchData } from "../Api/ApiRequest";
import { Link, Redirect } from "react-router-dom";
import FormikComponent from "../Formik/Formik";
import axios from "axios";

const initialValues = { telephone: "", gender: "", language: "", avatar: "" };

const UserProfile = () => {
  const [value, setValues] = useState();
  const [error, setError] = useState(null);
  const [id, setId] = useState();
  const [clicked, setClicked] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [image, setImage] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await formGetData(
          `/user-profile`,
          localStorage.getItem("token")
        );
        if (data.profile) {
          initialValues.telephone = data.profile.telephone;
          initialValues.language = data.profile.language;
          initialValues.gender = data.profile.gender;
          initialValues.avatar = data.profile.avatar;
          setValues(initialValues);
        }
        console.log(data);
        setError(null);
      } catch (err) {
        // setError(err.response)
        console.log(err.response);
      }
    }
    fetchData();
  }, []);
  function handleImageUpload(e) {
    let image = e.target.files[0];
    setImage(image);
  }
  function validate(values) {
    const errors = {};
    // if (!values.telephone) {
    //   errors.telephone = "Required";
    // }
    // if (!values.whatsappNumber) {
    //   errors.whatsappNumber = "Required";
    // }

    return errors;
  }
  async function handleSubmit(data) {
    //   console.log(data);
    console.log(image);
    let formData = new FormData();
    formData.append("avatar", image);
    formData.append("telephone", data.telephone);
    formData.append("gender", data.gender);
    formData.append("language", data.language);
    console.log(formData);

    try {
      const token = localStorage.getItem("token");
      const resData = await axios({
        method: "post",
        url: "http://localhost:8000/user-profile/",

        headers: {
          "x-auth-token": token,
          "content-type": "multipart/form-data",
        },

        data: formData,
      });
      setError(null);
      console.log(resData);
    } catch (err) {
      console.log(err.response);
    }
    setClicked(true);
    setRedirect(true);
  }
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Col>
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue }) => (
              <Form>
                <div className="account-pages my-5 pt-sm-5">
                  <div>
                    <Row className="justify-content-center">
                      <Col>
                        <Card className="overflow-hidden">
                          <div className="bg-primary bg-soft">
                            <Row>
                              <Col xs={7}>
                                <div className="text-primary p-4">
                                  <h5 className="text-primary">
                                    Introduction !
                                  </h5>
                                </div>
                              </Col>
                              <Col className="col-5 align-self-end"></Col>
                            </Row>
                          </div>
                          <CardBody className="pt-0">
                            <div className="p-2">
                              <label className="mt-3" htmlFor="language">
                                Language:
                              </label>
                              <Field
                                name="language"
                                id="language"
                                className="form-control"
                              />
                              <ErrorMessage
                                name="language"
                                component="div"
                                style={{ color: "red" }}
                              />
                              <br />
                              <label className="mt-3" htmlFor="telephone">
                                Whatsapp Number:
                              </label>
                              <Field
                                name="telephone"
                                id="telephone"
                                className="form-control"
                              />
                              <ErrorMessage
                                name="telephone"
                                component="div"
                                style={{ color: "red" }}
                              />
                              <br />
                              <p>Gender:</p>
                              <label>
                                <Field
                                  type="radio"
                                  name="gender"
                                  value="male"
                                />
                                Male
                              </label>
                              <br />
                              <label>
                                <Field
                                  type="radio"
                                  name="gender"
                                  value="female"
                                />
                                Female
                              </label>

                              <ErrorMessage
                                name="gender"
                                component="div"
                                style={{ color: "red" }}
                              />
                              <br />
                              <label>Upload Image</label>
                              <br />
                              <input
                                id="file"
                                name="file"
                                type="file"
                                onChange={(event) => {
                                  handleImageUpload(event);
                                }}
                              />
                              <br />
                              <Button
                                type="submit"
                                className="mt-4"
                                color="primary"
                              >
                                Submit
                              </Button>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </Col>
        {/* <Col sm={2}></Col> */}
      </div>
    </div>
    // </div>
  );
};

export default UserProfile;
