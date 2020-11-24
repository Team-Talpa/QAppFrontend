import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


function Answerlist(props) {
 const [questions, setQuestions] = useState([]);
 const [open, setOpen] = useState(false);
 
  
 const handleClickOpen = () => {
   setQuestions(props.params.questions);
   setOpen(true);
 };

 const handleClose = () => {
   setOpen(false);
 };


  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        View answers
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{props.params.surveyHeader}</DialogTitle>
        <DialogContent>
        {
        questions.map((q, index) => 
          <ul key={index}>
            <h4>{q.questionBody}</h4>

            {q.answers.map((a, i) => 
            <li key={i}>{a.answerBody}</li>
            )}
            
          </ul>       
          )
          
        }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}
 
export default Answerlist;