function Insurance(brand, year, type) {
    this.brand = brand;
    this.year = year;
    this.type = type;
}

function Show() {

}

const form = document.getElementById('calculate-insurance');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const brand = document.getElementById('brand');
    const selectedBrand = brand.options[brand.selectedIndex].value;

    const year = document.getElementById('year');
    const selectedYear = year.options[year.selectedIndex].value;

    const type = document.querySelector('input[name="type"]:checked').value;
    
    //onsole.log(selectedYear);
    //console.log('Press');

    const show = new Show();

    if(selectedBrand === '' || selectedYear === '' || type === '') {
        console.log('mising data');
    } else {
        console.log('ok');
    }

});

const max = new Date().getFullYear(),
    min = max - 20;

    console.log(max);
    console.log(min);

const slectYears = document.getElementById('year');
for(let i = max; i >= min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    slectYears.appendChild(option);
}   
