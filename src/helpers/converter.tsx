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
    })
}

export const convertUTCToLocal = (utcISOString: string): string => {
    const date = new Date(utcISOString)

    const day = String(date.getDate()).padStart(2, "0")
    const month = date.toLocaleString("en-US", { month: "short" })
    const year = date.getFullYear()
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")

    return `${day} ${month} ${year} ${hours}:${minutes}`
}

export const convertUTCToLocalDateInput = (utcISOString: string): string => {
    const date = new Date(utcISOString)

    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")

    return `${year}-${month}-${day}`
}
