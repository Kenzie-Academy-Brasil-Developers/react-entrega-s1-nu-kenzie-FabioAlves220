import { Card } from "../Card/Card";

export const List = ({ listTransactions }) => {
  return (
    <ul>
      {listTransactions.map((transaction, index) => (
        <Card transaction={transaction} key={index} />
      ))}
    </ul>
  );
};
