export class SafeStorage {
  static isSupported = (): boolean => {
    return 'sessionStorage' in window;
  };

  static get = (key: string): string | null => {
    if (!SafeStorage.isSupported()) return null;

    try {
      return sessionStorage.getItem(key);
    } catch (err) {
      return null;
    }
  };

  static set = (key: string, value: string): void => {
    if (!SafeStorage.isSupported()) return;

    try {
      sessionStorage.setItem(key, value);
    } catch (err) {
      return;
    }
  };
}
