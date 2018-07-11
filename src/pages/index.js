import React from 'react'
import Link from 'gatsby-link'
import PostListing from '../components/postListing.js';

const IndexPage = ({data}) => (
  <div>
    <h2>Posts</h2>
    {data.allMarkdownRemark.edges.map(({node}) => (
      <PostListing key={node.id} post={node} />
    ))}
  </div>
);

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD. MMMM YY")
          }
          html
          excerpt
          fields {
           slug
          }
        }
      }
    }
}
`;

export default IndexPage