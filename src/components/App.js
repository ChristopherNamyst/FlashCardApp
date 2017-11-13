import React, {Component} from 'react';
import Card from './Card';
import Next from './Next';
import Previous from './Previous';
import Flip from './Flip';
import Shuffle from './Shuffle';


class App extends Component {
  render() {
    return (

      <div className="App">
        <h1>!!!FLASHCARDS FOR NERDS!!!</h1>
        <div className="FlashCards">
          <Card/>
        </div>

        <div className="Buttons">
          <Flip/>
          <Next/>
          <Previous/>
          <Shuffle/>
        </div>
      </div>
      
    );
  }
}

export default App;
