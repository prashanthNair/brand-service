import { Request, Response, NextFunction } from "express"; 
import { IProductService } from "../services/IProductService";
import { ProductService } from "../services/productService";
import { HttpResponseMessage } from "../utils/httpResponseMessage";

export class ProductController {
    private constructor() {}
  
    private static instance: ProductController = null;
    private productService = null;
  
    /**
     * To get singleton instance
     *
     * @param  {object} productService
     */
  
    public static getInstance(
      authService: IProductService = ProductService.getInstance()
    ) {
      if (!ProductController.instance) {
        ProductController.instance = new ProductController();
      }
      ProductController.instance.productService = authService; // mock service Object is passed as a param from .spec
      return ProductController.instance;
    }

    
  async postProduct(req: Request, res: Response){

    let productInputModel=req.body;

    const result = await this.productService.postUser(productInputModel);

      if (!result.error) {
        HttpResponseMessage.successResponse(res,result, "Sucessfull");
      } else {
        HttpResponseMessage.sendErrorResponse(res, "Transaction Failed");
      }
      
  }
}