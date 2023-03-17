
import React from "react";

class ApiFlask extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
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
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.id} - {item.text}, {item.done? 'done': "don't done"}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default ApiFlask