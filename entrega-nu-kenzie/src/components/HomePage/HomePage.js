import { useState } from "react";
import Logo from "./assests/Logo.png";
import { Form } from "./components/Form/Form";
import { List } from "./components/List/List";
import { TotalMoney } from "./components/TotalMoney/TotalMoney";
export const HomePage = () => {
  const [listTransactions, setListTransactions] = useState([]);
  function removeItem(index) {
    const temp = [...listTransactions];
    temp.splice(index, 1);
    setListTransactions(temp);
  }
  return (
    <>
      <header className="App-header">
        <img src={Logo}></img>
      </header>
      <div className="appBody">
        <div className="formAndTotalBox">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />

          <TotalMoney listTransactions={listTransactions} />
        </div>
        <div className="resumoFinanceiro">
          <div className="filterBox">
            <h2>Resumo financeiro</h2>
            <div className="buttonBox">
              <button>Todos</button>
              <button>Entradas</button>
              <button>Despesas</button>
            </div>
          </div>
          <div className="listBox">
            <List listTransactions={listTransactions} removeItem={removeItem} />
          </div>
        </div>
      </div>
    </>
  );
};
