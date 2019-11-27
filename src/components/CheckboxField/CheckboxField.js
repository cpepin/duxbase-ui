import { h } from 'preact';
import { memo } from 'preact/compat';

import './index.scss';

function CheckboxField() {
  return (
    <div class="checkbox">
      <input type="checkbox" id="checkbox" />
      <label for="checkbox">Something</label>
    </div>
  );
}

export default memo(CheckboxField);
