# EVOKE Developer Documentation

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Getting Started](#getting-started)
3. [Project Architecture](#project-architecture)
4. [Component Library](#component-library)
5. [State Management](#state-management)
6. [Routing & Navigation](#routing--navigation)
7. [Styling & Design System](#styling--design-system)
8. [SEO & Performance](#seo--performance)
9. [Testing](#testing)
10. [Development Guidelines](#development-guidelines)
11. [API Integration](#api-integration)
12. [Deployment](#deployment)
13. [Troubleshooting](#troubleshooting)

---

## 🎯 Project Overview

**EVOKE** is a modern event management and ticketing platform built with React, TypeScript, and Vite. The platform enables users to discover, create, and manage events with integrated ticketing and payment systems.

### Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, CSS Modules
- **State Management**: Zustand
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives
- **Testing**: Vitest, Testing Library
- **Build Tools**: Vite, React Snap
- **Performance**: Lighthouse, Bundle Analyzer

### Key Features

- 🎫 Event creation and management
- 💳 Integrated ticketing system
- 📱 Progressive Web App (PWA)
- 🔍 SEO optimized
- 🎨 Modern, responsive UI
- ⚡ Performance optimized
- 🧪 Comprehensive testing setup

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/donaina/Evoke.git
cd Evoke

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run preview      # Preview production build

# Building
npm run build        # Build for production
npm run postbuild    # Pre-render for SEO

# Testing
npm run test         # Run tests in watch mode
npm run test:run     # Run tests once
npm run test:ui      # Run tests with UI
npm run test:coverage # Run tests with coverage

# Quality Assurance
npm run lint         # Run ESLint
npm run analyze      # Analyze bundle size
npm run lighthouse   # Run performance audit
```

### Environment Setup

Create a `.env` file in the root directory:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_ENV=development

# Payment Gateway (Future)
VITE_PAYSTACK_PUBLIC_KEY=your_paystack_key
VITE_FLUTTERWAVE_PUBLIC_KEY=your_flutterwave_key

# Analytics (Future)
VITE_GA_TRACKING_ID=your_ga_id
```

---

## 🏗️ Project Architecture

### Directory Structure

```
src/
├── assets/              # Static assets (images, icons)
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components
│   ├── ErrorBoundary.tsx
│   └── SEO.tsx
├── lib/                # Utility libraries
│   ├── hooks.ts        # Custom React hooks
│   ├── store.ts        # Zustand stores
│   ├── utils.ts        # Utility functions
│   └── accessibility.ts # Accessibility helpers
├── screens/            # Page components
│   ├── Home/
│   ├── EventDashboard/
│   ├── CreateEvent/
│   └── ... (other screens)
├── test/               # Test setup and utilities
└── index.tsx           # Application entry point
```

### File Naming Conventions

- **Components**: PascalCase (e.g., `EventDashboard.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useLocalStorage.ts`)
- **Utilities**: camelCase (e.g., `utils.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.ts`)
- **Types**: PascalCase with `I` prefix for interfaces (e.g., `IEvent.ts`)

---

## 🧩 Component Library

### Base UI Components

Located in `src/components/ui/`, these are the foundational components built on Radix UI primitives.

#### Button Component

```tsx
import { Button } from '@/components/ui/button';

// Usage
<Button variant="default" size="lg" disabled={false}>
  Click me
</Button>

// Variants: default, destructive, outline, secondary, ghost, link
// Sizes: sm, md, lg
```

#### Card Component

```tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Usage
<Card>
  <CardHeader>
    <CardTitle>Event Title</CardTitle>
  </CardHeader>
  <CardContent>
    Event content goes here
  </CardContent>
</Card>
```

#### Input Component

```tsx
import { Input } from '@/components/ui/input';

// Usage
<Input 
  type="email" 
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

### Screen Components

Each screen is organized in its own directory with an index file for clean imports.

#### Example Screen Structure

```
src/screens/EventDashboard/
├── EventDashboard.tsx    # Main component
├── index.ts             # Export file
└── __tests__/           # Component tests
    └── EventDashboard.test.tsx
```

#### Screen Component Template

```tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface EventDashboardProps {
  // Define props if needed
}

export const EventDashboard: React.FC<EventDashboardProps> = () => {
  const navigate = useNavigate();
  const [state, setState] = useState();

  useEffect(() => {
    // Component initialization
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Component content */}
    </div>
  );
};
```

---

## 📊 State Management

### Zustand Store Structure

The application uses Zustand for global state management. Stores are located in `src/lib/store.ts`.

#### Example Store

```tsx
import { create } from 'zustand';

interface EventStore {
  events: Event[];
  selectedEvent: Event | null;
  loading: boolean;
  setEvents: (events: Event[]) => void;
  setSelectedEvent: (event: Event | null) => void;
  setLoading: (loading: boolean) => void;
}

export const useEventStore = create<EventStore>((set) => ({
  events: [],
  selectedEvent: null,
  loading: false,
  setEvents: (events) => set({ events }),
  setSelectedEvent: (event) => set({ selectedEvent: event }),
  setLoading: (loading) => set({ loading }),
}));
```

#### Using Stores

```tsx
import { useEventStore } from '@/lib/store';

const MyComponent = () => {
  const { events, setEvents, loading } = useEventStore();
  
  // Component logic
};
```

### Local State Guidelines

- Use `useState` for component-specific state
- Use `useReducer` for complex state logic
- Use Zustand for global state that needs to be shared
- Prefer composition over prop drilling

---

## 🧭 Routing & Navigation

### Route Configuration

Routes are defined in `src/index.tsx` using React Router DOM.

```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/home" element={<Home />} />
  <Route path="/create-event" element={<CreateEvent />} />
  <Route path="/event/:eventId" element={<EventDetail />} />
  <Route path="/ticket-purchase/:eventId" element={<TicketPurchase />} />
  <Route path="/event-dashboard" element={<EventDashboard />} />
  {/* Add more routes as needed */}
</Routes>
```

### Navigation Patterns

#### Programmatic Navigation

```tsx
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/event/123');
  };
};
```

#### URL Parameters

```tsx
import { useParams } from 'react-router-dom';

const EventDetail = () => {
  const { eventId } = useParams<{ eventId: string }>();
  
  // Use eventId for API calls
};
```

### Sidebar Navigation

The application uses a consistent sidebar navigation pattern:

```tsx
const Sidebar = () => (
  <div className="fixed left-0 top-0 h-full w-20 bg-white">
    {/* Navigation items */}
  </div>
);
```

---

## 🎨 Styling & Design System

### Design Tokens

The application uses a consistent design system with the following tokens:

#### Colors

```css
/* Primary Colors */
--primary: #FC1924;
--primary-hover: #e01620;

/* Background Colors */
--bg-primary: #1a1a1a;
--bg-secondary: #2a2a2a;
--bg-tertiary: #3a3a3a;

/* Text Colors */
--text-primary: #ffffff;
--text-secondary: #9ca3af;
--text-muted: #6b7280;
```

#### Typography

```css
/* Font Family */
font-family: 'Space Grotesk', sans-serif;

/* Font Sizes */
text-xs: 0.75rem;
text-sm: 0.875rem;
text-base: 1rem;
text-lg: 1.125rem;
text-xl: 1.25rem;
text-2xl: 1.5rem;
text-3xl: 1.875rem;
```

#### Spacing

```css
/* Consistent spacing scale */
space-1: 0.25rem;
space-2: 0.5rem;
space-4: 1rem;
space-6: 1.5rem;
space-8: 2rem;
space-12: 3rem;
space-16: 4rem;
```

### Tailwind CSS Configuration

The project uses a custom Tailwind configuration in `tailwind.config.js`:

```js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FC1924',
        'primary-hover': '#e01620',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

### Component Styling Guidelines

1. **Use Tailwind classes** for styling
2. **Follow mobile-first** responsive design
3. **Use consistent spacing** from the design system
4. **Maintain dark theme** consistency
5. **Use semantic class names** for better readability

---

## 🔍 SEO & Performance

### SEO Implementation

The application uses React Helmet Async for dynamic SEO management.

#### SEO Component Usage

```tsx
import { SEO } from '@/components/SEO';

const EventDetail = () => {
  return (
    <>
      <SEO 
        title="Event Title - EVOKE"
        description="Event description for SEO"
        keywords={['events', 'tickets', 'event-management']}
        image={event.image}
        url={`/event/${eventId}`}
      />
      {/* Component content */}
    </>
  );
};
```

#### Structured Data

The application includes Schema.org structured data for events:

```tsx
const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": event.title,
  "description": event.description,
  "startDate": event.startDate,
  "endDate": event.endDate,
  "location": {
    "@type": "Place",
    "name": event.location
  }
};
```

### Performance Optimization

#### Code Splitting

```tsx
// Lazy load components
const EventDashboard = lazy(() => import('./screens/EventDashboard'));
const CreateEvent = lazy(() => import('./screens/CreateEvent'));
```

#### Image Optimization

```tsx
// Use optimized images
<img 
  src={optimizedImageUrl} 
  alt={altText}
  loading="lazy"
  className="object-cover"
/>
```

#### Bundle Analysis

Run bundle analysis to identify optimization opportunities:

```bash
npm run analyze
```

---

## 🧪 Testing

### Testing Strategy

The project uses Vitest for unit testing and Testing Library for component testing.

#### Test File Structure

```
src/
├── components/
│   └── ui/
│       └── __tests__/
│           └── button.test.tsx
└── screens/
    └── EventDashboard/
        └── __tests__/
            └── EventDashboard.test.tsx
```

#### Component Test Example

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { EventDashboard } from '../EventDashboard';

describe('EventDashboard', () => {
  it('renders dashboard title', () => {
    render(<EventDashboard />);
    expect(screen.getByText('Event Dashboard')).toBeInTheDocument();
  });

  it('handles tab switching', () => {
    render(<EventDashboard />);
    const attendeesTab = screen.getByText('Attendees');
    fireEvent.click(attendeesTab);
    expect(screen.getByText('Attendee List')).toBeInTheDocument();
  });
});
```

#### Custom Hooks Testing

```tsx
import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from '@/lib/hooks';

describe('useLocalStorage', () => {
  it('stores and retrieves values', () => {
    const { result } = renderHook(() => useLocalStorage('test', 'initial'));
    
    act(() => {
      result.current[1]('new value');
    });
    
    expect(result.current[0]).toBe('new value');
  });
});
```

### Testing Guidelines

1. **Test user interactions** not implementation details
2. **Use semantic queries** (getByRole, getByLabelText)
3. **Test accessibility** features
4. **Mock external dependencies** appropriately
5. **Maintain high test coverage** (>80%)

---

## 📝 Development Guidelines

### Code Style

#### TypeScript Guidelines

```tsx
// Use interfaces for object shapes
interface Event {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  image: string;
}

// Use type for unions and primitives
type EventStatus = 'draft' | 'published' | 'cancelled';

// Use const assertions for readonly data
const EVENT_TYPES = ['concert', 'conference', 'workshop'] as const;
```

#### React Best Practices

```tsx
// Use functional components with hooks
const MyComponent: React.FC<MyComponentProps> = ({ prop1, prop2 }) => {
  const [state, setState] = useState();
  
  useEffect(() => {
    // Side effects
  }, []);
  
  return <div>{/* JSX */}</div>;
};

// Use custom hooks for reusable logic
const useEventData = (eventId: string) => {
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Fetch event data
  }, [eventId]);
  
  return { event, loading };
};
```

### Error Handling

#### Error Boundaries

```tsx
import { ErrorBoundary } from '@/components/ErrorBoundary';

const App = () => (
  <ErrorBoundary fallback={<ErrorFallback />}>
    <Router>
      <Routes>{/* Routes */}</Routes>
    </Router>
  </ErrorBoundary>
);
```

#### API Error Handling

```tsx
const useApiCall = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiCall();
      setData(result);
    } catch (err) {
      setError(err);
      console.error('API Error:', err);
    } finally {
      setLoading(false);
    }
  };
  
  return { data, error, loading, fetchData };
};
```

### Accessibility

#### ARIA Guidelines

```tsx
// Use proper ARIA labels
<button aria-label="Close modal" onClick={handleClose}>
  <X className="w-4 h-4" />
</button>

// Use semantic HTML
<main role="main">
  <h1>Page Title</h1>
  <section aria-labelledby="section-title">
    <h2 id="section-title">Section Title</h2>
  </section>
</main>
```

#### Keyboard Navigation

```tsx
// Handle keyboard events
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    handleClose();
  }
};

useEffect(() => {
  document.addEventListener('keydown', handleKeyDown);
  return () => document.removeEventListener('keydown', handleKeyDown);
}, []);
```

---

## 🔌 API Integration

### API Structure

The application is designed to integrate with a RESTful API. API calls should be organized in service modules.

#### API Service Example

```tsx
// src/lib/api/events.ts
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const eventApi = {
  async getEvents(): Promise<Event[]> {
    const response = await fetch(`${API_BASE_URL}/events`);
    if (!response.ok) throw new Error('Failed to fetch events');
    return response.json();
  },
  
  async createEvent(eventData: CreateEventData): Promise<Event> {
    const response = await fetch(`${API_BASE_URL}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventData),
    });
    if (!response.ok) throw new Error('Failed to create event');
    return response.json();
  },
  
  async updateEvent(id: string, eventData: UpdateEventData): Promise<Event> {
    const response = await fetch(`${API_BASE_URL}/events/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventData),
    });
    if (!response.ok) throw new Error('Failed to update event');
    return response.json();
  },
  
  async deleteEvent(id: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/events/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete event');
  },
};
```

#### Using API Services

```tsx
import { eventApi } from '@/lib/api/events';

const EventDashboard = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await eventApi.getEvents();
        setEvents(data);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchEvents();
  }, []);
  
  // Component logic
};
```

### Authentication

#### Auth Service

```tsx
// src/lib/api/auth.ts
export const authApi = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) throw new Error('Login failed');
    return response.json();
  },
  
  async register(userData: RegisterData): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    if (!response.ok) throw new Error('Registration failed');
    return response.json();
  },
  
  async logout(): Promise<void> {
    await fetch(`${API_BASE_URL}/auth/logout`, { method: 'POST' });
  },
};
```

#### Auth Hook

```tsx
// src/lib/hooks/useAuth.ts
export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  
  const login = async (credentials: LoginCredentials) => {
    try {
      const response = await authApi.login(credentials);
      setUser(response.user);
      localStorage.setItem('token', response.token);
    } catch (error) {
      throw error;
    }
  };
  
  const logout = async () => {
    try {
      await authApi.logout();
      setUser(null);
      localStorage.removeItem('token');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  
  return { user, loading, login, logout };
};
```

---

## 🚀 Deployment

### Build Process

```bash
# Build for production
npm run build

# Pre-render for SEO
npm run postbuild

# Preview production build
npm run preview
```

### Environment Configuration

Create environment-specific files:

```bash
# .env.development
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_ENV=development

# .env.production
VITE_API_BASE_URL=https://api.evoke.com
VITE_APP_ENV=production
```

### Deployment Platforms

#### Vercel

1. Connect your GitHub repository
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

#### Netlify

1. Connect your GitHub repository
2. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`

#### Manual Deployment

```bash
# Build the application
npm run build

# Upload dist/ folder to your web server
# Configure your web server to serve index.html for all routes
```

### Performance Monitoring

#### Lighthouse CI

```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [push, pull_request]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v9
        with:
          configPath: './lighthouserc.json'
          uploadArtifacts: true
```

---

## 🔧 Troubleshooting

### Common Issues

#### Build Errors

```bash
# Clear cache and reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf node_modules/.vite
```

#### TypeScript Errors

```bash
# Check TypeScript configuration
npx tsc --noEmit

# Fix type issues
npx tsc --noEmit --fix
```

#### Performance Issues

```bash
# Analyze bundle size
npm run analyze

# Run Lighthouse audit
npm run lighthouse
```

### Debug Tools

#### React Developer Tools

Install React Developer Tools browser extension for component debugging.

#### Redux DevTools (for Zustand)

```tsx
import { devtools } from 'zustand/middleware';

export const useStore = create(
  devtools(
    (set) => ({
      // Store implementation
    }),
    { name: 'evoke-store' }
  )
);
```

#### Network Debugging

```tsx
// Enable API request logging
const apiCall = async (url: string, options?: RequestInit) => {
  console.log('API Request:', { url, options });
  const response = await fetch(url, options);
  console.log('API Response:', response);
  return response;
};
```

### Performance Optimization

#### Bundle Splitting

```tsx
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
        },
      },
    },
  },
});
```

#### Image Optimization

```tsx
// Use WebP format when possible
const getOptimizedImageUrl = (url: string, width: number) => {
  return url.replace(/\.(jpg|jpeg|png)/, '.webp') + `?w=${width}`;
};
```

---

## 📚 Additional Resources

### Documentation

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Zustand Documentation](https://github.com/pmndrs/zustand)

### Tools

- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)

### Community

- [React Community](https://reactjs.org/community/support.html)
- [TypeScript Community](https://www.typescriptlang.org/community/)
- [Vite Community](https://github.com/vitejs/vite/discussions)

---

## 🤝 Contributing

### Development Workflow

1. **Create a feature branch** from `main`
2. **Make your changes** following the coding guidelines
3. **Write tests** for new functionality
4. **Run the test suite** to ensure everything works
5. **Submit a pull request** with a clear description

### Code Review Checklist

- [ ] Code follows TypeScript guidelines
- [ ] Components are properly tested
- [ ] Accessibility features are implemented
- [ ] Performance considerations are addressed
- [ ] Documentation is updated if needed

### Commit Message Format

```
type(scope): description

feat: add new event creation flow
fix: resolve navigation issue in mobile view
docs: update API documentation
test: add unit tests for EventDashboard
refactor: improve component structure
```

---

*Last updated: January 2024* 