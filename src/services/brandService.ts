import { db } from "../configuration/db.config";
import { BrandRegisterModel } from "../models/brandRegisterModel";
import { IBrandService } from "./IBrandService";


export class BrandService implements IBrandService {


    private static instance: IBrandService = null;

    static getInstance() {
        if (!BrandService.instance) {
            BrandService.instance = new BrandService();
        }
        return BrandService.instance;
    }

    public async register(signupData: BrandRegisterModel): Promise<Object> {
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
            ]);
            return result;

        } catch (err) {
            return err;
        }

    }
}