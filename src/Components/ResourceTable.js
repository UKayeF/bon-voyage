import React from 'react';

const ResourceTable = ({metal = 0, crystal = 0, deuterium = 0}) => {
  return (
    <div className="tbl-resources fullwidth">
      <div>
        <div className="resource-img metal small" title='Metal'></div>
        <div className='metal'>{metal}</div>
      </div>
      <div>
        <div className="resource-img crystal small" title='Crystal'></div>
        <div className='crystal'>{crystal}</div>
      </div>
      <div>
        <div className='resource-img deuterium small' title='Deuterium'></div>
        <div><span className="deuterium text-error">{deuterium}</span></div>
      </div>
    </div>
  );
};

export default ResourceTable;