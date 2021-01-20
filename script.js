/* console.log("hello everyone");
console.log("type of 2 is", typeof(2));

let chosennumber=Math.floor(Math.random()*10)

switch(chosennumber){
    case 1:
        console.log("One");
        break;
        case 2:
            console.log("Two");
            break;
        case 3:
            console.log("Three");
            break;
        case 4:
            console.log("Four");
            break;
        case 5:
            console.log("Five");
            break;
        default:
            console.log("Don't know");
            break;
} */
// Jackpot application
let chosennumber1=Math.floor(Math.random()*2);
let chosennumber2=Math.floor(Math.random()*2);
let chosennumber3=Math.floor(Math.random()*2);
let chosennumber4=Math.floor(Math.random()*2);
let chosennumber5=Math.floor(Math.random()*2);
console.log(chosennumber1, chosennumber2, chosennumber3, chosennumber4 ,chosennumber5);
if(chosennumber1===1&&chosennumber2===1&&chosennumber3===1&&chosennumber4===1&&chosennumber5===1)
{console.log("You are the winner of Jack Pot! Congrats!")
} 
 if(chosennumber1===0&&chosennumber2===0&&chosennumber3===0&&chosennumber4===0&&chosennumber5===0){console.log("00000, You are almost there, but.. try more! ")}
else{console.log("Try more! Next time you will be lucky! The Chance of winning is ", 1/2**5)}


