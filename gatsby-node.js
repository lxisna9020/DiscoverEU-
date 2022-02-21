const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const tripsDetails = path.resolve(`src/pages/tripsDetails.js`)
  const queryResults = await graphql(`
    query {
      allDataJson {
        edges {
          node {
            trips {
              name
              alt
              slug
              title
              description
              title1
              title2
              description1
              title3
              description2
              title4
              description3
              title5
              description4
              description5
              images {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  console.log(queryResults)
  queryResults.data.allDataJson.edges[0].node.trips.forEach(trip => {
    createPage({
      path: `/trips/${trip.slug}`,
      component: tripsDetails,
      context: {
        // This time the entire trip is passed down as context
        trip: trip,
      },
    })
  })
}
