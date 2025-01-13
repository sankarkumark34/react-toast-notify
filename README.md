# React Toast Notification 🍞

A lightweight, customizable toast notification system for React applications built with TypeScript and Vite.

## Features ✨

- 🚀 Easy to integrate with React applications
- 🎨 Customizable toast notifications
- ⌨️ Built with TypeScript
- 🪶 Lightweight implementation
- 📱 Responsive design

## Installation 📦

This package is currently in development. To use it in your project:

1. Clone the repository
```bash
git clone [your-repository-url]
```

2. Install dependencies
```bash
npm install
```

3. Build the project
```bash
npm run build
```

## Usage 🚀

```tsx
import { ToastProvider, useToast } from './path-to-library';

// Wrap your app with ToastProvider
function App() {
  return (
    <ToastProvider>
      <YourApp />
    </ToastProvider>
  );
}

// Use in your components
function Example() {
  const toast = useToast();

  return (
    <button onClick={() => toast.show('Hello, World!')}>
      Show Toast
    </button>
  );
}
```

## Development 🛠️

```bash
# Start development server
npm run dev

# Build the library
npm run build

# Preview the build
npm run preview
```

## Contributing 🤝

Contributions are welcome! Feel free to open issues and pull requests.

## License 📄

MIT License