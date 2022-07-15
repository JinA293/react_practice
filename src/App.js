import './App.css';
import Text from './compornents/text';
import Table from "./compornents/table";
import Hello from  "./compornents/hello"

function App() {
  return (
    <div className="App">
      <p>練習</p>
      <Text /> 
      <Table />
      <Hello name="Jin"/>
    </div>

  );
}

export default App;
