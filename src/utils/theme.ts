export const toastTheme = {
  success: {
    background: 'bg-green-500',
    hover: 'hover:bg-green-600',
    icon: '✓'
  },
  error: {
    background: 'bg-red-500',
    hover: 'hover:bg-red-600',
    icon: '✕'
  },
  warning: {
    background: 'bg-yellow-500',
    hover: 'hover:bg-yellow-600',
    icon: '⚠'
  },
  info: {
    background: 'bg-blue-500',
    hover: 'hover:bg-blue-600',
    icon: 'ℹ'
  }
} as const;
