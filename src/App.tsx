import React from "react";
import "./App.css";
import EmailEditor from "./components/email-editor/EmailEditor";
import EmailList from "./components/email-list/EmailList";

export default function App() {
  return (
    <div className="app">
      <EmailEditor />
      <EmailList />
    </div>
  );
}
