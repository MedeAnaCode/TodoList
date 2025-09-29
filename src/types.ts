export const FILTERS = ['all', 'active', 'done'] as const;
export type FilterPattern = typeof FILTERS[number];

export interface Task {
    id: string;
    text: string;
    done: boolean;
}
