import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Button from '@material-ui/core/Button';
import { Jumbotron } from 'react-bootstrap';


function Answerlist(props) {

const toSurveys = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href={props.url}>QApp</a>
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
      <Jumbotron className='Jumbotron' style={{ marginTop: '3%'}}>
        <Button style={{ marginBottom: '3%'}} variant="outlined" color="primary" onClick={toSurveys}>Back</Button>
        <h1>{props.params.surveyHeader}</h1>
        {
        props.params.questions.map((q, index) => 
          <ul key={index}>
            <h4>{q.questionBody}</h4>

            {q.answers.map((a, i) => 
            <li key={i}>{a.answerBody}</li>
            )}
            
          </ul>       
          )         
        }
      </Jumbotron>
    </div>
  );
}
 
export default Answerlist;