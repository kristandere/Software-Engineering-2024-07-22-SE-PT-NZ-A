import React from 'react';
import Greeting from './components/Greeting';
import BigCats from './components/BigCats';
import Emoji from './components/Emoji'


function App() {
    return (
        <div className="App">
                        <Greeting name="Kris">Welcome to my app!</Greeting>
                        <Greeting>Welcome to my app!</Greeting> {}
            <h1>EmojiTracker</h1>
            <Emoji />
          <BigCats />
        </div>
    );
}

export default App;
