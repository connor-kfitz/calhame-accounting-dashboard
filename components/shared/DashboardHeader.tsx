interface DashboardHeaderProps {
  title: string;
  description: string;
}
 
 export default function DashboardHeader({ title, description }: DashboardHeaderProps) {
   return (
     <div className="mb-6">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {description}
      </p>
     </div>
   );
 }
 