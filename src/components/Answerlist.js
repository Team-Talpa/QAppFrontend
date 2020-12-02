import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Button from '@material-ui/core/Button';


function Answerlist(props) {

const toSurveys = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

  return (
    <div>
        <Button variant="outlined" color="primary" onClick={toSurveys}>Back</Button>
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
        
    </div>
  );
}
 
export default Answerlist;