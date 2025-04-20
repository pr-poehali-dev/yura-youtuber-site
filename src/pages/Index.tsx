import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import VideoCard from "@/components/VideoCard";
import SubscribeForm from "@/components/SubscribeForm";
import { Youtube, ChevronRight, Users, Video, Award, Play } from "lucide-react";

const Index = () => {
  // Данные для примера видео
  const featuredVideos = [
    {
      id: 1,
      thumbnail: "/placeholder.svg",
      title: "Как я набрал первую 1000 подписчиков за неделю",
      views: "12K просмотров",
      date: "2 недели назад"
    },
    {
      id: 2,
      thumbnail: "/placeholder.svg",
      title: "5 секретных фишек для начинающих ютуберов",
      views: "8.5K просмотров",
      date: "3 недели назад"
    },
    {
      id: 3,
      thumbnail: "/placeholder.svg",
      title: "Обзор лучшего оборудования для съемок в 2024 году",
      views: "15K просмотров",
      date: "1 месяц назад"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-20 hero-gradient text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <Youtube className="h-4 w-4 text-youtuber-red" />
              <span className="text-sm font-medium">Контент о том, как вести YouTube канал</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Добро пожаловать на канал <span className="text-youtuber-light animate-pulse-glow inline-block">SLYEED</span>
            </h1>
            
            <p className="text-lg text-white/80 mb-8">
              Здесь ты найдешь полезные советы, лайфхаки и руководства о том, как стать успешным ютубером и развивать свой канал
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-youtuber-red hover:bg-youtuber-red/90 text-white">
                Подписаться на канал
              </Button>
              <Button size="lg" variant="outline" className="bg-white/5 border-white/20 text-white hover:bg-white/10">
                Последние видео
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm text-white/70">Подписчиков</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">150+</div>
                <div className="text-sm text-white/70">Видео</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">1.2M</div>
                <div className="text-sm text-white/70">Просмотров</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                О канале <span className="text-youtuber">SLYEED</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                SLYEED - это канал о создании и продвижении YouTube контента. Я делюсь своим опытом и знаниями о том, как создавать качественные видео, привлекать аудиторию и монетизировать свой контент.
              </p>
              
              <div className="grid gap-4">
                <div className="flex gap-4 items-start">
                  <div className="bg-youtuber/10 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-youtuber" />
                  </div>
                  <div>
                    <h3 className="font-medium">Растущее сообщество</h3>
                    <p className="text-muted-foreground">Более 50 тысяч подписчиков и активное сообщество в комментариях</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-youtuber/10 p-3 rounded-lg">
                    <Video className="h-6 w-6 text-youtuber" />
                  </div>
                  <div>
                    <h3 className="font-medium">Регулярные выпуски</h3>
                    <p className="text-muted-foreground">Новые видео каждую неделю о YouTube, видеосъемке и монтаже</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-youtuber/10 p-3 rounded-lg">
                    <Award className="h-6 w-6 text-youtuber" />
                  </div>
                  <div>
                    <h3 className="font-medium">Проверенные методики</h3>
                    <p className="text-muted-foreground">Только работающие стратегии и проверенные на практике советы</p>
                  </div>
                </div>
              </div>
              
              <Button className="mt-8 bg-youtuber hover:bg-youtuber-dark text-white">
                Узнать больше
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden bg-gray-100">
                <img 
                  src="/placeholder.svg" 
                  alt="SLYEED Channel" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-youtuber-red/90 rounded-full p-4 cursor-pointer hover:bg-youtuber-red transition-colors">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Videos Section */}
      <section id="videos" className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Популярные видео
            </h2>
            <p className="text-lg text-muted-foreground">
              Посмотри наиболее популярные видео с моего канала и найди полезные советы для развития своего контента
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredVideos.map(video => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-youtuber hover:bg-youtuber-dark text-white">
              Смотреть все видео
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Subscribe Section */}
      <section id="subscribe" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Будь в курсе новых видео
              </h2>
              <p className="text-lg text-muted-foreground">
                Подпишись, чтобы получать уведомления о новых выпусках и эксклюзивных материалах
              </p>
            </div>
            
            <SubscribeForm />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-youtuber-dark text-white py-10">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <Youtube className="h-6 w-6 text-youtuber-red" />
              <span className="font-bold text-xl">SLYEED</span>
            </div>
            
            <div className="flex gap-6 mb-6 md:mb-0">
              <a href="#" className="text-white/80 hover:text-white">
                YouTube
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                Instagram
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                Twitter
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                TikTok
              </a>
            </div>
            
            <div className="text-white/60 text-sm">
              © 2024 SLYEED. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
