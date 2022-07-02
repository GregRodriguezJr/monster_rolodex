import { Component } from 'react';
import Cardlist from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
      })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  }

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filterdMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <SearchBox 
          onChangeHandler={onSearchChange} 
          placeholder='Search Monsters'
          className='search-box'
        />
        <Cardlist monsters={filterdMonsters} />
      </div>
    );
  }
}

export default App;
