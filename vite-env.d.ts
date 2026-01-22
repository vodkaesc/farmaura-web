/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly GEMINI_API_KEY: string;
    readonly VITE_COSMOS_DB_URI: string;
    readonly VITE_COSMOS_DB_KEY: string;
    readonly VITE_COSMOS_CONNECTION_STRING: string;
    readonly VITE_API_URL: string;
    readonly VITE_EMAILJS_SERVICE_ID: string;
    readonly VITE_EMAILJS_TEMPLATE_ID: string;
    readonly VITE_EMAILJS_PUBLIC_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

declare module "*.pdf" {
    const content: string;
    export default content;
}
