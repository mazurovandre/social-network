import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, messageTextChange, onPostChange, sentMessage} from "./redux/state";

export const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={state} addPost={addPost} onPostChange={onPostChange} messageTextChange={messageTextChange} sentMessage={sentMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

