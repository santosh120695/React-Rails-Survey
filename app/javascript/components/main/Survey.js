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
import ButtonBase from '@material-ui/core/ButtonBase';
import AttemptForm from "../attempt/AttemptForm";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import SurveyContainer from '../survey_container';


function getSteps() {
    return ['Your Info', 'Survey', 'Finish'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return 'Select campaign settings...';
        case 1:
            return 'What is an ad group anyways?';
        case 2:
            return 'This is the bit I really care about!';
        default:
            return 'Uknown stepIndex';
    }
}


class  Survey extends React.Component{
    constructor(props){
        super(props)
        const activeStep=parseInt(localStorage.getItem('activeStep'))
        // this.state = {
        //     activeStep: activeStep==null?0:activeStep,
        // };
        this.state = {
            activeStep: 0,
        };

    }



    handleSurvey=()=>{

    }

    handleNext = () => {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep + 1,
        });
        localStorage.setItem('activeStep',activeStep+1)
    };


    handleBack = () => {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep - 1,

        });
        localStorage.setItem('activeStep',activeStep-1)
    };
    
    
    get_step_component=()=>{
        switch (this.state.activeStep) {
            case 0:
                return <AttemptForm attempt={this.props.attempt} token={this.props.token}/>
            break;

            case 1:
                document.getElementById('user_info_form').submit()
                return <SurveyContainer  questions={this.props.questions}   token={this.props.token} survey={this.props.survey} attempt={this.props.attempt}/>
            break;

            case 2 :
                document.getElementById('survey_form').submit()
                return <Typography>Thank You</Typography>

            default :
                return ''
                break
        }
    }



    render(){
        const steps = getSteps();
        const { activeStep } = this.state;
        console.log(this.props.questions)
        return(
            <Grid container spacing={16}
                  direction="row"
                  justify="center"
                  alignItems="center">
                <Grid item xs={6} >

                    <Paper style={{padding:20,margin:20}}>
                        <Stepper activeStep={activeStep} alternativeLabel>
                            {steps.map(label => {
                                return (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>
                        {this.get_step_component()}
                        <Grid container spacing={16}
                              direction="row"
                              justify="space-between"
                              alignItems="center"
                        >
                            <Grid item xs={2}>
                                {/*<Button variant="contained" color="default"*/}
                                    {/*disabled={activeStep === 0}*/}
                                    {/*onClick={this.handleBack}*/}
                                    {/*>*/}
                                    {/*Back*/}
                                {/*</Button>*/}
                            </Grid>
                            <Grid item xs={2}>
                                {(activeStep <= 1)?
                                < Button variant="contained" color="primary" onClick={this.handleNext} type={'submit'}>
                                    Next
                                    </Button>
                                    :
                                    < Button variant="contained" color="primary" href={'/'} >
                                        Finish
                                    </Button>

                                }
                            </Grid>
                        </Grid>

                    </Paper>



                </Grid>
            </Grid>
        )
    }

}

export default Survey