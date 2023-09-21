//Get all the countries with population of less than 2 lakhs using Filter function

let xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all")
xhr.send();
xhr.onload=function(){
    let coutryData=JSON.parse(this.response);
    console.log(coutryData)
    const popu=coutryData.filter((element)=>
    {
        return element.population<200000;
    })
    console.log(popu)
}   
 //print the following details name, capital, flag using forEach function.




let request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload=function(){
    let coutryData=JSON.parse(this.response);
    coutryData.forEach((element) => {
        console.log(element.name,element.capital,element.flag);
        
    });
}


//Print the total population of countries using reduce function 
let data=new XMLHttpRequest();
data.open("GET","https://restcountries.com/v3.1/all");
data.send();
data.onload=function() {
    let coutryData=JSON.parse(this.response);
    const population=coutryData.reduce((acc,element)=>{
        return acc+element.population
    },0)
    console.log(population)
    
}
//Get all the countries from Asia continent /region using Filter function
let name=new XMLHttpRequest();
name.open("GET","https://restcountries.com/v3.1/all");
name.send();
name.onload=function(){
    let coutryData=JSON.parse(this.response);
    const asia=coutryData.filter((element)=>{
        if(element.region==='Asia'){
            return element.name;
        }
    })
    console.log(asia)
}


//Print the country which use US Dollars as currency.

let country=new XMLHttpRequest()
country.open("GET","https://restcountries.com/v3.1/all");
country.send();
country.onload=function (code){
    let data=JSON.parse(this.response);
    const currency=[];
    for(i=0;i<data.length;i++){
        if(
            data[i].currencies[0].code==="USD"
        )
        {
            console.log("name:",data[i].name,"==>",data[i].currencies[0].data)
            
            console.log(currency)}
    };
}
