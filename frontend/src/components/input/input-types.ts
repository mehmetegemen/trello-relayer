export interface InputViewBaseProps {
  onChange?: (e: React.FormEvent<HTMLInputElement>) => any;
  value: string;
}

export interface InputBaseProps {
  onChange?: (...args: any) => any;
  connectedValue?: string;
}
