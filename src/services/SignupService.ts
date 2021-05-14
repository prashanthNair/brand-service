import { SignupDetails } from "../models/sign_up";
import { ISignupService } from "./ISignupService";
import { db } from "../configuration/db.config";

class SignupService implements ISignupService {

  private static instance: ISignupService = null;

  static getInstance() {
    if (!SignupService.instance) {
      SignupService.instance = new SignupService();
    }
    return SignupService.instance;
  }
  public async postSignup(signupData: SignupDetails): Promise<SignupDetails> {
    try {

      let sql = `CALL Insert_Brand(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
      let result = await db.query(sql, [
        signupData.DomainID,
        signupData.CategoryId,
        signupData.Category,
        signupData.BrandName,
        signupData.About,
        signupData.Country,
        signupData.EmailId,
        signupData.PhoneNumber,
        signupData.CountryCode,
        signupData.Street,
        signupData.City,
        signupData.State,
        signupData.PostalCode,
        signupData.UserName,
        signupData.Designation,
        signupData.UserEmailId,
        signupData.RegBusinessName,
        signupData.RegisteredType,
        signupData.AccountPassword
      ],
        (error, results, fields) => {
          if (error) {
            return error;
          }
          console.log(results);
        }); 
      return result;

    } catch (err) {
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