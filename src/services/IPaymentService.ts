
export interface IPaymentService { 
    
    makePayment(paymentInputModel: any): Promise<any>; 
}