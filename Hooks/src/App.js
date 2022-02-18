import UseEffect from './components/UseEffect'
import UseState from './components/UseState'
import UseRef from './components/UseRef'
import Card from '@mui/material/Card';
import UseContext from './components/UseContext'
import UseReducer from './components/UseReducer';


function App() {

  return (
    <Card>
      <UseState />
      <UseEffect />
      <UseRef />
      <UseContext />
      <UseReducer />
    </Card>
  );
}

export default App;
