import { useState } from "react";

function TransactionForm({ transactions, setTransactions }) {
  const [description, setDescription] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !description.date ||
      !description.description ||
      !description.category ||
      !description.amount
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    setTransactions([...transactions, description]);
    setDescription({
      date: "",
      description: "",
      category: "",
      amount: "",
    });
  };

  const handleChange = (e) => {
    setDescription({
      ...description,
      [e.target.name]: e.target.value,
    });

    // Handle case where user clears input field
    if (e.target.value === "") {
      setDescription((prevDescription) => ({
        ...prevDescription,
        [e.target.name]: "",
      }));
    }
  };

  return (
    <form>
      <div className="row border">
        <div className="col-3">
          <input
            type="date"
            name="date"
            value={description.date}
            onChange={handleChange}
          />
        </div>
        <div className="col-3">
          <input
            type="text"
            name="description"
            value={description.description}
            placeholder="Description"
            onChange={handleChange}
          />
        </div>
        <div className="col-3">
          <input
            type="text"
            name="category"
            value={description.category}
            placeholder="Category"
            onChange={handleChange}
          />
        </div>
        <div className="col-3">
          <input
            type="number"
            name="amount"
            value={description.amount}
            placeholder="Amount"
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <button type="button" onClick={handleSubmit}>
            Add Transaction
          </button>
        </div>
      </div>
    </form>
  );
}

export default TransactionForm;
