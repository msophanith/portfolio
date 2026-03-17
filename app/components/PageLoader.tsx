'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [counter, setCounter] = useState(0);

  // Count up from 0 to 100 over ~1.4s
  useEffect(() => {
    const start = Date.now();
    const duration = 1400;

    const raf = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out curve
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounter(Math.round(eased * 100));
      if (progress < 1) requestAnimationFrame(raf);
      else setTimeout(() => setVisible(false), 200);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-start justify-end p-8 md:p-12 bg-[#080808]"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: 'inset(0 0 100% 0)',
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Name */}
          <motion.p
            className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#555] mb-auto pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.5 } }}
          >
            Sophanith MEY — Portfolio
          </motion.p>

          {/* Large counter */}
          <motion.div
            className="font-display text-[clamp(5rem,20vw,16rem)] leading-none text-white tabular-nums select-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.15, duration: 0.5, ease: 'easeOut' } }}
          >
            {counter}
          </motion.div>

          {/* Bottom line */}
          <motion.div
            className="w-full h-px bg-[#1a1a1a] mt-6"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1, transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
