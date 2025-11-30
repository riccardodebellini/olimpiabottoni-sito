import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function OrgChart() {
    const orgData = {
        president: {
            role: "Presidente",
            name: "Riccardo Debellini",
        },
        vicePresident: {
            role: "Vicepresidente",
            name: "Margherita Audino",
        },
        areas: [
            { role: "Area Media", lead: "Martina Pedoto" },
            { role: "Area Marketing", lead: "Lorenzo Sassano" },
            { role: "Area CSR Energia", lead: "Marta Cattaneo" },
            { role: "Area CSR Sociale", lead: "Kristian Boncato" },
            { role: "Area Ticketing", lead: "Sofia Guarino" },
            { role: "Area Sportiva", lead: "Pietro e Lara" },
        ],
    };

    const OrgCard = ({ title, subtitle }: { title: string; subtitle?: string }) => (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-primary">{title}</CardTitle>
                {subtitle && (
                    <CardDescription className="text-md font-semibold text-muted-foreground">
                        {subtitle}
                    </CardDescription>
                )}
            </CardHeader>
        </Card>
    );

    return (
        <div className="min-h-screen w-full flex flex-col items-center pt-16 px-8 md:pt-8">

            {/* President */}
            <OrgCard title={orgData.president.role} subtitle={orgData.president.name} />

            <div className='h-8'/>

            {/* Vice President */}
            <OrgCard title={orgData.vicePresident.role} subtitle={orgData.vicePresident.name}  />

            <div className='h-8'/>

            {/* Areas grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 w-full mt-8">
                {orgData.areas.map((area, index) => (
                    <OrgCard key={index} title={area.role} subtitle={area.lead} />
                ))}
            </div>
        </div>
    );
}

export default OrgChart;
