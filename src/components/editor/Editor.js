import React from "react";
import Header from "../header/Header";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import { Controlled as CodeMirror } from "react-codemirror2";
import "./editor.css";

const Editor = ({ language, display, onChange, value }) => {
  const handleOnChange = (value) => {
    onChange(value);
  };

  return (
    <div className="editor">
      <Header language={display} />
      <CodeMirror
        className="code-mirror-editor"
        options={{
          mode: language,
          lint: true,
          theme: "material",
          lineNumbers: true,
          lineWrapping: true,
        }}
        value={value}
        onBeforeChange={(editor, data, value) => {
          handleOnChange(value);
        }}
      />
    </div>
  );
};

export default Editor;
