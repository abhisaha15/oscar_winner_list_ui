window.addEventListener("load", (event) => {
    getRawdata(2023);
});

document.querySelector('#find-year-raw-data').addEventListener('click', function () {

    let y = document.querySelector('#enter_year').value;

    getRawdata(y);

    document.querySelector('#enter_year').value = '';

})


function getRawdata(y) {
    let url = "https://oscar-winner-list-backend.vercel.app/" + y;
    //let url = "http://127.0.0.1:5000/"+y;
    let fetchRes = fetch(url);
    // fetchRes is the promise to resolve
    // it by using.then() method
    fetchRes.then(res =>
        res.json()).then(d => {

            document.querySelector('#raw_output').innerHTML = JSON.stringify(d, undefined, 2);

            console.log(d)
            let year = d['year'];
            let alldata = [];
            for (let index = 0; index < d['data'].length; index++) {


                alldata.push([index + 1, d['data'][index]['category'], d['data'][index]['winner']]);


            }
            console.log(alldata)

            oscar_data_grid.updateConfig({
                data: alldata
            }).forceRender();




            document.querySelector('#selected-year').innerHTML = `Year Selected : ${year}`;


        })
}
