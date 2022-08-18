export function formatDate(date) {
   const split = date.split("-")
   const format = `${split[2]} ${nameMonth(Number(split[1]))} ${split[0]}`

   return format
      
}

function nameMonth(month){
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