export interface MainSlice {
  loggedInUser: any | null;
  menuOptions: string[];
}

export const initialMainSlice: MainSlice = {
  loggedInUser: null,
  menuOptions: ['Browse', 'Search', 'My Vault'],
}