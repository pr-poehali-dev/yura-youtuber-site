import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell } from "lucide-react";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Здесь можно добавить логику отправки email
      setEmail("");
    }
  };
  
  return (
    <div className="rounded-xl bg-youtuber-light/50 p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <Bell className="h-6 w-6 text-youtuber" />
        <h3 className="text-xl font-semibold">Получай уведомления о новых видео</h3>
      </div>
      
      {isSubmitted ? (
        <div className="py-6 text-center">
          <h4 className="text-lg font-medium">Спасибо за подписку!</h4>
          <p className="text-muted-foreground mt-2">
            Ты будешь получать уведомления о новых видео SLYEED.
          </p>
          <Button 
            className="mt-4"
            onClick={() => setIsSubmitted(false)}
          >
            Подписаться с другим email
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-3">
            <Input
              type="email"
              placeholder="Твой email"
              className="bg-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit"
              className="bg-youtuber hover:bg-youtuber-dark text-white"
            >
              Подписаться
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Нажимая кнопку «Подписаться», ты соглашаешься с политикой конфиденциальности
          </p>
        </form>
      )}
    </div>
  );
};

export default SubscribeForm;
