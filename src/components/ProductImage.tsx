import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

export interface ProductImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  containerClassName?: string;
  size?: 'normal' | 'thumb';
}

export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  fallbackSrc,
  className = '',
  containerClassName = '',
  size = 'normal',
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setLoaded(false);
    setHasError(false);
  }, [src]);

  const roundedCls = size === 'thumb' ? 'rounded-lg' : 'rounded-2xl';

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setLoaded(false);
    } else {
      setHasError(true);
    }
  };

  return (
    <div className={`relative w-full h-full flex items-center justify-center overflow-hidden bg-white ${roundedCls} ${containerClassName}`}>
      {/* Loading Skeleton & Spinner Indicator */}
      {!loaded && !hasError && (
        <div className={`absolute inset-0 flex flex-col items-center justify-center bg-white animate-pulse z-10 transition-opacity duration-200 ${roundedCls}`}>
          <div className="flex flex-col items-center justify-center gap-1.5">
            <Loader2 className={`${size === 'thumb' ? 'w-4 h-4 text-[#7a0f2d]' : 'w-6 h-6 text-[#7a0f2d]'} animate-spin`} />
          </div>
        </div>
      )}

      {/* Fallback in case of broken link */}
      {hasError ? (
        <div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 p-2 text-center">
          <span className="text-xl">📱</span>
          <span className="text-[10px] mt-1 line-clamp-1">{alt}</span>
        </div>
      ) : (
        <img
          key={currentSrc}
          src={currentSrc}
          alt={alt}
          loading="eager"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={handleError}
          className={`${className} ${roundedCls} transition-all duration-300 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        />
      )}
    </div>
  );
};
