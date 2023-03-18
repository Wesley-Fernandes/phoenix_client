import React from "react";
import "./Auth.scss";

//functions
import { Outlet } from "react-router-dom";
import AppBar from "../../components/AppBar";


export default function Auth() {
  return (
    <div className="AuthPage">
        <AppBar />
      <main className="AuthMain">
        <Outlet />
      </main>
    </div>
  );
}
