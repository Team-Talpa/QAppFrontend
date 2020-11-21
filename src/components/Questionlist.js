import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputAdornment from '@material-ui/core/InputAdornment';

function Questionlist(props) {
 const [questions, setQuestions] = useState([]);
 // const [answer, setAnswer] = useState({answerBody: '', question: {}});
 const [answer, setAnswer] = useState({});
 
 const [open, setOpen] = useState(false);
 
  
 const handleClickOpen = () => {
   setQuestions(props.params.questions);
   setOpen(true);
 };

 const handleClose = () => {
   setOpen(false);
 };

 const handleSave = () => {
   props.answerQ(answer[Object.keys(answer)]);
   
   handleReset();

   //console.log(answer[Object.keys(answer)])
   //console.log('answer', answer)
   //console.log(answer[0])
   //console.log(Object.keys(answer))
 }

 const handleReset = () => {
   setAnswer({});
 }

  //console.log('answer', answer)

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Answer
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{props.params.surveyHeader}</DialogTitle>
        <DialogContent>
        {
        questions.map((q, index) => 
            <TextField
            key={index}
            margin="dense"
            name="answerBody"
            label={q.questionBody}
            value={answer[index] ? answer[index].answerBody : ''}
           
            onChange={(event) => {
              const newAnswer = {
                [index]: {
                  answerBody: event.target.value,
                  question: {
                    questionId: q.questionId,
                  }
                }
              }
              setAnswer(
                {
                  ...answer,
                  ...newAnswer,
                });
            }}
            
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <Button color="default" onClick={handleSave}>
                    Save
                  </Button>
                </InputAdornment>
                 ),
                }}
            />
        
          )
          
        }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}
 
export default Questionlist;