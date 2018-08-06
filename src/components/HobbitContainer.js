import React from "react";
import Hobbit from "./Hobbit";
import EditForm from "./EditForm";

import hobbits from '../data/hobbit_data'


class HobbitContainer extends React.Component {

  render() {
    const hobsWithJobs = hobbits.map(hobbit => {
      return <Hobbit {...hobbit} />;
    });
    console.log(this.props.hobbits)
    return (
      <div>
        <div className="App-logo">Jobbit</div>
        <EditForm />
        <div className="hobbitsContainer">{hobsWithJobs}</div>
      </div>
    );
  }
}

export default HobbitContainer
