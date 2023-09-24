import { Category } from "./category";

export class Product{
    id! :string;
    name!: string;
    price!: number;
    category:Category=new Category();
    quantity!: number;
    like! : number;

}