import React from 'react'
import '../styles/DescriptionPanel.scss'

function DescriptionPanel() {
  return (
    <div className="description-panel">
    <h4 className="description-panel__header">
      <span>Description</span>
      <i className="fa-sharp fa-solid fa-chevron-up"></i>
      </h4>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
      accusamus beatae aspernatur voluptates at delectus nisi aperiam
      laborum, aliquid velit est quasi quaerat facere deserunt accusantium
      laudantium nulla, assumenda in placeat eaque! Libero, dolores!
      Asperiores, nulla veritatis quisquam atque consequuntur vel in
      voluptas. Nam deleniti numquam quae fugiat laborum dolores.
    </p>
  </div>
  )
}

export default DescriptionPanel