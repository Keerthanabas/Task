import React, { Component } from 'react';

class MyComponent extends Component {
  componentDidMount() {
    
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    return (
      <div>
        <h1>My Component</h1>
        <p>Component content goes here.</p>
      </div>
    );
  }
}

export default MyComponent;
