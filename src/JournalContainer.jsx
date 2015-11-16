import React from 'react';

import JournalInput from './JournalInput';
import PostListing from './PostListing';

const NEWPOST = -1;

export default class JournalContainer extends React.Component {

  constructor(props) {
    super(props);

    // bind 'this' reference for our class methods
    this.onChangePostText = ::this.onChangePostText;
    this.onSavePost = ::this.onSavePost;
    this.onStartPostEdit = ::this.onStartPostEdit;
    this.onCancelEdit = ::this.onCancelEdit;
  }

  // Set initial state
  state = {
    posts: [],
    inputText: '',
    editPostIx: NEWPOST,
  }

  onChangePostText(e) {
    this.setState({inputText: e.target.value});
  }

  onSavePost() {
    // Either save a new post
    if (this.state.editPostIx === NEWPOST) {
      const newPost = {
        text: this.state.inputText,
        date: new Date(),
      };
      this.state.posts = this.state.posts.concat(newPost);
    } else {
      // or edit an existing one
      this.state.posts[this.state.editPostIx].text = this.state.inputText;
    }

    this.setState({
      posts: this.state.posts,
      inputText: '',
      editPostIx: NEWPOST,
    });
  }

  onStartPostEdit(editPostIx) {
    this.setState({
      editPostIx,
      inputText: this.state.posts[editPostIx].text,
    });
  }

  onCancelEdit() {
    this.setState({editPostIx: NEWPOST, inputText: ''});
  }

  render() {
    return (
      <div>
        <h1>Local Journal</h1>
        <JournalInput
          onSavePost={this.onSavePost}
          onChangePostText={this.onChangePostText}
          onCancelEdit={this.onCancelEdit}
          inputText={this.state.inputText}
          editing={this.state.editPostIx !== NEWPOST} />
        <br/>
        <PostListing
          onStartPostEdit={this.onStartPostEdit}
          posts={this.state.posts}/>
      </div>
    );
  }

}
