import { db } from '../configuration/db.config';
import { PostBrandSubscription } from '../models/subscription';
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

    public getMasterSubscriptions(sub_id: string): Promise<any> {

        let sql = `call Getsubscriptionmaster(?)`
        return db.query(sql, [sub_id]);
    }

    public async getBrandSubscriptions(brandId: string): Promise<any> {

        let sql = `CALL Getbrandsubscription(?)`;
        return db.query(sql, [brandId]);

    }

    public postBrandSubscription(brandSubData: PostBrandSubscription): Promise<any>{

            let sql = `CALL Insertbrandsubscription(?,?,?)`;
            return db.query(sql, Object.values(brandSubData));

    }

    public updateBrandSubscription(brandSubData: PostBrandSubscription): Promise<any> {

        let sql = `CALL Updatebrandsubscription(?,?,?)`;
        return db.query(sql, Object.values(brandSubData));

    }
}

export { SubscriptionService };