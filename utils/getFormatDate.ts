export function formatDate(date) {
   const split = date.split("-")
   const format = `${split[2]} ${nameMonth(Number(split[1] - 1))} ${split[0]}`

   return format
      
}

export function nameMonth(month){
    const name = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    return name[month];
}

export function selectSafeZero(date){
    const slcDate = new Date(date)
    const day = slcDate.getDate() < 10 ? `0${slcDate.getDate()}` : slcDate.getDate()
    const month = slcDate.getMonth() + 1 < 10 ? `0${slcDate.getMonth()+1}` : slcDate.getMonth()+1
    const year = slcDate.getFullYear()
    const result = `${year}-${month}-${day}`
    return result
} 


export function nameDay(date) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date(date);
    let dayName = days[d.getDay()];
    return dayName
}

export const getDateFormatBooking = (value, time?) => {
    const newDate = new Date(value)
    const day = nameDay(value)
    const date = newDate.getDate()
    const month = nameMonth(newDate.getMonth())
    const year = newDate.getFullYear()

    const format = `${day}, ${date} ${month} ${year} ${time ?? ''}`
    return format
}

export const getFormatNotifDate = (timestamp) => {
    const date = new Date(timestamp * 1000)

    return `${nameDay(date)}, ${date.getDate()} ${nameMonth(date.getMonth())} ${date.getFullYear()} / ${date.getHours()}:${date.getMinutes()}`
} 

export const getFormatHealthDate = (timestamp) => {
    const date = new Date(timestamp)
    return `${date.getDate()} ${nameMonth(date.getMonth())} ${date.getFullYear().toString().slice(2)} / ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`
} 