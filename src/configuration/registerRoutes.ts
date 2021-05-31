import authRoutes from "../routes/auth";
import { brandRoutes } from "../routes/brand"; 
import productRoute from "../routes/product";
import subscriptionRoute from "../routes/subscription";


export default function registerRoutes(app) {
    authRoutes(app);
    brandRoutes(app); 
    productRoute(app)
    subscriptionRoute(app) 

}