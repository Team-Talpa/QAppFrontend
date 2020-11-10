import React, { Component } from "react";
 
class QList extends Component {
  render() {
    return (
      <div className="qListMain">
        <div className="header">
          <form>
            <input placeholder="enter answer">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
}
 
export default QList;