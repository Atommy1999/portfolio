import React from "react"

import Work from "./Work"

const Works = ({ data }) => {
  return (
    <div className="content">
      <h2 className="heading" id="works">
        Works
      </h2>

      <div className="flex flex-wrap w-full">
        {data.allContentfulWorks.edges.map(edge => (
          <Work key={edge.node.slug} work={edge.node} />
        ))}
      </div>
    </div>
  )
}

export default Works
