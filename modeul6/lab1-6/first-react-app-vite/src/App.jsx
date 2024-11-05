import React from 'react';
import Greeting from './components/Greeting';
import BigCats from './components/BigCats';
import Emoji from './components/Emoji'
import Calculator from './components/calculator';


function App() {
    return (
        <div className="App">
                        <Greeting name="Kris">Welcome to my app!</Greeting>
                        <Greeting>Welcome to my app!</Greeting> {}
            <h1>EmojiTracker</h1>
            <Calculator />
            <Emoji />
          <BigCats />
        </div>
    );
}

export default App;
