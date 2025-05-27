
import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const GestaoIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 3H21V21H3V3Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M9 3V21" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 9H21" stroke="currentColor" strokeWidth="2"/>
    <circle cx="6" cy="6" r="1.5" fill="currentColor"/>
    <circle cx="15" cy="6" r="1.5" fill="currentColor"/>
    <circle cx="6" cy="15" r="1.5" fill="currentColor"/>
    <circle cx="15" cy="15" r="1.5" fill="currentColor"/>
  </svg>
);

export const EstrategiaIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2L22 12L12 22L2 12L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 8L16 12L12 16L8 12L12 8Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
);

export const ModeloNegocioIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M8 7H16" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 11H16" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 15H12" stroke="currentColor" strokeWidth="2"/>
    <circle cx="18" cy="15" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M17 15L18 16L19 14" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const DiagnosticoIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
    <path d="M12 2V6" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 18V22" stroke="currentColor" strokeWidth="2"/>
    <path d="M22 12H18" stroke="currentColor" strokeWidth="2"/>
    <path d="M6 12H2" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const PlanoIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 13H16" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 17H16" stroke="currentColor" strokeWidth="2"/>
    <circle cx="10" cy="10" r="1" fill="currentColor"/>
  </svg>
);

export const AcompanhamentoIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" fill="currentColor"/>
    <path d="M21 9V7L15 1V3L10 0V2L4 9V7L0 13V21L8 17V19L16 22V20L21 9Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="6" cy="15" r="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="18" cy="15" r="2" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

export const CrescimentoIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 17L9 11L13 15L21 7" stroke="currentColor" strokeWidth="2"/>
    <path d="M21 7L16 7L16 12" stroke="currentColor" strokeWidth="2"/>
    <rect x="3" y="19" width="3" height="3" fill="currentColor"/>
    <rect x="8" y="16" width="3" height="6" fill="currentColor"/>
    <rect x="13" y="13" width="3" height="9" fill="currentColor"/>
    <rect x="18" y="10" width="3" height="12" fill="currentColor"/>
  </svg>
);

export const CheckIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const FocusIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 1V3" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 21V23" stroke="currentColor" strokeWidth="2"/>
    <path d="M4.22 4.22L5.64 5.64" stroke="currentColor" strokeWidth="2"/>
    <path d="M18.36 18.36L19.78 19.78" stroke="currentColor" strokeWidth="2"/>
    <path d="M1 12H3" stroke="currentColor" strokeWidth="2"/>
    <path d="M21 12H23" stroke="currentColor" strokeWidth="2"/>
    <path d="M4.22 19.78L5.64 18.36" stroke="currentColor" strokeWidth="2"/>
    <path d="M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const TrackIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M7 10H17" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 14H17" stroke="currentColor" strokeWidth="2"/>
    <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

export const PartnerIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2L15.09 8.26L22 9L17 14.74L18.18 22L12 18.27L5.82 22L7 14.74L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
  </svg>
);

export const ClariteIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 1V3" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 21V23" stroke="currentColor" strokeWidth="2"/>
    <path d="M4.22 4.22L5.64 5.64" stroke="currentColor" strokeWidth="2"/>
    <path d="M18.36 18.36L19.78 19.78" stroke="currentColor" strokeWidth="2"/>
    <path d="M1 12H3" stroke="currentColor" strokeWidth="2"/>
    <path d="M21 12H23" stroke="currentColor" strokeWidth="2"/>
    <path d="M4.22 19.78L5.64 18.36" stroke="currentColor" strokeWidth="2"/>
    <path d="M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const PragmatismoIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M9 9L15 15" stroke="currentColor" strokeWidth="2"/>
    <path d="M15 9L9 15" stroke="currentColor" strokeWidth="2"/>
    <path d="M9 12H15" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 9V15" stroke="currentColor" strokeWidth="2"/>
  </svg>
);
