import { nanoid } from 'nanoid';
import { Toast, ToastOptions } from '../types';

class ToastManager {
  private static instance: ToastManager;
  private toasts: Toast[] = [];
  private subscribers: Set<(toasts: Toast[]) => void> = new Set();
  private maxToasts = 5;

  private constructor() {}

  static getInstance(): ToastManager {
    if (!ToastManager.instance) {
      ToastManager.instance = new ToastManager();
    }
    return ToastManager.instance;
  }

  subscribe(callback: (toasts: Toast[]) => void): () => void {
    this.subscribers.add(callback);
    return () => this.subscribers.delete(callback);
  }

  private notify(): void {
    this.subscribers.forEach(callback => callback(this.toasts));
  }

  show(options: ToastOptions): void {
    const toast: Toast = {
      id: nanoid(),
      ...options,
      createdAt: Date.now()
    };

    // Remove oldest toast if limit reached
    if (this.toasts.length >= this.maxToasts) {
      this.toasts.shift();
    }

    this.toasts.push(toast);
    this.notify();

    // Auto remove after duration
    if (options.duration !== Infinity) {
      setTimeout(() => {
        this.remove(toast.id);
      }, options.duration || 3000);
    }
  }

  remove(id: string): void {
    this.toasts = this.toasts.filter(toast => toast.id !== id);
    this.notify();
  }
}

export default ToastManager.getInstance(); 