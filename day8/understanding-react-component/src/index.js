//importing react-dom module
//react dom module give connection with browser
import { MyComponent } from './MyComponent';
import ReactDOM from 'react-dom/client';

//getting division tag by id'root'
const divTag=document.getElementById('root');

//creating a root dom (document object model)
const reactDOM = ReactDOM.createRoot(divTag);

//rendering component
reactDOM.render(<MyComponent />);