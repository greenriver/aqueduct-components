import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import Slider, { Handle } from 'rc-slider';

// components
import TooltipSlider from 'components/ui/tooltip-slider';

// styles
import styles from './styles.scss';

export class CustomSlider extends PureComponent {
  static propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    defaultValue: PropTypes.number,
    theme: PropTypes.string,
    customClass: PropTypes.string,
    disabled: PropTypes.bool,
    formatValue: PropTypes.func
  }

  static defaultProps = {
    defaultValue: null,
    theme: 'light',
    disabled: false,
    customClass: null,
    formatValue: null
  }

  renderHandle = (handleProps) => {
    const { theme, formatValue, disabled } = this.props;
    const componentClass = classnames(
      `c-rc-tooltip -default range-tooltip -${theme}`,
      { '-disabled': !!disabled }
    );
    const { className } = handleProps;
    const { value, dragging, ...restHandleProps } = handleProps;
    const { offset } = restHandleProps;
    const formattedValue = !!formatValue &&
      typeof formatValue === 'function' ? formatValue(value) : value;
    const key = className.split(' ')[1];

    return (
      <TooltipSlider
        key={key}
        offset={offset}
        value={formattedValue}
        theme={theme}
        disabled={disabled}
      >
        <Handle value={value} {...restHandleProps} />
      </TooltipSlider>
    );
  };

  render() {
    const {
      defaultValue,
      theme,
      customClass,
      ...rangeProps
    } = this.props;
    const componentClass = classnames(
      `c-slider -${theme}`,
      {
        [customClass]: !!customClass,
        '-disabled': !!this.props.disabled
      }
    );
    const calculatedDefaultValue = defaultValue || 0;

    return (
      <Slider
        {...rangeProps}
        className={componentClass}
        defaultValue={calculatedDefaultValue}
        handle={this.renderHandle}
      />
    );
  }
}

// export default CustomSlider;
export default CSSModules(CustomSlider, styles, { allowMultiple: true });
