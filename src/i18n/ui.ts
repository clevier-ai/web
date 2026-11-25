export const langs = ["es", "ca", "en"] as const;
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
  en: {
    home: "/en",
    notice: "/en/legal-notice",
    privacy: "/en/privacy",
    cookies: "/en/cookies",
  },
};

export const ogLocales: Record<Lang, string> = {
  es: "es_ES",
  ca: "ca_ES",
  en: "en_GB",
};

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
  languages: string;
  legalLabel: string;
  claim: [string, string];
  lede: string;
  howLabel: string;
  howTitle: string;
  howIntro: string;
  steps: { title: string; detail: string; extra: string }[];
  workTitle: string;
  workLine: string;
  services: { id: string; name: string; meta: string; more: string; detail: string; extra: string }[];
  contactAfter: string;
  contactNeed: string;
  contactTitle: string;
  consent: { text: string; accept: string; reject: string };
  form: {
    name: string;
    email: string;
    message: string;
    send: string;
    company: string;
    or: string;
    sending: string;
    ok: string;
    error: string;
  };
  linkedin: string;
  notFoundTitle: string;
  notFoundClaim: string;
  notFoundLede: string;
  notFoundHome: string;
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
      "Automatizamos el trabajo que se repite. En semanas, con el precio cerrado antes de empezar.",
    skip: "Saltar al contenido",
    write: "Contacto",
    cta: "Consultar un proceso",
    mailSubject: "Consulta sobre un proceso",
    mailBody: "Empresa:\nProceso:\nHerramienta actual:\n",
    close: "Cerrar",
    languages: "Idioma",
    legalLabel: "Legal",
    claim: ["Automatizamos el trabajo que se repite.", "En semanas, con el precio cerrado."],
    lede: "Esa tarea que se repite cada semana. La herramienta se queda en tu empresa.",
    howLabel: "Cómo trabajamos",
    howTitle: "Cómo trabajamos",
    howIntro: "De la primera conversación a la herramienta en producción.",
    steps: [
      {
        title: "Describes el proceso",
        detail: "La tarea que se repite, la herramienta que usáis ahora y quién la realiza cada día.",
        extra: "Con una tarea basta para valorar si tiene sentido. No hace falta un dossier ni reunir a todo el equipo en la primera llamada.",
      },
      {
        title: "Cerramos el precio",
        detail: "Antes de construir nada. Sin facturación por horas ni sorpresas.",
        extra: "Se cierra por el alcance del trabajo, no por las horas invertidas. Si el alcance cambia, se vuelve a acordar antes de continuar.",
      },
      {
        title: "Lo ves en marcha",
        detail: "En semanas, con un caso real vuestro. Si algo no encaja, se corrige en esa sesión, no en un documento.",
        extra: "El caso es vuestro, con datos vuestros. Lo que no encaja se ajusta allí mismo.",
      },
      {
        title: "Se incorpora al día a día",
        detail: "Pasa al trabajo habitual de quien lo ejecuta.",
        extra: "A partir de ahí, quien realiza la tarea la utiliza a diario. Quien decide sabe qué está ocurriendo.",
      },
    ],
    workTitle: "Qué hacemos",
    workLine: "Implantación, formación, diagnóstico y mantenimiento. Siempre sobre un proceso real.",
    services: [
      {
        id: "implantacion",
        name: "Implantación",
        meta: "En semanas",
        more: "La herramienta se integra en un proceso que ya existe.",
        detail:
          "Se monta sobre el correo, una hoja o el programa de gestión. No hay un sistema nuevo que aprender.",
        extra:
          "En unas semanas lo probáis con un caso vuestro. Lo que no encaja se corrige en esa fase.",
      },
      {
        id: "formacion",
        name: "Formación IA",
        meta: "Equipo y dirección",
        more: "Quien ejecuta el trabajo y quien decide salen sabiendo utilizarla.",
        detail: "La práctica se hace con vuestro proceso, no con un ejemplo genérico.",
        extra: "Quien decide sale sabiendo qué hace la herramienta sola y qué queda en manos de una persona.",
      },
      {
        id: "rayos",
        name: "Rayos X",
        meta: "Por dónde empezar",
        more: "Una lista breve de por dónde empezar.",
        detail: "Qué automatizar primero, qué mantener y qué no se resuelve con IA.",
        extra: "Si no encaja, os lo indicamos en esa sesión. No es un informe extenso.",
      },
      {
        id: "gestionada",
        name: "IA gestionada",
        meta: "Después del arranque",
        more: "Cuando ya funciona, continuamos.",
        detail: "Se corrige lo que falla y se añaden casos nuevos.",
        extra: "Este tramo también tiene el precio cerrado, sin facturación por horas sueltas.",
      },
    ],
    contactAfter: "Cuéntanos el proceso.",
    contactNeed: "Te diremos si encaja y a qué precio, antes de construir nada.",
    contactTitle: "Contacto",
    consent: {
      text: "Solo usamos lo imprescindible. ¿Nos dejas medir las visitas de forma anónima?",
      accept: "Aceptar",
      reject: "Rechazar",
    },
    form: {
      name: "Nombre",
      company: "Empresa (opcional)",
      email: "Correo",
      message: "Mensaje",
      send: "Enviar",
      or: "O escríbenos directamente a",
      sending: "Enviando…",
      ok: "Recibido. Te respondemos en breve.",
      error: "No se ha podido enviar. Escríbenos a hola@clevier.ai.",
    },
    linkedin: "LinkedIn",
    notFoundTitle: "Página no encontrada — Clevier",
    notFoundClaim: "Esta página no existe.",
    notFoundLede: "El enlace está mal o la página se ha movido. Vuelve al inicio, o escríbenos si buscabas un proceso.",
    notFoundHome: "Volver al inicio",
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
          "Si escribes a hola@clevier.ai o usas el formulario de contacto, tratamos tu nombre, tu dirección de correo, el contenido del mensaje y los datos técnicos que añade el correo, como la hora.",
          "No hay cuentas ni analítica.",
          "El alojamiento puede guardar, por seguridad, la IP, el navegador y la hora de la visita. No los usamos para identificarte ni para publicidad.",
          "Para responderte y, si encaja, preparar una propuesta. Los registros técnicos sirven para mantener el sitio en pie.",
          "Si nos pides un proyecto, la base es la relación precontractual (artículo 6.1.b del RGPD). En los registros de seguridad, el interés legítimo de proteger el sitio (artículo 6.1.f).",
          "Los correos, hasta un año desde el último mensaje si no hay un proyecto. Si hay un encargo, durante la relación y los plazos legales que correspondan. Los registros de seguridad, el tiempo que fije el proveedor de alojamiento.",
          "No vendemos datos ni los cedemos. Acceden el proveedor de correo, el de alojamiento y el servicio que entrega los mensajes del formulario (Resend), solo para prestar el servicio.",
          "El servicio que entrega los mensajes del formulario (Resend) puede tratar datos fuera de la UE, con las garantías contractuales que ofrezca su proveedor.",
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
          "Ninguna. Ni propia ni de terceros. No hay analítica, publicidad ni vídeos incrustados. Solo guardamos en el navegador, sin cookie, tu respuesta al aviso de cookies.",
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
      "Automatitzem la feina que es repeteix. En setmanes, amb el preu tancat abans de començar.",
    skip: "Ves al contingut",
    write: "Contacte",
    cta: "Consultar un procés",
    mailSubject: "Consulta sobre un procés",
    mailBody: "Empresa:\nProcés:\nEina actual:\n",
    close: "Tanca",
    languages: "Idioma",
    legalLabel: "Legal",
    claim: ["Automatitzem la feina que es repeteix.", "En setmanes, amb el preu tancat."],
    lede: "Aquella tasca que es repeteix cada setmana. L'eina es queda a la teva empresa.",
    howLabel: "Com treballem",
    howTitle: "Com treballem",
    howIntro: "De la primera conversa a l'eina en producció.",
    steps: [
      {
        title: "Descrius el procés",
        detail: "La tasca que es repeteix, l'eina que feu servir ara i qui la fa cada dia.",
        extra: "Amb una tasca n'hi ha prou per valorar si té sentit. No cal un dossier ni reunir tot l'equip a la primera trucada.",
      },
      {
        title: "Tanquem el preu",
        detail: "Abans de construir res. Sense facturació per hores ni sorpreses.",
        extra: "Es tanca per l'abast de la feina, no per les hores invertides. Si l'abast canvia, es torna a acordar abans de continuar.",
      },
      {
        title: "El veus en marxa",
        detail: "En setmanes, amb un cas real vostre. Si alguna cosa no encaixa, es corregeix en aquella sessió, no en un document.",
        extra: "El cas és vostre, amb dades vostres. El que no encaixa s'ajusta allà mateix.",
      },
      {
        title: "S'incorpora al dia a dia",
        detail: "Passa a la feina habitual de qui l'executa.",
        extra: "A partir d'aquí, qui fa la tasca la fa servir cada dia. Qui decideix sap què està passant.",
      },
    ],
    workTitle: "Què fem",
    workLine: "Implantació, formació, diagnòstic i manteniment. Sempre sobre un procés real.",
    services: [
      {
        id: "implantacion",
        name: "Implantació",
        meta: "En setmanes",
        more: "L'eina s'integra en un procés que ja existeix.",
        detail:
          "Es munta sobre el correu, un full o el programa de gestió. No hi ha un sistema nou per aprendre.",
        extra: "En unes setmanes ho proveu amb un cas vostre. El que no encaixa es corregeix en aquella fase.",
      },
      {
        id: "formacion",
        name: "Formació en IA",
        meta: "Equip i direcció",
        more: "Qui executa la feina i qui decideix surten sabent fer-la servir.",
        detail: "La pràctica es fa amb el vostre procés, no amb un exemple genèric.",
        extra: "Qui decideix surt sabent què fa l'eina sola i què queda en mans d'una persona.",
      },
      {
        id: "rayos",
        name: "Raigs X",
        meta: "Per on començar",
        more: "Una llista breu de per on començar.",
        detail: "Què automatitzar primer, què mantenir i què no es resol amb IA.",
        extra: "Si no encaixa, us ho indiquem en aquella sessió. No és un informe extens.",
      },
      {
        id: "gestionada",
        name: "IA gestionada",
        meta: "Després de l'arrencada",
        more: "Quan ja funciona, continuem.",
        detail: "Es corregeix el que falla i s'afegeixen casos nous.",
        extra: "Aquest tram també té el preu tancat, sense facturació per hores soltes.",
      },
    ],
    contactAfter: "Explica'ns el procés.",
    contactNeed: "Et direm si encaixa i a quin preu, abans de construir res.",
    contactTitle: "Contacte",
    consent: {
      text: "Només fem servir l'imprescindible. Ens deixes mesurar les visites de manera anònima?",
      accept: "Acceptar",
      reject: "Rebutjar",
    },
    form: {
      name: "Nom",
      company: "Empresa (opcional)",
      email: "Correu",
      message: "Missatge",
      send: "Enviar",
      or: "O escriu-nos directament a",
      sending: "Enviant…",
      ok: "Rebut. Et responem aviat.",
      error: "No s'ha pogut enviar. Escriu-nos a hola@clevier.ai.",
    },
    linkedin: "LinkedIn",
    notFoundTitle: "Pàgina no trobada — Clevier",
    notFoundClaim: "Aquesta pàgina no existeix.",
    notFoundLede: "L'enllaç és incorrecte o la pàgina s'ha mogut. Torna a l'inici, o escriu-nos si buscaves un procés.",
    notFoundHome: "Tornar a l'inici",
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
          "Si escrius a hola@clevier.ai o fas servir el formulari de contacte, tractem el teu nom, la teva adreça de correu, el contingut del missatge i les dades tècniques que afegeix el correu, com l'hora.",
          "No hi ha comptes ni analítica.",
          "L'allotjament pot guardar, per seguretat, la IP, el navegador i l'hora de la visita. No les fem servir per identificar-te ni per a publicitat.",
          "Per respondre't i, si encaixa, preparar una proposta. Els registres tècnics serveixen per mantenir el web dret.",
          "Si ens demanes un projecte, la base és la relació precontractual (article 6.1.b del RGPD). En els registres de seguretat, l'interès legítim de protegir el web (article 6.1.f).",
          "Els correus, fins a un any des de l'últim missatge si no hi ha un projecte. Si hi ha un encàrrec, durant la relació i els terminis legals que corresponguin. Els registres de seguretat, el temps que fixi el proveïdor d'allotjament.",
          "No venem dades ni les cedim. Hi accedeixen el proveïdor de correu, el d'allotjament i el servei que lliura els missatges del formulari (Resend), només per prestar el servei.",
          "El servei que lliura els missatges del formulari (Resend) pot tractar dades fora de la UE, amb les garanties contractuals que ofereixi el seu proveïdor.",
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
          "Cap. Ni pròpia ni de tercers. No hi ha analítica, publicitat ni vídeos incrustats. Només desem al navegador, sense cookie, la teva resposta a l'avís de cookies.",
          "L'idioma va a l'adreça (per exemple, clevier.ai/ca). No desem una preferència d'idioma al navegador.",
          "Si algun dia fem servir una cookie que no sigui estrictament necessària, actualitzarem aquesta pàgina abans i, quan la llei ho exigeixi, demanarem permís.",
          "Des de la configuració del navegador pots veure i esborrar les cookies de qualsevol lloc.",
        ],
      }),
    },
  },
  en: {
    metaTitle: "Clevier — AI implementation for small and mid-sized businesses",
    metaDescription:
      "We automate the work that repeats. In weeks, with the price fixed before we start.",
    skip: "Skip to content",
    write: "Contact",
    cta: "Ask about a process",
    mailSubject: "Question about a process",
    mailBody: "Company:\nProcess:\nCurrent tool:\n",
    close: "Close",
    languages: "Language",
    legalLabel: "Legal",
    claim: ["We automate the work that repeats.", "In weeks, with the price fixed."],
    lede: "That task that repeats every week. The tool stays in your company.",
    howLabel: "How we work",
    howTitle: "How we work",
    howIntro: "From the first conversation to the tool in production.",
    steps: [
      {
        title: "You describe the process",
        detail: "The task that repeats, the tool you use today and who does it every day.",
        extra: "One task is enough to judge whether it makes sense. No dossier, and no need to gather the whole team for the first call.",
      },
      {
        title: "We fix the price",
        detail: "Before building anything. No hourly billing, no surprises.",
        extra: "It is fixed by the scope of the work, not by hours spent. If the scope changes, we agree it again before going on.",
      },
      {
        title: "You see it running",
        detail: "In weeks, with a real case of yours. If something doesn't fit, it is fixed in that session, not in a document.",
        extra: "The case is yours, with your data. What doesn't fit is adjusted right there.",
      },
      {
        title: "It joins the daily routine",
        detail: "It becomes part of the usual work of the person who does it.",
        extra: "From then on, whoever does the task uses it every day. Whoever decides knows what is happening.",
      },
    ],
    workTitle: "What we do",
    workLine: "Implementation, training, diagnosis and maintenance. Always on a real process.",
    services: [
      {
        id: "implantacion",
        name: "Implementation",
        meta: "In weeks",
        more: "The tool plugs into a process that already exists.",
        detail:
          "It is built on top of email, a spreadsheet or your management software. There is no new system to learn.",
        extra:
          "In a few weeks you try it with a case of your own. What doesn't fit is fixed in that phase.",
      },
      {
        id: "formacion",
        name: "AI training",
        meta: "Team and management",
        more: "Whoever does the work and whoever decides leave knowing how to use it.",
        detail: "Practice is done with your own process, not with a generic example.",
        extra: "Whoever decides leaves knowing what the tool does on its own and what stays in a person's hands.",
      },
      {
        id: "rayos",
        name: "X-ray",
        meta: "Where to start",
        more: "A short list of where to start.",
        detail: "What to automate first, what to keep and what AI doesn't solve.",
        extra: "If it doesn't fit, we tell you in that session. It is not a long report.",
      },
      {
        id: "gestionada",
        name: "Managed AI",
        meta: "After launch",
        more: "Once it works, we carry on.",
        detail: "What fails is fixed and new cases are added.",
        extra: "This stage also has a fixed price, with no scattered hourly billing.",
      },
    ],
    contactAfter: "Tell us about the process.",
    contactNeed: "We'll tell you whether it fits, and at what price, before building anything.",
    contactTitle: "Contact",
    consent: {
      text: "We only use what is essential. May we measure visits anonymously?",
      accept: "Accept",
      reject: "Reject",
    },
    form: {
      name: "Name",
      company: "Company (optional)",
      email: "Email",
      message: "Message",
      send: "Send",
      or: "Or write to us directly at",
      sending: "Sending…",
      ok: "Received. We'll reply shortly.",
      error: "It could not be sent. Write to us at hola@clevier.ai.",
    },
    linkedin: "LinkedIn",
    notFoundTitle: "Page not found — Clevier",
    notFoundClaim: "This page doesn't exist.",
    notFoundLede: "The link is wrong or the page has moved. Go back to the start, or write to us if you were looking for a process.",
    notFoundHome: "Back to home",
    legalNav: { notice: "Legal notice", privacy: "Privacy", cookies: "Cookies" },
    legal: {
      notice: notice("en", {
        title: "Legal notice — Clevier",
        description: "Owner, contact and terms of use of clevier.ai.",
        updated: "November 2026",
        heads: ["Owner", "What this website is", "Intellectual property", "Liability", "Governing law"],
        rows: ["Owner", "Email", "Website"],
        activity:
          "It presents Clevier. We implement technology and AI in small and mid-sized businesses: we get it running and the team uses it. There is no shop and no automatic contracting.",
        ip: "The texts, the brand, the logo and the symbol belong to Clevier. Do not use or copy them without written permission.",
        liability:
          "The information is general and may change. It is not an offer or a commitment to results. If we link to a third-party site, that site has its own owner.",
        law: "Spanish law applies. For any question, write to hola@clevier.ai.",
      }),
      privacy: privacy("en", {
        title: "Privacy — Clevier",
        description: "What data Clevier processes, why, and how to exercise your rights.",
        updated: "November 2026",
        heads: [
          "Controller",
          "What data there is",
          "Why",
          "Legal basis",
          "How long",
          "Who has access",
          "Outside the EU",
          "Your rights",
          "Minors",
          "Changes",
        ],
        rows: ["Controller", "Email"],
        paras: [
          "If you write to hola@clevier.ai or use the contact form, we process your name, your email address, the content of the message and the technical data the email adds, such as the time.",
          "There are no accounts or analytics.",
          "For security, hosting may store the IP address, browser and time of the visit. We do not use them to identify you or for advertising.",
          "To reply to you and, if it fits, prepare a proposal. Technical logs are used to keep the site running.",
          "If you ask us for a project, the basis is the pre-contractual relationship (article 6.1.b GDPR). For security logs, the legitimate interest in protecting the site (article 6.1.f).",
          "Emails, up to one year after the last message if there is no project. If there is an engagement, for the duration of the relationship and the applicable legal periods. Security logs, for the time set by the hosting provider.",
          "We do not sell or share data. The email provider, the hosting provider and the service that delivers the form messages (Resend) have access, only to provide the service.",
          "The service that delivers the form messages (Resend) may process data outside the EU, under the contractual safeguards its provider offers.",
          "You can request access, rectification, erasure, objection, restriction and portability at hola@clevier.ai. We reply within one month. You can also lodge a complaint with the Spanish Data Protection Agency: aepd.es.",
          "This website is not aimed at children under 14.",
          "If this policy changes, you will see it here, with the new date.",
        ],
      }),
      cookies: cookies({
        title: "Cookies — Clevier",
        description: "clevier.ai does not use cookies.",
        updated: "November 2026",
        heads: ["What a cookie is", "What we use here", "Language", "If this changes", "How to delete them"],
        paras: [
          "A small file that a site saves in the browser. It is used, for example, to remember a session.",
          "None. Neither our own nor third-party. There are no analytics, advertising or embedded videos. We only store in the browser, without a cookie, your answer to the cookie notice.",
          "The language is part of the address (for example, clevier.ai/en). We do not store a language preference in the browser.",
          "If one day we use a cookie that is not strictly necessary, we will update this page first and, where the law requires it, ask for permission.",
          "From your browser settings you can see and delete the cookies of any site.",
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
