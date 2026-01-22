export interface PilotEnquiry {
    fullName: string;
    organization: string;
    role: string;
    pilotObjectives: string;
    email: string;
}

/**
 * Save pilot enquiry via the Vercel Serverless Function
 * This bypasses CORS issues and keeps keys secure.
 */
export async function savePilotEnquiry(enquiry: PilotEnquiry): Promise<{ success: boolean; error?: string; id?: string }> {
    try {
        const response = await fetch('/api/submit', {
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

        console.log('✅ Enquiry saved via Serverless Function:', data.id);
        return {
            success: true,
            id: data.id
        };

    } catch (error) {
        console.error('❌ Fetch Error:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Network error'
        };
    }
}
