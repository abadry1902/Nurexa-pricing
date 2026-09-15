import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: 'center' | 'right';
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, alignment = 'center' }) => {
  return (
    <div className={`py-16 md:py-24 max-w-4xl ${alignment === 'center' ? 'mx-auto text-center' : 'text-right'}`}>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-nurexa-navy tracking-tight mb-6 leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
