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
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';

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

 const handleSave = (index) => {
   // props.answerQ(answer[Object.keys(answer)]);
   props.answerQ(answer[index]);
   console.log('id:', index);
  
  // handleReset();

  console.log(answer);
  console.log(answer[index])
  console.log('answer', answer)
  console.log(answer[Object.keys(answer)])

  //console.log(Object.keys(answer))
}
/*
const handleReset = () => {
  setAnswer({});
}*/

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Answer
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{props.params.surveyHeader}</DialogTitle>
        <DialogContent>
        {
        questions.map((q, questionIndex) => { 
          if(q.questionType.questionTypeId === 2) {
            return (
              <TextField
                key={`text-field-${questionIndex}`}
                margin="dense"
                name="answerBody"
                label={q.questionBody}
                //haetaan indexillä answeria. Jos indexiä vastaava answer löytyy, asetetaan valueen sen answerin answerBody.
                //jos answeria indexillä ei löydy, asetetaan valueen ''. Tämä sen takia, että lomaketta ladattaessa
                //yhtään answeria ei ole muodostettu ja lomake hajoaisi ilman valueta
                value={answer[questionIndex] ? answer[questionIndex].answerBody : ''}
                onChange={(event) => {
                  const newAnswer = {
                    [questionIndex]: {
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
                      
                    </InputAdornment>
                     ),
                    }}
                />
            )} else if(q.questionType.questionTypeId === 3) {
              return (
                <FormControl component="fieldset" key={`form-control-${questionIndex}`}>
                <FormLabel component="legend">{q.questionBody}</FormLabel>
                <RadioGroup aria-label="answerOptions" 
                name="answerOptions" 
                value={answer[questionIndex] ? answer[questionIndex].answerBody : ''}
                onChange={(event) => {
                  const newAnswer = {
                    [questionIndex]: {
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
                >
                  {
                  q.answerOptions.map((a, index) => 
                    <FormControlLabel key={`form-control-label-${index}`} value={a.answerOptionBody} control={<Radio />} label={a.answerOptionBody}/>
                  )
                    }
                </RadioGroup>
                <Button color="default" id={questionIndex} onClick={() => handleSave(questionIndex)}>Save</Button>
              </FormControl>
            )} else {
              return (
                <FormControl component="fieldset" key={`form-control-2-${questionIndex}`}>
                  <FormLabel component="legend">{q.questionBody}</FormLabel>
                  <FormGroup>
                  {
                  q.answerOptions.map((a, index) => 
                    /*<FormControlLabel value={a.answerOptionBody} control={<Radio />} label={a.answerOptionBody}/>*/
                    <FormControlLabel
                    key={`form-control-label-2-${index}`}
                    control={
                    <Checkbox 
                    value={a.answerOptionBody}
                    //value={answer[index] ? answer[index].answerOptionBody : ''} palauttaa tyhjön answerBodyn
                    //checked={answer[index] ? answer[index].answerBody : ''} //--palauttaa true
                    //value={answer[index] ? answer[index].q.answerOption.answerOptionBody : ''} //palauttaa tyhjön answerBodyn
                    name="answerOptions" 
                    onChange={(event) => {
                      const newAnswer = {
                        [questionIndex]: {
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
                    />}
                    label={a.answerOptionBody}
                  />
                    )
                    }
                  </FormGroup>
                  <Button color="default" id={questionIndex} onClick={() => handleSave(questionIndex)}>Save</Button>
                </FormControl>
              )
            }
            }
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
 
export default Questionlist;