import { BankDetails } from "../models/bankDetails";

export interface IBankService {

    postBankDetails(bankDetailsData: BankDetails);

}