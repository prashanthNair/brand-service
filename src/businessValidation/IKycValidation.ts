export interface IKycValidation {
    validatePostKycDetailsInput(data: object): object;
    validateGetKycDetailsInput(data: string): object;
}