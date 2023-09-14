export const handleErrorPayload = (payload: any): string => {
  const fallbackMessage = 'Something went wrong, please try again';

  try {
    if (payload?.hasOwnProperty('response')) payload = payload?.response;

    // If error is null or undefined return fallback message
    if (payload === null || typeof payload === typeof undefined) return fallbackMessage;

    // If payload is Array
    if (Array.isArray(payload)) return handleArrayError(payload);

    switch (typeof payload) {
      case 'object':
        return handleObjectError(payload);
      case 'string':
      case 'number':
        return handleStringError(payload.toString());
      default:
        return fallbackMessage;
    }
  } catch (e) {
    // Something went wrong in parsing the error
    return fallbackMessage;
  }
};

const handleArrayError = (payload: unknown[]) => {
  const firstItemInArray = payload?.[0];

  switch (typeof firstItemInArray) {
    case 'string':
    case 'number':
      return handleStringError(firstItemInArray.toString());
    default:
      return handleErrorPayload(firstItemInArray);
  }
};

const handleObjectError = (payload: object) => {
  const errorEntriesArray = Object.entries(payload);
  const valueOfFirstEntry = errorEntriesArray?.[0]?.[1];

  switch (typeof valueOfFirstEntry) {
    case 'string':
    case 'number':
      return handleStringError(valueOfFirstEntry.toString());
    default:
      return handleErrorPayload(valueOfFirstEntry);
  }
};

const handleStringError = (payload: string) => {
  return stripHtmlElements(payload);
};

const stripHtmlElements = (payload: string) => {
  const div = document.createElement('div');
  div.innerHTML = payload;
  return div.textContent || div.innerText || payload;
};
