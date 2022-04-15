let ausgabe = _e( 'ausgabe' );

let eitherOr = ()=>{
    // Einlesen
    let entweder = _e( 'entweder' ).value;
    let oder = _e( 'oder' ).value;

    // Seed erzeugen + Ausgabe erzeugen
    let seedNum = rndNum(0, 100);
    seedNum === 0 ? ausgabe.innerHTML = 'Keine Ahnung, wirf eine Münze' : 
    ( seedNum % 2 === 1 ? ausgabe.innerHTML = '[&nbsp;&nbsp; &gt; &gt; &nbsp;&nbsp;' + entweder + '&nbsp;&nbsp; &lt; &lt; &nbsp;&nbsp;]' : ausgabe.innerHTML = '[&nbsp;&nbsp; &gt; &gt; &nbsp;&nbsp;' + oder + '&nbsp;&nbsp; &lt; &lt; &nbsp;&nbsp;]' );
    
    let seed = document.createElement( 'div' );
    seed.id = 'seed';
    seed.innerHTML = 'Seed: ' + seedNum;
    // ausgabe.appendChild (seed);
}

$( 'body' ).on( 'keyup', (e)=>{
    if ( e.keyCode === 13) {
        eitherOr();
    }
} );


let go = $( '#go' ).on( 'click', ()=>{
    eitherOr();
} );
        
