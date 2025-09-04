import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router';
import 'react-day-picker/style.css';
import 'react-phone-number-input/style.css';
import { ClerkProvider, useAuth } from '@clerk/clerk-react';
import SyncUserWithConvex from './components/SyncUserWithConvex';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import { ConvexReactClient } from 'convex/react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL!);

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl={'/'}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <Router>
          <SyncUserWithConvex />
          <App />
        </Router>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  </StrictMode>,
);
