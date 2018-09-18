import React from "react";
import PropTypes from "prop-types";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Question from '../question/Question'
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

class SurveyContainer extends React.Component {
  render () {
    return (
      <React.Fragment>
      <form action={'/survey/submit_survey'} method={'post'} id="survey_form">
                <input type="hidden" name="authenticity_token" value={this.props.token}/>
                <input type="hidden" name="id" value={this.props.survey.id}/>
                <input type="hidden" name="attempt" value={this.props.attempt.id}/>
                <ol>

                    {this.props.questions.map((question,index)=>
                        <li key={index} style={{marginTop:10}}>
                            <Question question={question} />

                        </li>

                    )}
                </ol>

            </form>
      </React.Fragment>
    );
  }
}

export default SurveyContainer
