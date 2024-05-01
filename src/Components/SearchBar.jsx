// Define the SearchBar component
function SearchBar({ transactions, setTransactions, things }) {
  // Handle change event for input field
  function handleChange(e) {
    // Get the search input value
    const info = e.target.value;

    // Check if search input is not empty
    if (info.length > 0) {
      // Filter transactions based on search input
      const filtered = transactions.filter((transaction) => {
        // Check if transaction description contains search input (case insensitive)
        return transaction.description
          .toLowerCase()
          .includes(info.toLowerCase());
      });

      // Check if any transactions matched the search
      if (filtered.length > 0) {
        // Update transactions state with filtered transactions
        setTransactions([...filtered]);
      }
    } else {
      // If search input is empty, reset transactions to the original data
      setTransactions([...things]);
    }
  }

  // Return JSX for the SearchBar component
  return (
    <div>
      {/* Input field for searching transactions */}
      <input
        onChange={handleChange} // Call handleChange function on input change
        className="form-control" // CSS class for styling
        type="text" // Input type is text
        placeholder="Search your transactions" // Placeholder text for input field
      />
    </div>
  );
}

// Export the SearchBar component
export default SearchBar;
