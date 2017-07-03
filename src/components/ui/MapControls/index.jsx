import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function MapControls({ className, children }) {
  /* eslint-disable no-underscore-dangle */
  const _children = (Array.isArray(children) || !children) ? children : [children];
  /* eslint-enable no-underscore-dangle */
  return (
    <div className={classNames('c-map-controls', { [className]: !!className })}>
      {_children &&
        <ul className="map-controls-list">
          {_children.map((c, i) =>
            <li className="map-controls-item" key={i}>{c}</li>
          )}
        </ul>
      }
    </div>
  );
}

MapControls.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
};
