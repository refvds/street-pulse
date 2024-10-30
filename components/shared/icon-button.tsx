import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { Button } from '../ui/button';
import { Heart } from 'lucide-react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon: typeof Heart;
  iconSize?: number;
  onClick?: VoidFunction;
  iconClassName?: string;
  variant?: 'outline' | 'ghost' | 'secondary';
}

const IconButton = forwardRef<HTMLButtonElement, IProps>(
  (
    {
      className,
      icon: Icon,
      iconClassName,
      iconSize,
      variant = 'secondary',
      onClick,
      ...props
    },
    ref,
  ) => {
    return (
      <Button
        ref={ref}
        className={className}
        variant={variant}
        onClick={onClick}
        size='icon'
        {...props}
      >
        <Icon className={iconClassName} size={iconSize} />
      </Button>
    );
  },
);

IconButton.displayName = 'IconButton';

export default IconButton;
