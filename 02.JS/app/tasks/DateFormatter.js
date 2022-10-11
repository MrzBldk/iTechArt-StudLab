//TASK 4

class DateFormatter {

    #YYYY
    #date
    
    constructor(date, format = "YYYYMMDD", outputFormat = "DD-MM-YYYY") {

        if (typeof format != 'string' || typeof outputFormat != 'string') throw new TypeError('Formats must be strings')

        if (typeof date == 'number') {

            let dateObj = new Date(date)
            let YYYY = dateObj.getFullYear()
            let MM = (dateObj.getMonth() + 1).toString().padStart(2, '0')
            let DD = (dateObj.getDate()).toString().padStart(2, '0')
            outputFormat = outputFormat.replace('YYYY', YYYY).replace('MM', MM).replace('DD', DD)

            this.#YYYY = YYYY
        }
        else if (typeof date == 'string') {
            let YYYYPos = format.indexOf("YYYY")
            let MMPos = format.indexOf("MM")
            let DDPos = format.indexOf("DD")

            let YYYY = date.substring(YYYYPos, YYYYPos + 4)
            let MM = date.substring(MMPos, MMPos + 2)
            let DD = date.substring(DDPos, DDPos + 2)

            if (isNaN(YYYY) || isNaN(MM) || isNaN(DD)) throw Error('Wrong date format')

            outputFormat = outputFormat.replace('YYYY', YYYY).replace('MM', MM).replace('DD', DD)
            this.#YYYY = +YYYY
        }
        else {
            throw new TypeError('Date must me number or string')
        }

        this.#date = outputFormat
    }

    get date() {
        return this.#date
    }

    fromNow() {
        return `${new Date().getFullYear() - this.#YYYY} years from now`
    }
}

module.exports = DateFormatter