import { Request, Response, NextFunction } from "express";
import { BrandRegisterModel } from "../models/brandRegisterModel";
import { BrandUpdateModel } from "../models/brandUpdateModel";
import { BrandService } from "../services/brandService";
import { IBrandBusinessValidation } from "../businessValidation/IBrandBusinessValidation";
import { BrandBusinessValidation } from "../businessValidation/brandBusinessValidation";
import { IBrandService } from "../services/IBrandService";
import { HttpResponseMessage } from "../utils/httpResponseMessage";
export class BrandController {
    private constructor() { }

    private static instance: BrandController = null;
    private brandService = null;
    private validator = null;

    /**
     * To get singleton instance
     *
     * @param  {object} brandService
     */

    public static getInstance(
        brandService: IBrandService = BrandService.getInstance(),
        brandValidator: IBrandBusinessValidation = BrandBusinessValidation.getInstance()
    ) {
        if (!BrandController.instance) {
            BrandController.instance = new BrandController();
        }
        BrandController.instance.brandService = brandService;
        BrandController.instance.validator = brandValidator;
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
     // validate api input:
    let { error, isError } = this.validator.validatePostBrandInput({ ...req.body, ...req.params });

    if (isError) {
      HttpResponseMessage.sendErrorResponse(res, "input validation error", error)
    } else {

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
    }

    public async patchBrandUpdate(req: Request, res: Response, next: NextFunction) {        
         // validate api input:
    let { error, isError } = this.validator.validatePatchBrandInput(req.body.BrandID,{ ...req.body, ...req.params });

    if (isError) {
      HttpResponseMessage.sendErrorResponse(res, "input validation error", error)
    } else {
        let signupData: BrandUpdateModel = {
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
            RegisteredType: req.body.RegisteredType
        };
        const result = this.brandService.update(req.body.BrandID,signupData).then(result => {
            console.log(result); 
            HttpResponseMessage.successResponse(res,result, "Sucessfull");
        }).catch(error => {
            HttpResponseMessage.sendErrorResponse(error, "Transaction Failed");
        })
      }
    }

    public async getAllProductCategory(req: Request, res: Response, next: NextFunction) {
    // validate api input:
    let { error, isError } = this.validator.validateGetAllProductCategoryInput({ ...req.body, ...req.params });

    if (isError) {
      HttpResponseMessage.sendErrorResponse(res, "input validation error", error)
    } else {

        try {
          const result = await this.brandService.getAllProductCategory(req.params.CategoryId); // :TODO remove hardcode
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

      public async getAllCategory(req: Request, res: Response, next: NextFunction) {
      // validate api input:
      let { error, isError } = this.validator.validateGetAllCategoryInput({ ...req.body, ...req.params });

    if (isError) {
      HttpResponseMessage.sendErrorResponse(res, "input validation error", error)
    } else {

        try {
          
          const result = await this.brandService.getAllCategory(req.params.DomainID); // :TODO remove hardcode
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

      public async getAllSubscriptions(req: Request, res: Response, next: NextFunction) {
        try {
          const result = await this.brandService.getAllSubscriptions(); // :TODO remove hardcode
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
