import React, { useEffect, useRef } from 'react';

const ScrollBottom = () => {
   const elementRef = useRef();
   useEffect(() => elementRef.current.scrollIntoView());
   return <div ref={elementRef} />;
};

export default ScrollBottom;