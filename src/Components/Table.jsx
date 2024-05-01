// Define the Table component
function Table({ transactions }) {
  // Map through the transactions array to create table rows
  const data = transactions.map((transaction, index) => {
    return (
      // Each row has a unique key based on its index
      <tr key={index + 1}>
        {/* Display transaction date */}
        <td>{transaction.date}</td>
        {/* Display transaction description */}
        <td>{transaction.description}</td>
        {/* Display transaction category */}
        <td>{transaction.category}</td>
        {/* Display transaction amount */}
        <td>{transaction.amount}</td>
      </tr>
    );
  });

  // Return the table rows
  return <>{data}</>;
}

// Export the Table component
export default Table;
