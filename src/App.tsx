import { DataContextProvider } from "./Context/DataContext";
import Resumo from "./Pages/Resumo";
import "./Style.css";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";

function App() {
  return (
    <DataContextProvider>
      <div>
        <Sidenav />
        <main>
          <Resumo />
          <Header />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
