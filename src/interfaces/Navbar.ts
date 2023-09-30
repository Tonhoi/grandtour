export interface NavBarChildren {
  name: string;
  id: number;
  children: [
    {
      name: string;
      id: number;
    }
  ];
}
export interface NavBarItem {
  name: string;
  id: number;
  children: Array<NavBarChildren>;
}
