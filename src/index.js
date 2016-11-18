import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './reducers';

const store = createStore(reducers);

class ToDoList extends React.Component {
    render() {
        return (
        <Provider store = {store}>
            <div>
                <App />
            </div>
        </Provider>
        );
    }
}

const root = document.getElementById('root');

ReactDOM.render(<ToDoList />, root);