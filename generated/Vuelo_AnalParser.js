// Generated from c:/Users/User/Documents/GitHub/51994/Vuelo_Anal.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import Vuelo_AnalListener from './Vuelo_AnalListener.js';
import Vuelo_AnalVisitor from './Vuelo_AnalVisitor.js';

const serializedATN = [4,1,14,90,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,3,0,26,8,
0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,3,4,59,8,4,1,5,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,8,3,8,77,8,8,1,9,1,
9,1,9,3,9,82,8,9,1,10,1,10,1,11,1,11,1,11,1,11,1,11,0,0,12,0,2,4,6,8,10,
12,14,16,18,20,22,0,2,1,0,5,7,1,0,9,10,81,0,25,1,0,0,0,2,29,1,0,0,0,4,34,
1,0,0,0,6,46,1,0,0,0,8,58,1,0,0,0,10,60,1,0,0,0,12,69,1,0,0,0,14,71,1,0,
0,0,16,73,1,0,0,0,18,78,1,0,0,0,20,83,1,0,0,0,22,85,1,0,0,0,24,26,3,2,1,
0,25,24,1,0,0,0,25,26,1,0,0,0,26,27,1,0,0,0,27,28,3,4,2,0,28,1,1,0,0,0,29,
30,3,14,7,0,30,31,5,3,0,0,31,32,3,10,5,0,32,33,5,11,0,0,33,3,1,0,0,0,34,
35,3,6,3,0,35,36,3,22,11,0,36,37,5,4,0,0,37,38,3,22,11,0,38,39,3,8,4,0,39,
40,5,3,0,0,40,41,3,12,6,0,41,42,5,3,0,0,42,43,5,2,0,0,43,44,5,11,0,0,44,
45,3,18,9,0,45,5,1,0,0,0,46,47,5,9,0,0,47,48,5,9,0,0,48,49,5,10,0,0,49,50,
5,10,0,0,50,51,5,10,0,0,51,7,1,0,0,0,52,53,5,10,0,0,53,54,5,10,0,0,54,55,
5,11,0,0,55,56,5,10,0,0,56,59,5,10,0,0,57,59,5,12,0,0,58,52,1,0,0,0,58,57,
1,0,0,0,59,9,1,0,0,0,60,61,5,10,0,0,61,62,5,10,0,0,62,63,5,8,0,0,63,64,5,
10,0,0,64,65,5,10,0,0,65,66,5,8,0,0,66,67,5,10,0,0,67,68,5,10,0,0,68,11,
1,0,0,0,69,70,7,0,0,0,70,13,1,0,0,0,71,72,5,1,0,0,72,15,1,0,0,0,73,74,5,
13,0,0,74,76,5,10,0,0,75,77,5,10,0,0,76,75,1,0,0,0,76,77,1,0,0,0,77,17,1,
0,0,0,78,79,5,9,0,0,79,81,5,10,0,0,80,82,5,10,0,0,81,80,1,0,0,0,81,82,1,
0,0,0,82,19,1,0,0,0,83,84,7,1,0,0,84,21,1,0,0,0,85,86,5,9,0,0,86,87,5,9,
0,0,87,88,5,9,0,0,88,23,1,0,0,0,4,25,58,76,81];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class Vuelo_AnalParser extends antlr4.Parser {

    static grammarFileName = "Vuelo_Anal.g4";
    static literalNames = [ null, null, "'Gate'", "','", "'-'", "'CANCELLED'", 
                            "'DELAYED'", "'ON_TIME'", "'/'", null, null, 
                            "':'", "'NOW'" ];
    static symbolicNames = [ null, "STRING", "GATE", "COMA", "GUION", "CANCELLED", 
                             "DELAYED", "TIEMPO", "BARRA", "LETRA", "DIGITO", 
                             "DPOINT", "NOW", "ASIENTO", "WS" ];
    static ruleNames = [ "programa", "vuelos", "vuelo", "codigo", "hora", 
                         "fecha", "estado", "operador", "asiento", "puerta", 
                         "terminal", "aerepuerto" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = Vuelo_AnalParser.ruleNames;
        this.literalNames = Vuelo_AnalParser.literalNames;
        this.symbolicNames = Vuelo_AnalParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, Vuelo_AnalParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 24;
	            this.vuelos();
	        }

	        this.state = 27;
	        this.vuelo();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	vuelos() {
	    let localctx = new VuelosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, Vuelo_AnalParser.RULE_vuelos);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.operador();
	        this.state = 30;
	        this.match(Vuelo_AnalParser.COMA);
	        this.state = 31;
	        this.fecha();
	        this.state = 32;
	        this.match(Vuelo_AnalParser.DPOINT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	vuelo() {
	    let localctx = new VueloContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, Vuelo_AnalParser.RULE_vuelo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.codigo();
	        this.state = 35;
	        this.aerepuerto();
	        this.state = 36;
	        this.match(Vuelo_AnalParser.GUION);
	        this.state = 37;
	        this.aerepuerto();
	        this.state = 38;
	        this.hora();
	        this.state = 39;
	        this.match(Vuelo_AnalParser.COMA);
	        this.state = 40;
	        this.estado();
	        this.state = 41;
	        this.match(Vuelo_AnalParser.COMA);
	        this.state = 42;
	        this.match(Vuelo_AnalParser.GATE);
	        this.state = 43;
	        this.match(Vuelo_AnalParser.DPOINT);
	        this.state = 44;
	        this.puerta();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	codigo() {
	    let localctx = new CodigoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, Vuelo_AnalParser.RULE_codigo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.match(Vuelo_AnalParser.LETRA);
	        this.state = 47;
	        this.match(Vuelo_AnalParser.LETRA);
	        this.state = 48;
	        this.match(Vuelo_AnalParser.DIGITO);
	        this.state = 49;
	        this.match(Vuelo_AnalParser.DIGITO);
	        this.state = 50;
	        this.match(Vuelo_AnalParser.DIGITO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	hora() {
	    let localctx = new HoraContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, Vuelo_AnalParser.RULE_hora);
	    try {
	        this.state = 58;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 52;
	            this.match(Vuelo_AnalParser.DIGITO);
	            this.state = 53;
	            this.match(Vuelo_AnalParser.DIGITO);
	            this.state = 54;
	            this.match(Vuelo_AnalParser.DPOINT);
	            this.state = 55;
	            this.match(Vuelo_AnalParser.DIGITO);
	            this.state = 56;
	            this.match(Vuelo_AnalParser.DIGITO);
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 57;
	            this.match(Vuelo_AnalParser.NOW);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fecha() {
	    let localctx = new FechaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, Vuelo_AnalParser.RULE_fecha);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(Vuelo_AnalParser.DIGITO);
	        this.state = 61;
	        this.match(Vuelo_AnalParser.DIGITO);
	        this.state = 62;
	        this.match(Vuelo_AnalParser.BARRA);
	        this.state = 63;
	        this.match(Vuelo_AnalParser.DIGITO);
	        this.state = 64;
	        this.match(Vuelo_AnalParser.DIGITO);
	        this.state = 65;
	        this.match(Vuelo_AnalParser.BARRA);
	        this.state = 66;
	        this.match(Vuelo_AnalParser.DIGITO);
	        this.state = 67;
	        this.match(Vuelo_AnalParser.DIGITO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	estado() {
	    let localctx = new EstadoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, Vuelo_AnalParser.RULE_estado);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 224) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operador() {
	    let localctx = new OperadorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, Vuelo_AnalParser.RULE_operador);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(Vuelo_AnalParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asiento() {
	    let localctx = new AsientoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, Vuelo_AnalParser.RULE_asiento);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(Vuelo_AnalParser.ASIENTO);
	        this.state = 74;
	        this.match(Vuelo_AnalParser.DIGITO);
	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===10) {
	            this.state = 75;
	            this.match(Vuelo_AnalParser.DIGITO);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	puerta() {
	    let localctx = new PuertaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, Vuelo_AnalParser.RULE_puerta);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(Vuelo_AnalParser.LETRA);
	        this.state = 79;
	        this.match(Vuelo_AnalParser.DIGITO);
	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===10) {
	            this.state = 80;
	            this.match(Vuelo_AnalParser.DIGITO);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminal() {
	    let localctx = new TerminalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, Vuelo_AnalParser.RULE_terminal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        _la = this._input.LA(1);
	        if(!(_la===9 || _la===10)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	aerepuerto() {
	    let localctx = new AerepuertoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, Vuelo_AnalParser.RULE_aerepuerto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this.match(Vuelo_AnalParser.LETRA);
	        this.state = 86;
	        this.match(Vuelo_AnalParser.LETRA);
	        this.state = 87;
	        this.match(Vuelo_AnalParser.LETRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

Vuelo_AnalParser.EOF = antlr4.Token.EOF;
Vuelo_AnalParser.STRING = 1;
Vuelo_AnalParser.GATE = 2;
Vuelo_AnalParser.COMA = 3;
Vuelo_AnalParser.GUION = 4;
Vuelo_AnalParser.CANCELLED = 5;
Vuelo_AnalParser.DELAYED = 6;
Vuelo_AnalParser.TIEMPO = 7;
Vuelo_AnalParser.BARRA = 8;
Vuelo_AnalParser.LETRA = 9;
Vuelo_AnalParser.DIGITO = 10;
Vuelo_AnalParser.DPOINT = 11;
Vuelo_AnalParser.NOW = 12;
Vuelo_AnalParser.ASIENTO = 13;
Vuelo_AnalParser.WS = 14;

Vuelo_AnalParser.RULE_programa = 0;
Vuelo_AnalParser.RULE_vuelos = 1;
Vuelo_AnalParser.RULE_vuelo = 2;
Vuelo_AnalParser.RULE_codigo = 3;
Vuelo_AnalParser.RULE_hora = 4;
Vuelo_AnalParser.RULE_fecha = 5;
Vuelo_AnalParser.RULE_estado = 6;
Vuelo_AnalParser.RULE_operador = 7;
Vuelo_AnalParser.RULE_asiento = 8;
Vuelo_AnalParser.RULE_puerta = 9;
Vuelo_AnalParser.RULE_terminal = 10;
Vuelo_AnalParser.RULE_aerepuerto = 11;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Vuelo_AnalParser.RULE_programa;
    }

	vuelo() {
	    return this.getTypedRuleContext(VueloContext,0);
	};

	vuelos() {
	    return this.getTypedRuleContext(VuelosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Vuelo_AnalListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Vuelo_AnalListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Vuelo_AnalVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VuelosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Vuelo_AnalParser.RULE_vuelos;
    }

	operador() {
	    return this.getTypedRuleContext(OperadorContext,0);
	};

	COMA() {
	    return this.getToken(Vuelo_AnalParser.COMA, 0);
	};

	fecha() {
	    return this.getTypedRuleContext(FechaContext,0);
	};

	DPOINT() {
	    return this.getToken(Vuelo_AnalParser.DPOINT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Vuelo_AnalListener ) {
	        listener.enterVuelos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Vuelo_AnalListener ) {
	        listener.exitVuelos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Vuelo_AnalVisitor ) {
	        return visitor.visitVuelos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VueloContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Vuelo_AnalParser.RULE_vuelo;
    }

	codigo() {
	    return this.getTypedRuleContext(CodigoContext,0);
	};

	aerepuerto = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AerepuertoContext);
	    } else {
	        return this.getTypedRuleContext(AerepuertoContext,i);
	    }
	};

	GUION() {
	    return this.getToken(Vuelo_AnalParser.GUION, 0);
	};

	hora() {
	    return this.getTypedRuleContext(HoraContext,0);
	};

	COMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Vuelo_AnalParser.COMA);
	    } else {
	        return this.getToken(Vuelo_AnalParser.COMA, i);
	    }
	};


	estado() {
	    return this.getTypedRuleContext(EstadoContext,0);
	};

	GATE() {
	    return this.getToken(Vuelo_AnalParser.GATE, 0);
	};

	DPOINT() {
	    return this.getToken(Vuelo_AnalParser.DPOINT, 0);
	};

	puerta() {
	    return this.getTypedRuleContext(PuertaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Vuelo_AnalListener ) {
	        listener.enterVuelo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Vuelo_AnalListener ) {
	        listener.exitVuelo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Vuelo_AnalVisitor ) {
	        return visitor.visitVuelo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CodigoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Vuelo_AnalParser.RULE_codigo;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Vuelo_AnalParser.LETRA);
	    } else {
	        return this.getToken(Vuelo_AnalParser.LETRA, i);
	    }
	};


	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Vuelo_AnalParser.DIGITO);
	    } else {
	        return this.getToken(Vuelo_AnalParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof Vuelo_AnalListener ) {
	        listener.enterCodigo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Vuelo_AnalListener ) {
	        listener.exitCodigo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Vuelo_AnalVisitor ) {
	        return visitor.visitCodigo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class HoraContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Vuelo_AnalParser.RULE_hora;
    }

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Vuelo_AnalParser.DIGITO);
	    } else {
	        return this.getToken(Vuelo_AnalParser.DIGITO, i);
	    }
	};


	DPOINT() {
	    return this.getToken(Vuelo_AnalParser.DPOINT, 0);
	};

	NOW() {
	    return this.getToken(Vuelo_AnalParser.NOW, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Vuelo_AnalListener ) {
	        listener.enterHora(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Vuelo_AnalListener ) {
	        listener.exitHora(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Vuelo_AnalVisitor ) {
	        return visitor.visitHora(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FechaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Vuelo_AnalParser.RULE_fecha;
    }

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Vuelo_AnalParser.DIGITO);
	    } else {
	        return this.getToken(Vuelo_AnalParser.DIGITO, i);
	    }
	};


	BARRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Vuelo_AnalParser.BARRA);
	    } else {
	        return this.getToken(Vuelo_AnalParser.BARRA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof Vuelo_AnalListener ) {
	        listener.enterFecha(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Vuelo_AnalListener ) {
	        listener.exitFecha(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Vuelo_AnalVisitor ) {
	        return visitor.visitFecha(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EstadoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Vuelo_AnalParser.RULE_estado;
    }

	TIEMPO() {
	    return this.getToken(Vuelo_AnalParser.TIEMPO, 0);
	};

	DELAYED() {
	    return this.getToken(Vuelo_AnalParser.DELAYED, 0);
	};

	CANCELLED() {
	    return this.getToken(Vuelo_AnalParser.CANCELLED, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Vuelo_AnalListener ) {
	        listener.enterEstado(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Vuelo_AnalListener ) {
	        listener.exitEstado(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Vuelo_AnalVisitor ) {
	        return visitor.visitEstado(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OperadorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Vuelo_AnalParser.RULE_operador;
    }

	STRING() {
	    return this.getToken(Vuelo_AnalParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Vuelo_AnalListener ) {
	        listener.enterOperador(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Vuelo_AnalListener ) {
	        listener.exitOperador(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Vuelo_AnalVisitor ) {
	        return visitor.visitOperador(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsientoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Vuelo_AnalParser.RULE_asiento;
    }

	ASIENTO() {
	    return this.getToken(Vuelo_AnalParser.ASIENTO, 0);
	};

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Vuelo_AnalParser.DIGITO);
	    } else {
	        return this.getToken(Vuelo_AnalParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof Vuelo_AnalListener ) {
	        listener.enterAsiento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Vuelo_AnalListener ) {
	        listener.exitAsiento(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Vuelo_AnalVisitor ) {
	        return visitor.visitAsiento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PuertaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Vuelo_AnalParser.RULE_puerta;
    }

	LETRA() {
	    return this.getToken(Vuelo_AnalParser.LETRA, 0);
	};

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Vuelo_AnalParser.DIGITO);
	    } else {
	        return this.getToken(Vuelo_AnalParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof Vuelo_AnalListener ) {
	        listener.enterPuerta(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Vuelo_AnalListener ) {
	        listener.exitPuerta(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Vuelo_AnalVisitor ) {
	        return visitor.visitPuerta(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Vuelo_AnalParser.RULE_terminal;
    }

	DIGITO() {
	    return this.getToken(Vuelo_AnalParser.DIGITO, 0);
	};

	LETRA() {
	    return this.getToken(Vuelo_AnalParser.LETRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Vuelo_AnalListener ) {
	        listener.enterTerminal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Vuelo_AnalListener ) {
	        listener.exitTerminal(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Vuelo_AnalVisitor ) {
	        return visitor.visitTerminal(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AerepuertoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Vuelo_AnalParser.RULE_aerepuerto;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Vuelo_AnalParser.LETRA);
	    } else {
	        return this.getToken(Vuelo_AnalParser.LETRA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof Vuelo_AnalListener ) {
	        listener.enterAerepuerto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Vuelo_AnalListener ) {
	        listener.exitAerepuerto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Vuelo_AnalVisitor ) {
	        return visitor.visitAerepuerto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




Vuelo_AnalParser.ProgramaContext = ProgramaContext; 
Vuelo_AnalParser.VuelosContext = VuelosContext; 
Vuelo_AnalParser.VueloContext = VueloContext; 
Vuelo_AnalParser.CodigoContext = CodigoContext; 
Vuelo_AnalParser.HoraContext = HoraContext; 
Vuelo_AnalParser.FechaContext = FechaContext; 
Vuelo_AnalParser.EstadoContext = EstadoContext; 
Vuelo_AnalParser.OperadorContext = OperadorContext; 
Vuelo_AnalParser.AsientoContext = AsientoContext; 
Vuelo_AnalParser.PuertaContext = PuertaContext; 
Vuelo_AnalParser.TerminalContext = TerminalContext; 
Vuelo_AnalParser.AerepuertoContext = AerepuertoContext; 
