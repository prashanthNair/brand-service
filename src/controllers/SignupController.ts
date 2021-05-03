import { Request, Response, NextFunction } from "express"; 
import { ISignupService } from "../services/ISignupService";
import { SignupService } from "../services/SignupService";
import { HttpResponseMessage } from "../utils/httpResponseMessage";
import { SignupDetails } from "../models/sign_up";


export class SignupController {
    private constructor() {}
  
    private static instance: SignupController = null;
    private signupService = null;
  
    /**
     * To get singleton instance
     *
     * @param  {object} signupService
     */
  
    public static getInstance(
      signupService: ISignupService = SignupService.getInstance()
    ) {
      if (!SignupController.instance) {
        SignupController.instance = new SignupController();
      }
      SignupController.instance.signupService = signupService; // mock service Object is passed as a param from .spec
      return SignupController.instance;
    }
  
    /**
     * Basic AuthenticationS
     *
     * @param  {object}   req
     * @param  {object}   res
     * @param  {function} next
     */
    
    public async postSignup(req: Request, res: Response, next: NextFunction) {
  
        let signupData: SignupDetails = {
            BrandType: req.body.BrandType,
            BrandName: req.body.BrandName,
            BrandCategory: req.body.BrandCategory,
            BrandSubCategory: req.body.BrandSubCategory,
            BusinessName: req.body.BusinessName,
            RegistrationType: req.body.RegistrationType,
            Kyc: req.body.Kyc,
            AuthPersonName: req.body.AuthPersonName,
            Designation: req.body.Designation,
            PhoneNumber: req.body.PhoneNumber,
            Email: req.body.Email,
            Password: req.body.Password,
            ConfPassword:req.body.ConfPassword
        };
        const result = await this.signupService.postSignup(signupData);
  
        if (result) {
          HttpResponseMessage.successResponse(res, "Sucessfull");
        } else {
          HttpResponseMessage.sendErrorResponse(res, "Transaction Failed");
        }
    }

    public async getUserdetails(req: Request, res: Response, next: NextFunction) {
      try {
        const result = await this.signupService.getUserDetails(req.params.id); // :TODO remove hardcode
        if (result) {
          HttpResponseMessage.successResponseWithData(res, "Sucessfull", result);
        } else {
          HttpResponseMessage.sendErrorResponse(res, "Transaction Failed");
        }
      } catch (err) {
        HttpResponseMessage.sendErrorResponse(res, err);
      }
    }

//     public async update(req: Request, res: Response, next: NextFunction) {
//       try {
//         let userData: Update = {
//           email: req.body.email,
//           password: req.body.password,
//         };
//         const result = await this.authService.update(userData);
  
//         if (result) {
//           HttpResponseMessage.successResponse(res, "Sucessfully updated");
//         } else {
//           HttpResponseMessage.sendErrorResponse(res, "Transaction Failed");
//         }
//       } catch (error) {
//         HttpResponseMessage.sendErrorResponse(res, "Transaction 'Failed", error);
//       }
//     }
}