export const toastTheme = {
  success: {
    background: 'bg-green-100 border-l-4 border-green-500',
    hover: 'hover:bg-green-200',
    icon: '✓',
    titleGradient: 'bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent',
    loadingBar: 'bg-gradient-to-r from-transparent via-green-400 to-transparent'
  },
  error: {
    background: 'bg-red-100 border-l-4 border-red-500',
    hover: 'hover:bg-red-200',
    icon: '✕',
    titleGradient: 'bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent',
    loadingBar: 'bg-gradient-to-r from-transparent via-red-400 to-transparent'
  },
  warning: {
    background: 'bg-yellow-100 border-l-4 border-yellow-500',
    hover: 'hover:bg-yellow-200',
    icon: '⚠',
    titleGradient: 'bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent',
    loadingBar: 'bg-gradient-to-r from-transparent via-yellow-400 to-transparent'
  },
  info: {
    background: 'bg-blue-100 border-l-4 border-blue-500',
    hover: 'hover:bg-blue-200',
    icon: 'ℹ',
    titleGradient: 'bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent',
    loadingBar: 'bg-gradient-to-r from-transparent via-blue-400 to-transparent'
  }
} as const;
