import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { HTMLAttributes } from 'react';

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc?: string;
  dark?: boolean;
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  console.log("Image Source:", imgSrc); // Debugging line

  return (
    <div
      className={cn(
        'relative pointer-events-none z-50 overflow-hidden aspect-[9/19] rounded-lg',
        className
      )}
      {...props}
    >
      {/* Phone Frame */}
      <Image
        width={200}
        height={200}
        src={dark ? '/phone-template-dark-edges.png' : '/phone-template-white-edges.png'}
        alt="phone-img"
        className="pointer-events-none z-50 select-none w-full h-full"
      />

      {/* Overlaying Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={imgSrc || '/default-image.png'}
          alt="overlaying phone image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Phone;
