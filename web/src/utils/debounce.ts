let timeoutID: any;

const debounce = (fn: () => void, delay: number) => {
  return function () {
    if (timeoutID) clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      fn();
    }, delay);
  };
};
export default debounce;
