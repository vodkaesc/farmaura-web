import { getContainer } from './cosmosClient';

export interface PilotEnquiry {
    fullName: string;
    organization: string;
    role: string;
    pilotObjectives: string;
    email: string;
    submittedAt?: string;
}

/**
 * Save pilot enquiry DIRECTLY to Azure Cosmos DB
 */
export async function savePilotEnquiry(enquiry: PilotEnquiry): Promise<{ success: boolean; error?: string; id?: string }> {
    try {
        const container = await getContainer();

        // Add timestamp
        const itemToSave = {
            ...enquiry,
            submittedAt: new Date().toISOString(),
            type: 'pilot_enquiry'
        };

        // Save to Cosmos DB
        const { resource } = await container.items.create(itemToSave);

        if (resource) {
            console.log('✅ Pilot enquiry saved to Cosmos DB:', resource.id);
            return {
                success: true,
                id: resource.id
            };
        }

        return {
            success: false,
            error: 'Failed to create database record'
        };

    } catch (error) {
        console.error('❌ Cosmos DB Save Error:', error);

        let errorMessage = 'Database connection error';
        if (error instanceof Error) {
            errorMessage = error.message;
        }

        return {
            success: false,
            error: errorMessage
        };
    }
}

/**
 * Get all enquiries directly from Cosmos DB
 */
export async function getAllEnquiries(): Promise<any[]> {
    try {
        const container = await getContainer();
        const { resources } = await container.items
            .query("SELECT * FROM c WHERE c.type = 'pilot_enquiry' ORDER BY c.submittedAt DESC")
            .fetchAll();
        return resources;
    } catch (error) {
        console.error('Error fetching enquiries:', error);
        return [];
    }
}
