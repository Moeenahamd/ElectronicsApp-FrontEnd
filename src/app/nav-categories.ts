export interface NavCategory {
    ID: number;
    Category_Name: string;
    Router_Name?: string;
    children?:NavCategory[]
  }