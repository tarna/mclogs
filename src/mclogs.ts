import { MCLOGS_API_BASE } from './constants';
import { CreatePasteResponse, InsightsResponse, StorageLimitsResponse } from './responses';

/**
 * The main class for interacting with the mclo.gs API
 */
export class MCLogs {
    /**
     * Create a new paste on mclo.gs
     * @param content The content of the log file
     * @returns {Promise<CreatePasteResponse>}
     * @example const data = await mclogs.create('Hello, world!');
     * console.log(data.url);
     */
    async create(content: string) {
        return await this.request<CreatePasteResponse>('/log', {
            method: 'POST',
            body: `content=${content}`,
            contentType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * Get the raw content of a paste
     * @param id The ID of the paste
     * @returns {Promise<string>}
     * @example const raw = await mclogs.getRaw('qLHAQBz');
     * console.log(raw);
     */
    async getRaw(id: string) {
        return await this.request<string>(`/raw/${id}`, {
            contentType: 'text/plain',
        });
    }

    /**
     * Get insights for a paste
     * @param id The ID of the paste
     * @returns {Promise<InsightsResponse>}
     * @example const insights = await mclogs.getInsights('bs47Bij');
     * console.log(insights.analysis);
     */
    async getInsights(id: string) {
        return await this.request<InsightsResponse>(`/insights/${id}`);
    }

    /**
     * Get storage limits for mclo.gs
     * @returns {Promise<StorageLimitsResponse>}
     * @example const limits = await mclogs.getStorageLimits();
     * console.log(limits);
     */
    async getStorageLimits() {
        return await this.request<StorageLimitsResponse>('/limits');
    }

    private async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
        const headers: Record<string, string> = {
            'Content-Type': options.contentType || 'application/json',
        };
    
        const body = options.contentType === 'application/x-www-form-urlencoded'
            ? options.body
            : JSON.stringify(options.body);
    
        return await fetch(`${MCLOGS_API_BASE}${endpoint}`, {
            method: options.method || 'GET',
            headers,
            body: options.body ? body : undefined,
        }).then(res => {
            if (options.contentType === 'text/plain') {
                return res.text() as Promise<T>;
            } else {
                return res.json() as Promise<T>;
            }
        });
    }
}

interface RequestOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: any;
    contentType?: 'application/json' | 'application/x-www-form-urlencoded' | 'text/plain';
}