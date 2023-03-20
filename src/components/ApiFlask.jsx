
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
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    
    componentDidMount() {
        this.getList()
    }
    // create 4 function to manipulate ai data

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

  handleKeyPress(event) {
    // событие при нажатии Enter and input don't empty
    if(event.key === 'Enter' & event.target.value !==''){
        const newToDo = {
          id: this.state.items.length + 1,
          text:event.target.value,
          done:false
      }
    this.addToDo(newToDo)
        event.target.value = ''
      }
}

  getList = () => {
      // get https://py-todo-api-avsipko.amvera.io/todo
      // all list
      fetch('https://py-todo-api-avsipko.amvera.io/todo', {
        method: "get",
      })
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
      } else {
        console.log(response)
      }
   });
  }

  deleteToDO = () => {
    // delete https://py-todo-api-avsipko.amvera.io/todo
    // this.getList()
    fetch("https://py-todo-api-avsipko.amvera.io/todo", {
      method: "delete",
     
    }).then( (response) => {
      if (response.status === 200){
        this.getList()
      }
   });
  }

  putToDO = (id, body) => {
    // put https://py-todo-api-avsipko.amvera.io/todo
    // add new write
    fetch(`https://py-todo-api-avsipko.amvera.io/todo/${id}`, {
      method: "put",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Basic dGVzdDp0ZXN0"
      },
      body: JSON.stringify(body)
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
          <h2>Задачи на день</h2>
          <p className="ToDoTaskP" onClick={this.deleteToDO}>Удалить все записи</p>
          <input type="text" onKeyPress={this.handleKeyPress} ref={this.updateInput} />
          <button onClick={() => this.handleButtonClick(this.updateInput.current)} className="buttonAddTask">Добавить новую задачу</button>
          <List items={items} putToDO={this.putToDO}/>

          <ul className="Description">
            <li>описание функционала</li>
            <li>1. возможность добавлять task</li>
            <li>2. удаление всех task</li>
            <li>3. ввод по enter and click button</li>
            <li>4. проверка состояния input</li>
            <li>5. update состояние tsk (true/false)</li>
            <li>6. добавление времени выполнения и запись данных в API бэкенд</li>
            <li>7. к TODO создано API на Flask (пишет в json файл)</li>
            <li>8. API может не работать (закончилась подписка например и не успел перенести :)</li>
          </ul>
        </div>
      );
    }
  }
}

export default ApiFlask