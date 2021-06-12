import { Request, Response, NextFunction } from "express";
import { BankDetails, UpdateBankDetails } from "../models/bankDetails";
import { BrandRegisterModel } from "../models/brandRegisterModel";
import { BrandUpdateModel } from "../models/brandUpdateModel";
import { BrandService } from "../services/brandService";
import { IBrandBusinessValidation } from "../businessValidation/IBrandBusinessValidation";
import { BrandBusinessValidation } from "../businessValidation/brandBusinessValidation";
import { IBrandService } from "../services/IBrandService";
import { HttpResponseMessage } from "../utils/httpResponseMessage";
import { KycDetails, KycDetailsUpdateModel } from "../models/kycDetails";



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
        HttpResponseMessage.successResponse(res, result, "Sucessfull");
      }).catch(error => {
        HttpResponseMessage.sendErrorResponse(error, "Transaction Failed");
      })
    }
  }

  public async patchBrandUpdate(req: Request, res: Response, next: NextFunction) {
    // validate api input:
    let { error, isError } = this.validator.validatePatchBrandInput(req.body.BrandID, { ...req.body, ...req.params });

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
      const result = this.brandService.update(req.body.BrandID, signupData).then(result => {
        console.log(result);

        HttpResponseMessage.successResponse(res, result, "Sucessfull");
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

  public async postKycDetails(req: Request, res: Response, next: NextFunction) {
    //validate api inputs


    let { error, isError } = this.validator.validatePostKycDetailsInput({ ...req.body, ...req.params });

    if (isError) {
      HttpResponseMessage.validationErrorWithData(res, "input validation error", error)
    } else {
      let KycDetailsInputModel: KycDetails = {

        kycNumber: req.body.kycNumber,
        brandId: req.params.brandId,
        kycType: req.body.kycType,
        kycName: req.body.kycName,
        kycUrl: req.body.kycUrl,
        kycStatus: req.body.kycStatus,
        isDefault: req.body.isDefault

      }

      const result = await this.brandService.postKycDetails(KycDetailsInputModel);

      if (result) {
        HttpResponseMessage.successResponse(res, "Kyc Details inserted Sucessfully");
      } else {
        HttpResponseMessage.sendErrorResponse(res, "Kyc Details insertion Failed");
      }
    }
  }

  public async getKycDetails(req: Request, res: Response, next: NextFunction) {

    let { error, isError } = this.validator.validateGetKycDetailsInput(req.params.brandId);

    if (isError) {
      HttpResponseMessage.validationErrorWithData(res, "input validation error", error)
    } else {
      let brandId: string = req.params.brandId;

      const brand = await this.brandService.getBrand(brandId);

      if (!brand.errno) {

        const result = await this.brandService.getKycDetails(brandId);

        if (result[0][0].length !== 0) {
          let _result = result[0][0];
          HttpResponseMessage.successResponseWithData(res, "Fetched Kyc Details Sucessfully", _result);
        } else {
          HttpResponseMessage.sendErrorResponse(res, "Kyc Details is Not Found for current Brand");
        }

      } else {

        HttpResponseMessage.sendErrorResponse(res, "Fetching Kyc Details is Failed", brand);

      }
    }
  }


  public async updateKycDetails(req: Request, res: Response, next: NextFunction) {
    //validate api inputs


    let { error, isError } = this.validator.validateUpdateKycDetailsInput(req.body);

    if (isError) {
      HttpResponseMessage.validationErrorWithData(res, "input validation error", error)
    } else {
      let KycDetailsInputModel: KycDetailsUpdateModel = {

        kycNumber: req.body.kycNumber,
        kycType: req.body.kycType,
        kycName: req.body.kycName,
        kycUrl: req.body.kycUrl,
        kycStatus: req.body.kycStatus,
        isDefault: req.body.isDefault

      }

      const result = await this.brandService.updateKycDetails(KycDetailsInputModel);


      if (result) {
        HttpResponseMessage.successResponse(res, "Kyc Details updated Sucessfully");
      } else {
        HttpResponseMessage.sendErrorResponse(res, "Kyc Details updation Failed");
      }
    }
  }

  public async postBankDetails(req: Request, res: Response, next: NextFunction) {
    const brandId: string = req.params.brandId;
    //validate api inputs
    let { error, isError } = this.validator.validatePostBankDetailsInput({ ...req.body, brandId });

    if (isError) {
      HttpResponseMessage.validationErrorWithData(res, "input validation error", error)
    } else {
      let bankDetailsInputModel: BankDetails = {

        brandId: brandId,
        bankType: req.body.bankType,
        bankName: req.body.bankName,
        ifscCode: req.body.ifscCode,
        bankUrl: req.body.bankUrl,
        bankStatus: req.body.bankStatus,
        isDefault: req.body.isDefault,
        bankNumber: req.body.bankNumber
      };

      const result = await this.brandService.postBankDetails(bankDetailsInputModel);


      if (!result.errno) {
        HttpResponseMessage.successResponse(res, "Bank Account Details inserted Sucessfully");
      } else {
        HttpResponseMessage.sendErrorResponse(res, "Transaction Failed", result);
      }
    }
  }


  public async getBankDetails(req: Request, res: Response, next: NextFunction) {
    const brandId = req.params.brandId;

    //validate api inputs
    let { error, isError } = this.validator.validateGetBankDetailsInput(brandId);

    if (isError) {
      HttpResponseMessage.validationErrorWithData(res, "input validation error", error)
    } else {

      const brand = await this.brandService.getBrand(brandId);

      if (!brand.errno) {

        const result = await this.brandService.getBankDetails(brandId);


        if (result[0][0].length !== 0) {
          let _result = result[0][0];
          HttpResponseMessage.successResponseWithData(res, "Fetched Bank Account Details Sucessfully", _result);
        } else {
          HttpResponseMessage.sendErrorResponse(res, "Fetching Bank Account Details Failed for Current Brand (No Data Found)", result[0]);
        }
      } else {

        HttpResponseMessage.sendErrorResponse(res, "Fetching Bank Account Details is Failed", brand);

      }


    }


  }

  public async updateBankDetails(req: Request, res: Response, next: NextFunction) {

    const brandId = req.params.brandId;
    //validate api inputs
    let { error, isError } = this.validator.validateUpdateBankDetailsInput(req.body);

    if (isError) {
      HttpResponseMessage.validationErrorWithData(res, "input validation error", error)
    } else {

      const brand = await this.brandService.getBrand(brandId);

      if (!brand.errno) {
        let updateBankDetailsInputModel: UpdateBankDetails = {
          bankNumber: req.body.bankNumber,
          bankType: req.body.bankType,
          bankName: req.body.bankName,
          bankUrl: req.body.bankUrl,
          bankStatus: req.body.bankStatus,
          isDefault: req.body.isDefault
        };

        const result = await this.brandService.updateBankDetails(updateBankDetailsInputModel);

        if (result) {
          HttpResponseMessage.successResponse(res, "Bank Account Details updated Sucessfully");
        } else {
          HttpResponseMessage.sendErrorResponse(res, "Transaction Failed");
        }
      } else {

        HttpResponseMessage.sendErrorResponse(res, "Updating Bank Account Details is Failed", brand);

      }

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

  public async getAllOrders(req: Request, res: Response, next: NextFunction) {
    try {

      const brandId = req.params.brandId;
      const status = req.params.orderStatus;

      let { error, isError } = this.validator.validateGetAllOrdersInput({brandId,status});


      if (isError) {
        HttpResponseMessage.validationErrorWithData(res, "input validation error", error)
      } else {

        const result = await this.brandService.getAllOrders(brandId, status);

        if (!result.errno) {
          HttpResponseMessage.successResponseWithData(res, "Fetched All Orders Successfully", result);
        } else {
          HttpResponseMessage.sendErrorResponse(res, "Fetched All Orders Failed");
        }
      }

    } catch (err) {
      HttpResponseMessage.sendErrorResponse(res, "Fetching All Orders is Failed", err);
    }
  }
}
