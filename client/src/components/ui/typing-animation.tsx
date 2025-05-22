import { FC } from 'react';

interface TypingAnimationProps {
  text: string;
}

const TypingAnimation: FC<TypingAnimationProps> = ({ text }) => {
  return (
    <div className="animate-typing text-xl md:text-2xl font-medium text-dark-500 dark:text-dark-100">
      {text}
    </div>
  );
};

export default TypingAnimation;
