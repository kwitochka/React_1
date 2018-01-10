import React from 'react';
import './styles.css';
import PropTypes from "prop-types";

class Post extends React.Component{

    render(){
 const {title, description, rating, btn} = this.props;

        return (
        <div className="Movie__cards">
            <div className="Movie__card">
              <header className="Movie__header">
                <h1 className="Movie__title">{title}</h1>
                <button className="Movie__del">Delete</button>
              </header>
              <p>{description}</p>
              <p className="Movie__rating">Rating: {rating}</p>
              <div className="Movie__genre">
              {btn.map(item => {return <button>{item}</button>})}
              </div>
            </div>
        </div>
        );
    };
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired, 
};

export default Post;