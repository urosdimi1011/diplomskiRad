import { ICategories } from "./i-categories";
import { ICustomOwn } from "./i-custom-own";


export interface IProduct extends ICustomOwn {
    // "stars":number,
    // "img":string,
    // "review":number,
    // "categories":[number],
    // "precenteSale?":number,
    // "price":number,
    // "dataFrom":string
    name:string,
    desc:string,
    price:number,
    imagesFileName:[string],
    categories:[ICategories],
    DateFrom:string
}
