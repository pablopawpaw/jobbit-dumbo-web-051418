
import React from "react";
import { connect } from "react-redux";
import { updateHobbit } from './actions/index'


class EditHobbit extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div style={{ textAlign: "center" }}>
        <div> </div>
        <form onSubmit={/* handle the submit */}>
          <h5> Name: {/*Hobbit you wish to edit name here*/} </h5>
          <label>
            Title
          </label>
          <input name="title" value={/*Hobbit you wish to edit title here*/} />
          <label>
            Key Skill
          </label>
          <input name="key_skill" value={/*Hobbit you wish to edit key_skill here*/}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}


export default EditHobbit
