import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { CosmosClient } from '@azure/cosmos';

// Load environment variables
dotenv.config({ path: '../.env.local' });

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Cosmos DB client
const endpoint = process.env.VITE_COSMOS_DB_URI;
const key = process.env.VITE_COSMOS_DB_KEY;

if (!endpoint || !key) {
    console.error('❌ Azure Cosmos DB credentials not found in .env.local');
    process.exit(1);
}

const cosmosClient = new CosmosClient({ endpoint, key });
const DATABASE_NAME = 'FarmAura Website';
const CONTAINER_NAME = 'pilot enquiry';

// Get or create database and container
async function getContainer() {
    try {
        const { database } = await cosmosClient.databases.createIfNotExists({
            id: DATABASE_NAME
        });

        const { container } = await database.containers.createIfNotExists({
            id: CONTAINER_NAME,
            partitionKey: { paths: ['/organization'] }
        });

        return container;
    } catch (error) {
        console.error('Error getting container:', error);
        throw error;
    }
}

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'FarmAura API is running' });
});

// Save pilot enquiry endpoint
app.post('/api/pilot-enquiry', async (req, res) => {
    try {
        const { fullName, organization, role, pilotObjectives, email } = req.body;

        // Validate required fields
        if (!fullName || !organization || !role || !pilotObjectives || !email) {
            return res.status(400).json({
                success: false,
                error: 'Missing required fields'
            });
        }

        const container = await getContainer();

        // Create document
        const document = {
            id: `enquiry-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            fullName,
            organization,
            role,
            pilotObjectives,
            email,
            submittedAt: new Date().toISOString()
        };

        const { resource } = await container.items.create(document);

        console.log('✅ Pilot enquiry saved:', resource.id);

        res.json({
            success: true,
            id: resource.id,
            message: 'Enquiry saved successfully'
        });

    } catch (error) {
        console.error('❌ Error saving enquiry:', error);
        res.status(500).json({
            success: false,
            error: error.message || 'Failed to save enquiry'
        });
    }
});

// Get all enquiries endpoint (for admin)
app.get('/api/pilot-enquiries', async (req, res) => {
    try {
        const container = await getContainer();

        const { resources } = await container.items
            .query('SELECT * FROM c ORDER BY c.submittedAt DESC')
            .fetchAll();

        res.json({
            success: true,
            count: resources.length,
            enquiries: resources
        });

    } catch (error) {
        console.error('❌ Error fetching enquiries:', error);
        res.status(500).json({
            success: false,
            error: error.message || 'Failed to fetch enquiries'
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 FarmAura Backend API running on http://localhost:${PORT}`);
    console.log(`📊 Database: ${DATABASE_NAME}`);
    console.log(`📦 Container: ${CONTAINER_NAME}`);
});
