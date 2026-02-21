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

export const convertUTCToLocal = (utcISOString: string, isWithHour: boolean = true): string => {
    const date = new Date(utcISOString)
    const day = String(date.getDate()).padStart(2, "0")
    const month = date.toLocaleString("en-US", { month: "short" })
    const year = date.getFullYear()

    if (isWithHour) {
        const hours = String(date.getHours()).padStart(2, "0")
        const minutes = String(date.getMinutes()).padStart(2, "0")
        return `${day} ${month} ${year} ${hours}:${minutes}`
    }

    return `${day} ${month} ${year}`
}

export const convertUTCToLocalDateInput = (utcISOString: string): string => {
    const date = new Date(utcISOString)

    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")

    return `${year}-${month}-${day}`
}

export const convert24To12Hour = (time24: string): string => {
    const [hourStr, minute] = time24.split(":")
    const hour = Number(hourStr)
    const period = hour >= 12 ? "PM" : "AM"
    const hour12 = hour % 12 === 0 ? 12 : hour % 12
  
    return `${hour12}:${minute} ${period}`
}