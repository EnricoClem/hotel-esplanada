🚀 Pubblicazione del sito su GitHub Pages
Questo progetto è realizzato con Vue + Vite e viene pubblicato su GitHub Pages tramite la cartella docs.

🧩 Requisiti
Il file vite.config.js deve contenere base: '/' (se usi un dominio personalizzato) oppure base: '/nome-repo/' (se usi l’URL GitHub Pages).

La cartella di output deve essere rinominata in docs.

🔄 Procedura di pubblicazione
Costruisci il progetto

bash
Copia
Modifica
npm run build
Rinomina la cartella generata

bash
Copia
Modifica
mv dist docs
Effettua il commit e push

bash
Copia
Modifica
git add .
git commit -m "Aggiorna build"
git push origin main
Controlla le impostazioni GitHub Pages

Vai su Settings → Pages

Source: Deploy from a branch

Branch: main

Folder: /docs

(Facoltativo) Configura il dominio personalizzato

Aggiungi un file CNAME nella cartella docs con il dominio personalizzato (es. www.miosito.it)

Configura i DNS su Register.it:

Record A (root domain):

Copia
Modifica
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
Record CNAME:

lua
Copia
Modifica
www → tuo-username.github.io
✅ Note
I cambiamenti potrebbero impiegare qualche minuto per propagarsi.

Se il sito non si aggiorna, prova ad aprirlo in modalità incognito o svuota la cache del browser.

Per HTTPS, assicurati che GitHub Pages segnali "Certificate active" nelle impostazioni del dominio.