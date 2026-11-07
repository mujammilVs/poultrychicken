import React, { useState } from 'react';
import { Feather, Image as ImageIcon } from 'lucide-react';

export default function SafeImage({ 
  src, 
  alt = 'Aamir Al Wagan Poultry Farm', 
  className = '', 
  fallbackIcon: FallbackIcon = Feather,
  containerClassName = ''
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-farm-100/60 ${containerClassName}`}>
      {/* Loading Skeleton */}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gradient-to-r from-farm-100 via-farm-200/50 to-farm-100 animate-pulse z-10" />
      )}

      {/* Main Image */}
      {!error ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
        />
      ) : (
        /* Fallback Placeholder */
        <div className="w-full h-full min-h-[160px] flex flex-col items-center justify-center p-4 bg-farm-900/10 text-farm-800">
          <div className="w-10 h-10 rounded-full bg-farm-100 flex items-center justify-center mb-2 shadow-xs">
            <FallbackIcon className="w-5 h-5 text-farm-700" />
          </div>
          <span className="text-[11px] font-semibold text-center text-farm-900">
            {alt}
          </span>
          <span className="text-[9px] text-farm-600 mt-0.5">Baraka Al Ain Fresh Poultry</span>
        </div>
      )}
    </div>
  );
}
