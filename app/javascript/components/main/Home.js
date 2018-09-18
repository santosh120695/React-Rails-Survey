import React from "react"
import PropTypes from "prop-types"
import SimpleCard from "../active_surveys/ActiveSurvey"
import Grid from '@material-ui/core/Grid';

class Home extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props.active_surveys)
    }
    render () {

        return (
            <div>
                <Grid container spacing={16}
                      direction="row"
                      justify="center"
                      alignItems="center"
                      style={{height:500}}
                >
                    <Grid item xs={4} style={{marginRight:"20px"}}>
                <SimpleCard active_surveys={this.props.active_surveys}/>
                    </Grid>
                </Grid>
            </div>

        );
    }
}

export default Home
