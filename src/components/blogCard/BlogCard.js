import React from "react";
import "./BlogCard.css";

export default function BlogCard({ blog }) {
  function openUrlInNewTab(url) {
    if(url !== undefined) {
      var win = window.open(url, "_blank");
      win.focus();
    }
  }

  return (
    <div>
      
    </div>
  );
}
