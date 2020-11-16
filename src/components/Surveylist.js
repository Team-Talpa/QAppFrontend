import React, { useState, useEffect } from 'react';
import Questionlist from './Questionlist';

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

  return (
    <div>
            <table><tbody>
            {
            surveys.map((s, index) => 
              <tr key={index}>
                <td>{s.surveyHeader}</td>
                <td><Questionlist params={s} /></td>
              </tr>)
            }
            </tbody></table>
    </div>
  );
}

export default Surveylist;