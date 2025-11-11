import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-secondary/20">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Mushroom" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">ГрибДар</span>
            </div>
            <div className="hidden md:flex gap-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'О нас' },
                { id: 'services', label: 'Услуги' },
                { id: 'reviews', label: 'Отзывы' },
                { id: 'contacts', label: 'Контакты' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-lg font-medium transition-colors ${
                    activeSection === item.id ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Премиальные сушеные грибы от природы к вам
              </h1>
              <p className="text-xl text-muted-foreground">
                Натуральные лесные грибы высшего качества. Собраны вручную, высушены по традиционной технологии.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Заказать сейчас
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('about')}>
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/ccb437d9-e219-4e14-a771-35d716a761a8/files/c7d32a9f-6693-42f2-9539-a7469b48e648.jpg" 
                alt="Сушеные грибы" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">О нас</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы — семейное предприятие с многолетним опытом сбора и заготовки лесных грибов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Leaf', title: '100% натуральные', desc: 'Только дикорастущие грибы из экологически чистых лесов' },
              { icon: 'Award', title: 'Высшее качество', desc: 'Каждый гриб проходит тщательный отбор и контроль' },
              { icon: 'Heart', title: 'С любовью', desc: 'Традиционные методы сушки сохраняют аромат и пользу' }
            ].map((item, i) => (
              <Card key={i} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Наша продукция</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент сушеных грибов на любой вкус
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Белые грибы', price: '1200₽', weight: '100г', icon: 'Star' },
              { name: 'Лисички', price: '800₽', weight: '100г', icon: 'Sparkles' },
              { name: 'Подберёзовики', price: '600₽', weight: '100г', icon: 'TreeDeciduous' },
              { name: 'Опята', price: '500₽', weight: '100г', icon: 'Trees' },
              { name: 'Микс грибов', price: '900₽', weight: '150г', icon: 'Gift' },
              { name: 'Грибной порошок', price: '400₽', weight: '50г', icon: 'Wheat' }
            ].map((product, i) => (
              <Card key={i} className="hover:shadow-xl transition-all border-2 hover:border-accent">
                <CardContent className="pt-6 pb-6">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon name={product.icon as any} size={32} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.weight}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-primary">{product.price}</span>
                    <Button className="bg-accent hover:bg-accent/90">
                      <Icon name="ShoppingBag" size={18} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-6 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Нам доверяют тысячи покупателей по всей стране
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Елена М.', text: 'Потрясающее качество! Грибы ароматные, чистые. Суп получился как у бабушки в деревне. Буду заказывать ещё!', rating: 5 },
              { name: 'Дмитрий К.', text: 'Заказываю уже третий раз. Белые грибы просто восхитительны. Доставка быстрая, упаковка надёжная.', rating: 5 },
              { name: 'Анна П.', text: 'Открыла для себя грибной порошок — просто находка для кулинарии! Добавляю в соусы и супы. Рекомендую!', rating: 5 }
            ].map((review, i) => (
              <Card key={i} className="border-2">
                <CardContent className="pt-6 pb-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <p className="font-bold text-foreground">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку и мы свяжемся с вами в ближайшее время
            </p>
          </div>
          <Card className="border-2">
            <CardContent className="pt-8 pb-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-foreground font-medium mb-2 block">Ваше имя</label>
                    <Input placeholder="Иван Иванов" className="bg-background" />
                  </div>
                  <div>
                    <label className="text-foreground font-medium mb-2 block">Телефон</label>
                    <Input placeholder="+7 (999) 123-45-67" className="bg-background" />
                  </div>
                </div>
                <div>
                  <label className="text-foreground font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="ivan@example.com" className="bg-background" />
                </div>
                <div>
                  <label className="text-foreground font-medium mb-2 block">Сообщение</label>
                  <Textarea placeholder="Расскажите, что вас интересует..." rows={5} className="bg-background" />
                </div>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Icon name="Phone" size={24} className="text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Телефон</p>
                  <p className="text-foreground font-medium">+7 (999) 123-45-67</p>
                </div>
                <div>
                  <Icon name="Mail" size={24} className="text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">info@gribdar.ru</p>
                </div>
                <div>
                  <Icon name="MapPin" size={24} className="text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Адрес</p>
                  <p className="text-foreground font-medium">Московская обл.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground/5 py-8 px-6 border-t">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Mushroom" className="text-primary" size={28} />
            <span className="text-2xl font-bold text-primary">ГрибДар</span>
          </div>
          <p className="text-muted-foreground">© 2024 ГрибДар. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
