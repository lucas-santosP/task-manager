export interface ISharedContext {
  isLoading: boolean;
  setLoading: (value: boolean, minimumWait?: number) => void;
}
