import React from 'react';
import { useNavigate } from 'react-router-dom';
import mascot from '../assets/logo.jpg';

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    icon: '🐣',
    color: 'bg-yellow-100 border-yellow-300',
    features: [
      'Access to limited games',
      'Basic progress tracking',
      'Mascot encouragement',
      'No ads',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Advance',
    price: 'Rs. 499/mo',
    icon: '🐥',
    color: 'bg-pink-100 border-pink-300',
    features: [
      'All Basic features',
      'Full access to all games',
      'Advanced progress & badges',
      'Parent dashboard',
      'Priority support',
    ],
    cta: 'Upgrade',
  },
  {
    name: 'Premium',
    price: 'Rs. 999/mo',
    icon: '🐓',
    color: 'bg-blue-100 border-blue-300',
    features: [
      'All Advance features',
      'Personalized learning paths',
      'Exclusive cartoon themes',
      'Offline access',
      'Monthly rewards',
    ],
    cta: 'Go Premium',
  },
];

function Pricing() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 p-8 flex flex-col items-center">
      <img src={mascot} alt="Kukhuri Ka Mascot" className="w-28 h-28 rounded-full border-4 border-pink-200 mb-4 bg-white shadow-lg" />
      <h1 className="text-4xl font-extrabold text-pink-600 mb-2">Choose Your Plan</h1>
      <p className="text-lg text-gray-700 mb-8">Fun, learning, and progress for every child!</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-3xl border-4 ${plan.color} p-8 shadow-xl flex flex-col items-center hover:scale-105 transition-transform`}
          >
            <div className="text-6xl mb-4">{plan.icon}</div>
            <h2 className="text-2xl font-bold text-pink-700 mb-2">{plan.name}</h2>
            <p className="text-3xl font-extrabold text-yellow-600 mb-4">{plan.price}</p>
            <ul className="mb-6 space-y-2 text-left w-full">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700">
                  <span className="text-xl">⭐</span> {feature}
                </li>
              ))}
            </ul>
            <button className="bg-pink-400 text-white px-6 py-3 rounded-xl font-bold shadow hover:bg-pink-500 transition-colors w-full">
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate(-1)}
        className="mt-10 text-pink-400 font-semibold hover:underline text-lg"
      >
        ← Back
      </button>
    </div>
  );
}

export default Pricing; 