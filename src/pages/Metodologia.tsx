
import { ArrowRight, CheckCircle, Target, TrendingUp, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Metodologia = () => {
  const pillars = [
    {
      title: "Gestão",
      description: "Organização interna, processos, rotinas, financeiro, BSC",
      icon: <Briefcase className="h-12 w-12 text-blue-600" />,
      details: [
        "Estruturação de processos operacionais",
        "Organização financeira e controles",
        "Definição de rotinas e workflows",
        "Implementação de indicadores (KPIs)",
        "Balanced Scorecard personalizado"
      ]
    },
    {
      title: "Estratégia", 
      description: "Análise competitiva, proposta de valor, crescimento, diferenciação",
      icon: <Target className="h-12 w-12 text-blue-600" />,
      details: [
        "Análise do mercado e concorrência",
        "Definição de proposta de valor única",
        "Estratégias de diferenciação",
        "Planejamento de crescimento",
        "Posicionamento estratégico"
      ]
    },
    {
      title: "Modelo de Negócio",
      description: "Validação, inovação, estrutura, proposta de valor, canvas",
      icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
      details: [
        "Business Model Canvas",
        "Validação de hipóteses de negócio",
        "Estruturação de receitas",
        "Análise de viabilidade",
        "Inovação em modelos existentes"
      ]
    }
  ];

  const tools = [
    "Business Model Canvas",
    "Value Proposition Design", 
    "Análise SWOT",
    "Matriz de Ansoff",
    "Balanced Scorecard",
    "Customer Journey Map",
    "Análise de Forças de Porter",
    "OKRs (Objectives and Key Results)"
  ];

  const process = [
    {
      step: "01",
      title: "Diagnóstico Inicial",
      description: "Mapeamento completo da situação atual do negócio, identificando pontos críticos e oportunidades de melhoria.",
      duration: "1-2 semanas"
    },
    {
      step: "02", 
      title: "Levantamento Detalhado",
      description: "Análise profunda de processos, finanças, mercado, concorrência e modelo de negócio atual.",
      duration: "2-3 semanas"
    },
    {
      step: "03",
      title: "Plano Estratégico",
      description: "Desenvolvimento do plano de ação com prioridades, cronograma e métricas de acompanhamento.",
      duration: "1-2 semanas"
    },
    {
      step: "04",
      title: "Sessões de Implementação",
      description: "Acompanhamento da execução, ajustes de rota e monitoramento de resultados.",
      duration: "Conforme contrato"
    },
    {
      step: "05",
      title: "Métricas e Ajustes",
      description: "Análise de resultados, refinamento de estratégias e planejamento de próximos passos.",
      duration: "Ongoing"
    },
    {
      step: "06",
      title: "Crescimento Sustentável",
      description: "Consolidação dos resultados e estruturação para crescimento contínuo e sustentável.",
      duration: "Long-term"
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
            <Link to="/metodologia" className="text-blue-600 font-semibold">Metodologia</Link>
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
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              Como eu ajudo seu negócio a sair do <span className="text-blue-600">caos</span>
            </h1>
            <p className="text-2xl text-slate-600 mb-8">
              Aqui, não existe achismo nem fórmula mágica. Existe método, análise e plano claro.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Quero começar agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* 3 Pillars Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Os 3 Pilares da Consultoria Caesium</h2>
            <p className="text-xl text-slate-600">Estrutura completa para transformar seu negócio</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">{pillar.icon}</div>
                  <CardTitle className="text-2xl text-slate-800">{pillar.title}</CardTitle>
                  <CardDescription className="text-slate-600">{pillar.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pillar.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Visual */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Framework Caesium</h2>
            <p className="text-xl text-slate-600">O ciclo completo de transformação do seu negócio</p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4">
              {["Diagnóstico", "Plano", "Acompanhamento", "Crescimento"].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-slate-800 text-lg">{step}</h3>
                  {index < 3 && (
                    <div className="hidden md:block absolute transform translate-x-full -translate-y-8">
                      <ArrowRight className="h-8 w-8 text-blue-600" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Ferramentas que Utilizo</h2>
            <p className="text-xl text-slate-600">Metodologias comprovadas e estruturas profissionais</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-800">{tool}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Como Funciona na Prática</h2>
            <p className="text-xl text-slate-600">O passo a passo da metodologia Caesium</p>
          </div>
          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="flex items-start space-x-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                </div>
                <Card className="flex-1 bg-white">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl text-slate-800">{item.title}</CardTitle>
                      <span className="text-sm text-blue-600 font-semibold bg-blue-100 px-3 py-1 rounded-full">
                        {item.duration}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Quer saber qual é o caminho certo para o seu negócio?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Faça o diagnóstico gratuito e descubra como a metodologia Caesium pode transformar seu negócio.
          </p>
          <div className="space-x-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Fazer Diagnóstico Gratuito
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/contato">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 text-lg">
                Falar Diretamente
              </Button>
            </Link>
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

export default Metodologia;
