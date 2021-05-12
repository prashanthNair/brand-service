import { SignupDetails } from "../models/Onboarding";

export interface ISignupService {
    postSignup(signupData: SignupDetails);
}