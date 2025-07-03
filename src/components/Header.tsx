import { Search, Home, Users, Briefcase, MessageSquare, Bell, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  return (
    <header className="bg-card shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo and Search */}
          <div className="flex items-center space-x-4 flex-1">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">m</span>
              </div>
              <span className="text-xl font-semibold text-foreground hidden sm:block">minixy</span>
            </div>
            
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search alumni, students, opportunities..."
                className="pl-10 bg-muted/50 border-muted focus:bg-background"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1 mx-8">
            <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 h-12 px-4">
              <Home className="h-5 w-5" />
              <span className="text-xs">Home</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 h-12 px-4">
              <Users className="h-5 w-5" />
              <span className="text-xs">Network</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 h-12 px-4">
              <Briefcase className="h-5 w-5" />
              <span className="text-xs">Jobs</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 h-12 px-4">
              <MessageSquare className="h-5 w-5" />
              <span className="text-xs">Messaging</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 h-12 px-4 relative">
              <Bell className="h-5 w-5" />
              <span className="text-xs">Notifications</span>
              <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs bg-destructive">3</Badge>
            </Button>
          </nav>

          {/* Profile and Menu */}
          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 h-12 px-4">
                  <User className="h-5 w-5" />
                  <span className="text-xs hidden sm:block">Me</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>View Profile</DropdownMenuItem>
                <DropdownMenuItem>Account Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Help Center</DropdownMenuItem>
                <DropdownMenuItem>Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}