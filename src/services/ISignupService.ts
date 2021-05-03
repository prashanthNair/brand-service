import { SignupDetails } from "../models/sign_up";

export interface ISignupService {
    postSignup(signupData: SignupDetails);
    getUserDetails(userId: string)
}