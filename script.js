var objectModel=[
    {pan:"Oregano",salsas:"De la casa",carne:"Atun"},
    {pan:"Trigo",salsas:"De la casa",carne:"Pechuga"},
    {pan:"Bimbo",salsas:"De la casa",carne:"Costillas"},
    {pan:"Especias",salsas:"De la casa",carne:"Milanesa"}
]

objectModel.find(function(filtrar){
    console.log(filtrar.pan==="Oregano");
})

objectModel.map(function(buscarSalsa){
    console.log(buscarSalsa)
})