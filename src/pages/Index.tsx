import { Header } from "@/components/Header";
import { ProfileSidebar } from "@/components/ProfileSidebar";
import { MainFeed } from "@/components/MainFeed";
import { NewsSidebar } from "@/components/NewsSidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Profile */}
          <div className="lg:col-span-3">
            <div className="sticky top-20">
              <ProfileSidebar />
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-6">
            <MainFeed />
          </div>
          
          {/* Right Sidebar - News & Events */}
          <div className="lg:col-span-3">
            <div className="sticky top-20">
              <NewsSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
