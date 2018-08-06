import React from "react";
import Hobbit from "./Hobbit";
import EditHobbit from "./EditForm";


class HobbitContainer extends React.Component {

  render() {
    const hobsWithJobs = this.props.hobbits.map(hobbit => {
      return <Hobbit {...hobbit} />;
    });
    console.log(this.props.hobbits)
    return (
      <div>
        <div className="logo">Jobbit</div>
        <EditForm />
        <div className="hobbitsContainer">{hobsWithJobs}</div>
      </div>
    );
  }
}

export default HobbitContainer
