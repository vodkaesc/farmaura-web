import { CosmosClient } from '@azure/cosmos';

// Initialize Cosmos DB client using Environment Variables (from Vercel Settings)
const endpoint = process.env.VITE_COSMOS_DB_URI;
const key = process.env.VITE_COSMOS_DB_KEY;

const DATABASE_NAME = 'FarmAura Website';
const CONTAINER_NAME = 'pilot enquiry';

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method Not Allowed' });
    }

    if (!endpoint || !key) {
        return res.status(500).json({ success: false, error: 'Azure credentials not configured on Vercel' });
    }

    try {
        const { fullName, organization, role, pilotObjectives, email } = req.body;

        const client = new CosmosClient({ endpoint, key });

        // Ensure Database
        const { database } = await client.databases.createIfNotExists({ id: DATABASE_NAME });

        // Ensure Container
        const { container } = await database.containers.createIfNotExists({
            id: CONTAINER_NAME,
            partitionKey: { paths: ['/organization'] }
        });

        // Create the document
        const document = {
            id: `enquiry-${Date.now()}`,
            fullName,
            organization,
            role,
            pilotObjectives,
            email,
            submittedAt: new Date().toISOString(),
            source: 'vercel-serverless'
        };

        const { resource } = await container.items.create(document);

        return res.status(200).json({
            success: true,
            id: resource.id,
            message: 'Enquiry saved successfully via Vercel Function'
        });

    } catch (error) {
        console.error('❌ Vercel Function Error:', error);
        return res.status(500).json({
            success: false,
            error: error.message || 'Server error saving to database'
        });
    }
}
