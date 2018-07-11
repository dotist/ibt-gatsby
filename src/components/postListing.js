import React from 'react'
import Link from 'gatsby-link'

const PostListing = ({post}) => (
  <article>
    <h4>
      <Link to={ post.fields.slug }>{ post.frontmatter.title }</Link>
    </h4>
    <h5>{ post.frontmatter.date }</h5>
    <p>
      {post.excerpt}
    </p>
  </article>
);

export default PostListing;