import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';

const Index = () => {
  const weddingDate = new Date('2025-06-15T15:00:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: 'yes',
    guests: '1',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-peach-50">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/f74fddaf-2ebb-4d9e-9553-9a5d55c8499d/files/783605c5-741d-4aa6-87b9-b1ec76007544.jpg"
            alt="Александр и Екатерина"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 from-transparent via-white/30 to-white bg-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-7xl md:text-9xl font-light text-primary mb-4">Дмитрий & Татьяна</h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-12">
            Приглашаем вас разделить с нами самый счастливый день
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-primary/20 animate-scale-in">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary">{timeLeft.days}</div>
                <div className="text-sm text-muted-foreground mt-1">дней</div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm border-primary/20 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary">{timeLeft.hours}</div>
                <div className="text-sm text-muted-foreground mt-1">часов</div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm border-primary/20 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary">{timeLeft.minutes}</div>
                <div className="text-sm text-muted-foreground mt-1">минут</div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm border-primary/20 animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary">{timeLeft.seconds}</div>
                <div className="text-sm text-muted-foreground mt-1">секунд</div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary" />
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl text-primary mb-12 animate-slide-up">
            Наша история
          </h2>
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row items-center gap-8 animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Icon name="Heart" size={32} className="text-primary" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-2xl font-semibold mb-2">Первая встреча</h3>
                <p className="text-lg text-muted-foreground">
                  Весна 2020 года. Случайная встреча в кофейне изменила наши жизни навсегда.
                  Один взгляд — и мы поняли, что это судьба.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 rounded-full bg-secondary/30 flex items-center justify-center flex-shrink-0">
                <Icon name="Sparkles" size={32} className="text-secondary" />
              </div>
              <div className="flex-1 text-left md:text-right">
                <h3 className="text-2xl font-semibold mb-2">Предложение</h3>
                <p className="text-lg text-muted-foreground">
                  Декабрь 2024 года. На берегу моря, под звёздами, Александр сделал предложение,
                  от которого невозможно было отказаться.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-20 h-20 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                <Icon name="Rings" size={32} className="text-accent-foreground" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-2xl font-semibold mb-2">Свадьба</h3>
                <p className="text-lg text-muted-foreground">
                  15 июня 2025 года. Мы начинаем новую главу нашей жизни вместе,
                  и хотим разделить эту радость с вами!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl text-primary mb-16 text-center animate-slide-up">
            Детали торжества
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/80 backdrop-blur-sm border-primary/20 animate-scale-in">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Icon name="Calendar" size={40} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-3xl font-semibold mb-2">Дата и время</h3>
                    <p className="text-xl text-muted-foreground">15 июня 2025 года</p>
                    <p className="text-xl text-muted-foreground">Начало в 15:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-primary/20 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Icon name="MapPin" size={40} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-3xl font-semibold mb-2">Место проведения</h3>
                    <p className="text-xl text-muted-foreground">Усадьба «Лесная сказка»</p>
                    <p className="text-lg text-muted-foreground mt-2">
                      Московская область, Одинцовский район
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/90 backdrop-blur-sm border-primary/20 mb-12 animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                <Icon name="Map" size={32} className="text-primary" />
                Как добраться
              </h3>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=37.620393,55.753994&z=10"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="w-full h-full"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl text-primary mb-12 text-center animate-slide-up">
            Программа мероприятия
          </h2>

          <div className="space-y-6">
            {[
              { time: '15:00', title: 'Встреча гостей', desc: 'Приветственный фуршет и коктейли' },
              { time: '16:00', title: 'Церемония', desc: 'Торжественная регистрация брака' },
              { time: '17:00', title: 'Фотосессия', desc: 'Совместные фотографии на природе' },
              { time: '18:00', title: 'Банкет', desc: 'Праздничный ужин и поздравления' },
              { time: '20:00', title: 'Развлечения', desc: 'Музыка, танцы и веселье' },
              { time: '23:00', title: 'Торт и фейерверк', desc: 'Яркий финал вечера' }
            ].map((item, idx) => (
              <Card
                key={idx}
                className="bg-gradient-to-r from-white to-primary/5 border-primary/20 hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardContent className="p-6 flex items-center gap-6">
                  <div className="text-3xl font-bold text-primary w-24 flex-shrink-0">
                    {item.time}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-6xl text-primary mb-4 text-center animate-slide-up">
            Подтверждение присутствия
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12">
            Пожалуйста, подтвердите своё участие до 1 июня 2025 года
          </p>

          {submitted ? (
            <Card className="bg-white/90 backdrop-blur-sm border-primary/20 animate-scale-in">
              <CardContent className="p-12 text-center">
                <Icon name="CheckCircle" size={64} className="text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-semibold mb-2">Спасибо!</h3>
                <p className="text-lg text-muted-foreground">
                  Мы получили ваш ответ. С нетерпением ждём встречи!
                </p>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-white/90 backdrop-blur-sm border-primary/20 animate-fade-in">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-lg">Ваше имя *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="mt-2 text-lg"
                      placeholder="Иван Иванов"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-lg">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-2 text-lg"
                      placeholder="ivan@example.com"
                    />
                  </div>

                  <div>
                    <Label className="text-lg mb-3 block">Будете ли вы присутствовать? *</Label>
                    <RadioGroup
                      value={formData.attendance}
                      onValueChange={(value) => handleInputChange('attendance', value)}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="yes" id="yes" />
                        <Label htmlFor="yes" className="text-base cursor-pointer">
                          Да, с удовольствием!
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="no" id="no" />
                        <Label htmlFor="no" className="text-base cursor-pointer">
                          К сожалению, не смогу
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {formData.attendance === 'yes' && (
                    <div className="animate-fade-in">
                      <Label htmlFor="guests" className="text-lg">Количество гостей</Label>
                      <Input
                        id="guests"
                        type="number"
                        min="1"
                        max="5"
                        value={formData.guests}
                        onChange={(e) => handleInputChange('guests', e.target.value)}
                        className="mt-2 text-lg"
                      />
                    </div>
                  )}

                  <div>
                    <Label htmlFor="message" className="text-lg">Пожелания или комментарии</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="mt-2 text-base min-h-[120px]"
                      placeholder="Особые предпочтения в еде, вопросы или пожелания..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-lg py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Отправить подтверждение
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl text-primary mb-12 text-center animate-slide-up">
            Дополнительная информация
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 animate-scale-in">
              <CardContent className="p-8">
                <Icon name="Shirt" size={40} className="text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Дресс-код</h3>
                <p className="text-lg text-muted-foreground mb-3">
                  Коктейльный стиль
                </p>
                <p className="text-base text-muted-foreground">
                  Цветовая палитра: нежные пастельные тона — розовый, лавандовый, персиковый, кремовый.
                  Просим избегать белого цвета.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/10 to-accent/10 border-primary/20 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8">
                <Icon name="Phone" size={40} className="text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Контакты</h3>
                <div className="space-y-3 text-lg text-muted-foreground">
                  <p>
                    <strong>Александр:</strong><br />
                    +7 (900) 123-45-67
                  </p>
                  <p>
                    <strong>Екатерина:</strong><br />
                    +7 (900) 765-43-21
                  </p>
                  <p className="text-base mt-4">
                    По всем вопросам обращайтесь к координатору: Мария +7 (900) 555-55-55
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-gradient-to-r from-primary/20 to-secondary/20 text-center">
        <div className="max-w-2xl mx-auto">
          <Icon name="Heart" size={48} className="text-primary mx-auto mb-4" />
          <p className="text-2xl font-light mb-2">С любовью,</p>
          <p className="text-4xl font-semibold text-primary">Александр & Екатерина</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;