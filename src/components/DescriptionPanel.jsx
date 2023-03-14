import React, { useState } from "react";
import "../styles/DescriptionPanel.scss";

function DescriptionPanel(props) {
  const [isVisibleContent, setIsVisibleContent] = useState(false);

  const showContent = () => {
    setIsVisibleContent(!isVisibleContent);
  };

  return (
    <div className="description-panel">
      <h4 className="description-panel__header">
        <span>{props.title}</span>
        <i
          className="fa-sharp fa-solid fa-chevron-up"
          onClick={showContent}
        ></i>
      </h4>
       {isVisibleContent && <p className="description-panel__content">{props.content}</p>}
    </div>
  );
}

export default DescriptionPanel;
