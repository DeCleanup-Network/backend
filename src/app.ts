import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import dashboardRoutes from './routes/dashboard.routes';

// Create Express application
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization']
}));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);

// Root route
app.get('/', (req, res) => {
    res.json({
        message: 'DeCleanup Network API',
        version: '1.0.0',
    });
});

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error('Unhandled error:', err);

    res.status(500).json({
        success: false,
        message: 'Server error',
    });
});

app.get('/health',(req,res)=>{
    res.status(200).send('API is healthy');
})
export default app; 