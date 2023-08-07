import { useState } from "react";

export const Form = ({ listTransactions, setListTransactions }) => {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("entrada");

  function handleSubmit(event) {
    event.preventDefault();

    setListTransactions(() => [
      ...listTransactions,
      { value, description, type },
    ]);
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="descriptionBox">
        <h4 className="label">Descrição</h4>
        <input
          className="inputs description"
          type="text"
          placeholder="digite aqui sua descrição"
          description={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <span className="descriptionEx">Ex: Compra de Roupas</span>
      </div>
      <div className="transactionBox">
        <div className="holder1">
          <h4>Valor</h4>
          <input
            className="inputs valor"
            type="text"
            placeholder="R$"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
        <div className="holder2">
          <h4>Tipo de transação</h4>
          <select
            className="inputs"
            onChange={(event) => setType(event.target.value)}
          >
            <option value="entrada">entrada</option>
            <option value="saida">saida</option>
          </select>
        </div>
      </div>
      <button className="submitButton" type="submit">
        Inserir Valor
      </button>
    </form>
  );
};
