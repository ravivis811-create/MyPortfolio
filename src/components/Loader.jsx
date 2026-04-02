import { useState, useEffect } from 'react';

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFading(true), 1000);
    const timer2 = setTimeout(() => setVisible(false), 1500);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, []);

  if (!visible) return null;

  return (
    <div className={`loader-wrapper ${fading ? 'fade-out' : ''}`}>
      <div className="loader"></div>
    </div>
  );
}
