import './App.css';
import RouteTree from '../src/components/routes/RouteTree';
import "./assets/bootstrap/css/bootstrap.min.css"
import "./assets/css/sidebar.css"
import "./assets/css/content.css"
import "react-datepicker/dist/react-datepicker.css";
import { Modal } from 'react-bootstrap';

function App() {
  return (
    <div className="App" id="scroller">
      <RouteTree/>
      <Modal/>
    </div>
  );
}

export default App;