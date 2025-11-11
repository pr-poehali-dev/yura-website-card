import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🍄</span>
              <span className="font-heading font-bold text-2xl text-foreground">ГрибМаркет</span>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button size="lg" className="hidden md:inline-flex">Заказать</Button>
          </div>
        </div>
      </nav>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-muted"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6 text-foreground leading-tight">
                Настоящие лесные грибы для вашего стола
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
                Собираем с любовью, сушим по традициям, доставляем с заботой
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Выбрать грибы
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/ccb437d9-e219-4e14-a771-35d716a761a8/files/5da25b82-b176-4faf-a049-7b56767cf1ef.jpg" 
                alt="Сушёные грибы"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://cdn.poehali.dev/projects/ccb437d9-e219-4e14-a771-35d716a761a8/files/8753b4db-5721-43a7-98de-d672cc203391.jpg" 
                alt="Сбор грибов"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-foreground">
                О нашей компании
              </h2>
              <p className="text-lg mb-4 text-muted-foreground">
                Мы семейная компания с 15-летним опытом сбора и заготовки лесных грибов. 
                Наши грибники знают каждый уголок леса и собирают только лучшие экземпляры.
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                Все грибы проходят тщательный отбор, очистку и сушатся по традиционной технологии, 
                сохраняя максимум аромата и полезных свойств.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-3xl font-heading font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-3xl font-heading font-bold text-secondary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">натурально</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-3xl font-heading font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">клиентов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
              Наши грибы
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент отборных сушёных грибов для вашей кухни
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="text-5xl mb-4">🍄</div>
                <CardTitle className="font-heading text-2xl">Белые грибы</CardTitle>
                <CardDescription className="text-base">Король грибов</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Насыщенный аромат и плотная текстура. Идеальны для супов и жюльенов.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-heading font-bold text-primary">от 1200₽/кг</span>
                  <Button>Заказать</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="text-5xl mb-4">🍄</div>
                <CardTitle className="font-heading text-2xl">Лисички</CardTitle>
                <CardDescription className="text-base">Лесное золото</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Деликатный вкус с лёгкой кислинкой. Отлично подходят для жарки и тушения.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-heading font-bold text-primary">от 950₽/кг</span>
                  <Button>Заказать</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="text-5xl mb-4">🍄</div>
                <CardTitle className="font-heading text-2xl">Подберёзовики</CardTitle>
                <CardDescription className="text-base">Классика вкуса</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Универсальные грибы с мягким вкусом. Подходят для любых блюд.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-heading font-bold text-primary">от 800₽/кг</span>
                  <Button>Заказать</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-muted-foreground">
              Более 500 довольных покупателей по всей России
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
                    👨
                  </div>
                  <div>
                    <CardTitle className="text-lg">Алексей М.</CardTitle>
                    <div className="flex gap-1 text-yellow-500">
                      {'★★★★★'}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Отличное качество! Грибы ароматные, чистые. Супы получаются как из свежих. 
                  Буду заказывать ещё!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-2xl">
                    👩
                  </div>
                  <div>
                    <CardTitle className="text-lg">Мария С.</CardTitle>
                    <div className="flex gap-1 text-yellow-500">
                      {'★★★★★'}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Заказываю уже третий раз. Всё приходит быстро и аккуратно упаковано. 
                  Качество на высоте!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
                    👨
                  </div>
                  <div>
                    <CardTitle className="text-lg">Дмитрий К.</CardTitle>
                    <div className="flex gap-1 text-yellow-500">
                      {'★★★★★'}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Настоящие лесные грибы! Сразу чувствуется разница с магазинными. 
                  Рекомендую всем!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
                Свяжитесь с нами
              </h2>
              <p className="text-xl text-muted-foreground">
                Готовы ответить на все ваши вопросы
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-primary" size={24} />
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="text-primary" size={24} />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground">info@gribmarket.ru</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" className="text-primary" size={24} />
                    <div>
                      <div className="font-semibold">Адрес</div>
                      <div className="text-muted-foreground">г. Москва, ул. Лесная, 15</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" className="text-primary" size={24} />
                    <div>
                      <div className="font-semibold">Часы работы</div>
                      <div className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Отправить сообщение</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input 
                        placeholder="Ваше имя" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <Input 
                        type="email" 
                        placeholder="Email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Ваше сообщение" 
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Отправить
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🍄</span>
                <span className="font-heading font-bold text-2xl">ГрибМаркет</span>
              </div>
              <p className="text-white/70">
                Лучшие лесные грибы для вашего стола
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Навигация</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-white/70 hover:text-white transition-colors">О нас</a></li>
                <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Услуги</a></li>
                <li><a href="#reviews" className="text-white/70 hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Продукция</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Белые грибы</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Лисички</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Подберёзовики</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Все грибы</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Контакты</h3>
              <ul className="space-y-2 text-white/70">
                <li>+7 (999) 123-45-67</li>
                <li>info@gribmarket.ru</li>
                <li>г. Москва, ул. Лесная, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>&copy; 2024 ГрибМаркет. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
