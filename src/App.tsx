import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Heart, 
  Info,
  Instagram,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  Target,
  Compass,
  Calendar,
  Flower2,
  ArrowRight
} from 'lucide-react';

// --- Types ---
interface PostIdea {
  day: number;
  type: 'Post' | 'Reels';
  title: string;
  description: string;
  objective: string;
}

// --- Data ---
const CALENDAR_MAY: PostIdea[] = [
  { day: 1, type: 'Post', title: 'Especial Dia das Mães', description: 'Post antecipado para encomendas. Foque no valor do presente feito à mão e no prazo para entrega.', objective: 'Venda Sazonal' },
  { day: 4, type: 'Post', title: 'Minha nova fase aos 41', description: 'Carrossel contando como o macramê trouxe cor e propósito para sua vida nesta nova etapa.', objective: 'Conexão & Posicionamento' },
  { day: 6, type: 'Reels', title: 'Tutorial 60s: Suporte de planta', description: 'Vídeo rápido e estético ensinando um suporte simples. Legenda focada em "beleza no lar".', objective: 'Atração' },
  { day: 8, type: 'Post', title: 'Macramê e saúde mental', description: 'Texto profundo sobre como o artesanato ajuda a silenciar a mente e combater a ansiedade.', objective: 'Valor & Autoridade' },
  { day: 10, type: 'Post', title: 'Feliz Dia das Mães', description: 'Mensagem emocional e inspiradora sobre o transbordar do amor de mãe. Sem foco em venda.', objective: 'Conexão' },
  { day: 13, type: 'Reels', title: 'Tutorial: Nó básico', description: 'Ensinando o nó "quadrado" ou "espiral". Mostre que qualquer pessoa pode aprender.', objective: 'Educação' },
  { day: 15, type: 'Post', title: 'Mães que merecem beleza', description: 'Homenagem às mães e convite para a Aula Gratuita como um presente para si mesma (auto-cuidado).', objective: 'Conversão' },
  { day: 18, type: 'Post', title: 'Sobre mim (História completa)', description: 'Post biográfico reforçando sua jornada de superação e fé. Use uma foto sua trabalhando.', objective: 'Confiança' },
  { day: 20, type: 'Post', title: 'Suportes prontos (Catálogo)', description: 'Fotos de alta qualidade dos suportes em ambientes reais. Mostre a versatilidade na decoração.', objective: 'Desejo' },
  { day: 22, type: 'Post', title: '3 benefícios para a mente', description: 'Lista rápida: Foco, Relaxamento e Realização. Card estético para salvar.', objective: 'Educação' },
  { day: 25, type: 'Reels', title: 'Primeiro nó para iniciantes', description: 'Tutorial bem devagar para quem tem medo de começar. "Você é capaz".', objective: 'Atração' },
  { day: 27, type: 'Post', title: 'Oferta: Aula gratuita', description: 'Chamada direta para o link na Bio. Explique o que a pessoa vai aprender na aula.', objective: 'Conversão' },
  { day: 29, type: 'Post', title: 'Reflexão: Fé e Dom', description: 'Como Deus te deu esse dom nesta fase da vida. Mensagem inspiradora de gratidão.', objective: 'Valores' },
];

