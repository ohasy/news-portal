let timeoutID: any;

const debounce = (fn: () => void, delay: number) => {
  return function (...args: any[]) {
    if (timeoutID) clearTimeout(timeoutID);
    console.log({ timeoutID });
    timeoutID = setTimeout(() => {
      console.log('callling', timeoutID);
      fn(...args);
    }, delay);
  };
};
export default debounce;
