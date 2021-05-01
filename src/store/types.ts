export type ISetLocation = (to: string, options?: { replace: boolean }) => void;

export type IStorageAuth = { _id: string; token: string } | undefined;

export interface IRootStore {
  isLoading: boolean;
  setLoading: (value: boolean, minimumWait?: number) => void;
}
