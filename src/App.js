import { useEffect, useState } from "react";
import Editor from "./components/editor/Editor";
import "./App.css";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [getHtml, setHtml] = useLocalStorage("html", "");
  const [getCss, setCss] = useLocalStorage("css", "");
  const [getJs, setJs] = useLocalStorage("js", "");
  const [srcdoc, setSrcDoc] = useState("");

  useEffect(() => {
    let time = setTimeout(() => {
      setSrcDoc(`
      <!DOCTYPE html>
      <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>${getHtml}</body>
<style>${getCss}</style>
<script>${getJs}</script>
</html>
     `);
    }, 1000);

    return () => clearTimeout(time);
  }, [getHtml, getCss, getJs]);

  return (
    <div className="App">
      <div className="editor-wrapper">
        <Editor
          language="xml"
          display="HTML"
          value={getHtml}
          onChange={setHtml}
        />
        <Editor language="css" display="CSS" value={getCss} onChange={setCss} />
        <Editor
          language="javascript"
          display="javaScript"
          value={getJs}
          onChange={setJs}
        />
      </div>
      <div className="editor">
        <iframe
          width="100%"
          height="100%"
          srcDoc={srcdoc}
          frameBorder="0"
          sandbox="allow-scripts"
        />
      </div>
    </div>
  );
}

export default App;
