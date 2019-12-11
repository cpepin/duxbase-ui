import MicroModal from 'micromodal';

import useSetup from 'hooks/useSetup';

function useModal(id) {
  const close = () => {
    MicroModal.close(id);
  };

  const show = () => {
    MicroModal.show(id);
  };

  useSetup(() => {
    MicroModal.init();
  });

  return { close, show };
}

export default useModal;
