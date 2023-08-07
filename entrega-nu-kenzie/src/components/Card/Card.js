export const Card = ({ transaction, onDelete }) => {
  if (transaction.type === "entrada") {
    return (
      <li className="listItem">
        <div className="typeColorGreen"></div>
        <div className="infoBox">
          <div className="info1">
            <h2>{transaction.description}</h2>
            <span className="spanTypeGreen">{transaction.type}</span>
          </div>
          <div className="info2">
            <span className="spanValue">{`R$ ${transaction.value}`}</span>
            <button onClick={onDelete}> X </button>
          </div>
        </div>
      </li>
    );
  } else {
    return (
      <li className="listItem">
        <div className="typeColorRed"></div>
        <div className="infoBox">
          <div className="info1">
            <h2>{transaction.description}</h2>
            <span className="spanTypeRed">{transaction.type}</span>
          </div>
          <div className="info2">
            <span className="spanValue">{`R$ ${transaction.value}`}</span>
            <button onClick={onDelete}> X </button>
          </div>
        </div>
      </li>
    );
  }
};
