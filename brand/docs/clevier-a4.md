# Documents A4 de Clevier

Adjunta aquest fitxer i `clevier-a4.html`. El HTML és la pàgina. Aquest text diu com omplir-la. No inventis una altra maqueta.

`clevier-a4-sample.pdf` és el briefing d'exemple ja imprès, per veure la pàgina. No s'edita.

El HTML porta aquest mateix exemple (Forn Jaume). Es substitueix sencer. El CSS es queda.

## Què és un document

Una eina de paper per a un moment del projecte. Dues a cinc pàgines. Sense portada, sense índex, sense glow de LinkedIn.

El tipus viu a la capçalera. El títol és l'assumpte, en una frase, sentence case.

| Tipus | Per a què | Capçalera |
|---|---|---|
| Briefing | El que hem entès, abans de tancar preu i termini | Briefing |
| Contracte | El que les dues parts firmen | Contracte |
| Handoff | El que queda en producció, i on és | Handoff |

En castellà: Briefing, Contrato, Handoff. En anglès: Briefing, Contract, Handoff. El cos va en l'idioma de la feina. El to no canvia.

## Pàgina

A4. El CSS ja porta els marges, la capçalera fixa, el peu i el número de pàgina.

- Fons blanc `#FFFFFF`, tinta `#1A1C1E`, pedra `#3F454C`, boira `#D8D9D6`.
- La llima `#C8F169` és una línia fina a la primera pàgina. No es repeteix. No pinta text ni blocs.
- El verd no s'usa. El mark és `brand/logo/clevier-logo.svg`, ja enganxat a la capçalera.
- Títol: Fraunces 700. Seccions: Fraunces 600, amb el número en JetBrains Mono a l'esquerra. Cos: Figtree. Etiquetes: JetBrains Mono.
- Aquestes lletres són les de la web. El manual d'octubre, que diu Sora i un altre símbol, no s'aplica aquí.

Imprimeix a A4, amb gràfics de fons, sense la capçalera ni el peu del navegador.

## Esquelet

Tots tres tipus porten el mateix, en aquest ordre:

1. Capçalera: el mark i el tipus.
2. Barra llima, només a la primera pàgina.
3. Títol de l'assumpte.
4. Una frase de què és aquest paper.
5. Fitxa: client, data `DD.MM.AAAA`, versió `v1`.
6. Seccions numerades `01`, `02`, `03`.
7. L'última secció és el tancament, amb la classe `close`.

Es treu una secció si no hi ha res a dir-hi. No se n'afegeixen de noves. No es numera el que no existeix.

## Briefing

El que hem entès. Si una línia no és certa, el client ho diu ara.

| Secció | Què hi va |
|---|---|
| 01 El context | El negoci, en quatre línies. Qui fa què. |
| 02 El problema | El que falla avui, amb un cas concret. |
| 03 Què ha de fer l'eina | Tres o quatre frases. Què fa, no com està feta. |
| 04 Què queda fora | Una taula de dues columnes: Entra / No entra. |
| 05 Termini | Setmanes, i què es veu a la primera. El preu no es fixa aquí. |
| 06 El que cal decidir | El tancament. Les decisions que encara no estan preses. |

## Contracte

El que s'ha acordat. Les clàusules surten del que l'usuari ha dit. No s'inventa una clàusula de responsabilitat, una penalització ni un termini que no t'hagin donat. Això és l'estructura, no un model jurídic.

| Secció | Què hi va |
|---|---|
| 01 Les parts | Qui contracta i qui és Clevier. Noms reals. |
| 02 L'objecte | Quina eina es construeix, en una frase. |
| 03 Què entreguem | La llista del que queda en producció. |
| 04 Termini | Data d'inici, setmanes, què es veu a la primera. |
| 05 Preu | La xifra que t'han donat, i quan es paga. Si no hi és, es deixa el forat. |
| 06 Què no inclou | El que el preu no cobreix. |
| 07 Propietat i dades | De qui és el codi i on viuen les dades, només si s'ha acordat. |
| 08 Com es tanca | Dues firmes. Fes servir el bloc de firmes del comentari de l'HTML. |

## Handoff

El dia que l'eina ja funciona. Qui l'ha de llegir és qui l'usarà, no qui l'ha comprat.

| Secció | Què hi va |
|---|---|
| 01 Què hi ha en producció | L'eina, en una frase, i l'adreça. |
| 02 Com s'usa | Els tres gestos del dia a dia. |
| 03 On viu | Repositori, hosting, domini. |
| 04 Com es canvia | Qui pot demanar un canvi i com. |
| 05 Què vigilar | El que es trenca si ningú ho mira. |
| 06 Accessos | El tancament. Taula Què / On / Qui hi entra, i a qui escriure si falla. |

## To

- Tracta de tu. Frases curtes. Una dada concreta per secció: un dia, una hora, un nom, un lloc.
- Paraules que sí: eina, funciona, preu tancat, en setmanes, les teves dades, resultat.
- Paraules que no: transformació digital, disruptiu, sinergies, end-to-end, revolucionari, jornades, entregables, workshops.
- «IA» només si va seguida del que fa. Sense emojis. Sense preu inventat. Sense prometre el que no s'ha acordat.
