import React, { FC, PropsWithChildren } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import clsx from 'clsx';

interface IProps {
  className?: string;
  title: string;
}

export const FilterAccordion: FC<PropsWithChildren<IProps>> = ({
  className,
  title,
  children,
}) => {
  return (
    <Accordion
      className={clsx('', className)}
      type='single'
      defaultValue='item-1'
      collapsible
    >
      <AccordionItem value='item-1'>
        <AccordionTrigger className='border-y-1'>{title}</AccordionTrigger>
        <AccordionContent className='py-5'>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
