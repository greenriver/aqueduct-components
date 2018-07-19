// load all styles for webpack to copy them
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('../styles/', true));
requireAll(require.context('./icons/', true));

export default {};
// Constants

// Data
export { default as APP_DEFINITIONS } from './data/definitions';
export { LEGEND_OPACITY_RANGE } from './data/legend';
export { YEAR_OPTIONS, CROP_COLOR_DICTIONARY, CROP_OPTIONS, IRRIGATION_OPTIONS, DATA_TYPE_OPTIONS } from './data/filters';

// Aqueduct components
export { default as CountrySelect } from './components/CountrySelect';
export { default as VegaChart } from './components/VegaChart';
export { default as Map } from './components/Map';

export { default as Accordion } from './components/ui/Accordion';
export { default as CustomSelect } from './components/ui/CustomSelect';
export { default as DropdownButton } from './components/ui/DropdownButton';
export { default as Header } from './components/ui/Header';
export { default as Icon } from './components/ui/icon';
export { default as Legend } from './components/ui/Legend';
export { default as MapControls } from './components/ui/MapControls';
export { default as MapHeader } from './components/ui/MapHeader';
export { default as OnlyOn } from './components/ui/Responsive';
export { default as Radio } from './components/ui/Radio';
export { default as RadioGroup } from './components/ui/RadioGroup';
export { default as SegmentedUi } from './components/ui/SegmentedUi';
export { default as Sidebar } from './components/ui/sidebar';
export { default as Spinner } from './components/ui/spinner';
export { default as Sticky } from './components/ui/Sticky';
export { default as Timeline } from './components/ui/timeline';
export { default as ZoomControl } from './components/ui/ZoomControl';

// form components
export { default as Checkbox } from './components/form/checkbox';
export { default as CheckboxGroup } from './components/form/checkbox-group';
export { default as Field } from './components/form/Field';
export { default as FormElement } from './components/form/FormElement';
export { default as Input } from './components/form/Input';
export { default as TextArea } from './components/form/TextArea';

// Buttons
export { default as ShareButton } from './components/ui/Buttons/ShareButton';

// Modal
export { default as Modal } from './components/ui/Modal';
export { default as InfoModal } from './components/ui/Modal/InfoModal';
export { default as SourceModal } from './components/ui/Modal/SourceModal';
export { default as ShareModal } from './components/ui/Modal/ShareModal';

// Reducers
export { closeModal, toggleModal, modalLoading, setModalOptions, modalReducer } from './components/ui/Modal/reducer';

// Utils
export { downloadFile } from './utils/download';
export { get, post, remove } from './utils/request';
export { substitution, concatenation, capitalizeFirstLetter } from './utils/text';
export { getObjectConversion, widgetsFilter } from './utils/filters';
export { dataURItoBlob, saveAsFile } from './utils/image';
