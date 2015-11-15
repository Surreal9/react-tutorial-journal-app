import React from 'react';

import JournalInput from './JournalInput';
import PostListing from './PostListing';

export default class JournalContainer extends React.Component {

  constructor(props) {
    super(props);

    // bind 'this' reference for our class methods
    this.addPost = ::this.addPost;
    this.changePostText = ::this.changePostText;
  }

  // Set initial state
  state = {
    posts: [],
    newPostText: '',
  }

  changePostText(e) {
    this.setState({newPostText: e.target.value});
  }

  addPost() {
    const newPost = {
      text: this.state.newPostText,
      date: new Date(),
    };

    const updatedPosts = this.state.posts.concat(newPost);
    this.setState({posts: updatedPosts, newPostText: ''});
  }

  render() {
    return (
      <div>
        <h1>Local Journal</h1>
        <JournalInput
          onAddPost={this.addPost}
          onChangePostText={this.changePostText}
          newPostText={this.state.newPostText} />
        <br/>
        <PostListing posts={this.state.posts}/>
      </div>
    );
  }

}
