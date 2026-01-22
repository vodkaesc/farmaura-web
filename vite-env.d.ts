/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly GEMINI_API_KEY: string;
    readonly VITE_COSMOS_DB_URI: string;
    readonly VITE_COSMOS_DB_KEY: string;
    readonly VITE_COSMOS_CONNECTION_STRING: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

declare module "*.pdf" {
    const content: string;
    export default content;
}
