import { marked } from "marked";

const Preview = ({content}) => { 
  
    const getMarkdownText = () => {
      var rawMarkup = marked.parse(content);
      return { __html: rawMarkup };
    }
  
    return (
      <div id="preview" dangerouslySetInnerHTML={getMarkdownText()} />
    )
}

export default Preview;