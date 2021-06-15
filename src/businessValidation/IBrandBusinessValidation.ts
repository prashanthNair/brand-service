
export interface IBrandBusinessValidation { 
    validatePostBrandInput(data: object): object;
    validatePostBankDetailsInput(data: object): object;
    validateGetBankDetailsInput(brandId: string): object;
    validateUpdateBankDetailsInput(data: object): object;
    validatePostKycDetailsInput(data: object): object;
    validateGetKycDetailsInput(data: string): object;
    validateUpdateKycDetailsInput(data: object): object;
}