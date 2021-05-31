export interface IKycValidation {
    validatePostKycDetailsInput(data: object): object;
    validateGetKycDetailsInput(data: string): object;
    validateUpdateKycDetailsInput(data: object): object;
}