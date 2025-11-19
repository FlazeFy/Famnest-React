export const isInclude = ( arr: (string | Record<string, any>)[], target: string, key?: string): boolean => {
    if (!Array.isArray(arr)) return false
  
    return arr.some((item) => {
        if (typeof item === 'string') {
            return item === target
        }
        if (typeof item === 'object' && key) {
            return item[key] === target
        }
        return false
    });
};