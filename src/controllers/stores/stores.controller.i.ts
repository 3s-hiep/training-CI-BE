export type GetGroupStoresResponse = Array<IGroupStores>;

export interface IGroupStores {
  name: string;
  stores: Array<IStore>;
}

export interface IStore {
  name: string;
}
