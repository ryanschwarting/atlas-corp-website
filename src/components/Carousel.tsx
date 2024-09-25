"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface CarouselProps {
  images: { src: string; width: number; height: number }[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      className="parallax p-10"
      ref={titleRef}
      variants={fadeInUp}
      initial="hidden"
      animate={titleInView ? "visible" : "hidden"}
      transition={{ duration: 1.5 }}
    >
      <div className="scroller">
        {images.map((image, idx) => (
          <span key={idx}>
            <Image
              src={image.src}
              priority={true}
              alt="Logo"
              width={image.width}
              height={image.height}
              className="filter grayscale min-w-[60px] min-h-[60px] object-contain"
            />
          </span>
        ))}
        {images.map((image, idx) => (
          <span key={idx}>
            <Image
              priority={true}
              src={image.src}
              alt="Logo"
              width={image.width}
              height={image.height}
              className="filter grayscale min-w-[60px] min-h-[60px] object-contain"
            />
          </span>
        ))}
        {images.map((image, idx) => (
          <span key={idx}>
            <Image
              priority={true}
              src={image.src}
              alt="Logo"
              width={image.width}
              height={image.height}
              className="filter grayscale min-w-[60px] min-h-[60px] object-contain"
            />
          </span>
        ))}
        {images.map((image, idx) => (
          <span key={idx}>
            <Image
              priority={true}
              src={image.src}
              alt="Logo"
              width={image.width}
              height={image.height}
              className="filter grayscale min-w-[60px] min-h-[60px] object-contain"
            />
          </span>
        ))}
      </div>
    </motion.div>
  );
};
