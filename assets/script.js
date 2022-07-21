
// prendiamo il pulsante per calcolare
const SUBMIT_DOM = document.querySelector('input[type="submit"]');
// prendiamo l'elemento da inserire il totale calcolato
const TOTAL = document.querySelector('#total');
// prendiamo l'elemento per inserire il nome e cognome
const NAME_USERNAME = document.querySelector('#passengerName');
// prezo per KM
const PREZZO_PER_KM = 0.21;

// al ascolto del evento "click" attiviamo una funzione
SUBMIT_DOM.addEventListener('click', () => {

    // prendiamo l'elemento input dei KM
    const KM_DOM = document.querySelector('input[name="KM"]');
    // prendiamo il valore del elemento input dei km transormato in un interro e mantenuto nel numero assoluto
    const KM_DOM_VALUE = parseInt(Math.abs(KM_DOM.value));
    // prendiamo l'elemento select con i suoi valori scelti
    const DISCOUNT_DOM = parseFloat(document.querySelector('select[name="discount"]').value);
    // prendiamo il valore del input name_username
    const NAME_USERNAME_VALUE = document.querySelector('#name_username').value;
    // prendiamo l'elemento del offerta
    const OFFER = document.querySelector('#offer');

    // SE il valore del km_dom e maggiore di 0
    if (KM_DOM_VALUE > 0) {
        // inseriamo il nome valore nel aposito spazio del biglietto nome
        NAME_USERNAME.textContent = NAME_USERNAME_VALUE;

        // calcoliamo il valore per il prezzo del KM
        const CALCULATE = KM_DOM_VALUE * PREZZO_PER_KM;

        // generiamo un numero random per CODE PC
        const CODE_CP = Math.floor(Math.random() * 1000000);
        // inseriamo il CODE PC nel apposito elemento del biglietto
        document.querySelector('#codeCP').textContent = CODE_CP;

        // generiamo un numero random per carriage
        const CARRIAGE = Math.ceil(Math.random() * 15);
        // inseriamo il CARRIAGE nel apposito elemento del biglietto
        document.querySelector('#carriage').textContent = CARRIAGE;

        // SE il valore del input dei KM non e addatto a noi:
        if (isNaN(KM_DOM_VALUE)) {
            // manda un alert di avertenza
            alert('Attenzione: Campo dei "KM" non è compilatto in modo corretto');
        }
        // ALTRIMENTI:
        else {
            // il valore del input dei KM e uguale al valore coretto
            KM_DOM.value = KM_DOM_VALUE;
            // inserisci nel elemento il calcolo con il limite di decimali
            TOTAL.innerHTML = `${(CALCULATE - (CALCULATE * DISCOUNT_DOM)).toFixed(2)} &euro;`;
        }

        // SE discount dom e uguale a 0
        if (DISCOUNT_DOM == 0) {
            // nel contenuto del offer inseriamo una stringa
            OFFER.textContent = 'Biglietto Standard';
        }
        // SE discount dom e uguale a 0.2
        else if (DISCOUNT_DOM == 0.2) {
            // nel contenuto del offer inseriamo una stringa
            OFFER.textContent = 'Biglietto Minorenni';
        }
        // SE discount dom e uguale a 0.4
        else {
            // nel contenuto del offer inseriamo una stringa
            OFFER.textContent = 'Biglietto Over 65';
        }

    }
    // ALTRIMENTI:
    else {
        // Attiva un allert con l'eventuale stringa
        alert('Attenzione: Inserisci correttamente i dati!');
    }
});