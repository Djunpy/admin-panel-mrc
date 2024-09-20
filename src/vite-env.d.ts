/// <reference types="vite/client" />

// Расширяем объект import.meta
interface ImportMetaEnv {
	readonly VITE_GATEWAY_URL: string
	readonly VITE_APP_VERSION: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
