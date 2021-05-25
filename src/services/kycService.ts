import { KycDetails } from "../models/kycDetails";
import { IKycService } from "../services/IKycService";
import { db } from "../configuration/db.config";

class KycService implements IKycService {

    private constructor() {}

    private static instance: IKycService = null;

    static getInstance(){
        if(!KycService.instance){
            KycService.instance = new KycService();
        }

        return KycService.instance;
    }

    public async postKycDetails(kycDetailsData: KycDetails): Promise<KycDetails>{
        try{
            let sql =`CALL Insertkycdetails(?,?,?,?,?,?,?)`
            let result = await db.query(sql,Object.values(kycDetailsData))
            return result;
        }catch (err) {
            return err;
        }
    }
}

export { KycService };