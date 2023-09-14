import { useCallback, useState } from 'react';

export const useBrowserRouterConfirmation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [callback, setCallback] = useState<((ok: boolean) => void) | null>(null);

  const onCancelLeaving = useCallback(() => {
    setIsModalOpen(false);
    if (!!callback) callback(false);
  }, [callback]);

  const onConfirmLeaving = useCallback(() => {
    setIsModalOpen(false);
    if (!!callback) callback(true);
  }, [callback]);

  const getUserConfirmation = useCallback((message: string, callback: (ok: boolean) => void) => {
    setIsModalOpen(true);
    setCallback(() => callback);
  }, []);

  return { isModalOpen, onCancelLeaving, onConfirmLeaving, getUserConfirmation };
};
