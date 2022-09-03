import { ApiContextProvider } from "./context/ApiContext";
import { CurrentWeather } from "./components/CurrentWheather";
//import { ListDays } from "./components/ListDays";
import { NextHours } from './components/NextHours'


function App() {
  return (
    <ApiContextProvider>
    <div className="App">
      <CurrentWeather />
      {/* <ListDays/> */}
      <NextHours/>
    </div>
    </ApiContextProvider>
  );
}

export default App;
