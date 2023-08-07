import { useState } from "react";
import Logo from "../../assests/Logo.png";
import { Form } from "../../components/Form/Form";
import { List } from "../../components/List/List";
import { TotalMoney } from "../../components/TotalMoney/TotalMoney";
export const HomePage = ({ setLandingPage }) => {
  const [listTransactions, setListTransactions] = useState([]);
  const [filter, setFilter] = useState("todos");
  //----------
  function removeItem(index) {
    const temp = [...listTransactions];
    temp.splice(index, 1);
    setListTransactions(temp);
  }
  //----------
  function handleFilterClick(type) {
    setFilter(type);
  }
  return (
    <>
      <header className="App-header">
        <img src={Logo} />
        <button onClick={() => setLandingPage(true)} className="logoutButton">
          Inicio
        </button>
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
              <button onClick={() => handleFilterClick("todos")}>Todos</button>
              <button onClick={() => handleFilterClick("entrada")}>
                Entradas
              </button>
              <button onClick={() => handleFilterClick("saida")}>
                Despesas
              </button>
            </div>
          </div>
          <div className="listBox">
            <List
              listTransactions={listTransactions}
              removeItem={removeItem}
              filter={filter}
            />
          </div>
        </div>
      </div>
    </>
  );
};
