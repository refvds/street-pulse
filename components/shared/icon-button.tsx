import React, { FC } from 'react';
import { Button } from '../ui/button';
import { Heart } from 'lucide-react';

interface IProps {
  className?: string;
  icon: typeof Heart;
  iconSize?: number;
  onClick?: VoidFunction;
  iconClassName?: string;
}

const IconButton: FC<IProps> = ({
  className,
  icon: Icon,
  iconClassName,
  iconSize,
  onClick,
}) => {
  return (
    <Button
      className={className}
      variant='outline'
      onClick={onClick}
      size='icon'
    >
      <Icon className={iconClassName} size={iconSize} />
    </Button>
  );
};

export default IconButton;
