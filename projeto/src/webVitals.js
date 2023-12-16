const webVitals = entryOnPerf => {
  if (entryOnPerf && entryOnPerf instanceof Function) {
    import('web-vitals').then(({ CLS, FID, FCP, LCP, TTFB }) => {
      CLS(entryOnPerf);
      FCP(entryOnPerf);
      LCP(entryOnPerf);
      TTFB(entryOnPerf);
      FID(entryOnPerf);
    });
  }
};

export default webVitals;
