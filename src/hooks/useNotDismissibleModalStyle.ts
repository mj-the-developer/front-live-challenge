import { MutableRefObject, useEffect } from 'react';

export const useNotDismissibleModalStyle = (
  ref: MutableRefObject<HTMLDivElement | null>,
  bgColor = '#f6f6f6',
  roundCorners = false,
  dependencyArr: any[] = []
) => {
  useEffect(() => {
    setTimeout(() => {
      if (ref) {
        const modalSection = ref.current?.closest('.Polaris-Modal-Section') as HTMLDivElement;
        const modalDialogue = ref.current?.closest('.Polaris-Modal-Dialog') as HTMLDivElement;

        if (modalSection) modalSection.style.backgroundColor = bgColor;

        if (modalDialogue) {
          const modalCloseButton = modalDialogue.querySelector('.Polaris-Modal-CloseButton') as HTMLButtonElement;
          if (modalCloseButton) modalCloseButton.style.display = 'none';

          if (roundCorners) {
            const modalBody = modalDialogue.querySelector('.Polaris-Modal__BodyWrapper') as HTMLDivElement;
            if (modalBody) modalBody.style.borderRadius = '8px';
          }
        }
      }
    }, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, bgColor, roundCorners, ...dependencyArr]);
};
