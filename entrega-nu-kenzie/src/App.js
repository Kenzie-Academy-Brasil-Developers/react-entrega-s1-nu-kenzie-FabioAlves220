import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form/Form";
import { List } from "./components/List/List";
import { TotalMoney } from "./components/TotalMoney/TotalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <List listTransactions={listTransactions} />
          <TotalMoney listTransactions={listTransactions} />
        </div>
      </header>
    </div>
  );
}

export default App;
