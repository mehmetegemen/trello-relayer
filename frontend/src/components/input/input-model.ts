import { useCallback, useState } from 'react';

const useInputHooks = (onChange?: (...args: any) => any) => {
  const [ value, setValue ] = useState('');

  const onChangeWithCallback = useCallback((e) => {
    if (!onChange) setValue(e.target.value);
    else onChange(e.target.value);
  }, [onChange]);

  return { value, onChangeWithCallback };
};

export default useInputHooks;
