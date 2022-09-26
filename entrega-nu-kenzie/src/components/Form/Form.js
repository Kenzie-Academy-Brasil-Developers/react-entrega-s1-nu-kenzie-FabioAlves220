import { useState } from "react";

export const Form = ({ listTransactions, setListTransactions }) => {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // console.log(value, description);
    setListTransactions([...listTransactions, { value, description, type }]);
    console.log(listTransactions);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="valor"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <input
          type="text"
          placeholder="descrição"
          description={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <select onChange={(event) => setType(event.target.value)}>
          <option value="entrada">entrada</option>
          <option value="saida">saida</option>
        </select>
        <button type="submit">Adicionar transação</button>
      </form>
    </div>
  );
};
