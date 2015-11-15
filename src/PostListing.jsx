import React from 'react';

const PostListing = ({posts}) =>
  <div>
    {posts.map(post =>
      <div key={post.date}>
        <span style={{fontWeight: 'bold'}}>{post.date.toLocaleString()}</span>
        <p>{post.text}</p>
      </div>)}
  </div>;

PostListing.propTypes = {
  posts: React.PropTypes.array,
};

export default PostListing;
