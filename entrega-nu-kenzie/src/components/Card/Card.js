export const Card = ({ transaction }) => {
  return (
    <li>
      <h2>{transaction.description}</h2>
      <span>{transaction.type}</span>
      <span>{transaction.value}</span>
    </li>
  );
};
