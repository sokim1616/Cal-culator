import React from "react";
import { withRouter } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";
import "./loginModal.scss";
import "@rmwc/button/styles";
import { Button } from "@rmwc/button";
import { Typography } from "@rmwc/typography";
import "@rmwc/typography/styles";
import { Snackbar, SnackbarAction } from "@rmwc/snackbar";
import "@rmwc/snackbar/styles";

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
  const [open, setOpen] = React.useState(false);
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
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
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
              loginState();
              closeLoginModal();
              setOpen(!open);
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
  // const handleGoogleLogin = () => {
  //   axios.get("http://localhost:4000/auth/google");
  // };
  return (
    <div>
      <Snackbar
        open={open}
        onClose={(evt) => setOpen(false)}
        message='What did you eat today...?'
        dismissesOnAction
        action={
          <SnackbarAction
            style={{ color: "#ffff" }}
            label='Dismiss'
            onClick={() => console.log("Click Me")}
          />
        }
      />
      <Modal
        className='login'
        isOpen={loginModalOpen}
        onRequestClose={closeLoginModal}
        contentLabel='Login Modal'
      >
        <div className='wrapper'>
          <div className='form-wrapper'>
            <h2>LOGIN</h2>
            <form onSubmit={handleSubmit} noValidate>
              <div className='email'>
                <label htmlFor='email'>EMAIL</label>
                <input
                  type='email'
                  name='email'
                  onChange={handleChange}
                  noValidate
                />
                {errors.email.length > 0 && (
                  <span className='error'>{errors.email}</span>
                )}
              </div>
              <div className='password'>
                <label htmlFor='password'>PASSWORD</label>
                <input
                  type='password'
                  name='password'
                  onChange={handleChange}
                  noValidate
                />
                {errors.password.length > 0 && (
                  <span className='error'>{errors.password}</span>
                )}
              </div>
              <div className='submit'>
                <Button>LOGIN</Button>
              </div>
              <div className='create'>
                <Button onClick={openSignupModal}>CREATE</Button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default withRouter(Login);
