import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserS from "./userS";
import FormS from './formS';

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserS(),
        form: new FormS(),
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);
