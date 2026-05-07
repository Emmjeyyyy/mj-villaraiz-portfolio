import React from 'react';

interface HudBoxProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subTitle?: string;
}

export const HudBox: React.FC<HudBoxProps> = ({ children, className = "", title, subTitle }) => {
  return (
    <div className={`hud-border bg-background/40 backdrop-blur-sm p-4 ${className}`}>
      {(title || subTitle) && (
        <div className="flex justify-between items-baseline border-b border-primary/20 mb-3 pb-1">
          {title && <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">{title}</span>}
          {subTitle && <span className="text-[8px] font-mono text-primary/50 uppercase">{subTitle}</span>}
        </div>
      )}
      {children}
      <div className="absolute -bottom-1 left-4 right-4 h-[1px] bg-primary/10" />
    </div>
  );
};
