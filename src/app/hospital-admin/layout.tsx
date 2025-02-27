import DashboardLayout from "@/components/dashboard-layout";

export default function HospitalAdminLayout ({children}: {children: React.ReactNode}) {
    return (
        <DashboardLayout>{children}</DashboardLayout>
    )
}