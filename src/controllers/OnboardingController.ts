import { Request, Response, NextFunction } from "express"; 
import { ISignupService } from "../services/IOnboardingService";
import { SignupService } from "../services/OnboardingService";
import { HttpResponseMessage } from "../utils/httpResponseMessage";
import { SignupDetails } from "../models/Onboarding";


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
          brand_id: req.body.brand_id,
          domain_id: req.body.domain_id,
          category_id: req.body.category_id,
          category: req.body.category,
          brand_name: req.body.brand_name,
          about: req.body.about,
          country: req.body.country,
          email_id: req.body.email_id,
          phone_number: req.body.phone_number,
          country_code: req.body.country_code,
          street: req.body.street,
          city: req.body.city,
          state: req.body.state,
          postal_code: req.body.postal_code,
          authorised_user_name: req.body.authorised_user_name,
          authorised_user_designation: req.body.authorised_user_designation,
          authorised_user_email_id: req.body.authorised_user_email_id,
          registered_business_name: req.body.registered_business_name,
          registered_type: req.body.registered_type,
          kyc_doc_type: req.body.kyc_doc_type,
          kyc_doc_number: req.body.kyc_doc_number,
          kyc_doc_url: req.body.kyc_doc_url,
          brand_image_url: req.body.brand_image_url,
          authorised_user_password:req.body.authorised_user_password,
        };
        const result = await this.signupService.postSignup(signupData);
        if (result.errno) {
          console.log(result)        
          HttpResponseMessage.sendErrorResponse(res, "Transaction Failed");
        }
        else if (result) {
          console.log(result,"xsxsxvvvvvvvvvvvvvvvvvvvvv")        
          HttpResponseMessage.successResponse(res, "Sucessfull");
        } else {
          HttpResponseMessage.sendErrorResponse(res, "Transaction Failed");
        }
    }
}