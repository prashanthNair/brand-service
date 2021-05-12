import authRoutes from "../routes/auth";  
import signupRoutes from "../routes/onboarding";    

export default function registerRoutes( app ) { 
    authRoutes(app)  
    signupRoutes(app)
}