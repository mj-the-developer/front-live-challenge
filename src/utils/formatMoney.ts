export const formatMoney = (target: number, shortVersion = true, decimal = 2) => {
  try {
    let initialTarget = target;

    if (!target) {
      return '0';
    }

    if (initialTarget > 999999 && shortVersion) {
      target = target / 1000000;
      return `${target.toFixed(decimal)}M`;
    }

    if (initialTarget > 999 && shortVersion) {
      target = target / 1000;
      return `${target.toFixed(decimal)}K`;
    }

    let num = parseInt(target.toString().replace(/\$|,/g, ''), 10);

    if (isNaN(num)) num = 0;

    num = Math.floor(num * 100 + 0.50000000001);
    num = Math.floor(num / 100);

    let numString = num.toString();

    for (let i = 0; i < Math.floor((numString.length - (1 + i)) / 3); i++)
      numString =
        numString.substring(0, numString.length - (4 * i + 3)) +
        ',' +
        numString.substring(numString.length - (4 * i + 3));

    return numString;
  } catch (e) {
    return '0';
  }
};
