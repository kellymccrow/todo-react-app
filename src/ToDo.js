import React, {Component} from 'react';

class ToDo extends Component {
    constructor(props){
        super(props);
    }

    handleRemoveTodoClick = (e) => {
        var id = this.props.id;
        this.props.removeTodo(id);
    }

    render(){
        return(
            <div className="todo">
                <div className="todo-content">
                    <div className="todo-content">
                        {this.props.content}
                    </div>
                    <div className="todo-priority">
                        {this.props.priority}
                    </div>
                </div>
                <i className="fas fa-times" onClick={this.handleRemoveTodoClick}></i>
            </div>
        );
    }
}

export default ToDo;