const ausgabe = $( '#ausgabe' );

const eitherOr = ()=>{
    // Einlesen
    let _entweder = $( '#entweder' ).val();
    let _oder = $( '#oder' ).val();

    // Seed + Ausgabe erzeugen
    let seedNum = rndNum(0, 100);
    const output = ( output ) => '[&nbsp;&nbsp; &gt; &gt; &nbsp;&nbsp;' + output + '&nbsp;&nbsp; &lt; &lt; &nbsp;&nbsp;]';
    seedNum === 0 ? ausgabe.html( 'Keine Ahnung, wirf eine Münze' ) : ( seedNum % 2 === 1 ? ausgabe.html( output( _entweder ) ) : ausgabe.html( output( _oder) ) );
};

// Enter-Key
$( 'body' ).on( 'keyup', (e)=>{
    if ( e.keyCode === 13) {
        eitherOr();
    }
});

// Click
$( '#go' ).on( 'click', ()=>{
    eitherOr();
});
        
