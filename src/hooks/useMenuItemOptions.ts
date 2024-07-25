import { useState } from 'react';
import {
  useFloating,
  useHover,
  useFocus,
  safePolygon,
  useInteractions,
  useTransitionStyles,
} from '@floating-ui/react';

const useMenuItemOptions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, context, floatingStyles } = useFloating({
    placement: 'left-start',
    strategy: 'fixed',
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const hover = useHover(context, {
    handleClose: safePolygon(),
  });
  const focus = useFocus(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
  ]);

  const { isMounted, styles } = useTransitionStyles(context);

  return {
    refs,
    floatingStyles,
    getReferenceProps,
    getFloatingProps,
    isMounted,
    styles,
    setIsOpen,
  };
};

export default useMenuItemOptions;
