declare module '@env' {
  export const REACT_APP_BASE_URL: string;
}

declare type SomePartial<T, K extends keyof T> = Partial<T> & Pick<T, Exclude<keyof T, K>>;
