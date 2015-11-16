import React from 'react';

const JournalInput = ({onSavePost, onChangePostText, onCancelEdit, inputText, editing}) =>
  <div>
      <div>
        <label>
          <div>Journal Post</div>
          <textarea rows="6" cols="100" value={inputText} onChange={onChangePostText}/>
        </label>
      </div>
      <button onClick={onSavePost}>{editing ? 'Update' : 'Add'} Post</button>
      {editing && <button onClick={onCancelEdit}>Cancel</button>}
  </div>;

JournalInput.propTypes = {
  onSavePost: React.PropTypes.func,
  onChangePostText: React.PropTypes.func,
  onCancelEdit: React.PropTypes.func,
  inputText: React.PropTypes.string,
  editing: React.PropTypes.bool,
};

export default JournalInput;
