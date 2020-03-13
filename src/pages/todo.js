//this file contains the todo list component

import React, { Component } from "react";
import {
    withStyles,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    IconButton,
    Grid,
    TextField,
    Button,
    FormControl
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 752
    },
    demo: {
        backgroundColor: theme.palette.background.paper
    },
    title: {
        margin: `${theme.spacing.unit * 4}px 0 ${theme.space.unit * 2}px`
    }
});

class ToDo extends Component {
    state = {};

    generate = () =>{
        return this.props.items.map(item => (
            <ListItem key={item.id} >
            <ListItemText primary={item.description} />
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete"
                            onClick={this.handleDelete}
                            value={item.id}
                            >
                    <DeleteIcon />
                 </IconButton>
            </ListItemSecondaryAction>
            </ListItem> 
        ))
    };

    handleSubmit=(event)=>{
        this.setState({
            item: ""
        });
        if(this.state.item !== ""){
            //add the task to the store

        }
        event.preventDefault()
    };

    handleDelete=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render(){
        const { classes } = this.props;

        return (
            <div>
                <div>
                    <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                        <FormControl>
                            <TextField 
                                label="New Task"
                                id="margin-dense"
                                value={this.state.item}
                                className={classes.textField}
                                margin="dense"
                                name="item"
                                onChange={this.handleChange}
                                />
                        </FormControl>
                        <FormControl>
                            <Button>Add</Button>
                        </FormControl>
                    </form>
                </div>
            <div>
                <Grid item container justify="space-evenly" alignItems="center">
                <div className={classes.demo}>
                    <List dense={false}>{this.generate()}</List>
                </div>
                </Grid>
            </div>
        </div>
        );
    }
}
export default withStyles(styles)(toDo);