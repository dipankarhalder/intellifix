import { Sidebar } from "@/components/comCommon/sidebar";

export default function PrivateLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full gap-4 bg-[#F7F8FA]">
      <Sidebar />
      <div className="w-full">{children}</div>
    </div>
  );
}