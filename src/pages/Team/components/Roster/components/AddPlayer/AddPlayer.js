import { h, Fragment } from 'preact';
import { memo, useCallback } from 'preact/compat';

import Modal from 'components/Modal';
import Button from 'components/Button';

import useModal from 'hooks/useModal';

import CreatePlayerForm from '../CreatePlayerForm';

const addPlayerModalId = 'add-player-modal-id';
const CreateModalTitle = memo(() => <Fragment>Add Player</Fragment>);

function AddPlayer({ onSubmit }) {
  const { show, close } = useModal(addPlayerModalId);

  const handleSubmit = useCallback(() => {
    close();
    onSubmit();
  }, [onSubmit, close]);

  return (
    <Fragment>
      {/* Thanks safari */}
      <div>
        <Button class="ml-auto" type="button" small primary onClick={show}>
          Add player
        </Button>
      </div>
      <Modal id={addPlayerModalId} title={CreateModalTitle}>
        <p>Add a player to your team.</p>

        <p>
          If this email has already registed with duxbase, this player will be able to link their
          account.
        </p>

        <CreatePlayerForm onCancel={close} onSubmit={handleSubmit} />
      </Modal>
    </Fragment>
  );
}

export default memo(AddPlayer);
