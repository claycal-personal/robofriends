import React from 'react';
import './Hello.css';


// class Hello extends React.Component {
//     render() {
      
//     }
//   }

  const Hello = (props) => {
    return (
        <div className='f1 tc'>
            <h1>Hello World</h1>
            <p>{props.greeting}</p>
        </div>
      );
  }

  export default Hello;