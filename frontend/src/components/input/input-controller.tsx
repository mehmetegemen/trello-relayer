import useInputHooks from './input-model';
import { InputBaseProps } from './input-types';
import InputView from './input-view';

const Input: React.FC<InputBaseProps> = ({ onChange, connectedValue }) => {
  const { value, onChangeWithCallback } = useInputHooks(onChange); 
  
  return (
    <InputView value={connectedValue ?? value} onChange={onChangeWithCallback} />
  );
};

export default Input;
