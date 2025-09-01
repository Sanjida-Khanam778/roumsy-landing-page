import { useState } from "react";
import { MoreHorizontal, Edit, Trash2 } from "lucide-react";

const plans = [
  {
    id: 1,
    name: "Quiz Only",
    price: "19.99 CAD",
    billingType: "Monthly",
    activeUsers: "00",
    status: "Active",
  },
  {
    id: 2,
    name: "Bundle",
    price: "29.99 CAD",
    billingType: "Monthly",
    activeUsers: "00",
    status: "Active",
  },
  {
    id: 3,
    name: "Career Plan",
    price: "$29.99",
    billingType: "Monthly",
    activeUsers: "00",
    status: "Active",
  },
];

export default function Monetization() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleEdit = (planId) => {
    console.log("Edit plan:", planId);
    setOpenDropdown(null);
  };

  const handleDelete = (planId) => {
    console.log("Delete plan:", planId);
    setOpenDropdown(null);
  };

  const toggleDropdown = (planId) => {
    setOpenDropdown(openDropdown === planId ? null : planId);
  };

  return (
    <div className="min-h-screen bg-[#EEF6FF] p-8">
      {/* Table Header */}
      <div className="bg-[#187A80] rounded-tr-xl rounded-bl-xl px-6 py-4 grid grid-cols-6 gap-4 text-white text-center text-2xl">
        <div>Plan Name</div>
        <div>Price</div>
        <div>Billing Type</div>
        <div>Active Users</div>
        <div>Status</div>
        <div>Actions</div>
      </div>

      {/* Table Rows */}
      <div className="space-y-3 mt-3">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="bg-[#005EA2] rounded-tr-xl rounded-bl-xl px-6 py-8 grid grid-cols-6 gap-4 text-center text-white shadow-lg"
          >
            <div className="text-2xl">{plan.name}</div>
            <div className="text-2xl">{plan.price}</div>
            <div className="text-xl">{plan.billingType}</div>
            <div className="text-xl">{plan.activeUsers}</div>
            <div>
              <span className="text-[#00FF0A] text-xl text-center">{plan.status}</span>
            </div>
            {/* Actions */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown(plan.id)}
                className="h-8 w-8 flex items-center justify-center ml-24 rounded"
              >
                <MoreHorizontal className="h-4 w-4 text-white" />
              </button>

              {/* Dropdown */}
              {openDropdown === plan.id && (
                <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg z-10">
                  <button
                    onClick={() => handleEdit(plan.id)}
                    className="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100"
                  >
                    <Edit className="mr-2 h-4 w-4 text-gray-600" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(plan.id)}
                    className="flex items-center w-full px-3 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
