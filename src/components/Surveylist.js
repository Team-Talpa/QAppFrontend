import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Questionlist from './Questionlist';
import Answerlist from './Answerlist';
import Button from '@material-ui/core/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Surveylist() {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    getSurveys();
  }, [])

  const url = 'https://talpa-qapp.herokuapp.com';
  //const url = 'http://localhost:8080';

  const getSurveys = () => {
    //fetch('http://localhost:8080/surveys')
    fetch(`${url}/surveys`)
    .then(response => response.json())
    .then(data => setSurveys(data))
    .catch(err => console.error(err))
  }

  const answerQuestion= (answer) => {
  //fetch('http://localhost:8080/saveanswer', {
    fetch(`${ url }/saveanswer`, {
      method: 'POST',
      headers: {'Content-type' : 'application/json' },
      body: JSON.stringify(answer)      
    })
    .catch(err => console.error(err))
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href={url}>QApp</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="http://talpa-qapp-front.herokuapp.com">Answer <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://talpa-qapp.herokuapp.com/surveylist">Create</a>
            </li>
          
          </ul>
        </div>
      </nav>
      <div className='Helper'></div>
      <Jumbotron className='Jumbotron'>
        <h1>Surveys</h1>
        <br/>
          
        <table><tbody>
        {
        surveys.map((s, index) => 
          <tr key={index}>
            <td>{s.surveyHeader}</td>
            <td><Questionlist params={s} answerQ={answerQuestion}/></td>
            <td><Button variant="outlined" color="primary" onClick={() => {
              ReactDOM.render(
                <Answerlist params={s} url={url}/>,
                document.getElementById('root')
              );
            }}>
              View answers

            </Button></td>
          </tr>)
        }
        </tbody></table>
      </Jumbotron>
    </div>
  );
}

export default Surveylist;