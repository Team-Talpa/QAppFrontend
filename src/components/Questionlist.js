import React from 'react';


function Questionlist(props) {

  return (
    <div>
      <h1>{props.params.surveyHeader}</h1>
      <table><tbody>
      {
        props.params.questions.map((q, index) => 
          <tr key={index}>
            <td>{q.questionBody}</td>
            <input type='text' />
          </tr>)
      }
      </tbody></table>
    </div>
  );
}
 
export default Questionlist;