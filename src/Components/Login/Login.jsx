// import React, { Component } from "react";
// import "./Login.css";

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       password: "",
//     };
//   }

//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const login = {
//       username: this.state.username,
//       password: this.state.password,
//     };
//     this.props.userLogin(login);
//     console.log(`handle submit" ${login}`);
//     this.setState({
//       username: "",
//       password: "",
//     });
//   };

//   render() {
//     return (
//       <div className="login-wrapper">
//         <h2>Please Log In</h2>
//         <form onSubmit={this.handleSubmit}>

//           <label>Username</label>
//           <input
//             type="text"
//             name="username"
//             onChange={this.handleChange}
//             value={this.state.username}
//           />
//           <label>Password</label>
//           <input
//             type="text"
//             name="password"
//             onChange={this.handleChange}
//             value={this.state.password}
//           />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Login;