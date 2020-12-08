import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputAdornment from '@material-ui/core/InputAdornment';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function Questionlist(props) {
 const [questions, setQuestions] = useState([]);
 const [answer, setAnswer] = useState({answerBody: '', question: ''});
 const [open, setOpen] = useState(false);
 
 
 const handleClickOpen = () => {
   setQuestions(props.params.questions);
   setOpen(true);
 };

 const handleClose = () => {
   setOpen(false);
 };

 const handleSave = () => {
   props.answerQ(answer);
 };
  
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Answer
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{props.params.surveyHeader}</DialogTitle>
        <DialogContent>
        
        {
<<<<<<< HEAD
        questions.map((q, index) => { // questionTypeId 4 = checkbox, joten tässä pitäisi oikeasti renderöidä checkbox komponentti
          return q.questionType.questionTypeId === 4 ?
            <TextField
=======
        questions.map((q, index) => {

        if(q.questionType.questionTypeId === 2) {
          return (
        // if-lause, jos questiontype on 2 => textfield
          <TextField
>>>>>>> e1ea17647a5b2fca48661e30170371a04c6eb966
            key={index}
            margin="dense"
            name="answerBody"
            label={q.questionBody}
            
            value={answer.answerBody}
            onChange={(event) => {
              setAnswer({answerBody: event.target.value, question: q.questionId});
            }}
            
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <Button color="default" onClick={handleSave}>
                    Save
                  </Button>
                </InputAdornment>
                 )
                }}
<<<<<<< HEAD
            />
            :
            <FormControl component="fieldset">
              <FormLabel component="legend">{q.questionBody}</FormLabel>
              <RadioGroup aria-label="answerOptions" name="answerOptions1">
                {
                q.answerOptions.map(a, index) => 
                  <FormControlLabel value={a.answerOptionId} control={<Radio />} label={a.answerOptionBody}/>}
              </RadioGroup>
            </FormControl>
            }
          )
          
=======
            />)}
            
            else if(q.questionType.questionTypeId === 3) {
              return (
                <h1>moi</h1>
              )
            }
            
            else {
              return (
              <h2>hei</h2>
              )
            }


        })   
>>>>>>> e1ea17647a5b2fca48661e30170371a04c6eb966
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