"use client";
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Link from "next/link";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

const CheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    date: "",
    price:"",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    const cardElement = elements.getElement(CardElement);

    if (!cardElement) return;

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: {
          name: formData.name,
          address: {
            line1: formData.address,
          },
        },
      });

      if (error) {
        setError(error.message || "Something went wrong!");
        setLoading(false);
        return;
      }

      // Server-side call to handle payment intent
      const res = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          amount: Number(formData.price) * 100, // Convert dollars to cents
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSuccess(true);
      } else {
        setError("Payment failed!");
      }
    } catch (err) {
      setError("An unexpected error occurred!");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-2xl mt-10 mb-20">
      <h2 className="text-xl font-bold mb-4 text-center ">Pay with Card</h2>
      
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded-lg outline-none"
        required
      />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded-lg outline-none"
        required
      />

      <input
        type="date"
        name="date"
        placeholder="Date"
        value={formData.date}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded-lg outline-none"
        required
        
      />

      

      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded-lg outline-none"
        required
      />

      <CardElement className="p-2 border rounded-lg mb-3" />

      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && <p className="text-green-500 mt-2">Payment Successful!</p>}

      <div className="flex justify-center items-center mt-6 mb-6">
        <button type="submit" disabled={!stripe || loading} className=" w-[80%]  bg-blue-600 py-2 rounded-md hover:bg-blue-700 text-white font-semibold ">
          <Link href="/Thanks"> {loading ? "Processing..." : "Pay Now"}</Link>
        </button>
      </div>
    </form>
  );
};

const Payment: React.FC = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Payment;
