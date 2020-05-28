import React from 'react';

const ResourceTable = ({metal = 0, crystal = 0, deuterium = 0}) => {

  const suffixNumber = number =>
    number >= 1E9 ? `${Math.floor(number / 1E9)}B` :
      number >= 1E6 ? `${Math.floor(number / 1E6)}M` :
        number >= 1E3 ? `${Math.floor(number / 1E3)}K` :
          number;

  return (
    <div className="tbl-resources fullwidth">
      <div>
        <div className="resource-img metal small" title='Metal'></div>
        <div className='metal'>{suffixNumber(metal)}</div>
      </div>
      <div>
        <div className="resource-img crystal small" title='Crystal'></div>
        <div className='crystal'>{suffixNumber(crystal)}</div>
      </div>
      <div>
        <div className='resource-img deuterium small' title='Deuterium'></div>
        <div><span className="deuterium text-error">{suffixNumber(deuterium)}</span></div>
      </div>
    </div>
  );
};

export default ResourceTable;
