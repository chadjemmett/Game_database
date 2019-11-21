import React from 'react';

function GameForm(props) {
  return (
    <div>
    <form onSubmit={props.handleSubmit}>
      <label>
       Title:
        <input type="text" name="title" value={props.title} onChange={props.handleChange}/>
      </label>
      <label>
       Release Date:
        <input type="text" name="release_date" value={props.release_date} onChange={props.handleChange}/>
      </label>
      <label>
       Platform:
        <input type="text" name="platform" value={props.platform} onChange={props.handleChange}/>
      <label>
      </label>
       Genre:
        <input type="text" name="genre" value={props.genre} onChange={props.handleChange}/>
      </label>
      <label>
       Publisher:
        <input type="text" name="publisher" value={props.publisher} onChange={props.handleChange}/>
      </label>
      <label>
       Developer:
        <input type="text" name="developer" value={props.developer} onChange={props.handleChange}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
    </div>
  );
}

export default GameForm;
