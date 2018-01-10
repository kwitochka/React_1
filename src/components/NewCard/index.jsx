import React from 'react';
import './styles.css';

class NewCard extends React.Component{
    render(){
        return( 
        <div className="New_movie_card">
            <p>Title</p>
            <input type="text" name="" id="" />
            <p>Description</p>
            <input type="text" />
            <p>Rating</p>
            <input type="number" min='1' max='10'/>
            <div className="New_genre">
              <input type="checkbox" /> drama
              <input type="checkbox" /> action
              <input type="checkbox" /> comedy
            </div>
            <button>Submit</button>
          </div>
        );
    }

}


export default NewCard;