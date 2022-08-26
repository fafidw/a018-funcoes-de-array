const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

// A
function retornarMaiusculas(objeto){
    
        const myObj = {...objeto}

   for(let key in objeto){
    myObj[key]=objeto[key].toUpperCase()
   }
   return myObj 
}

// B
function retornarTextoCorrido(obj){
    let textoCorrido=''
    for(let key in obj){
        textoCorrido= textoCorrido+ ' '+ obj[key]
    }
    return textoCorrido
}


//C
function imprimir(obj, callback){
   const retorno= callback(obj)
   console.log(retorno);
}

imprimir(objeto, retornarMaiusculas)
imprimir(objeto, retornarTextoCorrido)