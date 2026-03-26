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
        label: "KURSY",
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
        <Sidebar className="px-4">
            <SidebarHeader>
                <h1 className="font-extrabold text-lg text-primary">Student Portal</h1>
                <h3 className="text-[10px] text-secondary font-bold">Informatyka</h3>
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
                                            variant={active ? "default" : "outline"}
                                            size="default"
                                            className={cn(
                                                "group relative rounded-lg px-3 py-2.5 transition-all",
                                                active
                                                    ? "bg-primary/10 font-medium text-primary shadow-sm"
                                                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                                            )}
                                        >
                                            <a href={item.href} className="font-medium text-xs text-secondary flex items-center gap-2">
                                                {item.icon}
                                                {item.label}
                                            </a>
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
                    <Button variant="destructive" className="bg-">
                        <LogOut />
                        Wyloguj się
                    </Button>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}