export const isEmbeddedMode = () => {
  return window.top !== window.self;
};
