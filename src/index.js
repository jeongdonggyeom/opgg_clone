import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import darkmode from './component/context';

const root = ReactDOM.createRoot(document.getElementById('root'));

const value = {
  state: localStorage.getItem('mode') === '0' ? false : true,
  img: localStorage.getItem('mode') === '0' ? 'https://s-lol-web.op.gg/images/icon/icon-opgglogo-white.svg?v=1658292954524' : 'https://s-lol-web.op.gg/images/icon/icon-opgglogo-gray.svg?v=1658394404870',
  navimg: localStorage.getItem('mode') === '0' ? 'https://s-lol-web.op.gg/images/icon/icon-lightmode.svg?image=q_auto,f_webp,w_48&v=1658292954524' : 'https://s-lol-web.op.gg/images/icon/icon-darkmode.svg?image=q_auto,f_webp,w_48&v=1658394404870',
  footerimg: localStorage.getItem('mode') === '0' ? 'https://s-lol-web.op.gg/images/icon/icon-game-white.svg?v=1658292954340' : 'https://s-lol-web.op.gg/images/icon/icon-game.svg?v=1658394404870',
}

root.render(
    <darkmode.Provider value={value}>
      <App/>
    </darkmode.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
