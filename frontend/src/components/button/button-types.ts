export interface ButtonBaseProps {
  onClick?: (...args: any) => any;
}

export interface ButtonIconExistsProps {
  icon: string;
  label?: never;
  description: string;
}

export interface ButtonIconDoesntExistsProps {
  icon?: never;
  description?: string;
  label: string;
}

export type ButtonProps = ButtonBaseProps & (ButtonIconExistsProps | ButtonIconDoesntExistsProps);