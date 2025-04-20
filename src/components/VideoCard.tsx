import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

type VideoCardProps = {
  thumbnail: string;
  title: string;
  views: string;
  date: string;
}

const VideoCard = ({ thumbnail, title, views, date }: VideoCardProps) => {
  return (
    <Card className="video-card border-none overflow-hidden bg-transparent">
      <CardContent className="p-0">
        <div className="relative group">
          <img 
            src={thumbnail || "/placeholder.svg"} 
            alt={title} 
            className="w-full aspect-video object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
            <div className="bg-youtuber-red/90 rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform">
              <Play className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
        
        <div className="mt-3">
          <h3 className="font-semibold text-base line-clamp-2">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{views} • {date}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
