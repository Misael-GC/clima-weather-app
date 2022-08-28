import { CurrentWeather } from "./components/CurrentWheather";

function App() {
  return (
    <div className="App">
      <div class="container text-center">
        <div class="row">
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
        </div>
      </div>
      <p>Soy otro componente puedo ser el header</p>
      <CurrentWeather />
    </div>
  );
}

export default App;
