import React from 'react';
import { css as glamor } from 'glamor';
import { moveColor } from '../colors'

const movePageStyles = glamor({
  backgroundColor: moveColor,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '300px',
  paddingBottom: '300px',
});

const Move = () => {
  return (
    <div id='Move' className={`${movePageStyles}`}>
      <div className='copy'>Move</div>
    </div>
  )
}

export default Move
