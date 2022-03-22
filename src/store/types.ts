export interface IRootStore {
  isLoading: boolean;
  setLoading: (value: boolean, minimumWait?: number) => void;
}
