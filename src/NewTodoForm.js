import React, {Component} from 'react';

class NewTodoForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            contentInput: '',
            priorityInput: ''
        }
    }

    handleContentInputChange = (e) => {
        this.setState({
            contentInput : e.target.value
        });
    }

    handlePriorityInputChange = (e) => {
        this.setState({
            priorityInput : e.target.value
        });
    }

    handleAddTodoClick = (e) => {
        e.preventDefault();

        var data = {
            content: this.state.contentInput,
            priority: this.state.priorityInput
        }

        this.props.addTodo(data);
    }

    render(){
        return(
            <div className="todo new-todo">
                <form>
                    <div className="input-group">
                        <input type="text" placeholder="add to do" onChange={this.handleContentInputChange}/>
                        <input type="text" placeholder="importance" onChange={this.handlePriorityInputChange}/>    
                    </div>
                    
                    <button type="submit" onClick={this.handleAddTodoClick}><i className="fas fa-plus-circle"></i></button>
                </form>
        </div>
        );
    }
}

export default NewTodoForm;