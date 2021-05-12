import { SignupDetails } from "../models/Onboarding";
import { ISignupService } from "./IOnboardingService";
import { db } from "../configuration/db.config";

class SignupService implements ISignupService{

  private static instance: ISignupService = null;

  static getInstance() {
    if (!SignupService.instance) {
      SignupService.instance = new SignupService();
    }
    return SignupService.instance;
  }
  public async postSignup(signupData: SignupDetails): Promise<SignupDetails> {
    try{
      let signup: SignupDetails = {
        brand_id: signupData.brand_id,
        domain_id: signupData.domain_id,
        category_id: signupData.category_id,
        category: signupData.category,
        brand_name: signupData.brand_name,
        about: signupData.about,
        country: signupData.country,
        email_id: signupData.email_id,
        phone_number: signupData.phone_number,
        country_code: signupData.country_code,
        street: signupData.street,
        city: signupData.city,
        state: signupData.state,
        postal_code: signupData.postal_code,
        authorised_user_name: signupData.authorised_user_name,
        authorised_user_designation: signupData.authorised_user_designation,
        authorised_user_email_id: signupData.authorised_user_email_id,
        registered_business_name: signupData.registered_business_name,
        registered_type: signupData.registered_type,
        kyc_doc_type: signupData.kyc_doc_type,
        kyc_doc_number: signupData.kyc_doc_number,
        kyc_doc_url: signupData.kyc_doc_url,
        brand_image_url: signupData.brand_image_url,
        authorised_user_password:signupData.authorised_user_password,
      };

      let sql = `CALL mib_brand.Insert_Brand(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
      let result = await db.query(sql, [
        signup.brand_id,
        signup.domain_id,
        signup.category_id,
        signup.category,
        signup.brand_name,
        signup.about,
        signup.country,
        signup.email_id,
        signup.phone_number,
        signup.country_code,
        signup.street,
        signup.city,
        signup.state,
        signup.postal_code,
        signup.authorised_user_name,
        signup.authorised_user_designation,
        signup.authorised_user_email_id,
        signup.registered_business_name,
        signup.registered_type,
        signup.kyc_doc_type,
        signup.kyc_doc_number,
        signup.kyc_doc_url,
        signup.brand_image_url,
        signup.authorised_user_password,
      ]);
      console.log(result);
      return result;
    }catch (err) {
      return err;
    }
  }

}

export { SignupService };