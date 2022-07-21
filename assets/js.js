
// prendiamo il pulsante per calcolare
const SUBMIT_DOM = document.querySelector('input[type="submit"]');
// prendiamo l'elemento da inserire il totale calcolato
const TOTAL = document.querySelector('#total');
// prezo per KM
const PREZZO_PER_KM = 0.21;

// al ascolto del evento "click" attiviamo una funzione
SUBMIT_DOM.addEventListener('click', () => {

    // prendiamo l'elemento input dei KM
    const KM_DOM = document.querySelector('input[name="KM"]');
    // prendiamo il valore del elemento input dei km transormato in un interro e mantenuto nel numero assoluto
    const KM_DOM_VALUE = parseInt(Math.abs(KM_DOM.value));
    // prendiamo l'elemento select con i suoi valori scelti
    const YEARS_DOM = parseFloat(document.querySelector('select[name="years"]').value);

    // calcoliamo il valore per il prezzo del KM
    const CALCULATE = KM_DOM_VALUE * PREZZO_PER_KM;

    // SE il valore del input dei KM non e addatto a noi:
    if(isNaN(KM_DOM_VALUE)){
        // manda un alert di avertenza
        alert('Attenzione: Campo dei "KM" non è compilatto in modo corretto');
    }
    // ALTRIMENTI:
    else {
        // il valore del input dei KM e uguale al valore coretto
        KM_DOM.value = KM_DOM_VALUE;
        // inserisci nel elemento il calcolo con il limite di decimali
        TOTAL.innerHTML = `${(CALCULATE - (CALCULATE * YEARS_DOM)).toFixed(2)} &euro;`;
    }
});