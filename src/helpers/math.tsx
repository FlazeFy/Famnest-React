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