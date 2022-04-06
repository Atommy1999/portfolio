import React from "react"

import Work from "./Work"

import { useStaticQuery, graphql } from "gatsby"

const Works = () => {
  const data = useStaticQuery(graphql`
    query works {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
      allContentfulWorks {
        edges {
          node {
            title
            featuredImage {
              title
              file {
                url
              }
            }
            description {
              description
            }
            createdWith
            slug
            order
          }
        }
      }
    }
  `)

  const edges = data.allContentfulWorks.edges

  return (
    <div className="content">
      <h2 className="heading" id="works">
        Works
      </h2>

      <div className="flex flex-row flex-wrap w-full">
        {edges
          .sort((a, b) => {
            return a.node.order - b.node.order
          })
          .map(edge => (
            <Work key={edge.node.slug} work={edge.node} />
          ))}
      </div>
    </div>
  )
}

export default Works
