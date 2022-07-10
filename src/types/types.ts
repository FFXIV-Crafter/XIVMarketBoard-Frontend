export interface GetApiResults {
  info: Info;
  results: ApiResponse;
}
export interface ApiResponse {
  message: string;
  items: Item[];
  recipes: Recipe[];
  universalisEntry: null;
}

export interface Item {
  id: number;
  name: string;
  canBeCrafted: boolean;
  isMarketable: boolean;
}
export interface Recipe {
  id: number;
  item: Item;
  amountResult: number;
  ingredients: Ingredient[];
  name: string;
  job: Job;
}

export interface Ingredient {
  id: number;
  amount: number;
  item: Item;
}
export interface Job {
  id: number;
  name: string;
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}
