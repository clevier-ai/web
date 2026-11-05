export const langs = ["es", "ca"] as const;
export type Lang = (typeof langs)[number];
export type LegalId = "notice" | "privacy" | "cookies";
export type PageId = "home" | LegalId;

export function isLang(value: string | undefined): value is Lang {
  return langs.includes(value as Lang);
}

export const routes: Record<Lang, Record<PageId, string>> = {
  es: {
    home: "/",
    notice: "/aviso-legal",
    privacy: "/privacidad",
    cookies: "/cookies",
  },
  ca: {
    home: "/ca",
    notice: "/ca/avis-legal",
    privacy: "/ca/privacitat",
    cookies: "/ca/cookies",
  },
};

export const ogLocales: Record<Lang, string> = {
  es: "es_ES",
  ca: "ca_ES",
};

export const surveyHref =
  "https://www.bde.es/f/webbe/SES/Secciones/Publicaciones/PublicacionesSeriadas/DocumentosOcasionales/26/Fich/do2624.pdf";

export const linkedinHref = "https://www.linkedin.com/company/clevier";

type Row = { dt: string; dd: string };
type Block = { h: string } | { p: string } | { rows: Row[] };

export type LegalDoc = {
  title: string;
  description: string;
  updated: string;
  blocks: Block[];
};

function who(): string {
  return "Clevier";
}

type Home = {
  metaTitle: string;
  metaDescription: string;
  skip: string;
  write: string;
  cta: string;
  mailSubject: string;
  mailBody: string;
  close: string;
  hintCta: string;
  languages: string;
  legalLabel: string;
  claim: [string, string];
  lede: string;
  howLabel: string;
  more: string;
  less: string;
  clientsTitle: string;
  howTitle: string;
  howIntro: string;
  steps: { title: string; detail: string }[];
  workTitle: string;
  workLine: string;
  services: { id: string; name: string; meta: string; more: string; detail: string }[];
  prepareTitle: string;
  prepareIntro: string;
  prepare: { k: string; v: string }[];
  surveyLabel: string;
  survey: string;
  surveySource: string;
  contactTitle: string;
  linkedin: string;
  legalNav: Record<LegalId, string>;
  legal: Record<LegalId, LegalDoc>;
};

function notice(
  lang: Lang,
  doc: {
    title: string;
    description: string;
    updated: string;
    activity: string;
    ip: string;
    liability: string;
    law: string;
    heads: string[];
    rows: string[];
  },
): LegalDoc {
  return {
    title: doc.title,
    description: doc.description,
    updated: doc.updated,
    blocks: [
      {
        rows: [
          { dt: doc.rows[0], dd: who() },
          { dt: doc.rows[1], dd: "hola@clevier.ai" },
          { dt: doc.rows[2], dd: "clevier.ai" },
        ],
      },
      { h: doc.heads[1] },
      { p: doc.activity },
      { h: doc.heads[2] },
      { p: doc.ip },
      { h: doc.heads[3] },
      { p: doc.liability },
      { h: doc.heads[4] },
      { p: doc.law },
    ],
  };
}

function privacy(
  lang: Lang,
  doc: {
    title: string;
    description: string;
    updated: string;
    heads: string[];
    rows: string[];
    paras: string[];
  },
): LegalDoc {
  const [data1, data2, data3, purpose, basis, time, access, transfer, rights, minors, changes] = doc.paras;
  return {
    title: doc.title,
    description: doc.description,
    updated: doc.updated,
    blocks: [
      {
        rows: [
          { dt: doc.rows[0], dd: who() },
          { dt: doc.rows[1], dd: "hola@clevier.ai" },
        ],
      },
      { h: doc.heads[1] },
      { p: data1 },
      { p: data2 },
      { p: data3 },
      { h: doc.heads[2] },
      { p: purpose },
      { h: doc.heads[3] },
      { p: basis },
      { h: doc.heads[4] },
      { p: time },
      { h: doc.heads[5] },
      { p: access },
      { h: doc.heads[6] },
      { p: transfer },
      { h: doc.heads[7] },
      { p: rights },
      { h: doc.heads[8] },
      { p: minors },
      { h: doc.heads[9] },
      { p: changes },
    ],
  };
}

