
import { ArrowRight, Check, Clock, Users, Target, Star, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Servicos = () => {
  const services = [
    {
      name: "Caesium Check",
      tagline: "Diagnóstico Rápido Gratuito",
      description: "Avaliação inicial do seu negócio para identificar pontos críticos e oportunidades de melhoria.",
      price: "Gratuito",
      duration: "5-10 minutos online",
      format: "Formulário online + relatório automático",
      forWho: [
        "Empresários que querem entender melhor seu negócio",
        "Negócios em fase inicial ou crescimento",
        "Quem busca clareza sobre próximos passos"
      ],
      notForWho: [
        "Empresas que precisam de análise muito profunda",
        "Negócios com urgência extrema",
        "Quem não quer implementar mudanças"
      ],
      benefits: [
        "Visão geral dos pontos críticos",
        "Relatório com principais recomendações",
        "Priorização de ações",
        "Base para decisão de próximos passos"
      ],
      cta: "Fazer Diagnóstico Gratuito",
      popular: false,
      badge: "Lead Magnet"
    },
    {
      name: "Caesium Map",
      tagline: "Diagnóstico Profundo + Plano de Ação",
      description: "Análise completa do negócio com entrega de plano estratégico detalhado e priorizado.",
      price: "Consulte",
      duration: "1 encontro + entrega em 7 dias",
      format: "Reunião presencial/online + relatório completo",
      forWho: [
        "Negócios que precisam de direção clara",
        "Empresários que querem plano estruturado", 
        "Quem tem tempo para implementar mudanças"
      ],
      notForWho: [
        "Empresas que querem apenas opinião superficial",
        "Negócios que não podem investir tempo",
        "Quem busca acompanhamento contínuo"
      ],
      benefits: [
        "Diagnóstico completo em 6 dimensões",
        "Plano de ação com 90 dias de foco",
        "Priorização clara de iniciativas",
        "Templates e ferramentas inclusos",
        "1 sessão de dúvidas incluída"
      ],
      cta: "Começar Agora",
      popular: false,
      badge: "Mais Procurado"
    },
    {
      name: "Caesium Focus",
      tagline: "Consultoria de Entrada",
      description: "Desenvolvimento do plano estratégico com 1 sessão de implementação guiada.",
      price: "Consulte",
      duration: "1 a 2 encontros",
      format: "Planejamento + sessão de implementação",
      forWho: [
        "Empresários que querem começar com acompanhamento",
        "Negócios que precisam de ajuda na execução",
        "Quem quer validar primeiros passos"
      ],
      notForWho: [
        "Empresas que precisam apenas do plano",
        "Negócios com equipe muito experiente",
        "Quem não pode dedicar tempo às sessões"
      ],
      benefits: [
        "Plano estratégico personalizado",
        "Sessão de implementação guiada",
        "Ajustes durante a execução",
        "Acesso a templates exclusivos",
        "Suporte por 30 dias"
      ],
      cta: "Contratar Consultoria",
      popular: true,
      badge: "Recomendado"
    },
    {
      name: "Caesium Track", 
      tagline: "Consultoria com Acompanhamento",
      description: "Acompanhamento quinzenal com ajustes de rota e monitoramento de resultados.",
      price: "Consulte",
      duration: "3 meses",
      format: "Reuniões quinzenais + suporte contínuo",
      forWho: [
        "Negócios em crescimento acelerado",
        "Empresários que querem segurança na execução",
        "Equipes que precisam de orientação constante"
      ],
      notForWho: [
        "Empresas muito autônomas",
        "Negócios com budget limitado",
        "Quem não pode se comprometer com reuniões"
      ],
      benefits: [
        "Reuniões quinzenais de 1h",
        "Monitoramento de KPIs",
        "Ajustes de estratégia em tempo real",
        "Acesso prioritário ao consultor",
        "Relatórios mensais de progresso"
      ],
      cta: "Quero Acompanhamento",
      popular: false,
      badge: "Resultado Garantido"
    },
    {
      name: "Caesium Partner",
      tagline: "Consultor Fixo na Empresa",
      description: "Imersão completa com acompanhamento semanal e gestão estratégica contínua.",
      price: "Consulte",
      duration: "6 meses a 1 ano",
      format: "Imersão + reuniões semanais + acesso ilimitado",
      forWho: [
        "Empresas em fase de transformação",
        "Negócios com alta complexidade",
        "Empresários que querem consultor dedicado"
      ],
      notForWho: [
        "Negócios muito pequenos",
        "Empresas que precisam apenas de plano",
        "Quem não tem budget para investimento maior"
      ],
      benefits: [
        "Consultor dedicado ao seu negócio",
        "Reuniões semanais + acesso ilimitado",
        "Participação em decisões estratégicas",
        "Acesso à rede de parceiros especialistas",
        "Relatórios executivos mensais",
        "ROI garantido ou dinheiro de volta"
      ],
      cta: "Falar Sobre Este Plano",
      popular: false,
      badge: "Enterprise"
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
            <Link to="/servicos" className="text-blue-600 font-semibold">Serviços</Link>
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
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              Soluções sob medida para seu <span className="text-blue-600">negócio</span>
            </h1>
            <p className="text-2xl text-slate-600 mb-8">
              Desde diagnósticos rápidos até consultoria completa. Escolha o formato ideal para suas necessidades.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className={`relative overflow-hidden ${service.popular ? 'ring-2 ring-blue-500 shadow-xl' : 'hover:shadow-lg'} transition-all duration-300`}>
                {service.badge && (
                  <div className="absolute top-4 right-4">
                    <Badge variant={service.popular ? "default" : "secondary"} className={service.popular ? "bg-blue-600" : ""}>
                      {service.badge}
                    </Badge>
                  </div>
                )}
                <div className="grid md:grid-cols-3 gap-8 p-8">
                  {/* Service Info */}
                  <div className="md:col-span-1">
                    <CardHeader className="p-0">
                      <CardTitle className="text-2xl text-blue-600 mb-2">{service.name}</CardTitle>
                      <div className="text-lg font-semibold text-slate-800 mb-4">{service.tagline}</div>
                      <CardDescription className="text-slate-600 mb-4">{service.description}</CardDescription>
                    </CardHeader>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-5 w-5 text-slate-400" />
                        <span className="text-sm text-slate-600">{service.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Target className="h-5 w-5 text-slate-400" />
                        <span className="text-sm text-slate-600">{service.format}</span>
                      </div>
                      <div className="text-2xl font-bold text-slate-800">{service.price}</div>
                    </div>
                  </div>

                  {/* For Who / Not For Who */}
                  <div className="md:col-span-1">
                    <div className="mb-6">
                      <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                        <Check className="h-5 w-5 mr-2" />
                        Para quem é
                      </h4>
                      <ul className="space-y-2">
                        {service.forWho.map((item, idx) => (
                          <li key={idx} className="text-sm text-slate-600 flex items-start">
                            <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-3">Para quem NÃO é</h4>
                      <ul className="space-y-2">
                        {service.notForWho.map((item, idx) => (
                          <li key={idx} className="text-sm text-slate-600 flex items-start">
                            <span className="text-red-500 mr-2 mt-0.5">×</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Benefits & CTA */}
                  <div className="md:col-span-1">
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-800 mb-3">O que está incluso</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-slate-600 flex items-start">
                            <Star className="h-4 w-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      className={`w-full ${service.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-800 hover:bg-slate-900'} text-white`}
                      size="lg"
                    >
                      {service.cta}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Compare os Serviços</h2>
            <p className="text-xl text-slate-600">Qual formato é ideal para o seu momento?</p>
          </div>
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-4 font-semibold text-slate-800">Características</th>
                  <th className="text-center p-4 font-semibold text-slate-800">Check</th>
                  <th className="text-center p-4 font-semibold text-slate-800">Map</th>
                  <th className="text-center p-4 font-semibold text-blue-600 bg-blue-50">Focus</th>
                  <th className="text-center p-4 font-semibold text-slate-800">Track</th>
                  <th className="text-center p-4 font-semibold text-slate-800">Partner</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Diagnóstico Completo", "Básico", "✓", "✓", "✓", "✓"],
                  ["Plano de Ação", "−", "✓", "✓", "✓", "✓"],
                  ["Acompanhamento", "−", "−", "1 sessão", "3 meses", "6-12 meses"],
                  ["Acesso ao Consultor", "−", "Limitado", "30 dias", "Quinzenal", "Ilimitado"],
                  ["Relatórios", "Básico", "Completo", "Completo", "Mensais", "Semanais"],
                  ["Investimento", "Gratuito", "Baixo", "Médio", "Alto", "Premium"]
                ].map((row, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-4 font-medium text-slate-700">{row[0]}</td>
                    <td className="p-4 text-center text-slate-600">{row[1]}</td>
                    <td className="p-4 text-center text-slate-600">{row[2]}</td>
                    <td className="p-4 text-center text-blue-600 bg-blue-50 font-semibold">{row[3]}</td>
                    <td className="p-4 text-center text-slate-600">{row[4]}</td>
                    <td className="p-4 text-center text-slate-600">{row[5]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Não sabe qual serviço escolher?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Comece com o diagnóstico gratuito e eu te ajudo a escolher o melhor caminho para o seu negócio.
          </p>
          <div className="space-x-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Fazer Diagnóstico Gratuito
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 text-lg">
              <MessageSquare className="mr-2 h-5 w-5" />
              WhatsApp: (48) 99181-1525
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
    </div>
  );
};

export default Servicos;
