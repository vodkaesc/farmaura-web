// API configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export interface PilotEnquiry {
    fullName: string;
    organization: string;
    role: string;
    pilotObjectives: string;
    email: string;
}

/**
 * Save pilot enquiry via backend API
 */
export async function savePilotEnquiry(enquiry: PilotEnquiry): Promise<{ success: boolean; error?: string; id?: string }> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/pilot-enquiry`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(enquiry),
        });

        const data = await response.json();

        if (!response.ok) {
            return {
                success: false,
                error: data.error || 'Failed to save enquiry'
            };
        }

        console.log('Pilot enquiry saved successfully:', data.id);

        return {
            success: true,
            id: data.id
        };
    } catch (error) {
        console.error('Error saving pilot enquiry:', error);

        return {
            success: false,
            error: error instanceof Error ? error.message : 'Network error occurred'
        };
    }
}

/**
 * Get all pilot enquiries (optional - for admin use)
 */
export async function getAllEnquiries(): Promise<PilotEnquiry[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/pilot-enquiries`);
        const data = await response.json();

        if (!response.ok) {
            console.error('Error fetching enquiries:', data.error);
            return [];
        }

        return data.enquiries || [];
    } catch (error) {
        console.error('Error fetching enquiries:', error);
        return [];
    }
}
