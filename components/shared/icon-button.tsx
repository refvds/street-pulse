import React, { FC } from 'react';
import { Button } from '../ui/button';
import { Heart } from 'lucide-react';

interface IProps {
  className?: string;
  icon: typeof Heart;
  iconSize?: number;
  onClick?: VoidFunction;
  iconClassName?: string;
  variant?: 'outline' | 'ghost' | 'secondary';
}

const IconButton: FC<IProps> = ({
  className,
  icon: Icon,
  iconClassName,
  iconSize,
  variant = 'secondary',
  onClick,
}) => {
  return (
    <Button
      className={className}
      variant={variant}
      onClick={onClick}
      size='icon'
    >
      <Icon className={iconClassName} size={iconSize} />
    </Button>
  );
};

export default IconButton;
