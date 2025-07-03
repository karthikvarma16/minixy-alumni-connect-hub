import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, TrendingUp, Clock, Users, Gamepad2 } from "lucide-react";

export function NewsSidebar() {
  return (
    <div className="space-y-4">
      {/* Minixy News */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            Minixy News
            <TrendingUp className="h-4 w-4 ml-2 text-primary" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium text-sm">Top stories</h4>
            
            <div className="space-y-3">
              <div className="group cursor-pointer">
                <h5 className="text-sm font-medium group-hover:text-primary transition-colors">
                  Microsoft expands internship programs
                </h5>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <Clock className="h-3 w-3 mr-1" />
                  2h ago • 2,157 readers
                </div>
              </div>
              
              <div className="group cursor-pointer">
                <h5 className="text-sm font-medium group-hover:text-primary transition-colors">
                  TCS launches new graduate training
                </h5>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <Clock className="h-3 w-3 mr-1" />
                  4h ago • 1,842 readers
                </div>
              </div>
              
              <div className="group cursor-pointer">
                <h5 className="text-sm font-medium group-hover:text-primary transition-colors">
                  AI startup funding hits record high
                </h5>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <Clock className="h-3 w-3 mr-1" />
                  6h ago • 3,204 readers
                </div>
              </div>
              
              <div className="group cursor-pointer">
                <h5 className="text-sm font-medium group-hover:text-primary transition-colors">
                  Remote work trends in tech industry
                </h5>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <Clock className="h-3 w-3 mr-1" />
                  8h ago • 1,567 readers
                </div>
              </div>
              
              <div className="group cursor-pointer">
                <h5 className="text-sm font-medium group-hover:text-primary transition-colors">
                  Campus placement statistics 2024
                </h5>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <Clock className="h-3 w-3 mr-1" />
                  12h ago • 4,123 readers
                </div>
              </div>
            </div>
            
            <Button variant="ghost" size="sm" className="w-full text-muted-foreground justify-between">
              Show more
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Today's Career Quiz */}
      <Card className="bg-gradient-to-br from-primary/5 to-network-accent/5 border-primary/20">
        <CardContent className="p-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Gamepad2 className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-sm">Today's Career Quiz</h4>
                <p className="text-xs text-muted-foreground">Test your industry knowledge</p>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-3 border">
              <h5 className="font-medium text-sm mb-2">Software Engineering - Quick Assessment</h5>
              <p className="text-xs text-muted-foreground mb-3">
                Evaluate your coding skills in 5 minutes or less!
              </p>
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs">
                  Score is private to you
                </Badge>
                <Button size="sm" variant="outline">
                  Start Quiz
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alumni Spotlight */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            Alumni Spotlight
            <Users className="h-4 w-4 ml-2 text-network-accent" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                AS
              </div>
              <div className="flex-1">
                <h5 className="font-medium text-sm">Arjun Singh</h5>
                <p className="text-xs text-muted-foreground">Principal Engineer at Google</p>
                <Badge className="text-xs mt-1">Class of 2015</Badge>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-network-accent rounded-full flex items-center justify-center text-white font-semibold text-sm">
                NK
              </div>
              <div className="flex-1">
                <h5 className="font-medium text-sm">Neha Kapoor</h5>
                <p className="text-xs text-muted-foreground">Data Scientist at Amazon</p>
                <Badge className="text-xs mt-1">Class of 2017</Badge>
              </div>
            </div>
          </div>
          
          <Button variant="outline" size="sm" className="w-full">
            View All Alumni
          </Button>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <div className="p-3 rounded-lg border border-success/20 bg-success/5">
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-xs font-medium text-success">Tomorrow</span>
              </div>
              <h5 className="font-medium text-sm">Career Guidance Workshop</h5>
              <p className="text-xs text-muted-foreground">by Industry Experts</p>
            </div>
            
            <div className="p-3 rounded-lg border border-warning/20 bg-warning/5">
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-2 h-2 bg-warning rounded-full"></div>
                <span className="text-xs font-medium text-warning">This Week</span>
              </div>
              <h5 className="font-medium text-sm">Alumni Networking Mixer</h5>
              <p className="text-xs text-muted-foreground">Virtual Event</p>
            </div>
          </div>
          
          <Button variant="ghost" size="sm" className="w-full text-primary">
            View All Events
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}