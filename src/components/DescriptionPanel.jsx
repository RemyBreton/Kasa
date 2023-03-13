import React from 'react'
import '../styles/DescriptionPanel.scss'

function DescriptionPanel(props) {
  return (
    <div className="description-panel">
    <h4 className="description-panel__header">
      <span>{props.title}</span>
      <i className="fa-sharp fa-solid fa-chevron-up"></i>
      </h4>
    <p>
      {props.content}
    </p>
  </div>
  )
}

export default DescriptionPanel