import MicroModal from 'micromodal';

function useModal(id) {
  const close = () => {
    MicroModal.close(id);
  };

  const show = () => {
    MicroModal.show(id);
  };

  return { close, show };
}

export default useModal;
