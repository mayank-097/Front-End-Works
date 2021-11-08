import { ProductDetails } from './ProductDetails';
export class ProductService {

    arr: ProductDetails[] = [];

    // to communicate with Spring boot Rest Web Service (API)
    getAllProducts(): ProductDetails[] {
        // REST API 

        return this.arr;
    }

    // ...../{gender}
    getProductsBasedOnCost(): ProductDetails[] {
        let spearr: ProductDetails[] = [];
        for (let i in this.arr) {
            if (this.arr[i].cost > 10000) {
                spearr.push(this.arr[i]);
            }

        }
        return spearr;

    }

    //  post api
    addProduct(product: ProductDetails) {
        console.log("adding");
        this.arr.push(product);
        console.log(this.arr);

    }


}