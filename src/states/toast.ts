import create from 'zustand';

type ToastOptions = {
  actionContent?: string;
  actionHandler?: () => void;
  duration?: number;
  error?: boolean;
};

interface ToastStore {
  message: string;
  show: boolean;
  dismissToast: () => void;
}

const initialState = {
  actionContent: '',
  actionHandler: () => {},
  duration: 5000,
  error: false,
  message: 'Successful',
  show: false,
};

export const useToastStore = create<ToastStore & ToastOptions>((set) => ({
  ...initialState,
  dismissToast: () => set(initialState),
}));

export const showToast = (message: string, options?: ToastOptions) => {
  useToastStore.setState({ message, show: true, ...options });
};

export const showErrorToast = (message: string, options?: ToastOptions) => {
  useToastStore.setState({ message, show: true, error: true, ...options });
};
