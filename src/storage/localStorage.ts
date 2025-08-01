export function getObjectFromLocalStorage<T>(key: string): T | undefined {
    const item: string | null = localStorage.getItem(key);
    if (item) {
        return JSON.parse(item) as T;
    }
    return undefined;
}
