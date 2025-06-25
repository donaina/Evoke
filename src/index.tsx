import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ErrorBoundary } from "./components/ErrorBoundary";
import SEO from "./components/SEO";
import { SignUp } from "./screens/SignUp";
import { Login } from "./screens/Login";
import { Home } from "./screens/Home";
import { CreateVibe } from "./screens/CreateVibe";
import { CreateEvent } from "./screens/CreateEvent";
import { Profile } from "./screens/Profile";
import { TicketScanner } from "./screens/TicketScanner";
import { EventDashboard } from "./screens/EventDashboard";
import { TicketPurchase } from "./screens/TicketPurchase";
import { TicketSuccess } from "./screens/TicketSuccess";
import { Calendar } from "./screens/Calendar";
import { Support } from "./screens/Support";
import { Games } from "./screens/Games";
import { Discovery } from "./screens/Discovery";
import { Messages } from "./screens/Messages";
import { EventDetail } from "./screens/EventDetail";
import { MyTickets } from "./screens/MyTickets";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <HelmetProvider>
      <ErrorBoundary>
        <SEO />
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/create-vibe" element={<CreateVibe />} />
            <Route path="/create-event" element={<CreateEvent />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/my-tickets" element={<MyTickets />} />
            <Route path="/ticket-scanner" element={<TicketScanner />} />
            <Route path="/event-dashboard/:eventId" element={<EventDashboard />} />
            <Route path="/event-detail/:eventId" element={<EventDetail />} />
            <Route path="/ticket-purchase/:eventId" element={<TicketPurchase />} />
            <Route path="/ticket-success" element={<TicketSuccess />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/support" element={<Support />} />
            <Route path="/games" element={<Games />} />
            <Route path="/discovery" element={<Discovery />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  </StrictMode>,
);