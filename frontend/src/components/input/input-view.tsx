import { InputViewBaseProps } from './input-types';

const InputView: React.FC<InputViewBaseProps> = ({ value = '', onChange }) => (
  <input value={value} onChange={onChange} type="text" />
);

export default InputView;