/* //Number Counter
let randomnumber=Math.floor(Math.random()*101);
switch(randomnumber){
    case 0:
        console.log("Nolla");
        break;
    case 1:
        console.log("Yksi");
        break;
    case 2:
            console.log("Kaksi");
            break;
    case 3:
                console.log("Kolme");
                break;
    case 4:
                    console.log("neljä");
                    break;
    case 5:
                    console.log("viisi");
                    break;
    case 6:
                    console.log("kuusi");
                    break;
    case 7:
                    console.log("seitsemän");
                    break;
    case 8:
                    console.log("kahdeksan");
                    break;
    case 9:
                    console.log("yhdeksän");
                    break;
    case 10:
                    console.log("kymmenen");
                    break;
    case 11:
                    console.log("yksitoista");
                    break;
    case 12:
                    console.log("kaksitoista");
                    break;
    case 13:
                    console.log("kolmetoista");
                    break;
    case 14:
                    console.log("neljätoista");
                    break;
    case 15:
                    console.log("viisitoista");
                    break;
    case 16:
                    console.log("kuusitoista");
                    break;
    case 17:
                    console.log("seitsemäntoista");
                    break;
    case 18:
                    console.log("kahdeksantoista");
                    break;
    case 19:
                    console.log("yhdeksäntoista");
                    break;
    case 20:
                    console.log("kaksikymmentä");
                    break;
    case 21:
                    console.log("kaksikymmentäyksi");
                    break;
    case 22:
                    console.log("kaksikymmentäkaksi");
                    break;
    case 23:
                    console.log("kaksikymmentäkolme");
                    break;
    case 24:
                    console.log("kaksikymmentäneljä");
                    break;
    case 25:
                    console.log("kaksikymmentäviisi");
                    break;
    case 26:
                    console.log("kaksikymmentäkuusi");
                    break;
    case 27:
                    console.log("kaksikymmentäseitsemän");
                    break;
    case 28:
                    console.log("kaksikymmentäkahdeksan");
                    break;
    case 29:
                    console.log("kaksikymmentäyhdeksän");
                    break;
    case 30:
                    console.log("kolmekymmentä");
                    break;
    case 31:
                    console.log("kolmekymmentäyksi");
                    break;
    case 32:
                    console.log("kolmekymmentäkaksi");
                    break;
    case 33:
                    console.log("kolmekymmentäkolme");
                    break;
    case 34:
                    console.log("kolmekymmentäneljä");
                    break;
    case 35:
                    console.log("kolmekymmentäviisi");
                    break;
    case 36:
                    console.log("kolmekymmentäkuusi");
                    break;
    case 37:
                    console.log("kolmekymmentäseitsemän");
                    break;
    case 38:
                    console.log("kolmekymmentäkahdeksan");
                    break;
    case 39:
                    console.log("kolmekymmentäyhdeksän");
                    break;
    case 40:
                    console.log("neljäkymmentä");
                    break;
    case 41:
                    console.log("neljäkymmentäyksi");
                    break;
    case 42:
                    console.log("neljäkymmentäkaksi");
                    break;
    case 43:
                    console.log("neljäkymmentäkolme");
                    break;
    case 44:
                    console.log("neljäkymmentäneljä");
                    break;
    case 45:
                    console.log("neljäkymmentäviisi");
                    break;
    case 46:
                    console.log("neljäkymmentäkuusi");
                    break;
    case 47:
                    console.log("neljäkymmentäseitsemän");
                    break;
    case 48:
                    console.log("neljäkymmentäkahdeksan");
                    break;
    case 49:
                    console.log("neljäkymmentäyhdeksän");
                    break;
    case 50:
                    console.log("viisikymmentä");
                    break;
    case 51:
                    console.log("viisikymmentäyksi");
                    break;
    case 52:
                    console.log("viisikymmentäkaksi");
                    break;
    case 53:
                    console.log("viisikymmentäkolme");
                    break;
    case 54:
                    console.log("viisikymmentäneljä");
                    break;
    case 55:
                    console.log("viisikymmentäviisi");
                    break;
    case 56:
                    console.log("viisikymmentäkuusi");
                    break;
    case 57:
                    console.log("viisikymmentäseitsemän");
                    break;
    case 58:
                    console.log("viisikymmentäkahdeksan");
                    break;
    case 59:
                    console.log("viisikymmentäyhdeksän");
                    break;
    case 60:
                    console.log("kuusikymmentä");
                    break;
    case 61:
                    console.log("kuusikymmentäyksi");
                    break;
    case 62:
                    console.log("kuusikymmentäkaksi");
                    break;
    case 63:
                    console.log("kuusikymmentäkolme");
                    break;
    case 64:
                    console.log("kuusikymmentäneljä");
                    break;
    case 65:
                    console.log("kuusikymmentäviisi");
                    break;
    case 66:
                    console.log("kuusikymmentäkuusi");
                    break;
    case 67:
                    console.log("kuusikymmentäseitsemän");
                    break;
    case 68:
                    console.log("kuusikymmentäkahdeksan");
                    break;
    case 69:
                    console.log("kuusikymmentäyhdeksän");
                    break;
    case 70:
                    console.log("seitsemänkymmentä");
                    break;
    case 71:
                    console.log("seitsemänkymmentäyksi");
                    break;
    case 72:
                    console.log("seitsemänkymmentäkaksi");
                    break;
    case 73:
                    console.log("seitsemänkymmentäkolme");
                    break;
    case 74:
                    console.log("seitsemänkymmentäneljä");
                    break;
    case 75:
                    console.log("seitsemänkymmentäviisi");
                    break;
    case 76:
                    console.log("seitsemänkymmentäkuusi");
                    break;
    case 77:
                    console.log("seitsemänkymmentäseitsemän");
                    break;
    case 78:
                    console.log("seitsemänkymmentäkahdeksan");
                    break;
    case 79:
                    console.log("seitsemänkymmentäyhdeksän");
                    break;
    case 80:
                    console.log("kahdeksankymmentä");
                    break;
    case 81:
                    console.log("kahdeksankymmentäyksi");
                    break;
    case 82:
                    console.log("kahdeksankymmentäkaksi");
                    break;
    case 83:
                    console.log("kahdeksankymmentäkolme");
                    break;
    case 84:
                    console.log("kahdeksankymmentäneljä");
                    break;
    case 85:
                    console.log("kahdeksankymmentäviisi");
                    break;
    case 86:
                    console.log("kahdeksankymmentäkuusi");
                    break;
    case 87:
                    console.log("kahdeksankymmentäseitsemän");
                    break;
    case 88:
                    console.log("kahdeksankymmentäkahdeksan");
                    break;
    case 89:
                    console.log("kahdeksankymmentäyhdeksän");
                    break;
    case 90:
                    console.log("yhdeksänkymmentä");
                    break;
    case 91:
                    console.log("yhdeksänkymmentäyksi");
                    break;
    case 92:
                    console.log("yhdeksänkymmentäkaksi");
                    break;
    case 93:
                    console.log("yhdeksänkymmentäkolme");
                    break;
    case 94:
                    console.log("yhdeksänkymmentäneljä");
                    break;
    case 95:
                    console.log("yhdeksänkymmentäviisi");
                    break;
    case 96:
                    console.log("yhdeksänkymmentäkuusi");
                    break;
    case 97:
                    console.log("yhdeksänkymmentäseitsemän");
                    break;
    case 98:
                    console.log("yhdeksänkymmentäkahdeksan");
                    break;
    case 99:
                    console.log("yhdeksänkymmentäyhdeksän");
                    break;
    case 100:
                    console.log("sata");
                    break;
    default: console.log("Don't know") ;       


} */


