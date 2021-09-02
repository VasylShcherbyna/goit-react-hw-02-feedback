import React from 'react';
import PropTypes from 'prop-types';
const Controls = ({ goodIncrement, neutralIncrement, badIncrement }) => (
  <div class="conteiner-button">
    <button class="button" type="button" onClick={goodIncrement}>
      Good
    </button>
    <button class="button" type="button" onClick={neutralIncrement}>
      Neutral
    </button>
    <button class="button" type="button" onClick={badIncrement}>
      Bad
    </button>
  </div>
);

Controls.propTypes = {
  goodIncrement: PropTypes.func.isRequired,
  neutralIncrement: PropTypes.func.isRequired,
  badIncrement: PropTypes.func.isRequired,
};
export default Controls;
