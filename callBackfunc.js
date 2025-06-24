setTimeout(()=>console.log('timer'),5000);
const x = (y)=>{
    console.log('xxxxxxxxxxxxxx');
    y();
}
const y = ()=>console.log('yyyyy')