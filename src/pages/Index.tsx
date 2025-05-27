
import { ArrowRight, CheckCircle, Phone, Mail, Calendar, Users, BookOpen, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const services = [
    {
      name: "Caesium Check",
      description: "Diagnóstico rápido e gratuito do seu negócio",
      duration: "5-10 minutos online",
      cta: "Quero meu diagnóstico",
      price: "Gratuito"
    },
    {
      name: "Caesium Map",
      description: "Diagnóstico Profundo + Plano de Ação detalhado",
      duration: "1 encontro + entrega",
      cta: "Começar agora",
      price: "Consulte"
    },
    {
      name: "Caesium Focus",
      description: "Consultoria de entrada com plano + 1 sessão",
      duration: "1 a 2 encontros",
      cta: "Contratar",
      price: "Consulte"
    },
    {
      name: "Caesium Track",
      description: "Consultoria com acompanhamento quinzenal",
      duration: "3 meses",
      cta: "Quero acompanhamento",
      price: "Consulte"
    },
    {
      name: "Caesium Partner",
      description: "Consultor fixo - imersão e gestão estratégica",
      duration: "6 meses a 1 ano",
      cta: "Falar sobre esse plano",
      price: "Consulte"
    }
  ];

  const differentials = [
    "Clareza total — sem enrolação",
    "Entrego método, não achismos",
    "Diagnóstico sério — sem papo de 'guru'",
    "Acesso a consultor de alto nível",
    "Rede de profissionais parceiros",
    "Acompanhamento real, não sumo depois"
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      company: "Empresa X",
      text: "A metodologia Caesium transformou completamente a organização do meu negócio. Saí do caos para ter clareza total dos próximos passos."
    },
    {
      name: "João Santos",
      company: "Negócio Y",
      text: "Consultoria prática e direta. Christofer entregou exatamente o que prometeu: um plano claro e executável."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-slate-800">
            Caesium <span className="text-blue-600">Strategy</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-600 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/metodologia" className="text-slate-600 hover:text-blue-600 transition-colors">Metodologia</Link>
            <Link to="/servicos" className="text-slate-600 hover:text-blue-600 transition-colors">Serviços</Link>
            <Link to="/sobre" className="text-slate-600 hover:text-blue-600 transition-colors">Sobre</Link>
            <Link to="/contato" className="text-slate-600 hover:text-blue-600 transition-colors">Contato</Link>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Diagnóstico Gratuito
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight">
                Seu negócio <span className="text-blue-600">organizado</span>, lucrativo e pronto pra crescer.
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Diagnóstico, estratégia e plano de ação — direto, claro e sem enrolação.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  Quero meu diagnóstico gratuito
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                  Como funciona
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg p-6">
                  <div className="h-4 bg-blue-200 rounded mb-4"></div>
                  <div className="h-3 bg-blue-100 rounded mb-2"></div>
                  <div className="h-3 bg-blue-100 rounded mb-4 w-3/4"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded p-3">
                      <div className="h-2 bg-green-200 rounded mb-2"></div>
                      <div className="h-2 bg-gray-100 rounded"></div>
                    </div>
                    <div className="bg-white rounded p-3">
                      <div className="h-2 bg-yellow-200 rounded mb-2"></div>
                      <div className="h-2 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="w-32 h-32 bg-slate-300 rounded-full"></div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-slate-800">Quem está por trás da Caesium</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Sou consultor de estratégia, gestão e modelo de negócios. Com mais de 15 anos de experiência, 
                atuei em empresas como LG, EMS e Nuvemshop, além de ser professor universitário nas áreas de 
                marketing, inovação, estratégia e produtos digitais.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Minha missão é ajudar pequenos negócios a saírem do caos, se organizarem e crescerem com 
                segurança, clareza e lucro.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <BookOpen className="h-8 w-8 text-blue-600 mb-2" />
                  <h4 className="font-semibold text-slate-800">Formação</h4>
                  <p className="text-sm text-slate-600">Design + Mestrado + MBA</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <Users className="h-8 w-8 text-blue-600 mb-2" />
                  <h4 className="font-semibold text-slate-800">Experiência</h4>
                  <p className="text-sm text-slate-600">Estratégia em grandes empresas</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <Calendar className="h-8 w-8 text-blue-600 mb-2" />
                  <h4 className="font-semibold text-slate-800">Professor</h4>
                  <p className="text-sm text-slate-600">Marketing, Inovação, UX</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <CheckCircle className="h-8 w-8 text-blue-600 mb-2" />
                  <h4 className="font-semibold text-slate-800">Metodologia</h4>
                  <p className="text-sm text-slate-600">Processo próprio validado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Como eu transformo negócios do caos para o crescimento sustentável
            </h2>
            <p className="text-xl text-slate-600">Metodologia Caesium em 4 etapas claras</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Diagnóstico Real",
                description: "Levanto tudo que está fora do eixo — gestão, finanças, marketing, processos e modelo de negócio.",
                icon: "🔍"
              },
              {
                step: "02", 
                title: "Plano de Ação",
                description: "Entrego clareza — o que fazer, como fazer e em qual ordem.",
                icon: "🧭"
              },
              {
                step: "03",
                title: "Acompanhamento",
                description: "Caminho junto, monitoro e ajusto a rota.",
                icon: "🚦"
              },
              {
                step: "04",
                title: "Crescimento Estruturado",
                description: "O negócio sai do caos e atinge um novo patamar — organizado, lucrativo e sustentável.",
                icon: "📈"
              }
            ].map((item, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="text-sm font-bold text-blue-600 mb-2">ETAPA {item.step}</div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">{item.description}</CardDescription>
                </CardContent>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Arquitetura de Produtos e Serviços</h2>
            <p className="text-xl text-slate-600">Soluções sob medida para organizar e acelerar seu negócio</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">{service.name}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-slate-500">{service.duration}</div>
                  <div className="font-semibold text-slate-800">{service.price}</div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group-hover:bg-blue-700">
                    {service.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Caesium Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Por que a Caesium?</h2>
            <p className="text-xl text-slate-600">Diferenciais que fazem a diferença no seu negócio</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((differential, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="h-8 w-8 text-green-500 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{differential}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Depoimentos</h2>
            <p className="text-xl text-slate-600">O que nossos clientes dizem sobre a Caesium</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-50 border-none">
                <CardContent className="p-8">
                  <p className="text-lg text-slate-700 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-200 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-slate-800">{testimonial.name}</div>
                      <div className="text-slate-600 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Vamos organizar seu negócio e construir um caminho claro de crescimento
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Entre em contato e vamos conversar sobre como posso ajudar seu negócio.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-400" />
                  <span>(48) 99181-1525</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-400" />
                  <span>christofer.consultor@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MessageSquare className="h-6 w-6 text-blue-400" />
                  <span>@caesiumstrategy</span>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <Button className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white">
                  WhatsApp: (48) 99181-1525
                </Button>
                <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white">
                  Agendar Diagnóstico Gratuito
                </Button>
              </div>
            </div>
            <Card className="bg-white text-slate-800">
              <CardHeader>
                <CardTitle>Fale Comigo</CardTitle>
                <CardDescription>Preencha o formulário e entrarei em contato</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Seu e-mail"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                  <Input
                    placeholder="Seu telefone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  <Textarea
                    placeholder="Conte sobre seu negócio e seus desafios"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                  />
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">
              Caesium <span className="text-blue-400">Strategy</span>
            </div>
            <p className="text-slate-300 mb-6">Consultoria Estratégica para Pequenos Negócios</p>
            <div className="flex justify-center space-x-8 text-sm text-slate-400">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/metodologia" className="hover:text-white transition-colors">Metodologia</Link>
              <Link to="/servicos" className="hover:text-white transition-colors">Serviços</Link>
              <Link to="/sobre" className="hover:text-white transition-colors">Sobre</Link>
              <Link to="/contato" className="hover:text-white transition-colors">Contato</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg">
          <MessageSquare className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
