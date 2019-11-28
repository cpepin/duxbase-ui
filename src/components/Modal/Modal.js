import { h } from 'preact';
import { memo, useMemo } from 'preact/compat';

import Container from 'components/Container';
import Close from 'components/Icons/Close';

import './index.scss';

function Modal({ id, title: Title, children }) {
  const modalTitleId = useMemo(() => `${id}-title`, [id]);
  const modalContentId = useMemo(() => `${id}-content`, [id]);

  return (
    <div id={id} aria-hidden="true" class="modal">
      <div tabIndex="-1" data-micromodal-close class="modal__overlay">
        <Container
          role="dialog"
          aria-modal="true"
          aria-labelledby={modalTitleId}
          class="modal__container"
        >
          <header class="mt-3">
            <h2 id={modalTitleId} class="font-size-5">
              <Title />
            </h2>
            <button
              class="modal__close"
              type="button"
              aria-label="Close modal"
              data-micromodal-close
            >
              <Close data-micromodal-close />
            </button>
          </header>

          <div id={modalContentId} class="mt-5">
            {children}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default memo(Modal);
