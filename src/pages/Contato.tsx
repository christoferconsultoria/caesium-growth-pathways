
import { Phone, Mail, MessageSquare, Clock, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Link } from "react-router-dom";

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em até 24 horas.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
  };

  const contactMethods = [
    {
      icon: <MessageSquare className="h-8 w-8 text-green-600" />,
      title: "WhatsApp",
      description: "Resposta mais rápida",
      contact: "(48) 99181-1525",
      action: "Chamar no WhatsApp",
      primary: true
    },
    {
      icon: <Mail className="h-8 w-8 text-blue-600" />,
      title: "E-mail",
      description: "Para assuntos mais detalhados",
      contact: "christofer.consultor@gmail.com",
      action: "Enviar E-mail",
      primary: false
    },
    {
      icon: <Phone className="h-8 w-8 text-slate-600" />,
      title: "Telefone",
      description: "Para conversas mais longas",
      contact: "(48) 99181-1525",
      action: "Ligar Agora",
      primary: false
    }
  ];

  const faqs = [
    {
      question: "Quanto tempo leva o diagnóstico gratuito?",
      answer: "O Caesium Check leva entre 5-10 minutos para ser preenchido online. Você recebe o resultado automaticamente por e-mail."
    },
    {
      question: "Vocês atendem apenas em Florianópolis?",
      answer: "Nosso foco é na Grande Florianópolis, mas atendemos todo o Brasil através de reuniões online. Para projetos maiores, podemos nos deslocar."
    },
    {
      question: "Qual o investimento dos serviços?",
      answer: "Cada negócio é único. Após o diagnóstico inicial, apresentamos uma proposta personalizada baseada nas suas necessidades específicas."
    },
    {
      question: "Como funciona o acompanhamento?",
      answer: "Temos diferentes modalidades: desde uma sessão pontual até acompanhamento semanal. Tudo depende do momento e necessidade do seu negócio."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-slate-800">
            Caesium <span className="text-blue-600">Strategy</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-600 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/metodologia" className="text-slate-600 hover:text-blue-600 transition-colors">Metodologia</Link>
            <Link to="/servicos" className="text-slate-600 hover:text-blue-600 transition-colors">Serviços</Link>
            <Link to="/sobre" className="text-slate-600 hover:text-blue-600 transition-colors">Sobre</Link>
            <Link to="/contato" className="text-blue-600 font-semibold">Contato</Link>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Diagnóstico Gratuito
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              Vamos <span className="text-blue-600">conversar</span>
            </h1>
            <p className="text-2xl text-slate-600 mb-8">
              Seu negócio pode ser muito mais organizado e lucrativo. 
              Entre em contato e vamos descobrir o melhor caminho juntos.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Como Prefere Falar Comigo?</h2>
            <p className="text-xl text-slate-600">Escolha o canal mais conveniente para você</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card key={index} className={`text-center hover:shadow-lg transition-all duration-300 ${method.primary ? 'ring-2 ring-green-500 bg-green-50' : ''}`}>
                <CardHeader>
                  <div className="mx-auto mb-4">{method.icon}</div>
                  <CardTitle className="text-xl text-slate-800">{method.title}</CardTitle>
                  <CardDescription className="text-slate-600">{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-slate-800 mb-4">{method.contact}</p>
                  <Button 
                    className={`w-full ${method.primary ? 'bg-green-600 hover:bg-green-700' : 'bg-slate-800 hover:bg-slate-900'} text-white`}
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                Fale Comigo Pelo Formulário
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Preencha o formulário com seus dados e detalhes sobre seu negócio. 
                Entrarei em contato em até 24 horas.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Horário de Atendimento</h3>
                    <p className="text-slate-600">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-slate-600">Sábados: 8h às 12h</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Localização</h3>
                    <p className="text-slate-600">Florianópolis - SC</p>
                    <p className="text-slate-600">Atendimento presencial na Grande Floripa</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Tempo de Resposta</h3>
                    <p className="text-slate-600">WhatsApp: até 2 horas</p>
                    <p className="text-slate-600">E-mail/Formulário: até 24 horas</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Formulário de Contato</CardTitle>
                <CardDescription>
                  Quanto mais detalhes, melhor posso ajudar você
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
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
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Seu telefone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                    <Input
                      placeholder="Nome da sua empresa"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  <Select value={formData.subject} onValueChange={(value) => setFormData({...formData, subject: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Qual o seu interesse?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="diagnostico">Diagnóstico Gratuito</SelectItem>
                      <SelectItem value="caesium-map">Caesium Map - Diagnóstico + Plano</SelectItem>
                      <SelectItem value="caesium-focus">Caesium Focus - Consultoria de Entrada</SelectItem>
                      <SelectItem value="caesium-track">Caesium Track - Acompanhamento</SelectItem>
                      <SelectItem value="caesium-partner">Caesium Partner - Consultor Fixo</SelectItem>
                      <SelectItem value="duvidas">Tenho dúvidas</SelectItem>
                      <SelectItem value="outros">Outros assuntos</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea
                    placeholder="Conte sobre seu negócio e seus principais desafios. Quanto mais detalhes, melhor posso ajudar."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    required
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

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Dúvidas Frequentes</h2>
            <p className="text-xl text-slate-600">Respostas para as perguntas mais comuns</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-800">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed">{faq.answer}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-slate-600 mb-4">Não encontrou sua dúvida?</p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <MessageSquare className="mr-2 h-5 w-5" />
              Fale Diretamente no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Vamos organizar seu negócio e construir um caminho claro de crescimento
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Seu negócio merece clareza, organização e lucro. Comece agora mesmo.
          </p>
          <div className="space-x-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
              <MessageSquare className="mr-2 h-5 w-5" />
              WhatsApp: (48) 99181-1525
            </Button>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Diagnóstico Gratuito
            </Button>
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

export default Contato;
