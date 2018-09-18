import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = {
    card: {
        width: '100%',
        minHeight : 200

    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

function ActiveSurvey(props) {
    const { classes,active_surveys } = props;
    // const bull = <span className={classes.bullet}>•</span>;


    return (
        <Card className={classes.card}>
            { active_surveys.length>0 ?

                active_surveys.map(survey =>(
                <div key={survey.id}>
            <CardContent>
                <Typography variant="headline" component="h2">
                    {survey.head}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {survey.description}
                </Typography>
            </CardContent>
            <CardActions>
                {/*<Button size="small">Give Survey</Button>*/}
                <a href={survey.link} >Give Survey</a>
            </CardActions>
                </div>
            )):
                (
                    <CardContent>
                        <Typography variant="headline" component="h2" style={{textAlign:"center"}}>
                           No Active Surveys
                        </Typography>
                    </CardContent>
                )

            }
        </Card>
    );
}

ActiveSurvey.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActiveSurvey);


