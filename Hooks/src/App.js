import UseEffect from './components/UseEffect'
import UseState from './components/UseState'
import UseRef from './components/UseRef'
import Card from '@mui/material/Card';
import UseContext from './components/UseContext'
import UseReducer from './components/UseReducer';
import UseCallBack from './components/useCallBack'
import UseMemo from './components/UseMemo';


function App() {

  return (
    <Card>
      <UseState />
      <UseEffect />
      <UseRef />
      <UseContext />
      <UseReducer />
      <UseCallBack />
      <UseMemo />
    </Card>
  );
}

export default App;
