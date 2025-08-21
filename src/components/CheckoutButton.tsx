"use client";

import React from "react";

interface CheckoutButtonProps {
  priceId: string;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ priceId }) => {
  const handleCheckout = async () => {
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId }), // Use priceId prop
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Failed to create checkout session");
      }
    } catch (err) {
      console.error("Checkout error:", err);
    }
  };

  return (
    <button onClick={handleCheckout} className="bg-blue-600 text-white p-2 rounded">
      Subscribe Now
    </button>
  );
};

export default CheckoutButton;
