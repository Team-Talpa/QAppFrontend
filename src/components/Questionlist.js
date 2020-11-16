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
 const [answer, setAnswer] = useState('');
 const [open, setOpen] = useState(false);
 
 const handleClickOpen = () => {
   setQuestions(props.params.questions);
   setOpen(true);
 };

 const handleClose = () => {
   setOpen(false);
 };
 
 const inputChanged = (event) => {
  
   setAnswer(event.target.questionBody);
 }
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
            margin="dense"
            name="answerBody"
            value={answer}
            onChange={inputChanged}
            label={q.questionBody}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <Button color="default">
                    Save
                  </Button>
                </InputAdornment>
                 ),
                }}
          />)
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