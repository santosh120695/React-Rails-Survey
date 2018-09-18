import React from "react"
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';


class Question extends React.Component{

    constructor(props){
        super(props)
        this.state={answer:""}
    }





    select_on_change=(event)=>{
        this.setState({
           answer:event.target.value
        })
    }


    get_ans_field=(question)=>{
    switch (question.question_type){
        case 'text' :
            return <TextField
                margin="normal"
                placeholder="Text"
                style={{width:500}}
                onChange={this.select_on_change}
                name={"question["+question.id+"]"}
            />
        break;
        case 'options':
            return (

                <FormControl>
                <Select value={this.state.answer}
                        style={{width:500}}
                        onChange={this.select_on_change}
                        inputProps={{name:"question["+question.id+"]"}}

                >
                    {question.options.map((option,index)=>
                        <MenuItem value={option.value} ref={index}>
                            {option.label}
                        </MenuItem>
                    )}
                </Select>
                </FormControl>
            )

        default :
            return (
                ''
            )


    }
   }


    render(){
        const question=this.props.question
        const ans_field=this.get_ans_field(question)
        return(
            <div style={{marginBottom:30}}>
                <Typography paragraph={true} style={{fontSize:15}}>
                    {question.content}
                </Typography>
                {ans_field}

            </div>
        )
    }

}


export default Question