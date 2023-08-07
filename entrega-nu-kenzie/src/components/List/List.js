import { Card } from "../Card/Card";

export const List = ({ listTransactions, removeItem, filter }) => {
  //----------

  return (
    <ul>
      {filter !== "todos"
        ? listTransactions.map(
            (transaction, index) =>
              transaction.type === filter && (
                <Card
                  transaction={transaction}
                  key={index}
                  onDelete={() => removeItem(index)}
                />
              )
          )
        : listTransactions.map((transaction, index) => (
            <Card
              transaction={transaction}
              key={index}
              onDelete={() => removeItem(index)}
            />
          ))}
    </ul>
  );
};
