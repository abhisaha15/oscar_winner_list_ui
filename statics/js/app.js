



document.querySelector('#find-year-data').addEventListener('click',function(){

  let y = document.querySelector('#enter_year').value;

  getAlldata(y);

  document.querySelector('#enter_year').value = '';

})


document.querySelector('#btnno-5').addEventListener('click',function(){
  getAlldata(2023);
})

document.querySelector('#btnno-4').addEventListener('click',function(){
  getAlldata(2022);
})

document.querySelector('#btnno-3').addEventListener('click',function(){
  getAlldata(2021);
})

document.querySelector('#btnno-2').addEventListener('click',function(){
  getAlldata(2020);
})
document.querySelector('#btnno-1').addEventListener('click',function(){
  getAlldata(2019);
})


getAlldata(2023);


const oscar_data_grid = $("div#wrapper").Grid({
  columns: ['Sl.No','Category', 'Winner'],
  search: true,
  sort: true,
  resizable: true,
  data: [],
  pagination: {
    limit: 5
  },
});


// new gridjs.Grid({
//   columns: ["Name", "Email", "Phone Number"],      
//   data: [
//       ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
//       ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
//       ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
//       ["Afshin", "afshin@mail.com", "(353) 22 87 8356"]
//   ]
// }).render(document.getElementById("gridjs"));


function getAlldata(y){
  let url = "https://oscar-winner-list-backend.vercel.app/"+y;
  //let url = "http://127.0.0.1:5000/"+y;
  let fetchRes = fetch(url);
    // fetchRes is the promise to resolve
    // it by using.then() method
    fetchRes.then(res =>
        res.json()).then(d => {
  
            console.log(d)
            let year = d['year'];
            let alldata = [];
            for (let index = 0; index < d['data'].length; index++) {
              
              
              alldata.push([index+1,d['data'][index]['category'],d['data'][index]['winner']]);
              
              
            }
            console.log(alldata)
            
            oscar_data_grid.updateConfig({
              data: alldata
          }).forceRender();
            
            
            

            document.querySelector('#selected-year').innerHTML=`Year Selected : ${year}`;
  
  
      })
}
