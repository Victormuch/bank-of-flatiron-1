import { useState } from 'react'

import './App.css'
import Header from './Components/Header'
import SearchBar from './Components/SearchBar'
import TransactionForm from './Components/TransactionForm';
import TransactionTable from './Components/TransactionTable';

function App() {
    const things = [
      {
        date: "2024-12-01",
        description: "Movie",
        category: "Entertainment",
        amount: "$100",
      },
      {
        date: "2024-11-02",
        description: "game",
        category: "Gaming",
        amount: "$110",
      },
      {
        date: "2024-10-03",
        description: "Hicking",
        category: "Entertainment",
        amount: "$120",
      },
      {
        date: "2024-09-04",
        description: "Fries",
        category: "Food",
        amount: "$130",
      },
      {
        date: "2024-08-05",
        description: "Swimming",
        category: "Entertainment",
        amount: "$140",
      },
      {
        date: "2024-12-01",
        description: "Check-up",
        category: "Health",
        amount: "$150",
      },
    ];
const [transactions, setTransactions] = useState(things);

  return (
    <div>
      <Header />
      <SearchBar
        transactions={transactions}
        setTransactions={setTransactions}
        things={things}
      />
      <TransactionForm />
      <TransactionTable transactions={transactions} />
    </div>
  );
}

export default App
