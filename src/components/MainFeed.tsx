import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  Video, 
  Image as ImageIcon, 
  FileText, 
  Calendar,
  ThumbsUp, 
  MessageSquare, 
  Share2, 
  Send,
  Briefcase,
  Users,
  Clock,
  MapPin,
  ExternalLink
} from "lucide-react";

export function MainFeed() {
  return (
    <div className="space-y-6">
      {/* Create Post */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground">KM</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea 
                placeholder="Share an update, ask for advice, or post an opportunity..."
                className="min-h-[60px] resize-none border-0 bg-muted/50 focus:bg-background"
              />
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm" className="text-primary">
                    <Video className="h-4 w-4 mr-2" />
                    Video
                  </Button>
                  <Button variant="ghost" size="sm" className="text-network-accent">
                    <ImageIcon className="h-4 w-4 mr-2" />
                    Photo
                  </Button>
                  <Button variant="ghost" size="sm" className="text-warning">
                    <FileText className="h-4 w-4 mr-2" />
                    Article
                  </Button>
                  <Button variant="ghost" size="sm" className="text-destructive">
                    <Calendar className="h-4 w-4 mr-2" />
                    Event
                  </Button>
                </div>
                <Button size="sm">
                  <Send className="h-4 w-4 mr-2" />
                  Post
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sort Options */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Recent Updates</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <Button variant="ghost" size="sm" className="text-primary font-medium">
            Top
          </Button>
        </div>
      </div>

      {/* Job Opportunity Post */}
      <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarFallback className="bg-network-accent text-white">PS</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h4 className="font-semibold">Priya Sharma</h4>
                <Badge className="text-xs">Alumni '19</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Software Engineer at Microsoft • 2nd</p>
              <p className="text-xs text-muted-foreground flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                3h ago
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-3">
            <p className="text-sm leading-relaxed">
              🚀 Exciting opportunity alert! We're hiring for a Software Development Intern position at Microsoft. 
              Perfect for final year students looking to kickstart their career in tech.
            </p>
            
            <Card className="bg-muted/30 border-primary/20">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-primary">Software Development Intern</h5>
                    <p className="text-sm text-muted-foreground">Microsoft • Hyderabad, India</p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                      <span>6 months</span>
                      <span>₹40,000/month</span>
                      <span>Remote friendly</span>
                    </div>
                    <Button size="sm" className="mt-3">
                      Apply Now
                      <ExternalLink className="h-3 w-3 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  24 likes
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  8 comments
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mentorship Request */}
      <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarFallback className="bg-warning text-warning-foreground">RK</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h4 className="font-semibold">Rahul Kumar</h4>
                <Badge variant="secondary" className="text-xs">Final Year</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Computer Science Student • AIET</p>
              <p className="text-xs text-muted-foreground flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                5h ago
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-3">
            <p className="text-sm leading-relaxed">
              Looking for mentorship from alumni working in Data Science/ML. I'm particularly interested in 
              understanding the career transition from academia to industry. Any guidance would be appreciated! 🙏
            </p>
            
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-xs">#DataScience</Badge>
              <Badge variant="outline" className="text-xs">#MachineLearning</Badge>
              <Badge variant="outline" className="text-xs">#Mentorship</Badge>
              <Badge variant="outline" className="text-xs">#CareerAdvice</Badge>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  12 likes
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  5 comments
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
              <Button size="sm" variant="outline">
                <Users className="h-4 w-4 mr-2" />
                Offer Mentorship
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Event Announcement */}
      <Card className="hover:shadow-md transition-shadow border-success/20 bg-success/5">
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarFallback className="bg-success text-success-foreground">AD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h4 className="font-semibold">Alumni Department</h4>
                <Badge className="text-xs bg-success">Official</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Avanthi Institute of Engineering & Technology</p>
              <p className="text-xs text-muted-foreground flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                1d ago
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-3">
            <h5 className="font-semibold text-lg">🎯 Tech Industry AMA Session</h5>
            <p className="text-sm leading-relaxed">
              Join us for an exclusive Ask Me Anything session with our distinguished alumni working at top tech companies. 
              Get insights about career growth, industry trends, and interview preparations.
            </p>
            
            <div className="bg-card rounded-lg p-4 border">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-primary" />
                  <span>Dec 28, 2024 • 7:00 PM</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  <span>Virtual Event</span>
                </div>
              </div>
              <Button size="sm" className="mt-3 w-full">
                Register Now
              </Button>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  56 likes
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  15 comments
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}