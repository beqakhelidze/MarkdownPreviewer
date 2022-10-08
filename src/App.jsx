import React, { useState } from "react";
import { marked } from "marked";
import * as prismjs from "prismjs";
import { Default } from "./public";
import Preview from "./Components/Preview";
import Instructions from "./Components/Instructions";
import "./App.scss";


const renderer = new marked.Renderer();

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});


renderer.link = function (href, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const App = () => {

  const [Markdown, setMarkdown] = useState(Default);

  const [FullEditor, setFullEditor] = useState({
    fulled: false,
    Area: "both",
    IconClass: "fas fa-expand-arrows-alt",
    AreaHeight: "150px",
  });

  const TEXTAREA = {
    height: FullEditor.AreaHeight
  }

  const MakeFull = (Indicator) => {

    if (!FullEditor.fulled) {
      setFullEditor({
        fulled: true,
        Area: Indicator,
        IconClass: "fas fa-compress-arrows-alt",
        AreaHeight: "85vh",
      })
    } else {
      setFullEditor({
        fulled: false,
        IconClass: "fas fa-expand-arrows-alt",
        AreaHeight: "150px",
      })
    }
  }


  return (
    <div className="App">

      <Instructions setMarkdown={setMarkdown}/>

      {(!FullEditor.fulled || FullEditor.Area == "Editor") && <div id="editorWrap">
        <div className="Bar">
          <h3>Text editor</h3>
          <i className={FullEditor.IconClass} onClick={() => MakeFull("Editor")}></i>
        </div>
        <textarea id="editor" style={TEXTAREA} value={Markdown} onChange={(event) => {
          setMarkdown(event.target.value);
        }} />
      </div>}

      {(!FullEditor.fulled || FullEditor.Area == "Preview") && <div id="PreviewWrap">
        <div className="Bar">
          <h3>Preview</h3>
          <i className={FullEditor.IconClass} onClick={() => MakeFull("Preview")}></i>
        </div>
        <Preview content={Markdown} />
      </div>
      }
    </div>
  );
}

export default App;