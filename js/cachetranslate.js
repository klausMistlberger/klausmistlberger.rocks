'use strict';
const literals = { 
    a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26
};

const convert = () => {
    let input = $( '#input' ).val().toLowerCase();
    let output = ''; 
    // console.log( input, input.length, typeof input );
    for ( let i=0; i<input.length; i++ ) {
        input = input.replace( /ä/g, 'ae' );
        input = input.replace( /ö/g, 'oe' );
        input = input.replace( /ü/g, 'ue' );
        input = input.replace( /ß/g, 'ss' );

        if ( input[i] === 'number' ) {
            output += input[i];
        } else if ( input[i] === ' ' ) {
            output += ' - ';
        } else {
            // console.log( literals[input[i]] );
            output += ( literals[ input[i] ].toString() );
            output += ' ';
        }
    }
    // console.log( output );
    $( '#output' ).html( output );

}

$( '#translate' ).on( 'click', convert );
$( 'body' ).on( 'keyup', ev => {
    if ( ev.keyCode === 13) convert();
});