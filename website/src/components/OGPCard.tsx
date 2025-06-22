import React from 'react';

interface OGPCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
  siteName?: string;
}

export default function OGPCard({ title, description, image, url, siteName }: OGPCardProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      onClick={handleClick}
      className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer bg-white"
    >
      <div className="flex">
        {/* Image */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 bg-gray-200">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement | null;
                if (target) {
                  target.style.display = 'none';
                }
              }}
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 p-3 min-w-0">
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1">
            {title}
          </h3>
          <p className="text-xs text-gray-600 line-clamp-2 mb-1">
            {description}
          </p>
          <div className="flex items-center text-xs text-gray-500">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
            </svg>
            {siteName || (typeof URL !== 'undefined' ? new URL(url).hostname : url)}
          </div>
        </div>
      </div>
    </div>
  );
}