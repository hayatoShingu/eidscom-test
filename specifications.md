# Test di valutazione preliminare

*Per una valutazione preliminare del candidato a questa posizione, è richiesto lo sviluppo di un piccolo progetto volto a mettere in evidenza le competenze richieste.
Le specifiche hanno degli aspetti volutamente generici per lasciare libertà al candidato di prendere l’iniziativa, poiché la finalità è di analizzare l’approccio, non necessariamente la completezza o la dimensione del progetto.*

**In particolare saranno prese in considerazione le scelte implementative e lo stile e utilizzati nello sviluppo del progetto.**

Una volta terminato il progetto o parte di esso sarà necessario pubblicarlo in un repository GitHub per permetterne la condivisione.

Di seguito i dettagli dell’applicativo da sviluppare:

* Deve essere sviluppato sulla piattaforma Angular 10+
* Deve offrire la possibilità di compiere le classiche operazioni CRUD su una teorica base di dati a
scelta.
* Si può appoggiare alle API di qualsiasi tipo di servizio per gestire la base di dati: un servizio esterno,
un servizio simulato da un pacchetto incluso nel progetto, ecc. L’importante è che il progetto
contenga tutte le risorse per poterlo eseguire.
* Il routing deve prevedere almeno le rotte per la ricerca nelle risorse della base di dati e per la
creazione/modifica.
* Deve essere inserito un elemento di tipo “loader” che venga mostrato durante la comunicazione
dell’applicativo con i servizi su cui si appoggia.
* Deve essere presente un controllo che richieda la conferma o annullamento in caso di cambio rotta
senza aver salvato le modifiche all’interno di un form.
* Il layout può essere anche molto essenziale ma deve essere pensato in modo responsive.
* Configurazione a piacere di uno strumento di testing


---

* Pagina principale
* Pagina per lettura [lista] ( **R**ead)
  * per modifica (**C**reate)
  * per cellazione (**D**elete)
* Pagina per creazione (**C**reate)

* Unit test

---
* Page Base
  * List page
  * Creation Page ( C )
  * Detail Page (R, U, D)
* Service (CRUD operations)
* Loader
---
https://jsonplaceholder.typicode.com/

---
