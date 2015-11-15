import React from 'react';

const JournalInput = ({onAddPost, newPostText, onChangePostText}) =>
  <div>
      <div>
        <label>
          <div>Enter New Post</div>
          <textarea rows="6" cols="100" value={newPostText} onChange={onChangePostText}/>
        </label>
      </div>
      <button onClick={onAddPost}>Add Post</button>
  </div>;

JournalInput.propTypes = {
  onAddPost: React.PropTypes.func,
  onChangePostText: React.PropTypes.func,
  newPostText: React.PropTypes.string,
};

export default JournalInput;
