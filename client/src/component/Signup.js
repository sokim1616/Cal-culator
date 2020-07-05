import React, { useState, useEffect } from 'react';
import Modal from "react-modal";
import './style.css';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

const Signup = ({ SUModalIsOpen, setSUIsOpen, closeSUModal }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    age: '',
    gender: '' //null?
  })

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    switch (name) {
      case 'username':
        errors.username =
          value.length < 5
            ? 'Username must be 5 characters long!'
            : '';
        break;
      case 'email':
        errors.email =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password':
        errors.password =
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      case 'age':
        errors.age =
          value.length > 3
            ? 'Please write your age in a correct form!'
            : '';
        break;
      case 'gender':
        errors.gender =
          value
            ? 'Please select your gender!'
            : '';
        break;
      default:
        break;
    }

    // 아래 if else 문은 개선이 될 수 있을 것 같습니다..!
    if (name === 'username') {
      setUsername(value)
    }
    else if (name === 'email') {
      setEmail(value)
    }
    else if (name === 'password') {
      setPassword(value)
    }
    else if (name === 'age') {
      setAge(value)
    }
    else if (name === 'Male' || name === 'Female') {
      setGender(value)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(errors)) {
      console.info('Valid Form')
    } else {
      console.error('Invalid Form')
    }
  }

  return (
    <div>
      <Modal
        isSUOpen={SUModalIsOpen}
        onRequestSUClose={closeSUModal}
      >
        <div className='wrapper'>
          <div className='form-wrapper'>
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit} noValidate>
              <div className='email'>
                <label htmlFor="email">Email</label>
                <input type='email' name='email' onChange={handleChange} noValidate />
                {errors.email.length > 0 &&
                  <span className='error'>{errors.email}</span>}
              </div>
              <div className='password'>
                <label htmlFor="password">Password</label>
                <input type='password' name='password' onChange={handleChange} noValidate />
                {errors.password.length > 0 &&
                  <span className='error'>{errors.password}</span>}
              </div>
              <div className='username'>
                <label htmlFor="username">Username</label>
                <input type='text' name='username' onChange={handleChange} noValidate />
                {errors.username.length > 0 &&
                  <span className='error'>{errors.username}</span>}
              </div>
              <div className='age'>
                <label htmlFor="age">Age</label>
                <input type='text' name='age' onChange={handleChange} noValidate />
                {errors.age.length > 0 &&
                  <span className='error'>{errors.age}</span>}
              </div>
              <div className='gender'>
                <label htmlFor="gender">Gender</label>
                <input type='checkbox' name='gender' onChange={handleChange} noValidate />
                {errors.gender &&
                  <span className='error'>{errors.gender}</span>}
              </div>
              <div className='submit'>
                <button>Create</button>
              </div>
              <div className='login'>
                <button>LOG IN</button>
              </div>
            </form>
          </div>
        </div >
      </Modal>
    </div>
  );
}

// import React from "react";
// // import ReactDOM from 'react-dom';
// import Modal from "react-modal";
// //import axios from 'axios';
// // import { Link, Route, withRouter } from 'react-router-dom';

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

// Modal.setAppElement("#root");

// function Signup({ openSUModal, SUModalIsOpen, setSUIsOpen }) {
//   var subtitle;

//   const [userEmail, setEmail] = React.useState();
//   const [userPassword, setPassword] = React.useState();
//   const [userName, setName] = React.useState();
//   const [userGender, setGender] = React.useState();
//   const [userHeight, setHeight] = React.useState();
//   const [userWeight, setWeight] = React.useState();

//   let stateValue = {};



//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = "#h00"; // 씩불랙
//   }

//   function closeModal() {
//     setSUIsOpen(false);
//   }

//   const submitValue = () => {
//     stateValue = {
//       email: userEmail,
//       password: userPassword,
//       username: userName,
//       gender: userGender,
//       height: userHeight,
//       weight: userWeight,
//     };
//     console.log(stateValue);
//   };

//   return (
//     <div>
//       {/* <button onClick={openSUModal}>Open Modal</button> */}
//       <Modal
//         isOpen={SUModalIsOpen}
//         onAfterOpen={afterOpenModal}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Example Modal"
//       >
//         <h2 ref={(_subtitle) => (subtitle = _subtitle)}>SIGN UP</h2>
//         {/* <button onClick={closeModal}>close</button> */}
//         {/*<div>I am a modal</div> */}
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             window.location.replace("/");
//             // axios.post('http://localhost:4000/signin/', stateValue, {withCredentials: true})
//             // .then(response => {
//             //   if(response.status === 200){
//             //     // isLoginn => true, userInfo
//             //   }
//             // })
//             // .catch(error => {
//             //   console.log(error);
//             // });
//           }}
//         >
//           <div>EMAIL</div>
//           <input
//             type="email"
//             placeholder="적어 이메일"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <div>PASSWORD</div>
//           <input
//             type="password"
//             placeholder="적어 비밀번호"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <div>FULL NAME</div>
//           <input
//             placeholder="적어 니 이름"
//             onChange={(e) => setName(e.target.value)}
//           />
//           <div>GENDER</div>
//           <input
//             type="checkbox"
//             value={"male"}
//             onChange={(e) => setGender(e.target.value)}
//           />
//           <span>MALE</span>{" "}
//           <input
//             type="checkbox"
//             value={"female"}
//             onChange={(e) => setGender(e.target.value)}
//           />
//           <span>FEMALE</span>
//           <div>HEIGHT(cm)</div>
//           <input
//             placeholder="적어 니 높이"
//             onChange={(e) => setHeight(e.target.value)}
//           />
//           <div>WEIGHT(kg)</div>
//           <input
//             placeholder="적어 너의 비밀"
//             onChange={(e) => setWeight(e.target.value)}
//           />
//           <div>
//             <button onClick={submitValue} type="submit">
//               SIGN UP
//             </button>
//             <button>LOGIN</button>
//           </div>
//         </form>
//       </Modal>
//     </div>
//   );
// }

export default Signup;
