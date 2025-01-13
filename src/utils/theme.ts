export const toastTheme = {
  success: {
    background: 'bg-emerald-500/90 backdrop-blur-sm',
    hover: 'hover:bg-emerald-600/90',
    icon: '✓'
  },
  error: {
    background: 'bg-rose-500/90 backdrop-blur-sm',
    hover: 'hover:bg-rose-600/90',
    icon: '✕'
  },
  warning: {
    background: 'bg-amber-500/90 backdrop-blur-sm',
    hover: 'hover:bg-amber-600/90',
    icon: '⚠'
  },
  info: {
    background: 'bg-sky-500/90 backdrop-blur-sm',
    hover: 'hover:bg-sky-600/90',
    icon: 'ℹ'
  }
} as const;
