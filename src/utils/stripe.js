import { loadStripe } from '@stripe/stripe-js';

// Replace with your actual publishable key
const STRIPE_PUBLISHABLE_KEY='pk_test_51RjFj8PR9zbP3BsurCfFn4bKClw5ueBtZBiiBhAMExaV5zLzpaW1J3nGCmUUJadVYyPUsdc88vRUGegOghcC4FiU004qWzwFzq';

export const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);