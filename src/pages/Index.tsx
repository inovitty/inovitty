import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  Users, 
  Target, 
  Sparkles, 
  BookOpen, 
  Lightbulb,
  TrendingUp,
  Award,
  MessageCircle,
  Mail,
  Linkedin,
  Instagram,
  Phone
} from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";
import aboutImage from "@/assets/about-team.jpg";

const Index = () => {
  const services = [
    {
      icon: Brain,
      title: "Consultoria em IA Educacional",
      description: "Orientação estratégica para integrar a Inteligência Artificial de forma ética e eficiente no ambiente escolar."
    },
    {
      icon: Users,
      title: "Formação de Professores",
      description: "Capacitação prática em IA generativa e ferramentas digitais para potencializar o ensino e engajar os alunos."
    },
    {
      icon: Lightbulb,
      title: "Projetos Pedagógicos Inovadores",
      description: "Desenvolvimento de iniciativas educacionais criativas que combinam tecnologia e metodologias ativas."
    },
    {
      icon: TrendingUp,
      title: "Diagnóstico de Maturidade Digital",
      description: "Avaliação completa do nível tecnológico da escola e criação de plano de ação personalizado."
    }
  ];

  const testimonials = [
    {
      quote: "Após a consultoria da Inovitty, nossa equipe começou a usar IA para criar planos de aula personalizados e melhorar o acompanhamento individual dos alunos. A transformação foi incrível!",
      author: "Prof. Ana Silva",
      role: "Coordenadora Pedagógica, Escola Futuro"
    },
    {
      quote: "A formação oferecida foi prática e acessível. Hoje usamos ferramentas de IA com confiança e nossos professores se sentem mais preparados para os desafios da educação moderna.",
      author: "Carlos Mendes",
      role: "Diretor, Colégio Inovação"
    }
  ];

  const blogPosts = [
    {
      title: "IA na Sala de Aula: Por Onde Começar?",
      excerpt: "Descubra os primeiros passos para integrar inteligência artificial no dia a dia escolar de forma simples e eficaz.",
      date: "15 de Novembro, 2025"
    },
    {
      title: "ChatGPT para Educadores: Guia Prático",
      excerpt: "Como professores podem usar o ChatGPT para economizar tempo e enriquecer suas aulas com conteúdo personalizado.",
      date: "08 de Novembro, 2025"
    },
    {
      title: "Ética e IA: Preparando Alunos para o Futuro",
      excerpt: "A importância de ensinar pensamento crítico e uso responsável da tecnologia desde cedo.",
      date: "01 de Novembro, 2025"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-hero opacity-90"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(33, 116, 193, 0.95) 0%, rgba(38, 188, 166, 0.85) 100%), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="container relative z-10 px-4 md:px-6 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight animate-fade-in">
              Transforme a Educação com Inteligência Artificial
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              A Inovitty ajuda escolas e educadores a incorporar o poder da IA para otimizar o ensino, personalizar a aprendizagem e inovar no dia a dia escolar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-hover transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Fale com um Consultor
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-background/10 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-lg px-8 py-6 transition-all duration-300"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Sobre a Inovitty</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Educar para o futuro, com propósito e tecnologia
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  A <span className="font-semibold text-foreground">Inovitty</span> é uma consultoria educacional especializada em apoiar escolas e professores na jornada de transformação digital através da Inteligência Artificial.
                </p>
                <p>
                  Acreditamos que a tecnologia deve ser uma aliada do educador, não uma substituta. Nossa missão é capacitar profissionais da educação a usar a IA de forma consciente, ética e criativa, gerando mais tempo para o que realmente importa: a conexão humana e a aprendizagem significativa.
                </p>
                <p>
                  Com uma abordagem personalizada e acessível, traduzimos conceitos complexos em práticas simples e aplicáveis ao cotidiano escolar.
                </p>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Target className="h-8 w-8 text-accent" />
                  <div>
                    <div className="font-bold text-2xl text-foreground">100+</div>
                    <div className="text-sm text-muted-foreground">Educadores formados</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-8 w-8 text-accent" />
                  <div>
                    <div className="font-bold text-2xl text-foreground">50+</div>
                    <div className="text-sm text-muted-foreground">Escolas atendidas</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={aboutImage} 
                alt="Equipe de educadores em formação"
                className="rounded-2xl shadow-card w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Nossos Serviços</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Como podemos ajudar sua escola
            </h2>
            <p className="text-lg text-muted-foreground">
              Oferecemos soluções completas e personalizadas para levar a inovação com IA para sua instituição
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="border-border bg-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Depoimentos</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
              O impacto nas escolas
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border bg-card shadow-card">
                <CardContent className="p-8 space-y-4">
                  <Sparkles className="h-8 w-8 text-accent" />
                  <p className="text-lg text-card-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="pt-4 border-t border-border">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Recursos</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
              Conteúdos sobre inovação educacional
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card 
                key={index}
                className="border-border bg-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="text-xs text-accent font-medium">{post.date}</div>
                  <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="text-primary font-medium text-sm flex items-center gap-2 pt-2">
                    Ler mais
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
              Dê o próximo passo rumo à educação inteligente
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Agende uma conversa sem compromisso e descubra como a IA pode transformar sua escola
            </p>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-10 py-6 shadow-hover transition-all duration-300 hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Agende uma Conversa
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Inovitty</h3>
              <p className="text-background/80">
                Inovação com propósito na Educação
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Contato</h4>
              <div className="space-y-2 text-background/80">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>contato@inovitty.com.br</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>(11) 99999-9999</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="h-10 w-10 rounded-full bg-background/10 hover:bg-accent flex items-center justify-center transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-background/10 hover:bg-accent flex items-center justify-center transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60 text-sm">
            <p>© 2025 Inovitty. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
