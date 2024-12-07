import Link from "next/link"

export default function DashboardSidebar(){
    return(
        <div>
            <Link href="/SavedProperties">Your saved properties</Link>
            <Link href="/AppointmentCalendar">Your appointment calender</Link>
            <Link href="/MessageCenter">Messages</Link>
            <Link href="/PropertyAlerts">Your property alerts</Link>
        </div>
    )
}
