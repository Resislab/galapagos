export const useTabName = (tabName: string) => {
    const titlePrefix = "Galapagos | ";
    document.title = `${titlePrefix} ${tabName}`;
};
