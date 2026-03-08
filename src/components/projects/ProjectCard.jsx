import React, { useRef, useCallback } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Internal component to handle GSAP logic for individual images
const SingleImage = ({ image, client, title }) => {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const imageRef = useRef(null);

  // Only register handlers after first render (to avoid ref issues)
  useGSAP(() => {
    const container = containerRef.current;
    const cursor = cursorRef.current;
    const image = imageRef.current;
    if (!container || !cursor || !image) return;

    const handleMouseEnter = () => {
      gsap.to(cursor, { autoAlpha: 1, scale: 1, duration: 0.3, ease: 'power2.out' });
      gsap.to(image, { scale: 1.05, duration: 0.6, ease: 'power2.out' });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { autoAlpha: 0, scale: 0.8, duration: 0.3, ease: 'power2.out' });
      gsap.to(image, { scale: 1, duration: 0.6, ease: 'power2.out' });
    };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      gsap.to(cursor, {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        duration: 0.15,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full lg:w-1/2 h-[400px] lg:h-full flex flex-col cursor-none group">
      <div className="flex justify-between items-center py-3 border-b border-black font-semibold text-sm uppercase mb-2">
        <span>{client}</span>
        <span>{title}</span>
      </div>
      <div 
        ref={containerRef}
        className="relative w-full h-full bg-gray-100 overflow-hidden"
        style={{ position: 'relative' }}
      >
        <img ref={imageRef} src={image} alt={title} className="w-full h-full object-cover" />
        
        {/* Custom Cursor */}
        <div 
          ref={cursorRef}
          className="absolute top-0 left-0 pointer-events-none z-10 opacity-0"
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          <div className="border border-white text-white rounded-full px-6 py-2 text-xl lg:text-2xl font-bold backdrop-blur-md bg-black/20 whitespace-nowrap">
            VOIR LE PROJET
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Export rendering the two columns
const ProjectCard = ({ image1, image2 }) => {
  return (
    <>
      <SingleImage image={image1} client="Client A" title="Project Name" />
      <SingleImage image={image2} client="Client B" title="Project Name" />
    </>
  );
};

export default ProjectCard;