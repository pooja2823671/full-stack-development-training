import { App } from './App';
import ReactDOM from 'react-dom/client';

//getting division tag by id'root'
const divTag=document.getElementById('root');

//creating a root dom (document object model)
const reactDOM = ReactDOM.createRoot(divTag);

//rendering component
reactDOM.render(<App />);
