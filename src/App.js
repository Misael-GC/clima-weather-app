import { ApiContextProvider } from "./context/ApiContext";
import { CurrentWeather } from "./components/CurrentWheather";
//import { ListDays } from "./components/ListDays";
// import { NextHours } from './components/NextHours'
import  {Map}  from './components/Map';
import { LocalHour } from "./components/LocalHour";
import { Search } from './components/Search';

function App() {
  return (
    <ApiContextProvider>
    <div className="App">
    <Search/>
      <CurrentWeather />
      {/* <ListDays/> */}
      {/* <NextHours/> */}
      <Map/>
      <LocalHour />
    </div>
    </ApiContextProvider>
  );
}

export default App;
