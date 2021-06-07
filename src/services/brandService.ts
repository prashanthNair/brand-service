import { db } from "../configuration/db.config";
import { BankDetails, UpdateBankDetails } from "../models/bankDetails";
import { BrandRegisterModel } from "../models/brandRegisterModel";
import { KycDetails, KycDetailsUpdateModel } from "../models/kycDetails";
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

  public async update(BrandID: string, updateData: BrandRegisterModel): Promise<Object> {
    try {
      let sql = `CALL Update_Brand(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
      let result = await db.query(
        sql, [
        BrandID,
        updateData.DomainID,
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
      ]);
      return result;
    } catch (err) {
      return err;
    }
  }


  public async getAllCategory(DomainID: string): Promise<BrandRegisterModel> {
    try {
      let sql = `CALL GetAllCategory(?)`;
      const [rows, fields] = await db.query(sql, DomainID);
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

  public async getAllProductCategory(CategoryId: string): Promise<BrandRegisterModel> {
    try {
      let sql = `CALL GetAllProductCategory(?)`;
      const [rows, fields] = await db.query(sql, CategoryId);
      return rows;
    } catch (error) {
      return null;
    }
  }

  public async postKycDetails(kycDetailsData: KycDetails): Promise<KycDetails> {
    try {
      let sql = `CALL Insertkycdetails(?,?,?,?,?,?,?)`;
      let result = await db.query(sql, Object.values(kycDetailsData));
      return result;
    } catch (err) {
      return err;
    }
  }

  public async getKycDetails(brandId: string): Promise<any> {
    try {
      let sql = `CALL GetKYCDetails(?)`;
      let result = await db.query(sql, brandId);
      return result;
    } catch (err) {
      return err;
    }
  }

  public async getBrand(brandId: string): Promise<any> {
    try {

      let sql = `CALL GetBrand(?)`;
      let result = await db.query(sql, brandId);
      return result;

    } catch (err) {
      return (err);
    }
  }

  public async updateKycDetails(kycDetailsData: KycDetailsUpdateModel): Promise<KycDetailsUpdateModel> {
    try {

      let sql = `CALL Updatekycdetails(?,?,?,?,?,?)`;
      let result = await db.query(sql, Object.values(kycDetailsData));

      return result;
    } catch (err) {
      console.log(err);

      return err;
    }
  }

  public async postBankDetails(bankDetailsData: BankDetails): Promise<BankDetails> {
    try {
      let sql = `CALL Insertbankdetails(?,?,?,?,?,?,?,?)`
      let result = await db.query(sql, Object.values(bankDetailsData))
      return result;

    } catch (err) {
      return err;
    }

  }


  public async getBankDetails(brandId: string): Promise<BankDetails> {
    try {

      let sql = `CALL GetBankDetails(?)`;
      let result = await db.query(sql, brandId)

      return result;

    } catch (err) {
      console.log(err);

      return err;
    }
  }

  public async updateBankDetails(updateBankDetailsData: UpdateBankDetails): Promise<BankDetails> {
    try {
      let sql = `CALL Updatebankdetails(?,?,?,?,?,?)`;
      let result = await db.query(sql, Object.values(updateBankDetailsData))

      console.log(updateBankDetailsData, result[0], "---------------------------------------------------------------------------");
      return result;




    } catch (err) {
      console.log(err);

      return err;
    }
  }

  public async getAllSubscriptions(): Promise<BrandRegisterModel> {
    try {
      let sql = `CALL Getallsubscriptions`;
      const [rows, fields] = await db.query(sql);
      return rows;
    } catch (error) {
      return null;
    }
  }
}