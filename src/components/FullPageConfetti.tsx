import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

export default function FullPageConfetti() {
  const { width, height } = useWindowSize();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <Confetti
      width={width}
      height={height}
      className="!fixed"
      opacity={0.7}
      recycle={false}
      numberOfPieces={300}
    />
  );
}