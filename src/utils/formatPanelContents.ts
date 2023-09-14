export const formatPanelContents = (json: object) => {
  if (!json || Object.keys(json).length === 0) return {};

  let text = JSON.stringify(json);
  text = text.replaceAll('{<', '<').replaceAll('>}', '>').replaceAll('{{', '{').replaceAll('}}', '}');

  return JSON.parse(text + '}');
};
