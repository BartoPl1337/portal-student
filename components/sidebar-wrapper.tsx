import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./app-sidebar";

const SidebarWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<SidebarProvider>
			<AppSidebar />
				<main>
					{/* <SidebarTrigger /> */}
					{children}
				</main>
		</SidebarProvider>
	);
};

export default SidebarWrapper;