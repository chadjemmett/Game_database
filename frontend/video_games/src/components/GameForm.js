import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


function GameForm(props) {
  return (
    <div className={"formContainer"}>

     <form onSubmit={props.handleSubmit}>
     <div className={"leftForms"}>
      <label className={"labelText"}>
       Title:
        <input className={"formBox"} type="text" name="title" value={props.props.title} onChange={props.handleChange}/>
      </label>
      <label className={"labelText"}>
       Release Date:
        <input className={"formBox"} type="text" name="release_date" value={props.props.release_date} onChange={props.handleChange}/>
      </label>
      <label className={"labelText"}>
       Platform:
        <input  className={"formBox"} type="text" name="platform" value={props.props.platform} onChange={props.handleChange}/>
      </label>
      <label className={"labelText"}>
       Genre:
        <input  className={"formBox"} type="text" name="genre" value={props.props.genre} onChange={props.handleChange}/>
      </label>
      </div>
      <div className={"rightForms"}>
      <label className={"labelText"}>
       Publisher:
        <input  className={"formBox"} type="text" name="publisher" value={props.props.publisher} onChange={props.handleChange}/>
      </label>
      <label className={"labelText"}>
       Developer:
        <input  className={"formBox"} type="text" name="developer" value={props.props.developer} onChange={props.handleChange}/>
      </label>
      <label className={"labelText"}>
      Description:
        <input  className={"formBox"} type="text" name="description" value={props.props.description} onChange={props.handleChange}/>
      </label>
      <input className={"button"} type="submit" value="Submit" />
      </div>
    </form> 
    </div>
  );
}

export default GameForm;
