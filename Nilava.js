function getResponseWithAjax() 
{
    var request = new XMLHttpRequest();//1
    request.open("GET","https://www.thesportsdb.com/api/v1/json/2/all_countries.php");//2
    
    request.onreadystatechange = function()//3
                                {
                                    if (this.readyState===4 && this.status===200)
                                    {
                                         traversalJSONObject(JSON.parse(this.responseText));

                                    }
                                }
    request.send();//4    
}
function traversalJSONObject(data)
{
    for (let index = 0; index < 10; index++)
    {

        createHtmlElement(data.countries[Math.floor(Math.random() * 150)]);
        
    }   
    
}
function createHtmlElement(country) 
{

    let box = document.createElement("div");
    box.className = "country-box";

    let title = document.createElement("h3");
    title.innerText = country.name_en;

    box.appendChild(title);


    document.querySelector("#result").appendChild(box);
}

function clearContainer()
{
    document.querySelector("#result").innerHTML = "";
}



