# React Toast Notification 🍞

A lightweight, customizable toast notification system for React applications built with TypeScript and Vite.

## Features ✨

- 🚀 Easy to integrate with React applications
- 🎨 Multiple toast types (success, error, warning, info)
- 🌈 Customizable styling and positioning
- ⌨️ Full TypeScript support
- 🪶 Lightweight and performant
- 📱 Responsive design
- ⏱️ Configurable toast duration

## Installation 📦

```bash
npm install @react-toast-notify-ks
# or
yarn add @react-toast-notify-ks
```

## Quick Start 🚀

### 1. Wrap Your App with ToastProvider

```tsx
import { ToastProvider } from '@react-toast-notify-ks';

function App() {
  return (
    <ToastProvider>
      <YourMainComponent />
    </ToastProvider>
  );
}
```

### 2. Use Toast in Components

```tsx
import { useToast } from '@react-toast-notify-ks';

function ExampleComponent() {
  const toast = useToast();

  const handleShowToasts = () => {
    // Basic usage
    toast.success('Operation Successful!');
    toast.error('Something went wrong');
    
    // Custom configuration
    toast.warning('Warning message', {
      duration: 5000,  // 5 seconds
      position: 'top-right'
    });
  };

  return (
    <div>
      <button onClick={handleShowToasts}>
        Show Toasts
      </button>
    </div>
  );
}
```

## Advanced Configuration 🛠️

### Toast Types
- `toast.success()`: Green success notification
- `toast.error()`: Red error notification
- `toast.warning()`: Yellow warning notification
- `toast.info()`: Blue informational notification

### Options
- `message`: Notification text (required)
- `duration`: Display time in milliseconds (default: 3000)
- `position`: Toast screen position
  - `top-right` (default)
  - `top-left`
  - `bottom-right`
  - `bottom-left`
  - `top-center`
  - `bottom-center`

## Best Practices 💡

- Use appropriate toast types
- Keep messages concise
- Don't overwhelm users with too many notifications
- Use for important, non-critical information

## Development 🚧

```bash
# Clone the repository
git clone [https://github.com/sankarkumark34/react-toast-notify.git]

# Install dependencies
npm install

# Start development server
npm run dev

# Build the library
npm run build

# Run tests
npm test
```

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📄

Distributed under the MIT License. See `LICENSE` for more information.

## Contact 📬

sankar- [@LinkedIn](https://www.linkedin.com/in/sankarkumarkathirvel/)

Project Link: [https://github.com/sankarkumark34/react-toast-notify.git](https://github.com/sankarkumark34/react-toast-notify.git)