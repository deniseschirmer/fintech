import Resumo from "./Pages/Resumo";
import "./Style.css";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";

function App() {
  return (
    <div>
      <Sidenav />
      <main>
        <Resumo />
        <Header />
      </main>
    </div>
  );
}

export default App;
