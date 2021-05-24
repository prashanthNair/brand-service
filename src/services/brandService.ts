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

    public async update(id:string,updateData: BrandRegisterModel): Promise<Object> {
        try{
          let sql = `CALL Update_Brand(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
          let result = await db.query(
            sql,[updateData.DomainID,
                updateData.CategoryId,
                updateData.Category,
                updateData.BrandName,
                updateData.About,
                updateData.Country,
                updateData.EmailId,
                updateData.PhoneNumber,
                updateData.CountryCode,
                updateData.Street,
                updateData.City,
                updateData.State,
                updateData.PostalCode,
                updateData.UserName,
                updateData.Designation,
                updateData.UserEmailId,
                updateData.RegBusinessName,
                updateData.RegisteredType,
                updateData.AccountPassword]);
          console.log(result);
          return result;
        }catch (err) {
          return err;
        }
      } 

      
  public async getAllCategory(domain_Id: string): Promise<BrandRegisterModel> {
    try {
      let sql = `CALL GetAllCategory(?)`;
      const [rows, fields] = await db.query(sql, domain_Id);
      return rows;
    } catch (error) {
      return null;
    }
  }

      
  public async getAllDomains(): Promise<BrandRegisterModel> {
    try {
      let sql = `CALL GetAllDomains`;
      const [rows, fields] = await db.query(sql);
      return rows;
    } catch (error) {
      return null;
    }
  }

  public async getAllProductCategory(category_Id: string): Promise<BrandRegisterModel> {
    try {
      let sql = `CALL GetAllProductCategory(?)`;
      const [rows, fields] = await db.query(sql, category_Id);
      return rows;
    } catch (error) {
      return null;
    }
  }

}