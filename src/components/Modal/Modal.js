import { h } from 'preact';
import { memo, useMemo } from 'preact/compat';

import uuid from 'utils/uuid';

import Container from 'components/Container';

import './index.scss';

function Modal({ children }) {
  const modalId = useMemo(() => uuid(), []);
  const ariaLabeledBy = useMemo(() => `${modalId}_label`, [modalId]);

  return (
    <div class="modal" role="dialog" id={modalId} aria-labelledby={ariaLabeledBy} aria-modal="true">
      <Container style={{ width: '100%' }}>
        <div class="modal__content">{children}</div>
      </Container>
    </div>
  );
}

export default memo(Modal);
