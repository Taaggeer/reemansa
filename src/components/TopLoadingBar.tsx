import React, { useEffect, useState } from 'react';

interface TopLoadingBarProps {
  isLoading?: boolean;
}

export const TopLoadingBar: React.FC<TopLoadingBarProps> = ({ isLoading = false }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  // Trigger loading animation whenever isLoading changes to true, or on initial mount
  const runLoadingCycle = () => {
    setVisible(true);
    setProgress(15);

    const step1 = setTimeout(() => {
      setProgress(45);
    }, 100);

    const step2 = setTimeout(() => {
      setProgress(85);
    }, 280);

    const step3 = setTimeout(() => {
      setProgress(100);
    }, 450);

    const step4 = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 750);

    return () => {
      clearTimeout(step1);
      clearTimeout(step2);
      clearTimeout(step3);
      clearTimeout(step4);
    };
  };

  // Initial page load progress
  useEffect(() => {
    runLoadingCycle();

    // Listen for custom navigation loading events if dispatched
    const handleNavEvent = () => {
      runLoadingCycle();
    };

    window.addEventListener('reeman:navigate', handleNavEvent);
    return () => {
      window.removeEventListener('reeman:navigate', handleNavEvent);
    };
  }, []);

  // When external isLoading prop turns true
  useEffect(() => {
    if (isLoading) {
      runLoadingCycle();
    }
  }, [isLoading]);

  if (!visible && progress === 0) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[9999] h-[3.5px] pointer-events-none transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    >
      {/* Background track (subtle) */}
      <div className="absolute inset-0 bg-transparent" />

      {/* Animated Gradient Bar */}
      <div
        className="h-full bg-gradient-to-r from-sky-500 via-amber-400 to-rose-500 transition-all ease-out duration-300 relative shadow-[0_0_12px_rgba(56,189,248,0.7)]"
        style={{
          width: `${progress}%`,
        }}
      >
        {/* Glowing Head Point */}
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-r from-transparent to-white/90 blur-[2px]" />
      </div>
    </div>
  );
};

// Global helper to trigger the top loading bar from anywhere in the app
export const triggerTopLoader = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('reeman:navigate'));
  }
};
