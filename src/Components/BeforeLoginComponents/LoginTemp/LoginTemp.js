/* eslint-disable */
import { Link } from "react-router-dom";
import firebaseApp, { auth, googleProvider } from "../../../firebase";
import apple from "../../../assets/svg/apple.svg";
import { useState } from "react";
import { useHistory } from 'react-router-dom';

export default function LoginTemp() {

  const [user, setUser] = useState({ email: "", password: "" });
  const [emailError, setEmailErorr] = useState("");
  const [PasswordError, setPasswordErrorr] = useState("");
  const { push } = useHistory();

  const getUserData = e => {
    const name = e.target.name;
    const val = e.target.value;
    switch (name) {
      case "email":
        setUser({
          ...user,
          email: val,
        });
        setEmailErorr(
          val === "" ? "*Email required" : !val.match(/^([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)
            ? "*Please inter Valid Email" : null
        );
        break;
      case "password":
        setUser({
          ...user,
          password: val,
        });
        setPasswordErrorr(
          val === ""
            ? "*This is Requir"
            : val.length < 8
              ? "*Password Shoul be More 8 Character"
              : null
        );
        break;
      default:
        break;
    }
  };

  const login = e => {
    console.log(user);
    e.preventDefault();
    auth.signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        console.log(res);
        if (res.user) {
          console.log(res.user.displayName);
          res.user.displayName === "talent" ?
            push("/find-work") : push("/home");
        }
      })
      .catch((error) => {
        console.log(error.message);
        console.log(error.code);
      });
  };

  const googleLogin = () => {
    auth
      .signInWithPopup(googleProvider)
      .then(result => {
        console.log(result.user.displayName);
        /** @type {firebaseApp.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        // push("/find-work");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-5  mx-auto">
            <div className="shadow-sm p-5 mb-5 bg-white rounded mx-auto mt-5 w-100  border ">
              <h5 data-v-904d5b16 className="text-center m-0">
                <span data-v-733406b2 data-v-44072c38>
                  Log in and get to work
                </span>
              </h5>
              <form>
                <div className="form-group col-8 mx-auto mt-3">
                  <span className="text-danger">{emailError}</span>
                  <input
                    type="email"
                    name="email"
                    className={`form-control shadow-none ${emailError ? "border-danger" : ""}`}
                    aria-describedby="emailHelp"
                    placeholder="Username or Email"
                    onInput={getUserData}
                  />
                </div>
                <div className="form-group col-8 mx-auto mt-3">
                  <span className="text-danger">{PasswordError}</span>
                  <input
                    type="password"
                    name="password"
                    className={`form-control shadow-none ${PasswordError ? "border-danger" : ""}`}
                    aria-describedby="emailHelp"
                    placeholder="Password"
                    onInput={getUserData}
                  />
                </div>
                <div className="form-group col-8 mx-auto mt-3 d-flex justify-content-between">
                  <label>
                    <input type="checkbox" className="me-2" />
                    Keep me logged in
                  </label>
                  <Link to="">Forgot password?</Link>
                </div>
                <div className="d-grid gap-2 col-8 mx-auto mt-3 hitbtn-className loginpcolor">
                  <button
                    className="btn bg-upwork "
                    onClick={login}
                    disabled={PasswordError != null || emailError != null}
                  >
                    Login
                  </button>
                </div>
                <div className="d-grid gap-2 col-8 mx-auto mt-3">
                  <Link to="" className="text-center">
                    Not you?
                  </Link>
                </div>
                <div className="separator mt-4 col-8 mx-auto">or</div>
                <div
                  className="google-btn  gap-2 mx-auto mt-3 rounded hitbtn-className col-sm-12"
                  onClick={googleLogin}
                >
                  <div className="google-icon-wrapper">
                    <img
                      className="google-icon"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    />
                  </div>
                  <div className="text-justify ">
                    <p
                      className="text-center text-white"
                      style={{ paddingTop: ".3em" }}
                    >
                      Sign in with google
                    </p>
                  </div>
                </div>
                <div className="mb-5 d-grid gap-2 col-8 mx-auto mt-3 border border-dark rounded">
                  <button className="btn bg-light " type="button">
                    {" "}
                    <img src={apple} className="apple-icon" />
                    sign in with apple
                  </button>
                </div>
                <hr />
                <div>
                  <div className="separator mt-4 col-8 mx-auto">
                    New to Upwork?
                  </div>
                  <div className="d-grid gap-2 col-md-5 col-sm-10 mx-auto mt-3   rounded mb-5">
                    <Link className="btn signup" to="/sign-up">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}