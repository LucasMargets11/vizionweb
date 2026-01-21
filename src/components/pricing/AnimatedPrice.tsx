import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const numberFormatter = new Intl.NumberFormat('es-AR');

type AnimatedPriceProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  textClassName?: string;
  prefixClassName?: string;
  suffixClassName?: string;
};

export const AnimatedPrice = ({
  value,
  prefix = 'US$',
  suffix = '/mes',
  className = '',
  textClassName = '',
  prefixClassName = '',
  suffixClassName = ''
}: AnimatedPriceProps) => {
  const motionValue = useMotionValue(value);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const display = useTransform(rounded, (latest) => numberFormatter.format(latest));

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 0.6,
      ease: 'easeOut',
    });
    return controls.stop;
  }, [value, motionValue]);

  return (
    <div className={`flex items-baseline gap-1 ${className}`}>
      {prefix && <span className={prefixClassName}>{prefix}</span>}
      <motion.span className={textClassName}>
        {display}
      </motion.span>
      {suffix && (
        <span className={suffixClassName}>
          {suffix}
        </span>
      )}
    </div>
  );
};
