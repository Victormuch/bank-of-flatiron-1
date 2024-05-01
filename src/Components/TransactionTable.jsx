// Import the Table component from the "./Table" file
import Table from "./Table";

// Define the TransactionTable component
function TransactionTable({ transactions }) {
  // Return a table element containing transaction data
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Category</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {/* Render the Table component, passing transactions data as props */}
        <Table transactions={transactions} />
      </tbody>
    </table>
  );
}

// Export the TransactionTable component
export default TransactionTable;
