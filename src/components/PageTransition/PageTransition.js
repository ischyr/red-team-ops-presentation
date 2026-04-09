import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import './PageTransition.css';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [phase, setPhase] = useState('in'); // 'in' | 'out'
  const prevKey = useRef(location.key);

  useEffect(() => {
    if (location.key === prevKey.current) return;
    prevKey.current = location.key;

    // Start exit
    setPhase('out');
    const t = setTimeout(() => {
      setDisplayChildren(children);
      setPhase('in');
      window.scrollTo(0, 0);
    }, 220);
    return () => clearTimeout(t);
  }, [location.key, children]);

  return (
    <div className={`page-transition page-transition--${phase}`}>
      {displayChildren}
    </div>
  );
};

export default PageTransition;
