import React from 'react';
import marked from 'marked';

const PostListing = ({onStartPostEdit, onDeletePost, posts}) =>
  <div>
    {posts.map((post, ix) =>
      <div key={post.date}>
        <span style={{fontWeight: 'bold'}}>{post.date}</span>
        [<i onClick={() => onStartPostEdit(ix)} className="fa fa-pencil" title="Edit Post"></i>]
        [<i onClick={() => onDeletePost(ix)} className="fa fa-trash" title="Delete Post"></i>]
        <div dangerouslySetInnerHTML={{__html: marked(post.text)}} />
      </div>)}
  </div>;

PostListing.propTypes = {
  onStartPostEdit: React.PropTypes.func,
  onDeletePost: React.PropTypes.func,
  posts: React.PropTypes.array,
};

export default PostListing;
