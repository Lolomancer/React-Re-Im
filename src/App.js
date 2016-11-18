import React, { Component } from 'react';
import { createStore } from 'redux';
import ToDoL from './ToDoL';
import { reducers, addNote } from './reducers';
import { connect } from 'react-redux';

const store = createStore(addNote);

store.subscribe(() => {
  console.log("store changed", store.getState())
});

 class App extends React.Component {
     constructor (props) {
         super(props);
     }

     addSome () {
         store.dispatch({type:'ADD', payload: {
             description: this.refs.inputBox.value, status: 'Incomplete'}});
         this.refs.inputBox.value = null;
     };

     render() {
         return (
             <div>
                <ToDoL />
                 <input ref="inputBox" />
                 <button ref="inputButton" onClick={ (e) => {this.addSome();} }>
                     Add note
                 </button>
             </div>
        );
    }
 }

 export default connect()(App);