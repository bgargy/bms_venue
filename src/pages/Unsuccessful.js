import React from "react"
import {Link } from "react-router-dom";
import "./Pages.css";

const Unsuccessful = (props) => {
  return (
    <div>
      <h1>Login unsuccessful, please try again</h1>
      <Link to="/"><button>
              Back to login
            </button>
            </Link>
    </div>
  )
};

export default Unsuccessful;