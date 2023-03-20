import React, { useState } from "react";
import "../styles/DescriptionPanel.scss";

function DescriptionPanel(props) {
  // Création des panels avec deux class differentes en fonction de si le panels est visible ou non au clique
  const [isVisibleContent, setIsVisibleContent] = useState(true);

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
