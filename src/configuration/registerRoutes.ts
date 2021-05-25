import authRoutes from "../routes/auth"; 
import bankRoutes from "../routes/bank";
import kycRoutes from "../routes/kyc";  

export default function registerRoutes( app ) { 
    authRoutes(app),
    bankRoutes(app),
    kycRoutes(app) 
}