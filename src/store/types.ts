export type ISetLocation = (to: string, options?: { replace: boolean }) => void;

export interface IRootStore {
  isLoading: boolean;
  setLoading: (value: boolean, minimumWait?: number) => void;
}