function cookies(doc: { title: string; description: string; updated: string; heads: string[]; paras: string[] }): LegalDoc {
  const blocks: Block[] = [];
  doc.heads.forEach((head, index) => {
    blocks.push({ h: head });
    blocks.push({ p: doc.paras[index] });
  });
  return { title: doc.title, description: doc.description, updated: doc.updated, blocks };
}

export const copy = {
  es: {
    metaTitle: "Clevier — Implantación de IA para pymes",
    metaDescription:
      "Montamos una herramienta de IA dentro del proceso que ya tienes. El precio se cierra antes de empezar.",
    skip: "Saltar al contenido",
    write: "Háblanos",
    cta: "Cuéntanos el proceso",
    mailSubject: "Un proceso que nos come la semana",
    mailBody: "Empresa:\nProceso:\nHerramienta que usas ahora:\n",
    close: "Cerrar",
    hintCta: "Leer en castellano",
    languages: "Idioma",
    legalLabel: "Legal",
    claim: ["Montamos la herramienta.", "Se queda en el trabajo."],
    lede: "Entra en un proceso que ya tienes. El precio se cierra antes.",
    howLabel: "Cómo va",
    more: "Más",
    less: "Menos",
    clientsTitle: "Con quién hemos trabajado",
    howTitle: "Cómo va",
    howIntro: "De lo que nos cuentas a la herramienta dentro del proceso.",
    steps: [
      {
        title: "Cuentas el proceso",
        detail: "La tarea que se repite, la herramienta que usas ahora y quién la hace cada día.",
      },
      {
        title: "Cerramos el precio",
        detail: "Antes de montar nada, y no por horas.",
      },
      {
        title: "Lo ves funcionar",
        detail: "Pronto, con un caso tuyo. Si algo no encaja, se corrige ahí, no en un documento.",
      },
      {
        title: "Entra en el trabajo",
        detail: "El parte, el pedido, la factura o el correo que se contesta siempre igual.",
      },
    ],
    workTitle: "Qué hacemos",
    workLine: "Si la IA no es la respuesta, te lo decimos.",
    services: [
      {
        id: "implantacion",
        name: "Implantación",
        meta: "En el proceso",
        more: "Un agente o una automatización dentro de un proceso que ya existe.",
        detail:
          "El parte de trabajo, el pedido, la factura o el correo que se contesta siempre igual. Entra en el trabajo, y al final la ves con un caso tuyo.",
      },
      {
        id: "formacion",
        name: "Formación IA",
        meta: "Plantilla y comité",
        more: "De quien hace el trabajo diario a quien decide.",
        detail:
          "Quien hace el trabajo diario aprende a usar la herramienta en su proceso. Quien decide ve qué hace, qué datos toca y cómo encaja con el AI Act.",
      },
      {
        id: "rayos",
        name: "Rayos X",
        meta: "Por dónde",
        more: "Miramos los procesos y decimos por dónde se empieza.",
        detail:
          "Se mira la tarea que se repite, la herramienta que ya usas y quién la hace. Al final hay un sitio concreto por donde empezar.",
      },
      {
        id: "gestionada",
        name: "IA gestionada",
        meta: "Al día",
        more: "Mantenimiento, mejoras y casos nuevos.",
        detail:
          "Cuando ya funciona, sigue alguien al otro lado. Se corrige lo que se rompe y se añaden casos. La herramienta se ajusta al proceso.",
      },
    ],
    prepareTitle: "Qué preparar",
    prepareIntro: "Con tres cosas basta para decirte si encaja y a qué precio.",
    prepare: [
      { k: "El proceso", v: "La tarea que se repite cada semana. Una basta." },
      { k: "La herramienta", v: "La que usas ahora: el correo, una hoja o el programa de gestión." },
      { k: "Quién", v: "Quien hace el trabajo cada día, y quien decide." },
    ],
    surveyLabel: "El dato",
    survey:
      "En el primer trimestre de 2026, entre el 30 % y el 35 % de las pymes españolas usaba IA, y cerca del 70 % de las grandes. En las pymes el uso se ha duplicado desde 2024 y sigue siendo, sobre todo, experimental.",
    surveySource: "Banco de España, Documento Ocasional 2624.",
    contactTitle: "Contacto",
    linkedin: "LinkedIn",
    legalNav: { notice: "Aviso legal", privacy: "Privacidad", cookies: "Cookies" },
    legal: {
      notice: notice("es", {
        title: "Aviso legal — Clevier",
        description: "Titular, contacto y condiciones de uso de clevier.ai.",
        updated: "Noviembre 2026",
        heads: ["Titular", "Qué es esta web", "Propiedad intelectual", "Responsabilidad", "Ley aplicable"],
        rows: ["Titular", "Correo", "Web"],
        activity:
          "Presenta a Clevier. Implantamos tecnología e IA en pymes: la ponemos en marcha y el equipo la usa. No hay tienda ni contratación automática.",
        ip: "Los textos, la marca, el logotipo y el símbolo son de Clevier. No los uses ni los copies sin permiso por escrito.",
        liability:
          "La información es general y puede cambiar. No es una oferta ni un compromiso de resultado. Si enlazamos con un sitio de terceros, ese sitio tiene su propio responsable.",
        law: "Se aplica la ley española. Para cualquier cuestión, escribe a hola@clevier.ai.",
      }),
      privacy: privacy("es", {
        title: "Privacidad — Clevier",
        description: "Qué datos trata Clevier, para qué y cómo ejercer tus derechos.",
        updated: "Noviembre 2026",
        heads: [
          "Responsable",
          "Qué datos hay",
          "Para qué",
          "Base legal",
          "Cuánto tiempo",
          "Quién accede",
          "Fuera de la UE",
          "Tus derechos",
          "Menores",
          "Cambios",
        ],
        rows: ["Responsable", "Correo"],
        paras: [
          "Si escribes a hola@clevier.ai, tratamos tu dirección, el contenido del mensaje y los datos técnicos que añade el correo, como la hora.",
          "No hay formularios, cuentas ni analítica.",
          "El alojamiento puede guardar, por seguridad, la IP, el navegador y la hora de la visita. No los usamos para identificarte ni para publicidad.",
          "Para responderte y, si encaja, preparar una propuesta. Los registros técnicos sirven para mantener el sitio en pie.",
          "Si nos pides un proyecto, la base es la relación precontractual (artículo 6.1.b del RGPD). En los registros de seguridad, el interés legítimo de proteger el sitio (artículo 6.1.f).",
          "Los correos, hasta un año desde el último mensaje si no hay un proyecto. Si hay un encargo, durante la relación y los plazos legales que correspondan. Los registros de seguridad, el tiempo que fije el proveedor de alojamiento.",
          "No vendemos datos ni los cedemos. Acceden el proveedor de correo y el de alojamiento, solo para prestar el servicio.",
          "No transferimos datos por nuestra cuenta ni hacemos transferencias internacionales por iniciativa propia.",
          "Puedes pedir acceso, rectificación, supresión, oposición, limitación y portabilidad en hola@clevier.ai. Respondemos en el plazo de un mes. También puedes reclamar ante la Agencia Española de Protección de Datos: aepd.es.",
          "Esta web no se dirige a menores de 14 años.",
          "Si esta política cambia, lo verás aquí, con la fecha nueva.",
        ],
      }),
      cookies: cookies({
        title: "Cookies — Clevier",
        description: "clevier.ai no utiliza cookies.",
        updated: "Noviembre 2026",
        heads: ["Qué es una cookie", "Qué usamos aquí", "Idioma", "Si esto cambia", "Cómo borrarlas"],
        paras: [
          "Un pequeño archivo que un sitio guarda en el navegador. Sirve, por ejemplo, para recordar una sesión.",
          "Ninguna. Ni propia ni de terceros. No hay analítica, publicidad ni vídeos incrustados.",
          "El idioma va en la dirección (por ejemplo, clevier.ai/ca). No guardamos una preferencia de idioma en el navegador.",
          "Si algún día usamos una cookie que no sea estrictamente necesaria, actualizaremos esta página antes y, cuando la ley lo exija, pediremos permiso.",
          "Desde la configuración del navegador puedes ver y borrar las cookies de cualquier sitio.",
        ],
      }),
    },
  },
  ca: {
    metaTitle: "Clevier — Implantació d'IA per a pimes",
    metaDescription:
      "Muntem una eina d'IA dins del procés que ja tens. El preu es tanca abans de començar.",
    skip: "Ves al contingut",
    write: "Parla'ns",
    cta: "Explica'ns el procés",
    mailSubject: "Un procés que ens menja la setmana",
    mailBody: "Empresa:\nProcés:\nEina que fas servir ara:\n",
    close: "Tanca",
    hintCta: "Llegir en català",
    languages: "Idioma",
    legalLabel: "Legal",
    claim: ["Muntem l'eina.", "Es queda a la feina."],
    lede: "Entra en un procés que ja tens. El preu es tanca abans.",
    howLabel: "Com va",
    more: "Més",
    less: "Menys",
    clientsTitle: "Amb qui hem treballat",
    howTitle: "Com va",
    howIntro: "Del que ens expliques a l'eina dins del procés.",
    steps: [
      {
        title: "Expliques el procés",
        detail: "La tasca que es repeteix, l'eina que fas servir ara i qui la fa cada dia.",
      },
      {
        title: "Tanquem el preu",
        detail: "Abans de muntar res, i no per hores.",
      },
      {
        title: "El veus funcionar",
        detail: "Aviat, amb un cas teu. Si alguna cosa no encaixa, es corregeix allà, no en un document.",
      },
      {
        title: "Entra a la feina",
        detail: "El full, la comanda, la factura o el correu que es contesta sempre igual.",
      },
    ],
    workTitle: "Què fem",
    workLine: "Si la IA no és la resposta, t'ho diem.",
    services: [
      {
        id: "implantacion",
        name: "Implantació",
        meta: "En el procés",
        more: "Un agent o una automatització dins d'un procés que ja existeix.",
        detail:
          "El full de treball, la comanda, la factura o el correu que es contesta sempre igual. Entra a la feina, i al final la veus amb un cas teu.",
      },
      {
        id: "formacion",
        name: "Formació en IA",
        meta: "Plantilla i comitè",
        more: "De qui fa la feina diària a qui decideix.",
        detail:
          "Qui fa la feina diària aprèn a fer servir l'eina en el seu procés. Qui decideix veu què fa, quines dades toca i com encaixa amb l'AI Act.",
      },
      {
        id: "rayos",
        name: "Raigs X",
        meta: "Per on",
        more: "Mirem els processos i diem per on es comença.",
        detail:
          "Es mira la tasca que es repeteix, l'eina que ja fas servir i qui la fa. Al final hi ha un lloc concret per on començar.",
      },
      {
        id: "gestionada",
        name: "IA gestionada",
        meta: "Al dia",
        more: "Manteniment, millores i casos nous.",
        detail:
          "Quan ja funciona, hi ha algú a l'altra banda. Es corregeix el que es trenca i s'afegeixen casos. L'eina s'ajusta al procés.",
      },
    ],
    prepareTitle: "Què preparar",
    prepareIntro: "Amb tres coses n'hi ha prou per dir-te si encaixa i a quin preu.",
    prepare: [
      { k: "El procés", v: "La tasca que es repeteix cada setmana. Una en té prou." },
      { k: "L'eina", v: "La que fas servir ara: el correu, un full o el programa de gestió." },
      { k: "Qui", v: "Qui fa la feina cada dia, i qui decideix." },
    ],
    surveyLabel: "La dada",
    survey:
      "El primer trimestre de 2026, entre el 30 % i el 35 % de les pimes espanyoles feia servir IA, i prop del 70 % de les grans. A les pimes l'ús s'ha duplicat des del 2024 i continua sent, sobretot, experimental.",
    surveySource: "Banc d'Espanya, Document Ocasional 2624.",
    contactTitle: "Contacte",
    linkedin: "LinkedIn",
    legalNav: { notice: "Avís legal", privacy: "Privacitat", cookies: "Cookies" },
    legal: {
      notice: notice("ca", {
        title: "Avís legal — Clevier",
        description: "Titular, contacte i condicions d'ús de clevier.ai.",
        updated: "Novembre 2026",
        heads: ["Titular", "Què és aquest web", "Propietat intel·lectual", "Responsabilitat", "Llei aplicable"],
        rows: ["Titular", "Correu", "Web"],
        activity:
          "Presenta Clevier. Implantem tecnologia i IA en pimes: la posem en marxa i l'equip la fa servir. No hi ha botiga ni contractació automàtica.",
        ip: "Els textos, la marca, el logotip i el símbol són de Clevier. No els facis servir ni els copiïs sense permís per escrit.",
        liability:
          "La informació és general i pot canviar. No és una oferta ni un compromís de resultat. Si enllacem un lloc de tercers, aquell lloc té el seu responsable.",
        law: "S'aplica la llei espanyola. Per a qualsevol qüestió, escriu a hola@clevier.ai.",
      }),
      privacy: privacy("ca", {
        title: "Privacitat — Clevier",
        description: "Quines dades tracta Clevier, per a què i com exercir els teus drets.",
        updated: "Novembre 2026",
        heads: [
          "Responsable",
          "Quines dades hi ha",
          "Per a què",
          "Base legal",
          "Quant de temps",
          "Qui hi accedeix",
          "Fora de la UE",
          "Els teus drets",
          "Menors",
          "Canvis",
        ],
        rows: ["Responsable", "Correu"],
        paras: [
          "Si escrius a hola@clevier.ai, tractem la teva adreça, el contingut del missatge i les dades tècniques que afegeix el correu, com l'hora.",
          "No hi ha formularis, comptes ni analítica.",
          "L'allotjament pot guardar, per seguretat, la IP, el navegador i l'hora de la visita. No les fem servir per identificar-te ni per a publicitat.",
          "Per respondre't i, si encaixa, preparar una proposta. Els registres tècnics serveixen per mantenir el web dret.",
          "Si ens demanes un projecte, la base és la relació precontractual (article 6.1.b del RGPD). En els registres de seguretat, l'interès legítim de protegir el web (article 6.1.f).",
          "Els correus, fins a un any des de l'últim missatge si no hi ha un projecte. Si hi ha un encàrrec, durant la relació i els terminis legals que corresponguin. Els registres de seguretat, el temps que fixi el proveïdor d'allotjament.",
          "No venem dades ni les cedim. Hi accedeixen el proveïdor de correu i el d'allotjament, només per prestar el servei.",
          "No transferim dades pel nostre compte ni fem transferències internacionals per iniciativa pròpia.",
          "Pots demanar accés, rectificació, supressió, oposició, limitació i portabilitat a hola@clevier.ai. Respondrem en el termini d'un mes. També pots reclamar davant l'Agència Espanyola de Protecció de Dades: aepd.es.",
          "Aquest web no es dirigeix a menors de 14 anys.",
          "Si aquesta política canvia, ho veuràs aquí, amb la data nova.",
        ],
      }),
      cookies: cookies({
        title: "Cookies — Clevier",
        description: "clevier.ai no fa servir cookies.",
        updated: "Novembre 2026",
        heads: ["Què és una cookie", "Què fem servir", "Idioma", "Si això canvia", "Com esborrar-les"],
        paras: [
          "Un fitxer petit que un web desa al navegador. Serveix, per exemple, per recordar una sessió.",
          "Cap. Ni pròpia ni de tercers. No hi ha analítica, publicitat ni vídeos incrustats.",
          "L'idioma va a l'adreça (per exemple, clevier.ai/ca). No desem una preferència d'idioma al navegador.",
          "Si algun dia fem servir una cookie que no sigui estrictament necessària, actualitzarem aquesta pàgina abans i, quan la llei ho exigeixi, demanarem permís.",
          "Des de la configuració del navegador pots veure i esborrar les cookies de qualsevol lloc.",
        ],
      }),
    },
  },
} satisfies Record<Lang, Home>;

export type Copy = (typeof copy)[Lang];

export function linked(text: string): { kind: "text" | "mail" | "aepd"; text: string }[] {
  return text
    .split(/(hola@clevier\.ai|aepd\.es)/g)
    .filter(Boolean)
    .map((part) => {
      if (part === "hola@clevier.ai") return { kind: "mail", text: part };
      if (part === "aepd.es") return { kind: "aepd", text: part };
      return { kind: "text", text: part };
    });
}
