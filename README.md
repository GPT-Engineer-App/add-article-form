# add-article-form

Aggiungi Articolo - Nuova Pagina
Campi del Form:
Nome Articolo (string): Campo di testo per il nome dell'articolo.
Codice Articolo (string): Campo di testo per il codice univoco dell'articolo.
GTIN (string): Campo di testo per il Global Trade Item Number, come un codice EAN, se applicabile.
Quantità (integer): Campo numerico per la quantità attuale dell'articolo in magazzino.
Prezzo (double): Campo numerico per il prezzo unitario dell'articolo.
Descrizione (string): Area di testo per una descrizione dettagliata dell'articolo.
Categoria (dropdown): Un menu a discesa che elenca tutte le categorie disponibili, permettendo di selezionare quella a cui l'articolo appartiene.
Fornitore (dropdown): Un menu a discesa che elenca tutti i fornitori disponibili, per selezionare il fornitore dell'articolo.
Elementi Addizionali:
Bottone Salva: Per salvare le informazioni inserite o modificate dell'articolo. Al salvataggio, l'utente potrebbe essere reindirizzato all'elenco degli articoli con un messaggio di conferma.
Bottone Annulla: Per uscire dal form senza salvare le modifiche. Può reindirizzare l'utente all'elenco degli articoli o alla pagina precedente.
Validazione del Form: Prima del salvataggio, il sistema dovrebbe validare i campi per assicurarsi che tutte le informazioni richieste siano state inserite correttamente e che i dati siano validi (es. formato GTIN, quantità positiva).

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/add-article-form.git
cd add-article-form
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
