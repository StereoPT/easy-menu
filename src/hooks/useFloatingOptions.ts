import { useEffect, useState } from 'react';
import {
  useFloating,
  useHover,
  useFocus,
  safePolygon,
  useInteractions,
  useTransitionStyles,
  autoUpdate,
} from '@floating-ui/react';

const useFloatingOptions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, context, floatingStyles, elements, update } = useFloating({
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

  useEffect(() => {
    if (isOpen && elements.reference && elements.floating) {
      const cleanup = autoUpdate(elements.reference, elements.floating, update);
      return cleanup;
    }
  }, [isOpen, elements, update]);

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

export default useFloatingOptions;
