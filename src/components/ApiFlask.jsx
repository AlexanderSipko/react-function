
import React from "react";
import List from './ApiFlask/ListTodoApi'

class ApiFlask extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
      };
      this.updateInput = React.createRef('')
    }

    // create 4 function to manipulate ai data
  
    // get https://py-todo-api-avsipko.amvera.io/todo
    // all list

    // get https://py-todo-api-avsipko.amvera.io/todo/<id:int>
    // write

    // post https://py-todo-api-avsipko.amvera.io/todo
    // add new write

    // put https://py-todo-api-avsipko.amvera.io/todo/<id:int>
    // update write

    componentDidMount() {
        fetch('https://py-todo-api-avsipko.amvera.io/todo')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  handleButtonClick(inputDate) {
    // получаем кef input для формирования строки
    const newToDo = {
      id:this.state.items.length + 1,
      text:inputDate.value,
      done:false
    }
    console.log(newToDo)
    inputDate.value = ''
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h2>TODO add 4 function and components one cards</h2>
          <input type="text" ref={this.updateInput} />
          <button onClick={() => this.handleButtonClick(this.updateInput.current)} className="buttonAddTask">add new task</button>
          <List items={items}/>
        </div>
      );
    }
  }
}

export default ApiFlask