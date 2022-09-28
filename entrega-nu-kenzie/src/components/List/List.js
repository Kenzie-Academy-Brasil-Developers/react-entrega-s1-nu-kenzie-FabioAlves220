import { Card } from "../Card/Card";

export const List = ({ listTransactions, removeItem }) => {
  return (
    <ul>
      {listTransactions.map((transaction, index) => (
        <Card
          transaction={transaction}
          key={index}
          onDelete={() => removeItem(index)}
        />
      ))}
    </ul>
  );
};
