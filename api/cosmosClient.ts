import { CosmosClient } from '@azure/cosmos';

// Initialize Cosmos DB client
const rawEndpoint = import.meta.env.VITE_COSMOS_DB_URI || '';
const endpoint = rawEndpoint.replace(':443/', '/').replace(':443', '');
const key = import.meta.env.VITE_COSMOS_DB_KEY;

if (!endpoint || !key) {
    throw new Error('Azure Cosmos DB connection details are not configured in environment variables');
}

export const cosmosClient = new CosmosClient({ endpoint, key });

// Database and container configuration
export const DATABASE_NAME = 'FarmAura Website';
export const CONTAINER_NAME = 'pilot enquiry';

/**
 * Get or create database and container
 */
export async function getContainer() {
    // Create database if it doesn't exist
    const { database } = await cosmosClient.databases.createIfNotExists({
        id: DATABASE_NAME
    });

    // Create container if it doesn't exist
    const { container } = await database.containers.createIfNotExists({
        id: CONTAINER_NAME,
        partitionKey: { paths: ['/organization'] } // Partition by organization
    });

    return container;
}
