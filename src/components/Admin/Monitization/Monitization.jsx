import { useState } from "react";
import { MoreHorizontal, Edit, Trash2, Save, X } from "lucide-react";

const initialPlans = [
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
  const [plans, setPlans] = useState(initialPlans);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [editPlanId, setEditPlanId] = useState(null);
  const [editValues, setEditValues] = useState({ price: "", billingType: "" });
  const [deletePlanId, setDeletePlanId] = useState(null); // ✅ delete modal state

  const toggleDropdown = (planId) =>
    setOpenDropdown(openDropdown === planId ? null : planId);

  const handleEdit = (plan) => {
    setEditPlanId(plan.id);
    setEditValues({ price: plan.price, billingType: plan.billingType });
    setOpenDropdown(null);
  };

  const handleDelete = (planId) => {
    setDeletePlanId(planId); // modal show
    setOpenDropdown(null);
  };

  const confirmDelete = () => {
    setPlans(plans.filter((p) => p.id !== deletePlanId));
    setDeletePlanId(null);
  };

  const handleCancelDelete = () => setDeletePlanId(null);

  const handleSave = (planId) => {
    setPlans((prev) =>
      prev.map((p) =>
        p.id === planId
          ? {
              ...p,
              price: editValues.price,
              billingType: editValues.billingType,
            }
          : p
      )
    );
    setEditPlanId(null);
  };

  const handleCancel = () => setEditPlanId(null);

  return (
    <div className="h-[calc(100vh-80px)] bg-[#EEF6FF] p-8">
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

            <div className="text-2xl">
              {editPlanId === plan.id ? (
                <input
                  type="text"
                  value={editValues.price}
                  onChange={(e) =>
                    setEditValues({ ...editValues, price: e.target.value })
                  }
                  className="text-black text-center rounded px-2 py-1 w-full"
                />
              ) : (
                plan.price
              )}
            </div>

            <div className="text-xl">
              {editPlanId === plan.id ? (
                <input
                  type="text"
                  value={editValues.billingType}
                  onChange={(e) =>
                    setEditValues({
                      ...editValues,
                      billingType: e.target.value,
                    })
                  }
                  className="text-black text-center rounded px-2 py-1 w-full"
                />
              ) : (
                plan.billingType
              )}
            </div>

            <div className="text-xl">{plan.activeUsers}</div>
            <div>
              <span className="text-[#00FF0A] text-xl text-center">
                {plan.status}
              </span>
            </div>

            {/* Actions */}
            <div className="relative">
              {editPlanId === plan.id ? (
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => handleSave(plan.id)}
                    className="flex items-center bg-green-500 px-2 py-1 rounded hover:bg-green-600"
                  >
                    <Save className="mr-1 h-4 w-4" /> Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex items-center bg-red-500 px-2 py-1 rounded hover:bg-red-600"
                  >
                    <X className="mr-1 h-4 w-4" /> Cancel
                  </button>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => toggleDropdown(plan.id)}
                    className="h-8 w-8 flex items-center justify-center ml-24 rounded"
                  >
                    <MoreHorizontal className="h-4 w-4 text-white" />
                  </button>

                  {openDropdown === plan.id && (
                    <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg z-10">
                      <button
                        onClick={() => handleEdit(plan)}
                        className="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100"
                      >
                        <Edit className="mr-2 h-4 w-4 text-gray-600" /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(plan.id)}
                        className="flex items-center w-full px-3 py-2 text-sm text-red-600 hover:bg-gray-100"
                      >
                        <Trash2 className="mr-2 h-4 w-4" /> Delete
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Confirm Delete Modal */}
      {deletePlanId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 text-center">
            <h2 className="text-xl font-semibold mb-4">Are you sure?</h2>
            <p className="mb-6">Do you really want to delete this plan?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Yes
              </button>
              <button
                onClick={handleCancelDelete}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
