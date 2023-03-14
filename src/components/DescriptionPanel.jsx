import React, { useState } from "react";
import "../styles/DescriptionPanel.scss";

function DescriptionPanel(props) {
  const [isVisibleContent, setIsVisibleContent] = useState(false);

  const showContent = () => {
    setIsVisibleContent(!isVisibleContent);
  };
  const contentClass =
    (isVisibleContent ? "hidden" : "visible") + " description-panel__content";
  const chevronClass =
    (isVisibleContent ? "fa-chevron-down" : "fa-chevron-up") +
    " fa-sharp fa-solid";
  return (
    <div className="description-panel">
      <h4 className="description-panel__header">
        <span>{props.title}</span>
        <i className={chevronClass} onClick={showContent}></i>
      </h4>
      <p className={contentClass}>{props.content}</p>
    </div>
  );
}

export default DescriptionPanel;
