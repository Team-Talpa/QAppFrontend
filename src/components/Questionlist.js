import React, { useState, useEffect } from 'react';

function Questionlist(props) {
 // const [survey, setSurvey] = useState({surveyHeader: ''});
  const [questions, setQuestions] = useState([]);
  
  useEffect(() => {
    getQuestions();
  }, [])


  const getQuestions = () => {
    fetch('http://localhost:8080/surveys/1')
    .then(response => response.json())
    .then(data => setQuestions(data))
    .catch(err => console.error(err))
  }
 
  //const inputChanged = (event) => {
    //setCar({...car, [event.target.name]: event.target.value});
 // }
 
  return (
    <div>
      <table><tbody>
      {
      questions.map((question, index) => 
        <tr key={index}>
          <td>{question.questionBody}</td>
        </tr>)
      }
      </tbody></table>
    </div>
  );
}
 
export default Questionlist;