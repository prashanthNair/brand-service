import authRoutes from "../routes/auth";
import { brandRoutes } from "../routes/brand"; 
import productRoute from "../routes/product";
import subscriptionRoute from "../routes/subscription";
var cors = require('cors')


export default function registerRoutes(app) {
    this.app.options('*', cors());       
    authRoutes(app);
    brandRoutes(app); 
    productRoute(app)
    subscriptionRoute(app) 

}