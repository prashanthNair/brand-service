import authRoutes from "../routes/auth";   
import productRoute from "../routes/product";

export default function registerRoutes( app ) { 
    authRoutes(app),
    productRoute(app)
}