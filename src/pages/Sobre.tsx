
import { ArrowRight, BookOpen, Users, Target, Heart, Award, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Sobre = () => {
  const values = [
    {
      title: "Clareza",
      description: "Comunicação direta, sem enrolação. Você sempre sabe exatamente onde está e para onde vai.",
      icon: <Lightbulb className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Pragmatismo", 
      description: "Soluções práticas que funcionam no mundo real, não apenas na teoria.",
      icon: <Target className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Ética",
      description: "Transparência total. Seu sucesso é meu sucesso, e isso guia todas as minhas decisões.",
      icon: <Heart className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Resultado",
      description: "Foco no que realmente importa: fazer seu negócio crescer de forma sustentável.",
      icon: <Award className="h-8 w-8 text-blue-600" />
    }
  ];

  const timeline = [
    {
      year: "2008-2015",
      title: "Formação e Primeiras Experiências",
      description: "Graduação em Design, início da carreira em grandes empresas, primeiro contato com metodologias de inovação."
    },
    {
      year: "2015-2018",
      title: "Mestrado e Experiência Corporativa",
      description: "Mestrado em Inovação, trabalho em empresas como LG e EMS, desenvolvimento de expertise em estratégia corporativa."
    },
    {
      year: "2018-2021",
      title: "MBA e Docência",
      description: "MBA em Gestão Estratégica, início da carreira acadêmica como professor universitário, especialização em marketing digital."
    },
    {
      year: "2021-2024",
      title: "Nuvemshop e Produtos Digitais",
      description: "Experiência em scale-up, gestão de produtos digitais, metodologias ágeis e crescimento acelerado."
    },
    {
      year: "2024-Presente",
      title: "Caesium Strategy",
      description: "Criação da consultoria focada em pequenos negócios, desenvolvimento da metodologia própria."
    }
  ];

  const expertise = [
    { area: "Estratégia Empresarial", level: 95 },
    { area: "Modelo de Negócio", level: 90 },
    { area: "Marketing Digital", level: 85 },
    { area: "Inovação", level: 88 },
    { area: "Gestão de Processos", level: 82 },
    { area: "Produtos Digitais", level: 87 }
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
            <Link to="/sobre" className="text-blue-600 font-semibold">Sobre</Link>
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
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800">Christofer Consultor</Badge>
                <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight">
                  Prazer, eu ajudo pequenos empresários a saírem do <span className="text-blue-600">caos</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  15+ anos transformando negócios através de estratégia, gestão e clareza. 
                  Da LG à Nuvemshop, agora dedicado a ajudar pequenos negócios a crescerem com segurança.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                  Começar Diagnóstico Gratuito
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link to="/contato">
                  <Button size="lg" variant="outline" className="px-8 py-4">
                    Vamos Conversar
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="w-48 h-48 bg-slate-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Minha História</h2>
              <p className="text-xl text-slate-600">Como cheguei até aqui e por que faço o que faço</p>
            </div>
            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p className="text-xl leading-relaxed">
                Minha jornada começou no design, mas logo percebi que criar algo bonito não era suficiente. 
                Era preciso que funcionasse, que resolvesse problemas reais e que gerasse resultados.
              </p>
              <p className="leading-relaxed">
                Durante meus anos em grandes empresas como LG, EMS e Nuvemshop, tive a oportunidade de 
                trabalhar com estratégias complexas, inovação corporativa e gestão de produtos digitais. 
                Aprendi metodologias estruturadas, processos validados e como pensar estrategicamente.
              </p>
              <p className="leading-relaxed">
                Paralelamente, como professor universitário, pude compartilhar conhecimento em marketing, 
                inovação, estratégia e UX. Essa experiência me ensinou a comunicar conceitos complexos 
                de forma simples e aplicável.
              </p>
              <p className="leading-relaxed">
                Mas foi observando pequenos negócios ao meu redor que encontrei meu propósito real. 
                Vi empresários brilhantes, com produtos incríveis, perdidos em meio ao caos operacional. 
                Pessoas que tinham tudo para crescer, mas não sabiam por onde começar.
              </p>
              <p className="leading-relaxed text-lg font-medium text-slate-800">
                A Caesium Strategy nasceu dessa necessidade: trazer clareza, organização e estratégia 
                para quem mais precisa – o pequeno empresário que quer crescer com segurança.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Minha Jornada Profissional</h2>
            <p className="text-xl text-slate-600">15 anos construindo expertise em estratégia e gestão</p>
          </div>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {item.year.split('-')[0]}
                  </div>
                </div>
                <Card className="flex-1 bg-white">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl text-slate-800">{item.title}</CardTitle>
                      <Badge variant="outline" className="text-blue-600 border-blue-600">
                        {item.year}
                      </Badge>
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

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Meus Valores</h2>
            <p className="text-xl text-slate-600">O que guia meu trabalho e minhas decisões</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">{value.icon}</div>
                  <CardTitle className="text-2xl text-slate-800">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Áreas de Expertise</h2>
            <p className="text-xl text-slate-600">Onde posso ajudar seu negócio a crescer</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {expertise.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-slate-800">{skill.area}</span>
                  <span className="text-blue-600 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Metodologia Proprietária</h2>
            <p className="text-xl text-slate-600">Como transformo negócios de forma estruturada e validada</p>
          </div>
          <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Caesium Method™</h3>
              <p className="text-slate-600 leading-relaxed">
                Uma metodologia própria que combina as melhores práticas de consultoria estratégica 
                com a agilidade necessária para pequenos negócios. Validada em dezenas de projetos 
                e refinada ao longo de anos de experiência.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {["Diagnóstico", "Estratégia", "Implementação", "Crescimento"].map((step, index) => (
                <div key={index} className="bg-white rounded-lg p-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {index + 1}
                  </div>
                  <h4 className="font-semibold text-slate-800">{step}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Um Pouco Mais Sobre Mim</h2>
            <p className="text-xl text-slate-600">Além da consultoria</p>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-800 mb-2">Leitor Voraz</h3>
                  <p className="text-slate-600 text-sm">Sempre estudando as últimas tendências em estratégia, gestão e inovação.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-800 mb-2">Professor</h3>
                  <p className="text-slate-600 text-sm">Ensinar me ajuda a estar sempre atualizado e a comunicar melhor.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-800 mb-2">Florianópolis</h3>
                  <p className="text-slate-600 text-sm">Apaixonado por esta cidade e pelo ecossistema empreendedor local.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Se você chegou até aqui, provavelmente estamos alinhados. Que tal começarmos com um diagnóstico gratuito?
          </p>
          <div className="space-x-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Começar Diagnóstico Gratuito
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

export default Sobre;
