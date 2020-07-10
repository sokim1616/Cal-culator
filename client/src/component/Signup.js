import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import "./signupModal.scss";

import "@rmwc/button/styles";
import { Button } from "@rmwc/button";
import "@rmwc/radio/styles";
import { Radio } from "@rmwc/radio";
import { Snackbar, SnackbarAction } from "@rmwc/snackbar";
import "@rmwc/snackbar/styles";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = (errors) => {
  // 이 함수의 역할은 입력받은 값들의 형식이 맞는지 확인하는 함수
  let valid = true; // 디폴트 값은 형식이 맞다는 상태
  Object.values(errors).forEach(
    // 객체의 값에 errors라는 인자가 들어온 상태에서 forEach문을 돌려서
    (val) => val.length > 0 && (valid = false) // val
  );
  return valid;
};

const Signup = ({ signupModalOpen, openLoginModal, closeSignupModal }) => {
  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [value, setValue] = useState("");
  const [errors] = useState({
    username: "",
    email: "",
    password: "",
    age: "",
    gender: false,
  });

  const userState = {
    email: email,
    username: username,
    password: password,
    gender: value,
    age: age,
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    switch (name) {
      case "username":
        errors.username =
          value.length < 5 ? "Username must be 5 characters long..." : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value)
          ? ""
          : "Email is not valid...";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long..." : "";
        break;
      case "age":
        errors.age =
          Number(value).length > 3
            ? "Please write your age in a correct form..."
            : "";
        break;
      case "gender":
        errors.gender = !value.disabled ? "Please select your gender..." : "";
        break;
      default:
        break;
    }

    if (name === "username") {
      setUsername(value);
    }
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
    if (name === "age") {
      setAge(value);
    }
    if (name === "Male" || name === "Female") {
      setValue(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(errors)) {
      console.info("Valid Form");
      console.log(userState);
      axios
        .post("http://13.209.47.155:4000/user/signup", userState)
        .then((response) => {
          if (response.data === "conflict") {
            console.log("conflict");
          } else {
            if (response.status === 200) {
              setOpen(!open);
              openLoginModal();
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
      <Snackbar
        open={open}
        onClose={(evt) => setOpen(false)}
        message='Welcome to CAL-CULATOR!!'
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
        className='signup'
        isOpen={signupModalOpen}
        onRequestClose={closeSignupModal}
        contentLabel='SignUp Modal'
      >
        <div className='wrapper'>
          <div className='form-wrapper'>
            <h2>CREATE ACCOUNT</h2>
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
              <div className='username'>
                <label htmlFor='username'>USERNAME</label>
                <input
                  type='text'
                  name='username'
                  onChange={handleChange}
                  noValidate
                />
                {errors.username.length > 0 && (
                  <span className='error'>{errors.username}</span>
                )}
              </div>
              <div className='age'>
                <label htmlFor='age'>AGE</label>
                <input
                  type='text'
                  name='age'
                  onChange={handleChange}
                  noValidate
                />
                {errors.age.length > 0 && (
                  <span className='error'>{errors.age}</span>
                )}
              </div>
              <div className='gender'>
                <label htmlFor='gender'>GENDER</label>
                <div className='gender-radio'>
                  <Radio
                    className='male-radio'
                    value='Male'
                    checked={value === "Male"}
                    onChange={(evt) =>
                      setValue(String(evt.currentTarget.value))
                    }
                  >
                    MALE
                  </Radio>
                  <Radio
                    className='female-radio'
                    value='Female'
                    checked={value === "Female"}
                    onChange={(evt) =>
                      setValue(String(evt.currentTarget.value))
                    }
                  >
                    FEMALE
                  </Radio>
                </div>
              </div>
              <div className='createLogin'>
                <Button style={{ width: "280px" }} type='submit' raised>
                  CREATE || LOG IN
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Signup;
