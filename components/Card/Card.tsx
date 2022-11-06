"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import clx from 'classnames';

export type CardProps = {
  title: React.ReactNode,
  children?: React.ReactNode
}

export default function Card(props: CardProps) {
  const {
    title,
    children
  } = props;

  const [isVisible, setVisible] = useState(false);
  const cardRef = useRef(null);

  const handleVisible: IntersectionObserverCallback = (entries) => {
    const [entry] = entries
    setVisible(entry.isIntersecting);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleVisible, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    });

    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    }
  }, [cardRef]);

  return (
    <div>
      <div
        ref={cardRef}
        className={clx("transition-all duration-300 pacity-0 blur-md", {
          'opacity-100 blur-none': isVisible
        })}
      >
        <Image className="img-card" src='https://dummyimage.com/250x300/eee/aaa' alt='dummy' width={150} height={260} />
      </div>
      <h2>{title}</h2>
      <p>
        {children}
      </p>
    </div>
  )
}
