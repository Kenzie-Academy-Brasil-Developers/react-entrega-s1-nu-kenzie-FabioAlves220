import { useState } from "react";

export const TotalMoney = ({ listTransactions }) => {
  const total = listTransactions.reduce((acc, transaction) => {
    if (transaction.type === "saida") {
      return acc - Number(transaction.value);
    } else {
      return acc + Number(transaction.value);
    }
  }, 0);
  console.log(total);
};
