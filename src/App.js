import { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import "./App.css";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };

  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((responce) => responce.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters List</h1>  
       <SearchBox placeholder="Search monsters" handleClick={this.handleChange} />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
