import React, {Component} from 'react';
import ToDo from './ToDo';
import NewTodoForm from './NewTodoForm';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          content: 'book appointment',
          priority: 'urgent',
        },
        {
          id: 2,
          content: 'laundry',
          priority: 'not important',
        },
        {
          id: 3,
          content: 'water plants',
          priority: 'important',
        }
      ]
    }

  }

  addTodo = (data) => {
    var newTodo = {
      id: Date.now(),
      ...data
    };
    var newList = [...this.state.todos,newTodo];

    this.setState({todos: newList});
  }

  removeTodo = (id) => {
    var todos = this.state.todos;
    var filtered = todos.filter(todo => {
      return todo.id != id;
    });

    this.setState({
      todos: filtered
    });
  }

  updateTodo = (id,data) => {
    var todos = this.state.todos;
    var index = todos.findIndex(function(todo){
      return todo.id == id;
    });

    var updatedTodo = {...todos[index],...data};
    todos[index] = updatedTodo;

    this.setState({todos: todos});
  }

  render(){
    return (
      <div className="app">
        <header>
            <i className="fas fa-bars"></i>
            <p>TO DO</p>
            <p>FRIDAY</p>
        </header>
        <div className="main-todos">
          
          {
            this.state.todos.map((todo) => {

              var todoProps = {
                ...todo,
                key: todo.id,
                removeTodo: this.removeTodo,
                updateTodo: this.updateTodo
              }

              return(
                <ToDo {...todoProps}/>
              );
            })
          }
          
        </div>
        
       <NewTodoForm addTodo={this.addTodo}/>
    </div>
  );
  }
  
}

export default App;
