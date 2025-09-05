// import React, { useState } from "react";
// import WelcomeHeader from "../components/WelcomeHeader";
// import Addstock from "./Addstock";

// const ManageStock = () => {
//   const [showAddStock, setShowAddStock] = useState(false);
//   const [stocks, setStocks] = useState([]);
//   const [editingStock, setEditingStock] = useState(null);
//   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
//   const [stockToDelete, setStockToDelete] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");

//   const toggleAddStock = () => {
//     setShowAddStock(!showAddStock);
//     setEditingStock(null);
//   };

//   const addStock = (newStock) => {
//     if (editingStock) {
//       setStocks(
//         stocks.map((stock) => (stock.id === editingStock.id ? newStock : stock))
//       );
//     } else {
//       setStocks([...stocks, { ...newStock, id: Date.now() }]);
//     }
//     toggleAddStock();
//   };

//   const handleEdit = (stock) => {
//     setEditingStock(stock);
//     setShowAddStock(true);
//   };

//   const handleDelete = (stockId) => {
//     setStockToDelete(stockId);
//     setShowDeleteConfirm(true);
//   };

//   const confirmDelete = () => {
//     setStocks(stocks.filter((stock) => stock.id !== stockToDelete));
//     setShowDeleteConfirm(false);
//   };

//   const cancelDelete = () => {
//     setShowDeleteConfirm(false);
//   };

//   const filteredStocks = stocks.filter((stock) => {
//     const query = searchQuery.toLowerCase();
//     const matchesSearch =
//       stock.stockName.toLowerCase().includes(query) ||
//       stock.symbol.toLowerCase().includes(query) ||
//       stock.price.toString().includes(query) ||
//       stock.quantity.toString().includes(query);

//     const matchesStatus =
//       statusFilter === "All" || stock.status === statusFilter;

//     return matchesSearch && matchesStatus;
//   });

//   return (
//     <div className="overflow-hidden">
//       <WelcomeHeader
//         title="Manage Stock"
//         subtitle="Manage Your Stock Counts Effectively"
//         buttonText="+ Add Stock"
//         buttonClassName="w-30 text-sm md:text-[12px] font-semibold rounded-[8px] py-[10px] px-1 md:px-0 mt-5 md:mt-0"
//         onButtonClick={toggleAddStock}
//       />
//       {showAddStock && (
//         <Addstock
//           onClose={toggleAddStock}
//           onSave={addStock}
//           stock={editingStock}
//         />
//       )}
//       <div className="bg-white rounded-[12px] p-6 mb-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
//           <h3 className="text-[20px] md:text-xs lg:text-[18px] font-semibold">
//             Stock List
//           </h3>
//           <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
//             <input
//               placeholder="Search Stock by Name, Symbol, Price, Quantity"
//               className=" border border-gray-100 bg-gray-50 rounded-md px-3 py-2 text-base md:text-sm w-full md:w-60 sm:w-70 lg:w-90 focus:outline-none focus:ring-2 focus:ring-blue-300"
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <select
//               className="cursor-pointer border border-gray-100 bg-gray-50 rounded-md px-3 py-2 pr-8 text-xs w-full md:w-30 sm:w-36 lg:w-40 focus:outline-none focus:ring-2 focus:ring-blue-300"
//               value={statusFilter}
//               onChange={(e) => setStatusFilter(e.target.value)}
//             >
//               <option value="All">All</option>
//               <option value="Active">Active</option>
//               <option value="Inactive">Inactive</option>
//             </select>
//           </div>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full mt-6 rounded-[8px]">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="text-left px-4 py-5 text-[12px] font-medium text-gray-700">
//                   Stock Name
//                 </th>
//                 <th className="text-left px-4 py-5 text-[12px] font-medium text-gray-700">
//                   Symbol
//                 </th>
//                 <th className="text-left px-4 py-5 text-[12px] font-medium text-gray-700">
//                   Price
//                 </th>
//                 <th className="text-left px-4 py-5 text-[12px] font-medium text-gray-700">
//                   Quantity
//                 </th>
//                 <th className="text-left px-4 py-5 text-[12px] font-medium text-gray-700">
//                   Status
//                 </th>
//                 <th className="text-left px-4 py-5 text-[12px] font-medium text-gray-700">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredStocks.length > 0 ? (
//                 filteredStocks.map((stock) => (
//                   <tr key={stock.id} className="border-b border-gray-100">
//                     <td className="px-4 py-4 text-[12px] text-gray-700">
//                       {stock.stockName}
//                     </td>
//                     <td className="px-4 py-4 text-[12px] text-gray-700">
//                       {stock.symbol}
//                     </td>
//                     <td className="px-4 py-4 text-[12px] text-gray-700">
//                       {stock.price}
//                     </td>
//                     <td className="px-4 py-4 text-[12px] text-gray-700">
//                       {stock.quantity}
//                     </td>
//                     <td className="px-4 py-4 text-[12px]">
//                       <span
//                         className={
//                           stock.status.trim() === "Active"
//                             ? "text-green-500 font-medium"
//                             : "text-red-500 font-medium"
//                         }
//                       >
//                         {stock.status}
//                       </span>
//                     </td>

