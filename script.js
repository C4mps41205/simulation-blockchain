var btn = document.getElementById("btn");

//index
var index = 0;

// timestamp
var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
dataAtual = dia + '/' + mes + '/' + ano;

//hash
function makehash(length) {
    var result           = '';
    var characters       = '0123456789ABCDEF';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
var hash = makehash(32);
var block = {
  index: index,
  timestamp: dataAtual,
  data: '',
  previushash: '',
  hash: hash
}
if(index == 0){
  block.previushash = 0;
}
if(index == 0){
  block.data = "Genesis block";
}else{
  block.data = "";
}
console.log(block);
btn.onclick = function(){
  index++;
  if(index == 0){
  block.previushash = 0;
}
if(index == 0){
  block.data = "Genesis block";
}else{
  block.data = "";
}
  block.index = index;
  block.previushash = block.hash;
  block.hash = makehash(32);
  console.log(block)
}