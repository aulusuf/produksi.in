import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Form, Col } from "react-bootstrap";
import axios from "axios";

import Api from "../Utils/Api";
import { CustomInput } from "../Components/CustomInput";
import { CustomButton } from "../Components/CustomButton";

const SignUp = (props) => {
  let history = useHistory();
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [errMsg, setErrMsg] = useState();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      await axios
        .post(Api.userSignup, { name, username, password })
        .then((res) => {
          const result = res.data;
          if (result.msg === "Error") {
            const err = `<p>${result.data}</>`;
            setErrMsg(err);
            setIsError(true);
          } else {
            alert(result.data);
            history.push(`/login`);
          }
        })
        .catch((err) => {
          setErrMsg(err.response.data.message);
          setIsError(true);
        });
    }

    setIsLoading(false);
    setValidated(true);
  };

  if (props.isLogin) {
    return <Redirect to={"/"} />;
  } else {
    return (
      <div className="main-container">
        <div className="container">
          <LoginWrapper>
            <h1>Sign Up</h1>
            {isError && (
              <div
                dangerouslySetInnerHTML={{ __html: errMsg }}
                style={{ marginTop: 20 }}
              />
            )}
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "40%",
              }}
            >
              <Form.Group as={Col} md="12" controlId="groupName">
                <CustomInput
                  controlId="nameInput"
                  label="Nama"
                  required={true}
                  placeholder="Nama"
                  onChange={(e) => setName(e.target.value)}
                  feedbackMsg="Nama tidak boleh kosong"
                />
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="groupUsername">
                <CustomInput
                  controlId="usernameInput"
                  label="Username"
                  required={true}
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  feedbackMsg="Username tidak boleh kosong"
                />
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="groupPassword">
                <CustomInput
                  controlId="passwordInput"
                  label="Password"
                  required={true}
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  feedbackMsg="Password cannot be empty."
                />
              </Form.Group>
              <CustomButton label={"Log In"} isLoading={isLoading} />
            </Form>
          </LoginWrapper>
        </div>
      </div>
    );
  }
};

export default SignUp;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
