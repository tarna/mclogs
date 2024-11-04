export interface CreatePasteResponse {
    success: boolean;
    error?: string;
    id: string;
    url: string;
    raw: string;
}

export interface InsightsResponse {
    id: string;
    name: string;
    type: string;
    version: string;
    title: string;
    analysis: {
        problems: {
            message: string;
            counter: number;
            entry: {
                level: number;
                time: number | null;
                prefix: string;
                lines: {
                    number: number;
                    content: string;
                }[];
            };
            solutions: {
                message: string;
            }[];
        }[];
        information: {
            message: string;
            counter: number;
            label: string;
            entry: {
                level: number;
                time: number | null;
                prefix: string;
                lines: {
                    number: number;
                    content: string;
                }[];
            }
        }[];
    }
}

export interface StorageLimitsResponse {
    storageTime: number;
    maxLength: number;
    maxLines: number;
}