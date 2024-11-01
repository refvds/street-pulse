import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { Button } from '../ui/button';
import { Heart } from 'lucide-react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  iconClassName?: string;
  iconSize?: number;
  icon: typeof Heart;
  onClick?: VoidFunction;
  variant?: 'outline' | 'ghost' | 'secondary';
}

const IconButton = forwardRef<HTMLButtonElement, IProps>(
  (
    {
      className,
      iconClassName,
      icon: Icon,
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
