import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Questionlist from './Questionlist';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Surveylist() {
  const [surveys, setSurveys] = useState([]);
  const [survey, setSurvey] = useState({surveyId: '', surveyHeader: '', questions: []});

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
      <Container>
        <Row>
          <Col>
            <table><tbody>
            {
            surveys.map((s, index) => 
              <tr key={index}>
                <td>{s.surveyHeader}</td>
                <td><Button variant="outline-primary" onClick={() => {
                  setSurvey({surveyId: s.surveyId, surveyHeader: s.surveyHeader, questions: s.questions});
                }}>Answer</Button></td>
              </tr>)
            }
            </tbody></table>
          </Col>
          <Col>
            <div>
              <Questionlist params={survey} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Surveylist;