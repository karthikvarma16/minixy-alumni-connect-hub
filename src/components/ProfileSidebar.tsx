import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Bookmark, Calendar, Star } from "lucide-react";

export function ProfileSidebar() {
  return (
    <div className="space-y-4">
      {/* Profile Card */}
      <Card className="overflow-hidden">
        <div className="h-16 bg-gradient-to-r from-primary to-primary-hover"></div>
        <CardContent className="pt-0 pb-4">
          <div className="flex flex-col items-center -mt-8">
            <Avatar className="h-16 w-16 border-4 border-background">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
                KM
              </AvatarFallback>
            </Avatar>
            <h3 className="mt-2 font-semibold text-center">Karthik Malyala</h3>
            <p className="text-sm text-muted-foreground text-center px-2">
              Computer Science Student at Avanthi Institute of Engineering & Technology
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="secondary" className="text-xs">
                <Star className="h-3 w-3 mr-1" />
                Premium Student
              </Badge>
            </div>
          </div>
          
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Profile views</span>
              <span className="font-medium text-primary">47</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Network connections</span>
              <span className="font-medium text-primary">124</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Access */}
      <Card>
        <CardContent className="p-4">
          <div className="space-y-3">
            <Button variant="ghost" className="w-full justify-start h-auto p-2">
              <Users className="h-4 w-4 mr-3" />
              <div className="text-left">
                <div className="font-medium text-sm">Connections</div>
                <div className="text-xs text-muted-foreground">Connect with alumni</div>
              </div>
            </Button>
            
            <Button variant="ghost" className="w-full justify-start h-auto p-2">
              <Bookmark className="h-4 w-4 mr-3" />
              <div className="text-left">
                <div className="font-medium text-sm">Saved items</div>
                <div className="text-xs text-muted-foreground">Jobs & opportunities</div>
              </div>
            </Button>
            
            <Button variant="ghost" className="w-full justify-start h-auto p-2">
              <Calendar className="h-4 w-4 mr-3" />
              <div className="text-left">
                <div className="font-medium text-sm">Events</div>
                <div className="text-xs text-muted-foreground">Workshops & AMAs</div>
              </div>
            </Button>
          </div>
          
          <div className="mt-4 pt-3 border-t">
            <Button variant="outline" size="sm" className="w-full">
              Try Premium for ₹0
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardContent className="p-4">
          <h4 className="font-medium mb-3">Recent Activity</h4>
          <div className="space-y-2">
            <div className="text-sm">
              <p className="text-muted-foreground">You viewed</p>
              <p className="font-medium">Software Engineering at TCS</p>
            </div>
            <div className="text-sm">
              <p className="text-muted-foreground">You connected with</p>
              <p className="font-medium">Priya Sharma (Alumni '19)</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}