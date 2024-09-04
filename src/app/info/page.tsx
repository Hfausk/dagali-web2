import InfoCard from "@/components/infocard.tsx";
import picture from "@/../public/dagali-20240306-1.jpg";
export default function Page() {
    return (
      <main className="flex min-h-screen flex-row justify-between p-24">
        
        <div className=" bg-slate-200/25 w-full flex">
            <InfoCard source={picture} title="Cabin A"></InfoCard>
            <InfoCard source={picture} title="Cabin A"></InfoCard>
            <InfoCard source={picture} title="Cabin A"></InfoCard>

        </div>

      </main>
    );
  }