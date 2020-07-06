import React from "react";
import Modal from "react-modal";
import axios from "axios";
import "./loginModal.css";

import "@rmwc/button/styles";
import { Button } from "@rmwc/button";

const customStyles = {
  content: {
    position: "fixed",
    top: "60%",
    left: "50%",
    width: "360px",
    height: "540px",
    transform: "translate(-50%,-50%)",
    overflow: "none",
    border: "0px",
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

const Login = ({
  loginState,
  loginModalOpen,
  closeLoginModal,
  openSignupModal,
}) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({
    email: "",
    password: "",
  });

  const userState = {
    email: email,
    password: password,
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 5 ? "Full Name must be 5 characters long!" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      case "age":
        errors.age =
          value.length < 2 ? "Please write your age in a correct form!" : "";
        break;
      default:
        break;
    }
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(errors)) {
      console.info("Valid Form");
      axios
        .post("http://localhost:4000/user/signin", userState, {
          withCredentials: true,
        })
        .then((response) => {
          if (response.data === "invalid") {
            alert("Invalid Email or Password ");
          } else {
            if (response.status === 200) {
              console.log("OK");
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.error("Invalid Form");
    }
  };

  return (
    <div>
      <Modal
        isOpen={loginModalOpen}
        onRequestClose={closeLoginModal}
        style={customStyles}
        contentLabel="Login Modal"
      >
        <div className="wrapper">
          <div className="form-wrapper">
            <h2 className="title">LOGIN</h2>
            <form onSubmit={handleSubmit} noValidate>
              <div className="email">
                <label htmlFor="email">EMAIL</label>
                <input
                  placeholder={"너의 아이덴티티...널 알려줘..."}
                  type="email"
                  name="email"
                  onChange={handleChange}
                  noValidate
                />
                {errors.email.length > 0 && (
                  <span className="error">{errors.email}</span>
                )}
              </div>
              <div className="password">
                <label htmlFor="password">PASSWORD</label>
                <input
                  placeholder={"써보시지 너의 비밀... 자신있다면..."}
                  type="password"
                  name="password"
                  onChange={handleChange}
                  noValidate
                />
                {errors.password.length > 0 && (
                  <span className="error">{errors.password}</span>
                )}
              </div>
              <div className="button-div">
                <span className="submit">
                  <Button raised onClick={openSignupModal}>
                    Create
                  </Button>
                </span>
                <span className="loginnn">
                  <Button type="submit" raised>
                    LOG IN
                  </Button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
