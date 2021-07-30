const reportWebVitals = (onPerfEntry: () => void) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals').then(({ getCLS, getFCP, getFID, getLCP, getTTFB }) => {
      getCLS(onPerfEntry); // Cumlative Layout shift
      getFCP(onPerfEntry); //  First Contentful paint
      getFID(onPerfEntry); // First Input Delay
      getLCP(onPerfEntry); // Largest Contentful paint
      getTTFB(onPerfEntry);
    });
  }
};
export default reportWebVitals;
