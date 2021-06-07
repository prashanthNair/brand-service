export class Details { 
    BankName:string; 
    AccNumber:string; 
    Ifsc: string;    
}
export class BankDetails {
    brandId: string;
    bankType: string;
    bankName: string;
    ifscCode: string;
    bankUrl: string;
    bankStatus: string;
    isDefault: string;
    bankNumber: string;
}

export class UpdateBankDetails{
    bankNumber: string;
    bankType: string;
    bankName: string;
    bankUrl: string;
    bankStatus: string;
    isDefault: string;
}
