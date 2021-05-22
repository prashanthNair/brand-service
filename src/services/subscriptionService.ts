import { db } from '../configuration/db.config';
import { BrandSubscription, GetBrandSubscription } from '../models/subscription';
import { ISubscriptionService } from './ISubscriptionService';


class SubscriptionService implements ISubscriptionService{
    private constructor() {};
    private static instance: SubscriptionService = new SubscriptionService();


    public static getInstance(){
        if(!SubscriptionService.instance){
            this.instance = new SubscriptionService();
        }
        return this.instance;
    }

    public async getSubscriptions(brandId: GetBrandSubscription): Promise<any>{
        try{

            let sql = `CALL Getbrandsubscription(?)`;
            let result = await db.query(sql, [brandId]);

            return result;
        }
        catch(err) {
            console.log(err);
            return null;
        }
    }

    public async postBrandSubscription(brandSubData: BrandSubscription): Promise<any>{
        try{

            let sql = `CALL Insertbrandsubscription(?,?,?)`;
            let result = await db.query(sql, Object.values(brandSubData));

            return "result";
        }
        catch(err) {
            console.log(err);
            return null;
        }
    }

    public async updateBrandSubscription(brandSubData: BrandSubscription):Promise<any>{
        try{

            let sql = `CALL Updatebrandsubscription(?,?,?)`;
            let result = await db.query(sql, Object.values(brandSubData));

            return result;
        }
        catch(err) {
            console.log(err);
            return null;
        }
    }
}

export { SubscriptionService };