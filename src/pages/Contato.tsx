
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
      icon: <MessageSquare className="h-8 w-8 text-caesium-gold" />,
      title: "WhatsApp",
      description: "Resposta mais rápida",
      contact: "(48) 99181-1525",
      action: "Chamar no WhatsApp",
      primary: true
    },
    {
      icon: <Mail className="h-8 w-8 text-caesium-gold" />,
      title: "E-mail",
      description: "Para assuntos mais detalhados",
      contact: "christofer.consultor@gmail.com",
      action: "Enviar E-mail",
      primary: false
    },
    {
      icon: <Phone className="h-8 w-8 text-caesium-gold" />,
      title: "Telefone",
      description: "Para conversas mais longas",
      contact: "(48) 99181-1525",
      action: "Ligar Agora",
      primary: false
    }
  ];

  const faqs = [
    {
      question: "Seu negócio tá sempre no caos? É normal, a maioria tá assim.",
      answer: "O diagnóstico gratuito leva entre 5-10 minutos e você descobre exatamente onde estão os furos no seu negócio. Sem blablablá, só clareza."
    },
    {
      question: "Vocês só atendem em Florianópolis mesmo?",
      answer: "Nosso foco é na Grande Florianópolis, mas se seu negócio precisa de ajuda e você tá longe, a gente se vira online. Para projetos maiores, posso me deslocar sim."
    },
    {
      question: "Quanto custa? Tá caro demais?",
      answer: "Olha, cada negócio é único. Depois do diagnóstico inicial (que é gratuito), apresento uma proposta baseada no que seu negócio realmente precisa. Nada de tabela fixa ou pacote genérico."
    },
    {
      question: "Como é esse acompanhamento? Vocês somem depois?",
      answer: "Jamais. Tenho diferentes modalidades: desde uma sessão pontual até acompanhamento semanal. Depende do momento do seu negócio. Mas uma coisa é certa: não te deixo na mão."
    }
  ];

  return (
    <div className="min-h-screen bg-caesium-dark">
      {/* Header */}
      <header className="fixed top-0 w-full bg-caesium-dark/95 backdrop-blur-lg z-50 border-b border-caesium-gold/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-caesium-gray-light">
            Caesium <span className="text-caesium-gold">Strategy</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-caesium-gray-light hover:text-caesium-gold transition-colors">Home</Link>
            <Link to="/metodologia" className="text-caesium-gray-light hover:text-caesium-gold transition-colors">Metodologia</Link>
            <Link to="/servicos" className="text-caesium-gray-light hover:text-caesium-gold transition-colors">Serviços</Link>
            <Link to="/sobre" className="text-caesium-gray-light hover:text-caesium-gold transition-colors">Sobre</Link>
            <Link to="/contato" className="text-caesium-gold font-semibold">Contato</Link>
          </nav>
          <Button className="btn-gold">
            Diagnóstico Gratuito
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-caesium-dark via-caesium-midnight to-caesium-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-caesium-gray-light mb-6">
              Chega de <span className="gold-gradient">apagar incêndio</span>
            </h1>
            <p className="text-2xl text-caesium-silver mb-8">
              Se seu negócio vive no caos e você não sabe se tá ganhando dinheiro ou quebrando, 
              respira. Aqui você encontra clareza, organização e crescimento de verdade.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-caesium-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-caesium-gray-light mb-4">Como Prefere Me Chamar?</h2>
            <p className="text-xl text-caesium-silver">Escolha o jeito mais fácil pra você</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card key={index} className={`card-dark text-center hover:scale-105 transition-all duration-300 ${method.primary ? 'ring-2 ring-caesium-gold' : ''}`}>
                <CardHeader>
                  <div className="mx-auto mb-4">{method.icon}</div>
                  <CardTitle className="text-xl text-caesium-gray-light">{method.title}</CardTitle>
                  <CardDescription className="text-caesium-silver">{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-caesium-gold mb-4">{method.contact}</p>
                  <Button 
                    className={`w-full ${method.primary ? 'btn-gold' : 'btn-outline-gold'}`}
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
      <section className="py-16 bg-caesium-midnight/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-caesium-gray-light mb-6">
                Me Conta Tudo Pelo Formulário
              </h2>
              <p className="text-xl text-caesium-silver mb-8">
                Preenche aí com os dados e me conta sobre seu negócio. 
                Quanto mais detalhe, melhor eu posso te ajudar. Respondo em até 24 horas.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-caesium-gold" />
                  <div>
                    <h3 className="font-semibold text-caesium-gold">Horário de Atendimento</h3>
                    <p className="text-caesium-silver">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-caesium-silver">Sábados: 8h às 12h</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-caesium-gold" />
                  <div>
                    <h3 className="font-semibold text-caesium-gold">Localização</h3>
                    <p className="text-caesium-silver">Florianópolis - SC</p>
                    <p className="text-caesium-silver">Atendimento presencial na Grande Floripa</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Calendar className="h-6 w-6 text-caesium-gold" />
                  <div>
                    <h3 className="font-semibold text-caesium-gold">Tempo de Resposta</h3>
                    <p className="text-caesium-silver">WhatsApp: até 2 horas</p>
                    <p className="text-caesium-silver">E-mail/Formulário: até 24 horas</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="card-dark animate-slide-in-right">
              <CardHeader>
                <CardTitle className="text-caesium-gold">Formulário de Contato</CardTitle>
                <CardDescription className="text-caesium-silver">
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
                      className="bg-caesium-gray-dark border-caesium-gold/30 text-caesium-gray-light"
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Seu e-mail"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-caesium-gray-dark border-caesium-gold/30 text-caesium-gray-light"
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Seu telefone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-caesium-gray-dark border-caesium-gold/30 text-caesium-gray-light"
                    />
                    <Input
                      placeholder="Nome da sua empresa"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="bg-caesium-gray-dark border-caesium-gold/30 text-caesium-gray-light"
                    />
                  </div>
                  <Select value={formData.subject} onValueChange={(value) => setFormData({...formData, subject: value})}>
                    <SelectTrigger className="bg-caesium-gray-dark border-caesium-gold/30 text-caesium-gray-light">
                      <SelectValue placeholder="Qual o seu interesse?" />
                    </SelectTrigger>
                    <SelectContent className="bg-caesium-gray-dark border-caesium-gold/30">
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
                    placeholder="Me conta sobre seu negócio e seus principais desafios. Tá no caos? Não sabe quanto tá ganhando? Quanto mais detalhes, melhor posso ajudar."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    className="bg-caesium-gray-dark border-caesium-gold/30 text-caesium-gray-light"
                    required
                  />
                  <Button type="submit" className="btn-gold w-full">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-caesium-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-caesium-gray-light mb-4">Dúvidas que Sempre Aparecem</h2>
            <p className="text-xl text-caesium-silver">Respostas diretas pras perguntas mais comuns</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="card-dark animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <CardTitle className="text-lg text-caesium-gold">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-caesium-silver leading-relaxed">{faq.answer}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-caesium-silver mb-4">Não achou sua dúvida? Me chama direto:</p>
            <Button className="btn-gold">
              <MessageSquare className="mr-2 h-5 w-5" />
              WhatsApp: (48) 99181-1525
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-caesium-midnight to-caesium-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072')] bg-cover bg-center opacity-5"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-caesium-gray-light mb-6">
            Para de viver apagando incêndio e vem organizar esse negócio
          </h2>
          <p className="text-xl text-caesium-silver mb-8 max-w-2xl mx-auto">
            Seu negócio merece clareza, organização e lucro de verdade. 
            Não fica aí sofrendo sozinho. Vamos resolver isso juntos.
          </p>
          <div className="space-x-4">
            <Button size="lg" className="btn-gold px-8 py-4 text-lg">
              <MessageSquare className="mr-2 h-5 w-5" />
              WhatsApp: (48) 99181-1525
            </Button>
            <Button size="lg" className="btn-outline-gold px-8 py-4 text-lg">
              <Calendar className="mr-2 h-5 w-5" />
              Diagnóstico Gratuito
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-caesium-dark border-t border-caesium-gold/20 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4 text-caesium-gray-light">
              Caesium <span className="text-caesium-gold">Strategy</span>
            </div>
            <p className="text-caesium-silver mb-6">Consultoria Estratégica para Pequenos Negócios</p>
            <div className="flex justify-center space-x-8 text-sm text-caesium-silver">
              <Link to="/" className="hover:text-caesium-gold transition-colors">Home</Link>
              <Link to="/metodologia" className="hover:text-caesium-gold transition-colors">Metodologia</Link>
              <Link to="/servicos" className="hover:text-caesium-gold transition-colors">Serviços</Link>
              <Link to="/sobre" className="hover:text-caesium-gold transition-colors">Sobre</Link>
              <Link to="/contato" className="hover:text-caesium-gold transition-colors">Contato</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg hover:scale-110 transition-all duration-300">
          <MessageSquare className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default Contato;
