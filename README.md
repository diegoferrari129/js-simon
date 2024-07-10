Esercizio di oggi: Simon Says
nome repo: js-simon

Descrizione: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Numero push minimi: 7

Consigli del giorno:
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.

//////////////////////////////////////////////////////////////////////////////
1 - dichiaro un array per contenere i numeri random generati
2 - inizio un ciclo while per impostare quanti numeri conterrà l'array
2.1 - dichiaro una variabile che ha come valore un numero random
2.2 - ?SE il numero generato non è già contenuto nell'array lo pusho
3 - richiamo un elememnto dal dom per mostrare nella pagina i numeri generati 
4 - imposto un'intervallo 
4.1 - ?SE l'intervallo è uguale a 0
4.1.2 - elimino i numeri dalla pagina
4.2 - :ALTRIMENTI l'intervallo decrementa
5 - creo una funzione per chiedere all'utente lo stesso numero di valori generati
6 - dichiaro un array vuota per contere i numeri inseriti dall'utente
6.1 - inizio un ciclo for per impostare quanti prompt generare
6.2 - ?SE l'array dei numeri random contiene lo stesso valore del numero inserito dall'utente
6.3.1 - lo pusho nell'array dei numeri inseriti dall'utente
6.3.2 - mostro un alert
