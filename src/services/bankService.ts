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
            let sql = `CALL Insertbankdetails(?,?,?,?,?,?,?,?)`
            let result = await db.query(sql,Object.values(bankDetailsData))
            return result;

        }catch (err) {
            return err;
        }
    }
}

export { BankService };