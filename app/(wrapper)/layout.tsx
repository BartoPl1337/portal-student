import SidebarWrapper from "@/components/sidebar-wrapper";
import { redirect } from "next/navigation";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <SidebarWrapper>{children}</SidebarWrapper>;
}