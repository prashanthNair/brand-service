import authRoutes from "../routes/auth";   
import subscriptionRoute from "../routes/subscription";

export default function registerRoutes( app ) { 
    authRoutes(app),
    subscriptionRoute(app)
}