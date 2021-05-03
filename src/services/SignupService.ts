import { SignupDetails } from "../models/sign_up";
import { ISignupService } from "./ISignupService";
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
       BrandType: signupData.BrandType,
       BrandName: signupData.BrandName,
       BrandCategory: signupData.BrandCategory,
       BrandSubCategory: signupData.BrandSubCategory,
       BusinessName: signupData.BusinessName,
       RegistrationType: signupData.RegistrationType,
       Kyc: signupData.Kyc,
       AuthPersonName: signupData.AuthPersonName,
       Designation: signupData.Designation,
       PhoneNumber: signupData.PhoneNumber,
       Email: signupData.Email,
       Password: signupData.Password,
       ConfPassword:signupData.ConfPassword
      };
  throw new Error("Service method not implemented!")
      // let sql = `CALL PostSignup(?,?,?,?,?,?,?,?,?,?)`;
      // let result = await db.query(sql, [
      //   signup.BrandName,
      //   signup.BrandCategory,
      //   signup.BrandSubCategory,
      //   signup.BusinessName,
      //   signup.RegistrationType,
      //   signup.Kyc,
      //   signup.AuthPersonName,
      //   signup.Designation,
      //   signup.PhoneNumber,
      //   signup.Email,
      //   signup.Password,
      //   signup.ConfPassword,
      // ]);
      // console.log(result);
      // return result;

    }catch (err) {
      return err;
    }
  }

  public async getUserDetails(userId: string): Promise<SignupDetails> {
    try {
      throw new Error("Service method not implemented!")
      // let sql = `CALL GetUsers(?)`;
      // const [rows, fields] = await db.query(sql, userId);
      // return rows;
    } catch (error) {
      return null;
    }
  }

}

export { SignupService };