export default function App() {
  const [selectedDay, setSelectedDay] = useState<PostIdea | null>(null);

  return (
    <div className="min-h-screen p-6 md:p-10 flex flex-col max-w-[1200px] mx-auto">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-2 border-brand-text pb-4 mb-8 gap-4">
        <div className="font-serif text-3xl md:text-4xl italic font-normal text-brand-text">
          Consultoria de Marketing — Keryn Macramê
        </div>
        <div className="text-left md:text-right text-[11px] uppercase tracking-[2px] text-brand-muted leading-tight">
          Plano de Ação Estratégico<br />Ciclo 01 | Maio 2026
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="grid grid-cols-1 lg:grid-cols-[300px_1fr_320px] gap-8 flex-grow">
        
        {/* Column 1: Profile & Positioning */}
        <section className="space-y-8">
          <div>
            <div className="column-title"><span>01</span> PÚBLICO E POSICIONAMENTO</div>
            
            <div className="profile-card">
              <h3>A Persona: "Helena"</h3>
              <p className="text-[12px] leading-relaxed text-stone-600 mb-3">
                Mulheres 35-55 anos, mães, buscam refúgio na arte e beleza no lar.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[11px]">
                  <CheckCircle2 className="w-3 h-3 text-brand-warm" />
                  <span className="font-bold">Dores:</span> Ansiedade, falta de tempo.
                </div>
                <div className="flex items-center gap-2 text-[11px]">
                  <CheckCircle2 className="w-3 h-3 text-brand-warm" />
                  <span className="font-bold">Desejos:</span> Hobby, renda, saúde mental.
                </div>
              </div>
            </div>

            <div className="profile-card bg-brand-accent/5 border-none shadow-none">
              <h3>Sugestão de Bio</h3>
              <p className="text-[11px] italic leading-relaxed text-brand-accent">
                Keryn Macramê | Artesanato com alma ✨<br />
                Transformando fios em bem-estar e beleza para o seu lar 🌿<br />
                Nova fase, nova arte aos 41<br />
                Aula Gratuita de Macramê 👇<br />
                [Link WhatsApp]
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-serif italic text-base mb-3">Posts Fixados (No Topo do Feed)</h4>
            <div className="space-y-3">
              {[
                { t: 'Minha História', d: 'Quem é Keryn e como o macramê salvou minha saúde mental aos 41 anos.' },
                { t: 'O Diferencial', d: 'Por que o Macramê é a joia do artesanato (Exclusividade e Sofisticação).' },
                { t: 'Convite', d: 'Como participar da minha Aula Gratuita e começar sua jornada.' }
              ].map((p, i) => (
                <div key={i} className="p-3 bg-white border border-brand-muted/20 rounded-sm">
                  <span className="text-[10px] font-bold uppercase text-brand-warm block mb-1">Post {i+1}</span>
                  <p className="text-[11px] font-bold text-brand-text mb-1">{p.t}</p>
                  <p className="text-[10px] text-stone-500 leading-tight">{p.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif italic text-base mb-3">Destaques (Stories Fixados)</h4>
            <div className="space-y-3">
              {[
                { t: 'Comece Aqui', d: 'Sua história, nova fase aos 41 e o propósito da marca.', i: Sparkles },
                { t: 'Produtos', d: 'Catálogo em vídeo, detalhes das peças e como encomendar.', i: Flower2 },
                { t: 'Aula Grátis', d: 'O que é, para quem serve e o link para o WhatsApp.', i: MessageSquare }
              ].map((d, i) => (
                <div key={i} className="flex items-center gap-3 p-2 bg-white border border-brand-muted/10 rounded-sm">
                  <div className="w-10 h-10 shrink-0 rounded-full border border-brand-warm flex items-center justify-center bg-brand-bg">
                    <d.i className="w-4 h-4 text-brand-warm" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-brand-text uppercase">{d.t}</p>
                    <p className="text-[9px] text-stone-500 leading-tight">{d.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Column 2: Editorial Calendar */}
        <section>
          <div className="column-title"><span>02</span> CALENDÁRIO EDITORIAL: MAIO</div>
          
          <div className="grid grid-cols-7 gap-1 bg-black/5 p-2.5 mb-6">
            {Array.from({ length: 31 }).map((_, i) => {
              const day = i + 1;
              const post = CALENDAR_MAY.find(p => p.day === day);
              
              return (
                <button
                  key={day}
                  onClick={() => post && setSelectedDay(post)}
                  className={`
                    aspect-square border border-black/5 p-1 text-[10px] relative transition-all
                    ${post ? 'bg-white cursor-pointer hover:bg-brand-bg shadow-sm' : 'bg-white/50 opacity-30 cursor-default'}
                    ${post && selectedDay?.day === day ? 'ring-2 ring-brand-warm z-10' : ''}
                  `}
                >
                  <span className={post ? 'font-bold text-brand-text' : 'text-brand-muted'}>{day}</span>
                  {post && (
                    <div className={`absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full ${post.type === 'Reels' ? 'bg-brand-warm' : 'bg-brand-accent'}`} />
                  )}
                </button>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="profile-card !mb-0">
              <h3>Pilares: Ensino + Venda</h3>
              <ul className="priority-list">
                <li>Venda de Produtos (Catálogo) <Flower2 className="w-3 h-3 text-brand-warm" /></li>
                <li>Macramê como Terapia <Sparkles className="w-3 h-3 text-brand-warm" /></li>
                <li>Autoridade (Tutoriais) <CheckCircle2 className="w-3 h-3 text-brand-warm" /></li>
                <li>Fé & Valores (Leve) <Compass className="w-3 h-3 text-brand-warm" /></li>
              </ul>
            </div>
            <div className="profile-card !mb-0 bg-brand-warm/5 border-none shadow-none">
              <h3>Stories Diários (Orgânicos)</h3>
              <p className="text-[10px] text-stone-600 leading-relaxed mb-2">
                Equilibre: 70% Vida Real / 30% Oferta Direta.
              </p>
              <ul className="space-y-1 text-[10px] text-brand-accent italic">
                <li>• Bastidores: Peça sendo embalada</li>
                <li>• Prova Social: Foto de cliente feliz</li>
                <li>• Enquetes: "Qual peça você teria na sala?"</li>
                <li>• Chamada: "Última vaga para encomenda"</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 border border-brand-muted/20 rounded-sm bg-white">
            <h4 className="font-serif italic text-sm mb-2">Próxima Fase: Inteligência de Dados</h4>
            <div className="flex items-center gap-3 opacity-50">
              <div className="p-2 bg-brand-bg rounded-full">
                <Target className="w-4 h-4 text-brand-muted" />
              </div>
              <p className="text-[10px] text-brand-muted leading-tight">
                Integração futura com <b>Meta Ads API</b> para análise de ROI e custo por lead (aluna/cliente).
              </p>
            </div>
          </div>
        </section>

        {/* Column 3: Guidelines & Actions */}
        <section className="space-y-8">
          <div className="column-title"><span>03</span> DIRETRIZES E AÇÕES</div>
          
          <div className="profile-card">
            <h3>Estratégia Híbrida</h3>
            <p className="text-[11px] text-stone-600 leading-relaxed mb-3">
              O ensino (aula grátis) cria <b>Autoridade</b>. Pessoas compram produtos de quem elas confiam e admiram.
            </p>
            <ul className="priority-list">
              <li>Venda Direta: Posts de Catálogo <ArrowRight className="w-3 h-3" /></li>
              <li>Venda Indireta: Aula Gratuita <ArrowRight className="w-3 h-3" /></li>
              <li>Relacionamento: WhatsApp <ArrowRight className="w-3 h-3" /></li>
            </ul>
          </div>

          <div className="profile-card">
            <h3>Plano de Ação Imediato</h3>
            <ul className="priority-list">
              <li>Otimizar Bio com Link WhatsApp <ArrowRight className="w-3 h-3" /></li>
              <li>Gravar os 3 Posts Fixados <ArrowRight className="w-3 h-3" /></li>
              <li>Configurar a "Aula Gratuita" <ArrowRight className="w-3 h-3" /></li>
              <li>Frequência: 3x por semana <ArrowRight className="w-3 h-3" /></li>
            </ul>
          </div>

          <div className="profile-card">
            <h3>Dúvidas que Impedem a Venda</h3>
            <p className="text-[10px] text-stone-400 mb-3">O que a Keryn deve responder nos Stories/Legendas:</p>
            <div className="space-y-3">
              <div>
                <p className="text-[10px] font-bold text-brand-text uppercase">Segurança:</p>
                <p className="text-[10px] text-stone-500 italic">"Aguenta peso?" → Mostre testes reais pendurando plantas pesadas.</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-brand-text uppercase">Tempo:</p>
                <p className="text-[10px] text-stone-500 italic">"Vou ter tempo?" → Mostre que 15min de macramê já relaxam a mente.</p>
              </div>
            </div>
          </div>

          <div className="profile-card bg-brand-accent/10 border-brand-accent/20">
            <h3 className="text-brand-accent">Sua Isca Digital (Aula Grátis)</h3>
            <p className="text-[11px] leading-relaxed text-brand-text mb-3">
              É um vídeo de 30-40 min que você envia no WhatsApp para quem clicar no seu link.
            </p>
            <p className="text-[10px] font-bold text-brand-warm uppercase">O que fazer:</p>
            <p className="text-[10px] italic text-stone-600 leading-tight">
              Grave ensinando uma peça simples. No final, diga que em breve abrirá uma turma para quem quer ir além.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex gap-1">
              {['Inspirador', 'Honesto', 'Criativo', 'Acolhedor'].map(t => (
                <span key={t} className="pill-tag">{t}</span>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Post Detail Modal */}
      <AnimatePresence>
        {selectedDay && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDay(null)}
              className="absolute inset-0 bg-brand-text/40 backdrop-blur-[2px]"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-sm p-8 max-w-md w-full relative z-10 shadow-xl border-t-4 border-brand-warm"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-brand-warm font-bold text-[10px] uppercase tracking-widest">Dia {selectedDay.day} • {selectedDay.type}</span>
                  <h3 className="text-2xl font-serif italic mt-1 text-brand-text">{selectedDay.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedDay(null)}
                  className="p-1 hover:bg-brand-bg rounded-full transition-colors"
                >
                  <ChevronRight className="w-5 h-5 rotate-90 text-brand-muted" />
                </button>
              </div>
              
              <div className="space-y-5">
                <div>
                  <h4 className="text-[10px] font-bold uppercase text-brand-muted mb-2 tracking-widest">O que postar</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">{selectedDay.description}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase text-brand-muted mb-2 tracking-widest">Objetivo</h4>
                  <div className="inline-block px-2 py-0.5 bg-brand-bg border border-brand-muted text-brand-accent rounded-full text-[10px] font-bold uppercase tracking-tighter">
                    {selectedDay.objective}
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setSelectedDay(null)}
                className="w-full mt-8 bg-brand-text text-white py-3 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-brand-accent transition-all"
              >
                Fechar Detalhes
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="mt-12 pt-6 border-t border-brand-muted/30 text-center">
        <div className="text-[10px] uppercase tracking-[3px] text-brand-muted">
          Keryn Macramê • Consultoria Estratégica • 2026
        </div>
      </footer>
    </div>
  );
}

function CheckCircleIcon() {
  return (
    <div className="w-3 h-3 rounded-full bg-brand-warm/20 flex items-center justify-center">
      <div className="w-1.5 h-1.5 rounded-full bg-brand-warm" />
    </div>
  );
}
