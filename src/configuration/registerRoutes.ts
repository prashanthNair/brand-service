import authRoutes from "../routes/auth";  
import { brandRoutes } from "../routes/brand";  
import bankRoutes from "../routes/bank";
import kycRoutes from "../routes/kyc";  
 

export default function registerRoutes( app ) { 
    authRoutes(app); 
    brandRoutes(app);
    bankRoutes(app);
    kycRoutes(app) ;
}