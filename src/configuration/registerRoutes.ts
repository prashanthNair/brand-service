import authRoutes from "../routes/auth";  
import signupRoutes from "../routes/signup";    

export default function registerRoutes( app ) { 
    authRoutes(app)  
    signupRoutes(app)
}