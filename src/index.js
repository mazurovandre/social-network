import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogsMessages = [
    {id: 1, text: 'Привет!', isOutcome: false},
    {id: 2, text: 'Привет)', isOutcome: true},
    {id: 3, text: 'Как дела?', isOutcome: false},
    {id: 4, text: 'Норм', isOutcome: true}
];

const dialogsData = [
    {id: 1, name: 'Андрей'},
    {id: 2, name: 'Михаил'},
    {id: 3, name: 'Игорь'},
    {id: 4, name: 'Елена'},
    {id: 5, name: 'Екатерина'},
    {id: 6, name: 'Дмитрий'},
    {id: 7, name: 'Ольга'}
];

const postsData = [
    {id: 1, message: 'Hello, it\'s me', likesCount: 11},
    {id: 2, message: 'I was wondering if after all these years you\'d like to meet', likesCount: 123},
    {id: 3, message: 'To go over everything', likesCount: 532},
    {id: 4, message: 'They say that time\'s supposed to heal ya', likesCount: 251},
    {id: 5, message: 'But I ain\'t done much healing', likesCount: 252}
];

const personInfo = {
    name: 'Мазуров Андрей',
    birthDate: '22 марта 1994 г.',
    city: 'Санкт-Петербург',
    education: 'Университет ИТМО'
}

ReactDOM.render(
  <React.StrictMode>
    <App info={personInfo} posts={postsData} dialogs={dialogsData} messages={dialogsMessages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();