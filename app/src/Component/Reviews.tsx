"use client";

import React, { HTMLAttributes, useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import Phone from "./Phone";

const PHONES = [
  "/testimonial/1.jpg",
  "/testimonial/2.jpg",
  "/testimonial/3.jpg",
  "/testimonial/4.jpg",
  "/testimonial/5.jpg",
  "/testimonial/6.jpg",
];

function splitArray<T>(array: Array<T>, numParts: number) {
  const result: Array<Array<T>> = [];

  for (let i = 0; i < array.length; i++) {
    const index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }

  return result;
}

function ReviewColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: {
  reviews: string[];
  className?: string;
  reviewClassName?: (reviewIndex: number) => string;
  msPerPixel?: number;
}) {
  const columnRef = useRef<HTMLDivElement | null>(null);
  const [columnHeight, setColumnHeight] = useState(0);
  const duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    if (!columnRef.current) return;

    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0);
    });

    resizeObserver.observe(columnRef.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={cn("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((imgSrc, reviewIndex) => (
        <Review
          key={reviewIndex}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          imgSrc={imgSrc}
        />
      ))}
    </div>
  );
}

interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
}

function Review({ imgSrc, className, ...props }: ReviewProps) {
    const POSSIBLE_ANIMATION_DELAYS = ["0s", "0.1s", "0.2s", "0.3s", "0.4s", "0.5s"];
    const animationDelay =
      POSSIBLE_ANIMATION_DELAYS[Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)];
  
    return (
      <div
        className={cn(
          "animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5",
          className
        )}
        style={{ animationDelay }}
        {...props}
      >
        <Phone imgSrc={imgSrc} />
      </div>
    );
  }
  

function ReviewGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });
  const columns = splitArray(PHONES, 3);

  return (
    <div
      ref={containerRef}
      className="relative w-[90%] mx-auto  mt-16 max-h-[150vh] grid h-[49rem] grid-cols-1 items-start gap-6 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView ? (
        <>
          <ReviewColumn
            reviews={[...columns[0], ...columns[2], ...columns[1]]}
            reviewClassName={(reviewIndex) =>
              cn({
                "md:hidden": reviewIndex >= columns[0].length + columns[2].length,
                "lg:hidden": reviewIndex >= columns[0].length,
              })
            }
            msPerPixel={10}
          />
          <ReviewColumn
            className="hidden md:block"
            reviews={[...columns[1], ...columns[2]]}
            reviewClassName={(reviewIndex) => (reviewIndex >= columns[1].length ? "lg:hidden" : "")}
            msPerPixel={15}
          />
          <ReviewColumn
            className="hidden md:block"
            reviews={[...columns[2].flat()]}
            msPerPixel={10}
          />
        </>
      ) : null}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-100"/>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100"/>
    </div>
  );
}

const Reviews = () => {
  return (
    <div>
      <MaxWidthWrapper className="relative max-w-5xl">
        <Image
          width={140}
          height={140}
          src="/what-people-are-buying.png"
          alt="img"
          className="absolute -mt-28 -left-28 top-2/3 hidden select-none xl:block"
        />
      </MaxWidthWrapper>

      <ReviewGrid />
    </div>
  );
};

export default Reviews;
