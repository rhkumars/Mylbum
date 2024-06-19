import AppRoutes from "./route";
import "./App.css";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(function () {
    console.log("service worker registered!");
  });
}

function App() {
  return (
    <div className="App">
      <AppRoutes></AppRoutes>
    </div>
  );
}

export default App;
