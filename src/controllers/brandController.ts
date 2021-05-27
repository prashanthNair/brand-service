import { Request, Response, NextFunction } from "express";
import { BrandRegisterModel } from "../models/brandRegisterModel";
import { BrandService } from "../services/brandService";
import { IBrandService } from "../services/IBrandService";
import { HttpResponseMessage } from "../utils/httpResponseMessage";
export class BrandController {
    private constructor() { }

    private static instance: BrandController = null;
    private brandService = null;


    /**
     * To get singleton instance
     *
     * @param  {object} productService
     */

    public static getInstance(
        authService: IBrandService = BrandService.getInstance()
    ) {
        if (!BrandController.instance) {
            BrandController.instance = new BrandController();
        }
        BrandController.instance.brandService = authService;
        return BrandController.instance;
    }



    /**
 * Basic AuthenticationS
 *
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 */

    public async postBrandRegister(req: Request, res: Response, next: NextFunction) {
        let signupData: BrandRegisterModel = {
            DomainID: req.body.DomainID,
            CategoryId: req.body.CategoryId,
            Category: req.body.Category,
            BrandName: req.body.BrandName,
            About: req.body.About,
            Country: req.body.Country,
            EmailId: req.body.EmailId,
            PhoneNumber: req.body.PhoneNumber,
            CountryCode: req.body.CountryCode,
            Street: req.body.Street,
            City: req.body.City,
            State: req.body.State,
            PostalCode: req.body.PostalCode,
            UserName: req.body.UserName,
            Designation: req.body.Designation,
            UserEmailId: req.body.UserEmailId,
            RegBusinessName: req.body.RegBusinessName,
            RegisteredType: req.body.RegisteredType,
            AccountPassword: req.body.AccountPassword
        };
        const result = this.brandService.register(signupData).then(result => {
            HttpResponseMessage.successResponse(res,result, "Sucessfull");
        }).catch(error => {
            HttpResponseMessage.sendErrorResponse(error, "Transaction Failed");
        })
    }

    public async patchBrandUpdate(req: Request, res: Response, next: NextFunction) {
        
        let signupData: BrandRegisterModel = {
            DomainID: req.body.DomainID,
            CategoryId: req.body.CategoryId,
            Category: req.body.Category,
            BrandName: req.body.BrandName,
            About: req.body.About,
            Country: req.body.Country,
            EmailId: req.body.EmailId,
            PhoneNumber: req.body.PhoneNumber,
            CountryCode: req.body.CountryCode,
            Street: req.body.Street,
            City: req.body.City,
            State: req.body.State,
            PostalCode: req.body.PostalCode,
            UserName: req.body.UserName,
            Designation: req.body.Designation,
            UserEmailId: req.body.UserEmailId,
            RegBusinessName: req.body.RegBusinessName,
            RegisteredType: req.body.RegisteredType,
            AccountPassword: req.body.AccountPassword
        };
        const result = this.brandService.update(req.body.BrandID,signupData).then(result => {
            console.log(result);
            
            HttpResponseMessage.successResponse(res,result, "Sucessfull");
        }).catch(error => {
            HttpResponseMessage.sendErrorResponse(error, "Transaction Failed");
        })
    }

    public async getAllProductCategory(req: Request, res: Response, next: NextFunction) {
        try {
          const result = await this.brandService.getAllProductCategory(req.body.CategoryId); // :TODO remove hardcode
          
          if (result) {
            HttpResponseMessage.successResponseWithData(res, "Sucessfull", result);
          } else {
            HttpResponseMessage.sendErrorResponse(res, "Transaction Failed");
          }
        } catch (err) {
          HttpResponseMessage.sendErrorResponse(res, err);
        }
      }

      public async getAllCategory(req: Request, res: Response, next: NextFunction) {
        try {
          const result = await this.brandService.getAllCategory(req.body.DomainID); // :TODO remove hardcode
          if (result) {
            HttpResponseMessage.successResponseWithData(res, "Sucessfull", result);
          } else {
            HttpResponseMessage.sendErrorResponse(res, "Transaction Failed");
          }
        } catch (err) {
          HttpResponseMessage.sendErrorResponse(res, err);
        }
      }

      public async getAllDomains(req: Request, res: Response, next: NextFunction) {
        try {
          const result = await this.brandService.getAllDomains(); // :TODO remove hardcode
          if (result) {
            HttpResponseMessage.successResponseWithData(res, "Sucessfull", result);
          } else {
            HttpResponseMessage.sendErrorResponse(res, "Transaction Failed");
          }
        } catch (err) {
          HttpResponseMessage.sendErrorResponse(res, err);
        }
      }

}
