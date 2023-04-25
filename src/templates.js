const {
  Link,
  LinksWithDescription,
  StrategyStep,
  Template,
} = require("./models/templateModels");

const template = new Template({
  title: "Crie diferentes tipos de oferta isca para a sua geração de contatos",
  youTubeVideoLink: "https://www.youtube.com/embed/dckSsMUdBhE",
  templateCoverUrl: "https://i.imgur.com/2Z3Q1ZM.png",
  time: "30 min.",
  strategyGoal:
    "Use as funcionalidades de Conversão do RD Station Marketing para promover diferentes tipos de ofertas iscas e gere mais contatos. Converta Leads em topo, meio e fundo de funil, utilizando estratégia de Quiz, Webinar e Demonstração ao Vivo.",
  strategyRequirements: [
    new LinksWithDescription({
      description: "Subdomínio de Landing Pages configurado",
      link: new Link({ name: "Saiba mais", url: "https://www.rdstation.com/" }),
    }),
    new LinksWithDescription({
      description: "Código de monitoramento instalado no site. Saiba mais",
      link: new Link({ name: "Saiba mais", url: "https://www.rdstation.com/" }),
    }),
  ],
  strategySteps: [
    new StrategyStep({
      title: "Passo 1 - Escolha do tipo de oferta isca",
      steps: [
        "Identifique as necessidades e desafios que seu público possui. Isso lhe ajudará a entender qual a proposta de valor que você vai oferecer, que ajude seu Lead a identificar ou resolver suas dores.",
        "Ve rifique em qual etapa do funil você deseja aumentar sua geração de Leads. Aqui vai uma recomendação: é essencial que você contemple todas as etapas do funil, por isso, deixamos 3 opções de isca. Veja no tópico seguinte.",
      ],
    }),
    new StrategyStep({
      title: "Passo 2 - Crie a sua oferta isca",
      steps: [
        new StrategyStep({
          title: "1. [Topo de Funil] Quiz",
          content:
            "Gere leads e conheça mais o perfil do seu público de forma rápida e fácil, através da estratégia de Quiz. Além disso, permita que seu público compartilhe essa oferta em suas redes.",
          steps: [
            "Escolha a ferramenta geradora de Quiz. Existem diversas ferramentas disponíveis na internet.",
            "Defina o tema do seu Quiz - será um teste de conhecimento? Diagnóstico sobre algo? Ou um teste de personalidade?",
            "Crie as perguntas que ficarão disponíveis durante o teste.",
          ],
        }),
        new StrategyStep({
          title: "2. [Meio de Funil] Webinar",
          content:
            "Gere audiência para sua marca e mostre autoridade sobre seu mercado!",
          steps: [
            "Defina o tema do seu webinar. Lembre-se: ele precisa ser relevante para o seu público!",
            "Selecione pessoas capacitadas e com boas referências para palestrar ao vivo.",
            "Estruture o roteiro do conteúdo a ser apresentado, utilizando uma apresentação como guia.",
            "<strong>Dica extra:</strong> grave o Webinar e disponibilize a gravação como uma oferta isca após o evento. Você continuará gerando leads ao longo do tempo.",
          ],
        }),
        new StrategyStep({
          title: "3. [Fundo de Funil] Demonstração ao Vivo",
          content: "Mostre seu produto ou serviço na prática para seus Leads!",
          steps: [
            "Crie um roteiro sobre o conteúdo do produto ou serviço que você demonstrará.",
            "Defina datas e pessoas responsáveis pela demonstração",
          ],
        }),
      ],
    }),
    new StrategyStep({
      title: "Passo 3 - Crie a sua Landing Page para divulgar a oferta isca",
      content:
        "Depois de finalizar a criação da sua oferta isca chegou a hora de criar a página para disponibilizar a sua oferta.",
      steps: [
        "Clique no menu Converter;",
        "Clique no submenu Landing Pages;",
        "Clique no botão Criar Landing Page:",
        "Clique na opção Geração de Leads;",
        "Selecione o modelo desejado de acordo com a oferta escolhida no passo 1 e 2.",
        new StrategyStep({
          title: "Caso sua oferta seja:",
          steps: [
            "Quiz: escolha o modelo “Quiz: Descubra seu estilo”",
            "Webinar: escolha o modelo “Guardar dinheiro viagem”",
            "Demonstração: escolha o modelo “Solicite uma Demo!”",
          ],
        }),
        "Faça a edição das cores, textos e posicionamento de elementos de acordo com a sua necessidade",
        "Edite os campos do formulário",
        "Após finalizar sua landing page, o próximo passo é publicá-la clicando no botão “Salvar e Avançar” e depois no botão “Ativar Landing Page”, para que ela fique disponível online e possa ser compartilhada em seu site e redes sociais.",
        "Após criadas as suas Landing Pages, divulgue o link da sua Landing Page por e-mail, redes sociais, site e anúncios.",
        new LinksWithDescription({
          description: "Conteúdo de apoio para criar a sua Landing Page:",
          link: new Link({
            name: "Saiba mais",
            url: "https://ajuda.rdstation.com/s/article/Criar-Landing-Page-convers%C3%A3o-de-leads?language=pt_BR",
          }),
        }),
      ],
    }),
  ],
});

// console.log(template.toJson());
export default template;
