export const numberFormat = (number: number, decimals: number, dec_point: string, thousands_sep: string) => {
    if (number >= 1000) {
        const formatted = (number / 1000).toFixed(decimals)
        let numberStr = formatted.toString()
    
        let nstr = numberStr.split('.')
        let x1 = nstr[0]
        let x2 = nstr.length > 1 ? dec_point + nstr[1] : ''
        
        let rgx = /(\d+)(\d{3})/
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + thousands_sep + '$2')
        }
    
        return x1 + x2 + 'K'
    }
    
    return number.toFixed(decimals)
}

export const getAgeFromBornDate = (bornDate: string | Date): number => {
    const birth = new Date(bornDate)
    const today = new Date()
    
    let age = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()
    const dayDiff = today.getDate() - birth.getDate()
  
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--
    }
  
    return age
  }
  