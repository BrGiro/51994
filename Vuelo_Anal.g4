grammar Vuelo_Anal;

programa: (vuelos)? vuelo;

vuelos: operador COMA fecha DPOINT;

vuelo: codigo aerepuerto GUION aerepuerto hora COMA estado COMA GATE DPOINT puerta   ;

codigo: LETRA LETRA DIGITO DIGITO DIGITO;    //(* Ej: "AA123" *)

hora: DIGITO DIGITO DPOINT DIGITO DIGITO | NOW ;

fecha: DIGITO DIGITO BARRA DIGITO DIGITO BARRA DIGITO DIGITO;    //(* DD/MM/YY *)

estado: TIEMPO | DELAYED | CANCELLED;

operador: STRING ;   // (* Ej: "American Airlines" *)

asiento: ASIENTO DIGITO (DIGITO)?;  

puerta: LETRA DIGITO (DIGITO)?;    //(* Ej: "B12" *)

terminal: DIGITO | LETRA ;

aerepuerto: LETRA LETRA LETRA; 


 
STRING: '"' (~["\r\n])* '"';
GATE: 'Gate';
COMA: ',';
GUION: '-';
CANCELLED: 'CANCELLED';
DELAYED: 'DELAYED';
TIEMPO: 'ON_TIME';
BARRA: '/';
LETRA: [a-zA-Z];
DIGITO: [0-9];
DPOINT: ':';
NOW: 'NOW';
ASIENTO: [A-F];

WS: [ \t\n\r]+ -> skip;