import React from 'react';
import Header from 'components/Header';
import Post from 'components/Post';
import NewCard from 'components/NewCard';
import './styles.css';
import cards from 'components/cards';

class App extends React.Component {
  render() {
    return <div className="App">
        <Header />
        <div className="Cards">
          {cards.map(card => <Post key={card.id} {...card} />)}
          <NewCard />
        </div>
      </div>;
  }
}

export default App;
