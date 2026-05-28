import { motion, type Variants } from 'framer-motion';
import './AnimatedText.scss';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

const wordVariants: Variants = {
  hidden: { y: '110%' },
  visible: (custom: number) => ({
    y: '0%',
    transition: {
      duration: 0.9,
      delay: custom,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// Splits text into words and slides each word up from beneath a clip mask.
// The container reveals on view; each word respects `stagger * index + delay`.
export function AnimatedText({
  text,
  className,
  delay = 0,
  stagger = 0.06,
  as: Tag = 'span',
}: AnimatedTextProps) {
  const words = text.split(' ');

  return (
    <Tag className={['animated-text', className].filter(Boolean).join(' ')}>
      {words.map((word, idx) => (
        <span className="animated-text__word" key={`${word}-${idx}`}>
          <motion.span
            className="animated-text__inner"
            custom={delay + idx * stagger}
            variants={wordVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            {word}
          </motion.span>
          {idx !== words.length - 1 && ' '}
        </span>
      ))}
    </Tag>
  );
}
