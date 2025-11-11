import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🍄</span>
            <span className="text-2xl font-bold text-primary">ГрибоПром</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Главная</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">О нас</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Услуги</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors font-medium">Отзывы</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
          </div>
          <Button className="hidden md:inline-flex">
            <Icon name="ShoppingCart" size={18} className="mr-2" />
            Заказать
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </nav>
      </header>

      <section id="home" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Натуральные
                <span className="text-primary block">сушёные грибы</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Экологически чистые грибы из лесов России. Собираем вручную, сушим по традиционной технологии.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg">
                  <Icon name="Package" size={20} className="mr-2" />
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Натурально</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Видов грибов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/ccb437d9-e219-4e14-a771-35d716a761a8/files/f34faee6-0598-4004-8534-1a480c670168.jpg"
                alt="Сушёные грибы"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">О нас</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы занимаемся заготовкой натуральных лесных грибов более 15 лет
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-border hover:border-primary transition-colors">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Icon name="Leaf" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Экологичность</h3>
                <p className="text-muted-foreground">
                  Собираем грибы только в чистых районах, вдали от промышленных зон и дорог
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-border hover:border-primary transition-colors">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-secondary/20 rounded-2xl flex items-center justify-center">
                  <Icon name="Award" size={32} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Качество</h3>
                <p className="text-muted-foreground">
                  Строгий контроль на всех этапах: от сбора до упаковки. Сертифицированная продукция
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-border hover:border-primary transition-colors">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent/20 rounded-2xl flex items-center justify-center">
                  <Icon name="Heart" size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Традиции</h3>
                <p className="text-muted-foreground">
                  Используем традиционные методы сушки для сохранения вкуса и аромата
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Наши грибы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент сушёных грибов для любых кулинарных задач
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Белые грибы", weight: "50г", price: "450₽", icon: "🍄" },
              { name: "Лисички", weight: "40г", price: "380₽", icon: "🧡" },
              { name: "Подберёзовики", weight: "50г", price: "320₽", icon: "🌰" },
              { name: "Опята", weight: "60г", price: "280₽", icon: "🍁" },
              { name: "Шампиньоны", weight: "70г", price: "250₽", icon: "🤍" },
              { name: "Ассорти", weight: "100г", price: "520₽", icon: "🎁" }
            ].map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all hover:-translate-y-2">
                <CardContent className="pt-6 space-y-4">
                  <div className="text-6xl text-center mb-4">{product.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground text-center">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">{product.weight}</span>
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                  </div>
                  <Button className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Добавить в корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас наши покупатели
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Мария Иванова",
                text: "Покупаю только у вас! Грибы всегда чистые, ароматные. Суп получается просто волшебный!",
                rating: 5
              },
              {
                name: "Александр Петров",
                text: "Отличное качество и быстрая доставка. Белые грибы - просто огонь! Буду заказывать ещё.",
                rating: 5
              },
              {
                name: "Елена Смирнова",
                text: "Заказала ассорти для пробы - в восторге! Все грибы отборные, крупные. Рекомендую!",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="border-2 border-border">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                  <div className="flex items-center gap-3 pt-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{review.name}</div>
                      <div className="text-sm text-muted-foreground">Постоянный клиент</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами удобным способом
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <Card className="border-2 border-border">
                <CardContent className="pt-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">Телефон</h3>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    <p className="text-sm text-muted-foreground mt-1">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-border">
                <CardContent className="pt-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">Email</h3>
                    <p className="text-muted-foreground">info@griboprom.ru</p>
                    <p className="text-sm text-muted-foreground mt-1">Ответим в течение суток</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-border">
                <CardContent className="pt-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Лесная, д. 42</p>
                    <p className="text-sm text-muted-foreground mt-1">Самовывоз по договорённости</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card className="border-2 border-border">
              <CardContent className="pt-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground mb-4">Напишите нам</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">Имя</label>
                    <input 
                      type="text" 
                      placeholder="Ваше имя"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">Email</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">Сообщение</label>
                    <textarea 
                      placeholder="Ваше сообщение"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground/5 py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🍄</span>
                <span className="text-2xl font-bold text-primary">ГрибоПром</span>
              </div>
              <p className="text-muted-foreground">
                Натуральные сушёные грибы высшего качества из экологически чистых районов России.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Навигация</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors">Главная</a>
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">О нас</a>
                <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors">Услуги</a>
                <a href="#reviews" className="block text-muted-foreground hover:text-primary transition-colors">Отзывы</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>+7 (999) 123-45-67</p>
                <p>info@griboprom.ru</p>
                <p>г. Москва, ул. Лесная, д. 42</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>© 2024 ГрибоПром. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
