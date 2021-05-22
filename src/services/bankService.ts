import { BankDetails } from "../models/bankDetails";
import { IBankService } from "../services/IBankService";
import { db } from "../configuration/db.config";

class BankService implements IBankService {
    private constructor() {}

    private static instance: IBankService = null;

    static getInstance(){
        if(!BankService.instance){
            BankService.instance = new BankService();
        }
        return BankService.instance;
    }

    public async postBankDetails(bankDetailsData: BankDetails): Promise<BankDetails>{
        try{
            let bankDetails: BankDetails ={

                BankNumber: bankDetailsData.BankNumber,
                BrandId: bankDetailsData.BrandId,
                BankType: bankDetailsData.BankType,
                BankName: bankDetailsData.BankName,
                BankUrl: bankDetailsData.BankUrl,
                BankStatus:bankDetailsData.BankStatus,
                IsDefault:bankDetailsData.IsDefault
            };
            let sql = `CALL Insertbankdetails(?,?,?,?,?,?,?)`
            let result = await db.query(sql,[
                bankDetails.BankNumber,
                bankDetails.BrandId,
                bankDetails.BankType,
                bankDetails.BankName,
                bankDetails.BankUrl,
                bankDetails.BankStatus,
                bankDetails.IsDefault
            ])
            console.log("Bankdetails insertion result",result);
            return result;
        }catch (err) {
            return err;
        }
    }




}

export { BankService };