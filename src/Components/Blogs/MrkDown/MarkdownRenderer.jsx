import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import file from "./blog1.md"
import "./mark.css";

function MarkdownRenderer() {
  const [markdownText, setMarkdownText] = useState(''); 
  useEffect(() => {
    fetch(file)
      .then((response) => response.text())
      .then((data) => setMarkdownText(data))
      .catch((error) => console.error('Error fetching Markdown content:', error));
  }, []);

  return (
    <div className="blog_1">
      <Markdown>{markdownText}</Markdown>
    </div>
  );
}

export default MarkdownRenderer;






