const a=document.getElementById("btn-1");
const b=document.getElementById("btn-2");
const c=document.getElementById("btn-3");
const d=document.getElementById("btn-4");
const e=document.getElementById("btn-5");
const f=document.getElementById("btn-6");
const g=document.getElementById("btn-7");
const h=document.getElementById("btn-8");
const i=document.getElementById("btn-9");
const visor=document.getElementById("text")
const reset=document.getElementById("btn-reset");
const reset2=document.getElementById("btn-reset2");
var contador=1;
const mensagemVencedorTxt= document.querySelector('[data-Ganhador-msg]')
const mensagemVencedor = document.querySelector('[data-Ganhador]')

function cont(Txt){
    if(Txt.innerText==""){
        contador++;
        Txt.innerText=((contador % 2 == 0)? "X" : "O");
        visor.innerText=((contador % 2 == 0)? "Vez do: O" : "Vez do: X");
    }
    else{
        return;
    }
}
function VerGanhador(L1, L2, L3){
    if(L1.innerText==L2.innerText && L2.innerText==L3.innerText && L3.innerText!=""){
        mensagemVencedorTxt.innerText=((contador % 2 == 0)? "Vencedor: X" : "Vencedor: O");
        a.disabled=true;
        b.disabled=true;
        c.disabled=true;
        d.disabled=true;
        e.disabled=true;
        f.disabled=true;
        g.disabled=true;
        h.disabled=true;
        i.disabled=true;
        mensagemVencedor.classList.add("mostrar-Ganhador-msg");
    }
    else if(L1.innerText!=L2.innerText && L2.innerText!=L3.innerText && (contador>9)){
        mensagemVencedorTxt.innerText=("Deu velha!");
        a.disabled=true;
        b.disabled=true;
        c.disabled=true;
        d.disabled=true;
        e.disabled=true;
        f.disabled=true;
        g.disabled=true;
        h.disabled=true;
        i.disabled=true;
        mensagemVencedor.classList.add("mostrar-Ganhador-msg");
    }
}
reset.addEventListener('click', function(){
    a.innerText=("");
    b.innerText=("");
    c.innerText=("");
    d.innerText=("");
    e.innerText=("");
    f.innerText=("");
    g.innerText=("");
    h.innerText=("");
    i.innerText=("");
    a.disabled=false;
    b.disabled=false;
    c.disabled=false;
    d.disabled=false;
    e.disabled=false;
    f.disabled=false;
    g.disabled=false;
    h.disabled=false;
    i.disabled=false;
    visor.innerText=("Clique para começar!");;
    contador=1;
    
})
reset2.addEventListener('click', function(){
    a.innerText=("");
    b.innerText=("");
    c.innerText=("");
    d.innerText=("");
    e.innerText=("");
    f.innerText=("");
    g.innerText=("");
    h.innerText=("");
    i.innerText=("");
    a.disabled=false;
    b.disabled=false;
    c.disabled=false;
    d.disabled=false;
    e.disabled=false;
    f.disabled=false;
    g.disabled=false;
    h.disabled=false;
    i.disabled=false;
    visor.innerText=("Clique para começar!");;
    contador=1;
    mensagemVencedor.classList.remove("mostrar-Ganhador-msg");
    
})
a.addEventListener('click', function(){
    cont(a);
    VerGanhador(a, b, c);
    VerGanhador(a, d, g);
    VerGanhador(a, e, i);
});
b.addEventListener('click', function(){
    cont(b);
    VerGanhador(a, b, c);
    VerGanhador(b, e, h);
});
c.addEventListener('click', function(){
    cont(c);
    VerGanhador(a, b, c);
    VerGanhador(c, f, i);
    VerGanhador(c, e, g);
});
d.addEventListener('click', function(){
    cont(d);
    VerGanhador(a, d, g);
    VerGanhador(d, e, f);
});
e.addEventListener('click', function(){
    cont(e);
    VerGanhador(d, e , f);
    VerGanhador(e, c, g);
    VerGanhador(e, a, i);
});
f.addEventListener('click', function(){
    cont(f);
    VerGanhador(c, f, i);
    VerGanhador(f, e, d);
});
g.addEventListener('click', function(){
    cont(g);
    VerGanhador(c, e, g);
    VerGanhador(a, d, g);
    VerGanhador(g, h, i);
});
h.addEventListener('click', function(){
    cont(h);
    VerGanhador(g, h, i);
    VerGanhador(b, e, h);
});
i.addEventListener('click', function(){
    cont(i);
    VerGanhador(a, e, i);
    VerGanhador(g, h, i);
    VerGanhador(c, f, i);
});