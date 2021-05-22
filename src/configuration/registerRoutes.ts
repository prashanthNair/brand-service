import authRoutes from "../routes/auth"; 
import bankRoutes from "../routes/bank";  

export default function registerRoutes( app ) { 
    authRoutes(app),
    bankRoutes(app) 
}