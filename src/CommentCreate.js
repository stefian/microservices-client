import React from 'react';

export default ({ postId }) => {
  return <div>
    <form>
      <div className="form-group">
        <label>New Comment</label>
        <input className="form-control" />
      </div>
      <button btn btn-primary>Submit</button>
    </form>
  </div>;
};