import React from 'react';

import JournalInput from './JournalInput';
import PostListing from './PostListing';
import PostFilter from './PostFilter';

const NEWPOST = -1;

export default class JournalContainer extends React.Component {

  constructor(props) {
    super(props);

    // bind 'this' reference for our class methods
    this.onChangePostText = ::this.onChangePostText;
    this.onChangeFilterText = ::this.onChangeFilterText;
    this.onSavePost = ::this.onSavePost;
    this.onStartPostEdit = ::this.onStartPostEdit;
    this.onCancelEdit = ::this.onCancelEdit;
    this.onDeletePost = ::this.onDeletePost;
  }

  // Set initial state
  state = {
    posts: [],
    inputText: '',
    filterText: '',
    editPostIx: NEWPOST,
  }

  componentWillMount() {
    if (localStorage.posts !== undefined) {
      this.setState({posts: JSON.parse(localStorage.posts)});
    }
  }

  onChangePostText(e) {
    this.setState({inputText: e.target.value});
  }

  onChangeFilterText(e) {
    this.setState({filterText: e.target.value});
  }

  onSavePost() {
    // Either save a new post
    if (this.state.editPostIx === NEWPOST) {
      const newPost = {
        text: this.state.inputText,
        date: new Date().toLocaleString(),
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

    this.persistPosts();
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

  onDeletePost(editPostIx) {
    this.state.posts.splice(editPostIx, 1);
    this.setState({
      posts: this.state.posts,
      editPostIx: NEWPOST,
      inputText: '',
    });

    this.persistPosts();
  }

  persistPosts() {
    localStorage.posts = JSON.stringify(this.state.posts);
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

        <PostFilter
          onChangeFilterText={this.onChangeFilterText}
          filterText={this.state.filterText}/>

        <br/>

        <PostListing
          onStartPostEdit={this.onStartPostEdit}
          onDeletePost={this.onDeletePost}
          posts={this.state.posts}
          filterText={this.state.filterText}/>

      </div>
    );
  }

}
