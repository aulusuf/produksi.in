import React, { useEffect } from "react";
import axios from "axios";
import authHeader from "../../services/auth-header";

export default function TestingManajemen() {
  useEffect(() => {
    authHeader();
    axios.get("user").then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  });
  return <div>helloooo</div>;
}
