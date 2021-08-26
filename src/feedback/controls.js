import React from 'react';
const Controls = ({ goodIncrement, neutralIncrement, badIncrement }) => (
  <div class='conteiner-button'>
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
export default Controls;
