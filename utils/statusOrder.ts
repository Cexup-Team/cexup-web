export function getStatus(order) {
    // const split = value.split("_")
    // let string = ""
    // for (let i = 0; i < split.length; i++) {
    //     string += " "+split[i].charAt(0).toUpperCase() + split[i].slice(1);
    // }

    // return string.trim()


    if (order == null) return "Unknown";
    if (order == "waiting_meeting") return "Waiting meeting";
    if (order == "start_meeting") return "Start meeting";
    if (order == "join_now") return "Start meeting";
    if (order == "waiting_doctor_confirmation") return "Waiting doctor confirmation";
    if (order == "waiting_payment") return "Waiting payment";
    if (order == "waiting_patient_join") return "Waiting patient join";
    if (order == "waiting_doctor_join") return "Waiting doctor join";
    if (order == "reschedule_from_doctor") return "Reschedule by doctor";
    if (order == "reschedule_from_patient") return "Reschedule by patient";
    if (order == "waiting_refund") return "Waiting refund";
    if (order == "missed_meeting") return "Missed meeting";
    if (order == "on_air") return "On air";
    if (order == "order_failed") return "Order failed";
    if (order == "order_cancel") return "Order cancel";
    if(order == "done")return "Finish";

}

