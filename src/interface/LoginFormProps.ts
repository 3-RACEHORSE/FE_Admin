// LoginFormProps.ts
export interface LoginFormProps {
  username: string;
  password: string;
  handleUsernameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
