setTimeout(() => {
    const loader = document.getElementsByClassName("loader_container")[0];
    console.debug(loader)
    loader.style.display  = "none"
    }, 1500);

// AOS.init();

let params = new URL(document.location).searchParams;
let ite = params.get("item")
console.log(ite)


    const options = {
        method: 'GET',
        url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser',
        params: {
            ingr: ite
        },
        headers: {
            'X-RapidAPI-Key': '9bb50f65c4msh67471fe07301eadp16de2djsn53a739e9434c',
            'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        }
    };
            

        async function fetchData() {

            try {
            const response = await axios.request(options);
            console.log(response.data); // Add this line to log the response
            
            function f1(){
                var item=response.data.hints[0].food.label;
                console.log(item);
                window.location.href=   `http://127.0.0.1:5500/third.html?item=${item}`
            }
            function f2(){
                var item=response.data.hints[1].food.label;
                console.log(item);
                window.location.href=   `http://127.0.0.1:5500/third.html?item=${item}`
            }
            function f3(){
                var item=response.data.hints[2].food.label;
                console.log(item);
                window.location.href=   `http://127.0.0.1:5500/third.html?item=${item}`
            }
            function f4(){
                var item=response.data.hints[3].food.label;
                console.log(item);
                window.location.href=   `http://127.0.0.1:5500/third.html?item=${item}`
            }
            function f5(){
                var item=response.data.hints[4].food.label;
                console.log(item);
                window.location.href=   `http://127.0.0.1:5500/third.html?item=${item}`
            }
            function f6(){
                var item=response.data.hints[5].food.label;
                console.log(item);
                window.location.href=   `http://127.0.0.1:5500/third.html?item=${item}`
            }
            function f7(){
                var item=response.data.hints[6].food.label;
                console.log(item);
                window.location.href=   `http://127.0.0.1:5500/third.html?item=${item}`
            }
            function f8(){
                var item=response.data.hints[7].food.label;
                console.log(item);
                window.location.href=   `http://127.0.0.1:5500/third.html?item=${item}`
            }
            //item1
            document.getElementById('item1').innerHTML=response.data.hints[0].food.label;
            document.getElementById("cal1").innerHTML =
                "Calories: " + response.data.hints[0].food.nutrients.ENERC_KCAL.toFixed(2)+'kcal';
            document.getElementById("prot1").innerHTML =
                "Proteins: " + response.data.hints[0].food.nutrients.PROCNT.toFixed(2)+'g';
            document.getElementById("fat1").innerHTML =
                "Fat: " + response.data.hints[0].food.nutrients.FAT.toFixed(2)+'g';
            document.getElementById("carbs1").innerHTML =
                "Carbs: " + response.data.hints[0].food.nutrients.CHOCDF.toFixed(2)+'g';
            
            const divItem = document.getElementsByClassName('rect1')[0]
            
            document.getElementsByClassName('rect')[0].addEventListener('click', (e)=> {
                    f1()
                })
            
                document.getElementsByClassName('rect')[1].addEventListener('click', (e)=> {
                    f2()
                })
                document.getElementsByClassName('rect')[2].addEventListener('click', (e)=> {
                    f3()
                })
                document.getElementsByClassName('rect')[3].addEventListener('click', (e)=> {
                    f4()
                })
                document.getElementsByClassName('rect')[4].addEventListener('click', (e)=> {
                    f5()
                })
                document.getElementsByClassName('rect')[5].addEventListener('click', (e)=> {
                    f6()
                })
                document.getElementsByClassName('rect')[6].addEventListener('click', (e)=> {
                    f7()
                })
                document.getElementsByClassName('rect')[7].addEventListener('click', (e)=> {
                    f8()
                })
            if(response.data.hints[0].food.nutrients.FIBTG==undefined){
                document.getElementById("fibre1").innerHTML =
                 "Fibre: " +"-";
            }
            else{
                document.getElementById("fibre1").innerHTML =
                 "Fibre: " +response.data.hints[0].food.nutrients.FIBTG.toFixed(2)+"g";
            }
            

            //item2
            document.getElementById('item2').innerHTML=response.data.hints[1].food.label;
            document.getElementById("cal2").innerHTML =
                "Calories: " + response.data.hints[1].food.nutrients.ENERC_KCAL.toFixed(2)+'kcal';
            document.getElementById("prot2").innerHTML =
                "Proteins: " + response.data.hints[1].food.nutrients.PROCNT.toFixed(2)+'g';
            document.getElementById("fat2").innerHTML =
                "Fat: " + response.data.hints[1].food.nutrients.FAT.toFixed(2)+'g';
            document.getElementById("carbs2").innerHTML =
                "Carbs: " + response.data.hints[1].food.nutrients.CHOCDF.toFixed(2)+'g';
            if(response.data.hints[1].food.nutrients.FIBTG==undefined){
                document.getElementById("fibre2").innerHTML =
                 "Fibre: " +"-";
            }
            else{
                document.getElementById("fibre2").innerHTML =
                 "Fibre: " +response.data.hints[1].food.nutrients.FIBTG.toFixed(2)+"g";
            }

            //item3
             document.getElementById('item3').innerHTML=response.data.hints[2].food.label;
             document.getElementById("cal3").innerHTML =
                 "Calories: " + response.data.hints[2].food.nutrients.ENERC_KCAL.toFixed(2)+'kcal';
             document.getElementById("prot3").innerHTML =
                 "Proteins: " + response.data.hints[2].food.nutrients.PROCNT.toFixed(2)+'g';
             document.getElementById("fat3").innerHTML =
                 "Fat: " + response.data.hints[2].food.nutrients.FAT.toFixed(2)+'g';
             document.getElementById("carbs3").innerHTML =
                 "Carbs: " + response.data.hints[2].food.nutrients.CHOCDF.toFixed(2)+'g';
            if(response.data.hints[2].food.nutrients.FIBTG==undefined){
                document.getElementById("fibre3").innerHTML =
                 "Fibre: " +"-";
            }
            else{
                document.getElementById("fibre3").innerHTML =
                 "Fibre: " +response.data.hints[2].food.nutrients.FIBTG.toFixed(2)+"g";
            }
                

            //item4
            document.getElementById('item4').innerHTML=response.data.hints[3].food.label;
            document.getElementById("cal4").innerHTML =
                "Calories: " + response.data.hints[3].food.nutrients.ENERC_KCAL.toFixed(2)+'kcal';
            document.getElementById("prot4").innerHTML =
                "Proteins: " + response.data.hints[3].food.nutrients.PROCNT.toFixed(2)+'g';
            document.getElementById("fat4").innerHTML =
                "Fat: " + response.data.hints[3].food.nutrients.FAT.toFixed(2)+'g';
            document.getElementById("carbs4").innerHTML =
                "Carbs: " + response.data.hints[3].food.nutrients.CHOCDF.toFixed(2)+'g';
            document.getElementById("fibre4").innerHTML =
                "Fibre: " + response.data.hints[3].food.nutrients.FIBTG.toFixed(2)+'g';
            if(response.data.hints[3].food.nutrients.FIBTG==undefined){
                document.getElementById("fibre4").innerHTML =
                 "Fibre: " +"-";
            }
            else{
                document.getElementById("fibre4").innerHTML =
                 "Fibre: " +response.data.hints[3].food.nutrients.FIBTG.toFixed(2)+"g";
            }

            //item5
            document.getElementById('item5').innerHTML=response.data.hints[4].food.label;
            document.getElementById("cal5").innerHTML =
                "Calories: " + response.data.hints[4].food.nutrients.ENERC_KCAL.toFixed(2)+'kcal';
            document.getElementById("prot5").innerHTML =
                "Proteins: " + response.data.hints[4].food.nutrients.PROCNT.toFixed(2)+'g';
            document.getElementById("fat5").innerHTML =
                "Fat: " + response.data.hints[4].food.nutrients.FAT.toFixed(2)+'g';
            document.getElementById("carbs5").innerHTML =
                "Carbs: " + response.data.hints[4].food.nutrients.CHOCDF.toFixed(2)+'g';
            if(response.data.hints[4].food.nutrients.FIBTG==undefined){         
                document.getElementById("fibre5").innerHTML =
                 "Fibre: " +"-";
            }
            else{
                document.getElementById("fibre5").innerHTML =
                 "Fibre: " +response.data.hints[4].food.nutrients.FIBTG.toFixed(2)+"g";
            }

            //item6
            document.getElementById('item6').innerHTML=response.data.hints[5].food.label;
            document.getElementById("cal6").innerHTML =
                "Calories: " + response.data.hints[5].food.nutrients.ENERC_KCAL.toFixed(2)+'kcal';
            document.getElementById("prot6").innerHTML =
                "Proteins: " + response.data.hints[5].food.nutrients.PROCNT.toFixed(2)+'g';
            document.getElementById("fat6").innerHTML =
                "Fat: " + response.data.hints[5].food.nutrients.FAT.toFixed(2)+'g';
            document.getElementById("carbs6").innerHTML =
                "Carbs: " + response.data.hints[5].food.nutrients.CHOCDF.toFixed(2)+'g';
            if(response.data.hints[5].food.nutrients.FIBTG==undefined){
                document.getElementById("fibre6").innerHTML =
                 "Fibre: " +"-";
            }
            else{
                document.getElementById("fibre6").innerHTML =
                 "Fibre: " +response.data.hints[5].food.nutrients.FIBTG.toFixed(2)+"g";
            }

            //item7
            document.getElementById('item7').innerHTML=response.data.hints[6].food.label;
            document.getElementById("cal7").innerHTML =
                "Calories: " + response.data.hints[6].food.nutrients.ENERC_KCAL.toFixed(2)+'kcal';
            document.getElementById("prot7").innerHTML =
                "Proteins: " + response.data.hints[6].food.nutrients.PROCNT.toFixed(2)+'g';
            document.getElementById("fat7").innerHTML =
                "Fat: " + response.data.hints[6].food.nutrients.FAT.toFixed(2)+'g';
            document.getElementById("carbs7").innerHTML =
                "Carbs: " + response.data.hints[6].food.nutrients.CHOCDF.toFixed(2)+'g';
            if(response.data.hints[6].food.nutrients.FIBTG==undefined){
                document.getElementById("fibre7").innerHTML =
                 "Fibre: " +"-";
            }
            else{
                document.getElementById("fibre7").innerHTML =
                 "Fibre: " +response.data.hints[6].food.nutrients.FIBTG.toFixed(2)+"g";
            }

            //item8
            document.getElementById('item8').innerHTML=response.data.hints[7].food.label;
            document.getElementById("cal8").innerHTML =
                "Calories: " + response.data.hints[7].food.nutrients.ENERC_KCAL.toFixed(2)+'kcal';
            document.getElementById("prot8").innerHTML =
                "Proteins: " + response.data.hints[7].food.nutrients.PROCNT.toFixed(2)+'g';
            document.getElementById("fat8").innerHTML =
                "Fat: " + response.data.hints[7].food.nutrients.FAT.toFixed(2)+'g';
            document.getElementById("carbs8").innerHTML =
                "Carbs: " + response.data.hints[7].food.nutrients.CHOCDF.toFixed(2)+'g';
            if(response.data.hints[7].food.nutrients.FIBTG==undefined){
                document.getElementById("fibre8").innerHTML =
                 "Fibre: " +"-";
            }
            else{
                document.getElementById("fibre8").innerHTML =
                 "Fibre: " +response.data.hints[7].food.nutrients.FIBTG.toFixed(2)+"g";
            }

            document.getElementById('search').getElementsByTagName('p')[0].innerHTML = ite

            } catch (error) {
            console.error(error);
            }
            
        }

    fetchData();