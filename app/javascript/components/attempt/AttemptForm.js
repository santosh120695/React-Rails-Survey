import React from "react";
import PropTypes from "prop-types";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});







class AttemptForm extends React.Component{

  constructor(props){
      super(props)
      this.state = {
          open: false,
      };
  }


    handleOpen = () => {
        this.setState({ open: false });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleSubmit=(event)=>{
        event.preventDefault()
        let  data={}
         data['attempt_id']=document.getElementById('attempt_id').value
         data['name']=document.getElementById('name').value
         data['email']=document.getElementById('email').value
         data['employee_id']=document.getElementById('employee_id')

    }

    render(){
        const { classes } = this.props;
        return(
                <div style={{top:'40%' ,left:'40%'}} >
                    <Grid container spacing={16}
                          direction={'row'}
                          justify={'center'}
                          alignItems={'center'}
                          >
                        <Grid item xs={2} >
                    <form action={'/survey/user_info'} method={'post'} id={'user_info_form'}>
                        <input type="hidden" name="attempt" value={this.props.attempt.id} id='attempt_id'/>
                        <input type="hidden" name="authenticity_token" value={this.props.token}/>
                        <TextField
                            id="name"
                            label="Name"
                            margin="normal"
                            name='user[name]'
                        />
                        <br />

                        <TextField
                            id="email"
                            label="Emai"
                            margin="normal"
                            name="user[email]"
                        />

                        <br />

                        <TextField
                            id="employee_id"
                            label="Employee ID"
                            className={classes.textField}
                            margin="normal"
                            name="user[employee_id]"

                        />
                    </form>
                        </Grid>
                </Grid>
                </div>

        )
    }
}

export default withStyles(styles)(AttemptForm);