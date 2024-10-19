import clsx from 'clsx';
import React, { FC, PropsWithChildren } from 'react';

interface IProps {
  className?: string;
  title: string;
}

export const Section: FC<PropsWithChildren<IProps>> = ({
  className,
  title,
  children,
}) => {
  return (
    <section className={clsx('relative', className)}>
      <h2
        className="
          mb-[70px] 
          before:content-[''] 
          before:absolute 
          before:left-0 
          before:top-1/2 
          before:-translate-y-1/2 
          before:w-1 
          before:h-10 
          before:bg-purple-500 
          before:rounded-full 
          pl-4 
          text-4xl 
          font-bold 
          text-gray-500
      "
      >
        {title}
      </h2>
      {children}
    </section>
  );
};
