"use client"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LayoutDashboard, MessagesSquare, Megaphone, CalendarFold, GraduationCap, FolderOpen, MessageCircle, User, Settings, LogOut } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const nav = [
    {
        label: "Strona główna",
        href: "/",
        icon: <LayoutDashboard />
    },
    {
        label: "Forum",
        href: "/forum",
        icon: <MessagesSquare />
    },
    {
        label: "Ogłoszenia",
        href: "/announcements",
        icon: <Megaphone />
    },
    {
        label: "Kalendarz",
        href: "/calendar",
        icon: <CalendarFold />
    },
    {
        label: "Kursy",
        href: "/courses",
        icon: <GraduationCap />
    },
    {
        label: "Materiały",
        href: "/materials",
        icon: <FolderOpen />
    },
    {
        label: "Wiadomości",
        href: "/messages",
        icon: <MessageCircle />
    },
    {
        label: "Profil",
        href: "/profile",
        icon: <User />
    },
    {
        label: "Ustawienia",
        href: "/settings",
        icon: <Settings />
    },
]
export function AppSidebar() {
    const pathname = usePathname()

    const isActive = (url: string) => {
        if (url === "/") return pathname === url;
        return pathname.startsWith(url);
    };
    return (
        <Sidebar className="px-4 py-8">
            <SidebarHeader className="px-4">
                <h1 className="font-extrabold text-lg text-primary">Student Portal</h1>
                <h3 className="text-xs text-secondary font-bold">Informatyka</h3>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {nav.map((item) => {
                                const active = isActive(item.href);
                                return (
                                    <SidebarMenuItem key={item.label}>
                                        <SidebarMenuButton
                                            asChild
                                            className={cn(
                                                "group relative rounded-none transition-all px-4 py-3 font-medium text-xs",
                                                active
                                                    ? "bg-primary/10 text-primary font-bold shadow-sm border-r-2 border-primary hover:text-primary hover:bg-primary/10"
                                                    : "text-secondary hover:text-primary",
                                            )}
                                        >
                                            <Link href={item.href}>
                                                {item.icon}
                                                {item.label}
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <Separator className="my-8" />
            <SidebarFooter>
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <p className="text-sm font-bold">Jan Kowalski</p>
                            <span className="text-[10px] text-secondary">Semestr 5</span>
                        </div>
                    </div>
                    <Button variant="destructive">
                        <LogOut />
                        Wyloguj się
                    </Button>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}