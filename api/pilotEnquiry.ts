// API configuration
const isLocalhost = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
const API_BASE_URL = import.meta.env.VITE_API_URL || (isLocalhost ? 'http://localhost:3001' : '');

/**
 * Check if API is available before making requests
 */
const isApiConfigured = !!import.meta.env.VITE_API_URL || isLocalhost;

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
    if (!isApiConfigured) {
        console.warn('⚠️ API is not configured for this environment. Skipping database save.');
        return { success: false, error: 'API not configured' };
    }

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
