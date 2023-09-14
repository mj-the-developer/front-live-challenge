export const convertToDateTime = (datetime: string | number | Date) => {
  try {
    const dt = new Date(datetime);

    const localDateTime = dt.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });

    return localDateTime;
  } catch (e) {
    console.error('Error converting time to local timezone time', e);
    return 'Unknown';
  }
};

export const convertToOnlyDate = (datetime: string | number | Date, separator = null) => {
  try {
    const dt = new Date(datetime);
    const localDate = dt.toLocaleDateString(undefined, { year: '2-digit', month: '2-digit', day: '2-digit' });

    return separator ? localDate.replaceAll('/', separator) : localDate;
  } catch (e) {
    console.error('Error converting time to local timezone time', e);
    return 'Unknown';
  }
};

export const convertToOnlyTime = (datetime: string | number | Date) => {
  try {
    const dt = new Date(datetime);
    const localTime = dt.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: false });

    return localTime;
  } catch (e) {
    console.error('Error converting time to local timezone time', e);
    return 'Unknown';
  }
};
