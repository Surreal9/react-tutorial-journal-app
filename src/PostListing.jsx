import React from 'react';

const PostListing = ({onStartPostEdit, onDeletePost, posts}) =>
  <div>
    {posts.map((post, ix) =>
      <div key={post.date}>
        <span style={{fontWeight: 'bold'}}>{post.date}</span>
        [<i onClick={() => onStartPostEdit(ix)} className="fa fa-pencil" title="Edit Post"></i>]
        [<i onClick={() => onDeletePost(ix)} className="fa fa-trash" title="Delete Post"></i>]
        <p>{post.text}</p>
      </div>)}
  </div>;

PostListing.propTypes = {
  onStartPostEdit: React.PropTypes.func,
  onDeletePost: React.PropTypes.func,
  posts: React.PropTypes.array,
};

export default PostListing;
