import { useState } from "react";

export const TotalMoney = ({ listTransactions }) => {
  console.log(listTransactions);
  const total = listTransactions.reduce((acc, transaction) => {
    if (transaction.type === "saida") {
      return acc - Number(transaction.value);
    } else {
      return acc + Number(transaction.value);
    }
  }, 0);

  return (
    <div className="totalBox">
      <div className="totalInfo">
        <h2 className="totalLabel">Valor total:</h2>
        <h2 className="totalValue">{`R$ ${total}`}</h2>
      </div>
      <p>O valor se refere ao saldo</p>
    </div>
  );
};
