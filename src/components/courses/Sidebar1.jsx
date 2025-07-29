import React from "react";

const Sidebar1 = () => {
  return (
    <aside className="bg-white p-6 rounded-2xl shadow sticky top-24">
      <div className="text-3xl font-bold text-text-Primary mb-2">$75</div>
      <button className="w-full bg-text-Primary text-white py-2 rounded-full hover:bg-blue-900 font-medium mb-3">
        Add to Cart
      </button>
      <button className="w-full border border-text-Primary text-text-Primary py-2 rounded-full hover:bg-teal-50 font-medium">
        Buy Now
      </button>

      <div className="mt-6">
        <h4 className="font-semibold text-lg mb-2">Contact Us</h4>
        <p className="text-sm text-gray-600">
          Call Us: <span className="text-text-Primary font-semibold">+123 456 789</span>
        </p>
      </div>
    </aside>
  );
};

export default Sidebar1;
