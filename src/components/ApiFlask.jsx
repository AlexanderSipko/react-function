
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

    componentDidMount() {
        this.getList()
    }
    // create 4 function to manipulate ai data

    // get https://py-todo-api-avsipko.amvera.io/todo/<id:int>
    // write

    // put https://py-todo-api-avsipko.amvera.io/todo/<id:int>
    // update write

    // delete https://py-todo-api-avsipko.amvera.io/todo/
    // delete all

  handleButtonClick(inputDate) {
    // получаем кef input для формирования строки
      const newToDo = {
        id:this.state.items.length + 1,
        text:inputDate.value,
        done:false
    }
    this.addToDo(newToDo)
    // console.log(JSON.stringify(newToDo))
    inputDate.value = ''
  }

  getList = () => {
      // get https://py-todo-api-avsipko.amvera.io/todo
      // all list
      fetch('https://py-todo-api-avsipko.amvera.io/todo')
        .then(res => res.json())
        .then((result) => {
          this.setState({
          isLoaded: true,
          items: result
        });
    },
    (error) => {
      this.setState({
        isLoaded: true,
        error
      });
    }
  )
  }

  addToDo = (body) => {
    // post https://py-todo-api-avsipko.amvera.io/todo
    // add new write
    fetch("https://py-todo-api-avsipko.amvera.io/todo", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then( (response) => {
      if (response.status === 201){
        this.getList()
      }
   });
  }

  deleteToDO = () => {
    // delete https://py-todo-api-avsipko.amvera.io/todo
    // this.getList()
    fetch("https://py-todo-api-avsipko.amvera.io/todo", {
      method: "delete",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then( (response) => {
      if (response.status === 200){
        this.getList()
      }
   });
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
          <p onClick={this.deleteToDO}>delete all list</p>
          <input type="text" ref={this.updateInput} />
          <button onClick={() => this.handleButtonClick(this.updateInput.current)} className="buttonAddTask">add new task</button>
          <List items={items}/>
        </div>
      );
    }
  }
}

export default ApiFlask