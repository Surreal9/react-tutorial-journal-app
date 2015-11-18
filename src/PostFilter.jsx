import React from 'react';

const PostFilter = ({onChangeFilterText, filterText}) =>
  <div>
      <div>
        <label>
          <div>Post Filter</div>
          <input value={filterText} onChange={onChangeFilterText}/>
        </label>
      </div>
  </div>;

PostFilter.propTypes = {
  onChangeFilterText: React.PropTypes.func,
  filterText: React.PropTypes.string,
};

export default PostFilter;
