import React, {Component} from 'react';

class ToDo extends Component {
    constructor(props){
        super(props);
        this.state = {
            updatingContent: false,
            updatingPrioriy: false,
            contentInput: props.content,
            priorityInput: props.priority
        }
    }

    handleRemoveTodoClick = (e) => {
        var id = this.props.id;
        this.props.removeTodo(id);
    }

    handleContentDoubleClick = () => {
        this.setState({updatingContent : true});
    }

    handlePriorityDoubleClick = () => {
        this.setState({updatingPrioriy : true});
    }

    handleContentInputBlur = () => {
        var id = this.props.id;
        var data = {
            content: this.state.contentInput
        };
        this.props.updateTodo(id,data);
        this.setState({updatingContent : false});
    }

    handlePriorityInputBlur = () => {
        var id = this.props.id;
        var data = {
            priority: this.state.priorityInput
        };
        this.props.updateTodo(id,data);
        this.setState({updatingPrioriy : false});
    }

    handleContentInputChange = (e) => {
        this.setState({contentInput : e.target.value});
    }

    handlePriorityInputChange = (e) => {
        this.setState({priorityInput : e.target.value});
    }

    render(){
        return(
            <div className="todo">
                <div className="todo-content">
                    <div className="todo-content" onDoubleClick={this.handleContentDoubleClick}>

                        { this.state.updatingContent ? <input value={this.state.contentInput} autoFocus type="text" className="content-input" onBlur={this.handleContentInputBlur} onChange={this.handleContentInputChange}/> : this.props.content}

                    </div>
                    <div className="todo-priority" onDoubleClick={this.handlePriorityDoubleClick}>
                        
                        { this.state.updatingPrioriy ? (
                            <input type="text" className="priority-input" value={this.state.priorityInput} onBlur={this.handlePriorityInputBlur} onChange={this.handlePriorityInputChange}/>
                        ) : this.props.priority}

                    </div>
                </div>
                <i className="fas fa-times" onClick={this.handleRemoveTodoClick}></i>
            </div>
        );
    }
}

export default ToDo;