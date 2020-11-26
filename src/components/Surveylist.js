import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Questionlist from './Questionlist';
import Answerlist from './Answerlist';
import Button from '@material-ui/core/Button';

function Surveylist() {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    getSurveys();
  }, [])

  const getSurveys = () => {
    fetch('http://localhost:8080/surveys')
    .then(response => response.json())
    .then(data => setSurveys(data))
    .catch(err => console.error(err))
  }

  const answerQuestion= (answer) => {
  fetch('http://localhost:8080/saveanswer', {
      method: 'POST',
      headers: {'Content-type' : 'application/json' },
      body: JSON.stringify(answer)      
    })
    .catch(err => console.error(err))
  }
  return (
    <div>
            <table><tbody>
            {
            surveys.map((s, index) => 
              <tr key={index}>
                <td>{s.surveyHeader}</td>
                <td><Questionlist params={s} answerQ={answerQuestion}/></td>
                <td><Button variant="outlined" color="primary" onClick={() => {
                  ReactDOM.render(
                    <Answerlist params={s} />,
                    document.getElementById('root')
                  );
                }}>
                  View answers

                </Button></td>
              </tr>)
            }
            </tbody></table>
    </div>
  );
}

export default Surveylist;