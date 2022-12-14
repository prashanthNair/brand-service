import { Request, Response, NextFunction } from "express";
import { GetAllProductsInput, GetBrandProductInput, Product } from "../models/product";
import { IProductService } from "../services/IProductService";
import { ProductService } from "../services/productService";
import { HttpResponseMessage } from "../utils/httpResponseMessage";
import { ProductValidation } from "../businessValidation/productValidation";
import { IProductValidation } from "../businessValidation/IProductValidation";

export class ProductController {
  private constructor() { }

  private static instance: ProductController = null;
  private productService = null;
  private validator = null;

  /**
   * To get singleton instance
   *
   * @param  {object} productService
   */

  public static getInstance(
    productService: IProductService = ProductService.getInstance(),
    productValidator: IProductValidation = ProductValidation.getInstance()
  ) {
    if (!ProductController.instance) {
      ProductController.instance = new ProductController();
    }
    ProductController.instance.productService = productService; // mock service Object is passed as a param from .spec
    ProductController.instance.validator = productValidator;
    return ProductController.instance;
  }


  public async postProducts(req: Request, res: Response, next: NextFunction) {

    // validate api input:
    let { error, isError } = this.validator.validatePostProductInput({ ...req.body, ...req.params });

    if (isError) {
      HttpResponseMessage.sendErrorResponse(res, "input validation error", error)
    } else {

      let productInputModel: Product = {
        categoryId: req.body.categoryId,
        productCategoryId: req.body.productCategoryId,
        brandId: req.body.brandId,
        productName: req.body.productName,
        title: req.body.title,
        keyPoints: req.body.keyPoints,
        mrp: req.body.mrp,
        sellingPrice: req.body.sellingPrice,
        loyaltyPercentage: req.body.loyaltyPercentage,
        buddyMargin: req.body.buddyMargin,
        tag: req.body.tag,
        isVeg: req.body.isVeg,
        ageGroup: req.body.ageGroup,
        weight: req.body.weight,
        manufacturedDate: req.body.manufacturedDate,
        expiryDate: req.body.expiryDate,
        productBrand: req.body.productBrand,
        currency: req.body.currency,
      };

      const result = await this.productService.postProduct(productInputModel);

      if (result) {
        HttpResponseMessage.successResponse(res, "Sucessfull");
      } else {
        HttpResponseMessage.sendErrorResponse(res, "Transaction Failed");
      }
    }
  }

  async getAllBrandProducts(req: Request, res: Response, next: NextFunction) {

    let { error, isError } = this.validator.validateGetAllProducts({ ...req.params, ...req.query });

    if (isError) {

      HttpResponseMessage.sendErrorResponse(res, "input validation error", error)
    } else {

      let inputData: GetAllProductsInput = { 
        "brandId": req.params.brandId,
        "status": req.query.status
      };

      this.productService.getProducts(inputData)
        .then(result => {

          let _result = result[0][0];
          HttpResponseMessage.successResponseWithData(res, "Sucessfull", _result);
        }).catch(err => {

          HttpResponseMessage.sendErrorResponse(res, "Transaction Failed", err.message);
        });

    }
  }

  async getBrandProduct(req: Request, res: Response, next: NextFunction) {

    let { error, isError } = this.validator.validateGetSingleProduct(req.params);

    if (isError) {
      HttpResponseMessage.sendErrorResponse(res, "input validation error", error)
    } else {
      let inputData: GetBrandProductInput = {
         brandId : req.params.brandId,
         productId : req.params.productId
      }

      this.productService.getProduct(inputData)
        .then(result => {

          let _result = result[0][0];
          HttpResponseMessage.successResponseWithData(res, "Sucessfull", _result);
        }).catch(err => {

          HttpResponseMessage.sendErrorResponse(res, "Transaction Failed", err.message);
        });
    }
  }
}