//                     <td className="px-4 py-4 text-[12px] text-gray-700">
//                       <button
//                         className="text-blue-500 hover:text-blue-700 cursor-pointer"
//                         onClick={() => handleEdit(stock)}
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-4 w-4"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
//                           />
//                         </svg>
//                       </button>
//                       <button
//                         className="text-red-500 hover:text-red-700 ml-2 cursor-pointer"
//                         onClick={() => handleDelete(stock.id)}
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-4 w-4"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
//                           />
//                         </svg>
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td
//                     colSpan="6"
//                     className="text-center text-[12px] px-4 py-6 text-gray-500"
//                   >
//                     {searchQuery || statusFilter !== "All"
//                       ? "No matching stocks found"
//                       : "No Stock Records Found"}
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       {showDeleteConfirm && (
//         <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
//           <div className="bg-white p-3 md:p-6 rounded-md w-[300px] md:w-[400px]">
//             <p className="text-center text-[14px] md:text-[16px] mb-4">
//               Are you sure you want to delete this stock?
//             </p>
//             <div className="flex justify-center gap-4">
//               <button
//                 className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-900"
//                 onClick={confirmDelete}
//               >
//                 Yes
//               </button>
//               <button
//                 className="bg-gray-300 text-gray-900 px-4 py-2 rounded-md hover:bg-gray-900 hover:text-white"
//                 onClick={cancelDelete}
//               >
//                 No
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageStock;


import React, { useState } from "react";
import WelcomeHeader from "../components/WelcomeHeader";
import Addstock from "./Addstock";

const ManageStock = () => {
  const [showAddStock, setShowAddStock] = useState(false);
  const [stocks, setStocks] = useState([]);
  const [editingStock, setEditingStock] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [stockToDelete, setStockToDelete] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const toggleAddStock = () => {
    setShowAddStock(!showAddStock);
    setEditingStock(null);
  };

  const addStock = (newStock) => {
    if (editingStock) {
      setStocks(
        stocks.map((stock) => (stock.id === editingStock.id ? newStock : stock))
      );
    } else {
      setStocks([...stocks, { ...newStock, id: Date.now() }]);
    }
    toggleAddStock();
  };

  const handleEdit = (stock) => {
    setEditingStock(stock);
    setShowAddStock(true);
  };

  const handleDelete = (stockId) => {
    setStockToDelete(stockId);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    setStocks(stocks.filter((stock) => stock.id !== stockToDelete));
    setShowDeleteConfirm(false);
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
  };

  const filteredStocks = stocks.filter((stock) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      stock.stockName.toLowerCase().includes(query) ||
      stock.symbol.toLowerCase().includes(query) ||
      stock.price.toString().includes(query) ||
      stock.quantity.toString().includes(query);

    const matchesStatus =
      statusFilter === "All" || stock.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="overflow-hidden">
      <WelcomeHeader
        title="Manage Stock"
        subtitle="Manage Your Stock Counts Effectively"
        buttonText="+ Add Stock"
        buttonClassName="w-30 text-sm md:text-[12px] font-semibold rounded-[8px] py-[10px] px-1 md:px-0 mt-5 md:mt-0 "
        onButtonClick={toggleAddStock}
      />
      {showAddStock && (
        <Addstock
          onClose={toggleAddStock}
          onSave={addStock}
          stock={editingStock}
        />
      )}
      <div className="bg-white rounded-[12px] p-6 mb-6">
        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
          <h3 className="text-[20px] md:text-xs lg:text-[18px] font-semibold">
            Stock List
          </h3>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <input
              placeholder="Search Stock by Name, Symbol, Price, Quantity"
              className="border border-gray-100 bg-gray-50 rounded-md px-3 py-2 text-base md:text-sm w-full md:w-60 sm:w-70 lg:w-90 focus:outline-none focus:ring-2 focus:ring-blue-300"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
              className="cursor-pointer border border-gray-100 bg-gray-50 rounded-md px-3 py-2 pr-8 text-xs w-full md:w-30 sm:w-36 lg:w-40 focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        {/* ✅ Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full mt-6 rounded-[8px]">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-5 text-[12px] font-medium text-gray-700">Stock Name</th>
                <th className="text-left px-4 py-5 text-[12px] font-medium text-gray-700">Symbol</th>
                <th className="text-left px-4 py-5 text-[12px] font-medium text-gray-700">Price</th>
                <th className="text-left px-4 py-5 text-[12px] font-medium text-gray-700">Quantity</th>
                <th className="text-left px-4 py-5 text-[12px] font-medium text-gray-700">Status</th>
                <th className="text-left px-4 py-5 text-[12px] font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStocks.length > 0 ? (
                filteredStocks.map((stock) => (
                  <tr key={stock.id} className="border-b border-gray-100">
                    <td className="px-4 py-4 text-[12px] text-gray-700">{stock.stockName}</td>
                    <td className="px-4 py-4 text-[12px] text-gray-700">{stock.symbol}</td>
                    <td className="px-4 py-4 text-[12px] text-gray-700">{stock.price}</td>
                    <td className="px-4 py-4 text-[12px] text-gray-700">{stock.quantity}</td>
                    <td className="px-4 py-4 text-[12px]">
                      <span
                        className={
                          stock.status.trim() === "Active"
                            ? "text-green-500 font-medium"
                            : "text-red-500 font-medium"
                        }
                      >
                        {stock.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-[12px] text-gray-700 flex gap-2">
                      {/* Edit Icon */}
                      <button
                        className="text-blue-500 hover:text-blue-700 cursor-pointer"
                        onClick={() => handleEdit(stock)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </button>
                      {/* Delete Icon */}
                      <button
                        className="text-red-500 hover:text-red-700 cursor-pointer"
                        onClick={() => handleDelete(stock.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center text-[12px] px-4 py-6 text-gray-500">
                    {searchQuery || statusFilter !== "All"
                      ? "No matching stocks found"
                      : "No Stock Records Found"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* ✅ Mobile Card View */}
        <div className="block md:hidden space-y-4 mt-6">
          {filteredStocks.length > 0 ? (
            filteredStocks.map((stock) => (
              <div
                key={stock.id}
                className="p-4 border border-gray-300 rounded-lg shadow-sm text-sm space-y-1"
              >
                <p><span className="text-sm">Name :</span> {stock.stockName}</p>
                <p><span className="text-sm">Symbol :</span> {stock.symbol}</p>
                <p><span className="text-sm">Price :</span> {stock.price}</p>
                <p><span className="text-sm">Quantity :</span> {stock.quantity}</p>
                <p>
                  <span className="font-semibold">Status:</span>{" "}
                  <span
                    className={
                      stock.status.trim() === "Active"
                        ? "text-green-500 font-medium"
                        : "text-red-500 font-medium"
                    }
                  >
                    {stock.status}
                  </span>
                </p>
                <div className="flex gap-3 pt-2">
                  {/* Edit Icon */}
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => handleEdit(stock)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </button>
                  {/* Delete Icon */}
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(stock.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 text-sm">
              {searchQuery || statusFilter !== "All"
                ? "No matching stocks found"
                : "No Stock Records Found"}
            </p>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
          <div className="bg-white p-3 md:p-6 rounded-md w-[300px] md:w-[400px]">
            <p className="text-center text-[14px] md:text-[16px] mb-4">
              Are you sure you want to delete this stock?
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-900"
                onClick={confirmDelete}
              >
                Yes
              </button>
              <button
                className="bg-gray-300 text-gray-900 px-4 py-2 rounded-md hover:bg-gray-900 hover:text-white"
                onClick={cancelDelete}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageStock;
