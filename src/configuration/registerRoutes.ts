import authRoutes from "../routes/auth";  
import { brandRoutes } from "../routes/brand"; 

export default function registerRoutes( app ) { 
    authRoutes(app)  
    brandRoutes(app)
}