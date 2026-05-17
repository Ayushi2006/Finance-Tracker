import { useState } from "react";
import {
  FaWallet,
  FaArrowUp,
  FaArrowDown,
  FaPlus,
  FaTrash,
} from "react-icons/fa";

import { motion } from "framer-motion";

function FinanceDashboard() {
  const [transactions, setTransactions] = useState([
    { id: 1, text: "Salary", amount: 50000 },
    { id: 2, text: "Groceries", amount: -3000 },
  ]);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  // Add transaction
  const addTransaction = (e) => {
    e.preventDefault();

    if (!text || !amount) return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: Number(amount),
    };

    setTransactions([newTransaction, ...transactions]);

    setText("");
    setAmount("");
  };

  // Delete transaction
  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((item) => item.id !== id)
    );
  };

  // Calculations
  const income = transactions
    .filter((item) => item.amount > 0)
    .reduce((acc, item) => acc + item.amount, 0);

  const expense = transactions
    .filter((item) => item.amount < 0)
    .reduce((acc, item) => acc + item.amount, 0);

  const balance = income + expense;

  return (
    <div className="max-w-6xl mx-auto p-6">

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <Card
          title="Balance"
          amount={balance}
          icon={<FaWallet />}
          color="from-blue-500 to-indigo-600"
        />

        <Card
          title="Income"
          amount={income}
          icon={<FaArrowUp />}
          color="from-green-500 to-emerald-600"
        />

        <Card
          title="Expense"
          amount={Math.abs(expense)}
          icon={<FaArrowDown />}
          color="from-red-500 to-rose-600"
        />
      </div>

      {/* Form + Logs */}
      <div className="grid lg:grid-cols-2 gap-8">

        {/* Add Transaction */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-slate-800 p-6 rounded-3xl shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-6">
            Add Transaction
          </h2>

          <form
            onSubmit={addTransaction}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Enter title"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full p-4 rounded-xl bg-slate-700 outline-none"
            />

            <input
              type="number"
              placeholder="Positive = income | Negative = expense"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-4 rounded-xl bg-slate-700 outline-none"
            />

            <button
              className="w-full bg-blue-500 hover:bg-blue-600 transition p-4 rounded-xl flex justify-center items-center gap-2"
            >
              <FaPlus />
              Add Transaction
            </button>
          </form>
        </motion.div>

        {/* Transaction History */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-slate-800 p-6 rounded-3xl shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-6">
            Transaction History
          </h2>

          <div className="space-y-4 max-h-[500px] overflow-y-auto">

            {transactions.map((item) => (

              <div
                key={item.id}
                className={`p-4 rounded-2xl flex justify-between items-center ${
                  item.amount > 0
                    ? "bg-green-500/20 border border-green-500/30"
                    : "bg-red-500/20 border border-red-500/30"
                }`}
              >
                <div>
                  <h3 className="font-semibold">
                    {item.text}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {item.amount > 0 ? "Income" : "Expense"}
                  </p>
                </div>

                <div className="flex items-center gap-4">

                  <p className="font-bold text-lg">
                    {item.amount > 0 ? "+" : "-"} ₹
                    {Math.abs(item.amount)}
                  </p>

                  <button
                    onClick={() =>
                      deleteTransaction(item.id)
                    }
                    className="bg-red-500 hover:bg-red-600 p-3 rounded-xl"
                  >
                    <FaTrash />
                  </button>

                </div>
              </div>

            ))}

          </div>
        </motion.div>

      </div>
    </div>
  );
}

function Card({ title, amount, icon, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`bg-gradient-to-r ${color} p-6 rounded-3xl shadow-xl`}
    >
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg opacity-80">
            {title}
          </h2>

          <p className="text-4xl font-bold mt-2">
            ₹ {amount.toLocaleString()}
          </p>
        </div>

        <div className="text-4xl opacity-70">
          {icon}
        </div>
      </div>
    </motion.div>
  );
}

export default FinanceDashboard;