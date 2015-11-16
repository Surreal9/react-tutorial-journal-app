import React from 'react';

const PostListing = ({onStartPostEdit, posts}) =>
  <div>
    {posts.map((post, ix) =>
      <div key={post.date}>
        <span style={{fontWeight: 'bold'}}>{post.date.toLocaleString()}</span>
        [<i onClick={() => onStartPostEdit(ix)} className="fa fa-pencil" title="Edit Post"></i>]
        <p>{post.text}</p>
      </div>)}
  </div>;

PostListing.propTypes = {
  onStartPostEdit: React.PropTypes.func,
  posts: React.PropTypes.array,
};

export default PostListing;
