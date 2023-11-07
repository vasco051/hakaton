import React from 'react';

export interface PortalProps {
  children?: React.ReactNode;
}

export interface PopoverProps {
  isOpen?: boolean;
  onClose: () => void;
  placement?: 'left' | undefined;
  offset?: [number, number];
  className?: string;
  refEl: HTMLElement | SVGElement | null;
  children?: React.ReactNode;
}

export interface PopupProps {
  isOpen?: boolean;
  onClose: () => void;
  className?: string;
  children?: React.ReactNode;
}
