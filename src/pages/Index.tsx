import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 transition-all duration-300" 
           style={{ 
             backgroundColor: scrollY > 50 ? 'rgba(255, 240, 245, 0.95)' : 'transparent',
             backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none'
           }}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            PhotoArt
          </h1>
          <div className="hidden md:flex gap-8">
            {['Главная', 'О мне', 'Услуги', 'Портфолио', 'Видео', 'Блог', 'Контакты'].map((item, idx) => (
              <button 
                key={idx}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="hover:text-primary transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="главная" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/files/e2693b27-61f2-4dc5-935b-0870b280378c.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="absolute inset-0 bg-background/40"></div>
        <div className="container mx-auto px-6 z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-6xl md:text-7xl font-bold leading-tight">
                Ваши моменты в
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"> искусстве</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Профессиональная фотография с душой. Превращаю мгновения в вечные воспоминания.
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => scrollToSection('портфолио')}
                >
                  Портфолио
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('контакты')}
                >
                  Связаться
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary blur-3xl opacity-30 animate-float"></div>
              <img 
                src="https://cdn.poehali.dev/projects/fcb69013-aa86-4b95-bea6-518588ae13db/files/313aa72f-9918-4b72-8f39-084afc6d176b.jpg"
                alt="Hero" 
                className="rounded-2xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="о-мне" className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-5xl font-bold mb-8">О мне</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Я профессиональный фотограф с более чем 10-летним опытом работы. Моя страсть — создавать 
              визуальные истории, которые вызывают эмоции и сохраняют важные моменты вашей жизни. 
              Каждый проект для меня — это возможность создать что-то уникальное и особенное.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-12">
              {[
                { icon: 'Award', number: '500+', text: 'Проектов' },
                { icon: 'Users', number: '300+', text: 'Клиентов' },
                { icon: 'Star', number: '50+', text: 'Наград' }
              ].map((stat, idx) => (
                <Card key={idx} className="bg-background/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                  <CardContent className="pt-6 text-center">
                    <Icon name={stat.icon} className="mx-auto mb-4 text-primary" size={48} />
                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-muted-foreground">{stat.text}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in">Услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Портретная съемка',
                description: 'Индивидуальные и семейные портреты. Создаю естественные и выразительные образы.',
                icon: 'Camera',
                color: 'from-purple to-primary'
              },
              {
                title: 'Event фотография',
                description: 'Съемка мероприятий, свадеб, корпоративов. Сохраню атмосферу и эмоции вашего события.',
                icon: 'PartyPopper',
                color: 'from-secondary to-magenta'
              },
              {
                title: 'Предметная съемка',
                description: 'Коммерческая съемка продукции для каталогов, интернет-магазинов и рекламы.',
                icon: 'Package',
                color: 'from-orange to-accent'
              }
            ].map((service, idx) => (
              <Card 
                key={idx}
                className="group bg-card/80 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardContent className="pt-8 space-y-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={service.icon} className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <Button variant="ghost" className="mt-4 group-hover:text-primary">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in">Портфолио</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: 'https://cdn.poehali.dev/projects/fcb69013-aa86-4b95-bea6-518588ae13db/files/313aa72f-9918-4b72-8f39-084afc6d176b.jpg', title: 'Портрет' },
              { img: 'https://cdn.poehali.dev/projects/fcb69013-aa86-4b95-bea6-518588ae13db/files/3d2d8d5f-d9a7-4270-ae35-3a1027de9726.jpg', title: 'Событие' },
              { img: 'https://cdn.poehali.dev/projects/fcb69013-aa86-4b95-bea6-518588ae13db/files/036d7bc3-c551-4307-b25c-e7d9e46a55f4.jpg', title: 'Продукция' },
              { img: 'https://cdn.poehali.dev/projects/fcb69013-aa86-4b95-bea6-518588ae13db/files/313aa72f-9918-4b72-8f39-084afc6d176b.jpg', title: 'Стиль' },
              { img: 'https://cdn.poehali.dev/projects/fcb69013-aa86-4b95-bea6-518588ae13db/files/3d2d8d5f-d9a7-4270-ae35-3a1027de9726.jpg', title: 'Эмоции' },
              { img: 'https://cdn.poehali.dev/projects/fcb69013-aa86-4b95-bea6-518588ae13db/files/036d7bc3-c551-4307-b25c-e7d9e46a55f4.jpg', title: 'Детали' }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
              >
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="видео" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in">Видео</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/80 backdrop-blur border-primary/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon name="Play" size={64} className="text-primary" />
                </div>
              </CardContent>
            </Card>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {[1, 2, 3].map((_, idx) => (
                <Card key={idx} className="bg-card/80 backdrop-blur border-primary/20 overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                      <Icon name="Play" size={32} className="text-secondary" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="блог" className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in">Блог</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '10 советов для идеальной фотосессии', date: '15 ноября 2024' },
              { title: 'Как подготовиться к портретной съемке', date: '8 ноября 2024' },
              { title: 'Тренды в event фотографии 2024', date: '1 ноября 2024' }
            ].map((post, idx) => (
              <Card 
                key={idx}
                className="group bg-card/80 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <CardContent className="pt-6 space-y-4">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg"></div>
                  <div className="text-sm text-muted-foreground">{post.date}</div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{post.title}</h3>
                  <Button variant="ghost" className="p-0 group-hover:text-primary">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in">Контакты</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Свяжитесь со мной</h3>
                <p className="text-muted-foreground">
                  Готов обсудить ваш проект и воплотить ваши идеи в жизнь
                </p>
              </div>
              {[
                { icon: 'Mail', text: 'photo@example.com' },
                { icon: 'Phone', text: '+7 (999) 123-45-67' },
                { icon: 'MapPin', text: 'Москва, Россия' }
              ].map((contact, idx) => (
                <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Icon name={contact.icon} className="text-primary" size={24} />
                  </div>
                  <span className="text-lg group-hover:text-primary transition-colors">{contact.text}</span>
                </div>
              ))}
              <div className="flex gap-4 pt-4">
                {['Instagram', 'Facebook', 'Linkedin'].map((social, idx) => (
                  <div 
                    key={idx}
                    className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  >
                    <Icon name={social} size={20} />
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-card/80 backdrop-blur border-primary/20">
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" className="bg-background/50" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" className="bg-background/50" />
                  </div>
                  <div>
                    <Textarea placeholder="Сообщение" rows={5} className="bg-background/50" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2024 PhotoArt. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;