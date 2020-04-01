class Insurance {
    constructor(brand, year, type) {
        this.brand = brand;
        this.year = year;
        this.type = type;
    }

    calculateInsurance(){
        //console.log(info);
    /* 
        1 = American = 1.25
        2 = Asian = 1.10
        3 = European = 1.30
    
    */
        let expens;    
        const initial = 2000;
    
        switch(this.brand) {
            case '1':
                expens = initial * 1.25;
                break;
        }
    
        switch(this.brand) {
            case '2':
                expens = initial * 1.10;
                break;
        }
    
        switch(this.brand) {
            case '3':
                expens = initial * 1.35;
                break;
        }
    
        //console.log(expens);
    
        const diference = new Date().getFullYear() - this.year;
        // Each year with -2% of the value
        //console.log(diference);
    
        expens -= ((diference * 2) * expens) / 100;
       
    
        /* 
            basic insurance +30%
            complete insurance +45%
        */
    
        if(this.type === 'basic') {
            expens *= 1.30;
        } else {
            expens *= 1.45;
        }
    
        //console.log(expens);
        return expens;
    }    
 
}


class Show {
    showMessage(message, type) {
        const div = document.createElement('div');
     
             if(type == 'error') {
                 div.classList.add('message', 'error');
             } else {
                 div.classList.add('message', 'correct');
             }
             div.innerHTML = `${message}`;
             form.insertBefore(div, document.querySelector('.form-group'));
     
             setTimeout(function() {
                 document.querySelector('.message').remove();
             }, 3000)
         }

    showResult(insurance, total) {
        const result = document.getElementById('result');
        let brand;
        
            switch(insurance.brand) {
                case '1':
                brand = 'American';
                break;
        
                case '2':
                brand = 'Asian';
                break;
        
                case '1':
                brand = 'European';
                break;
            }
        
            //console.log(brand);
        
            const div = document.createElement('div');
            div.innerHTML = `
            <p>Summary: </p>
            <p>Brand: ${brand} </p>
            <p>Year: ${insurance.year} </p>
            <p>Type: ${insurance.type} </p>
            <p>Total: ${total} </p>
            `;
        
            const spinner = document.querySelector('#loading img');   
            spinner.style.display = 'block';
            
            setTimeout(function(){
                spinner.style.display = 'none';
                result.appendChild(div);
            }, 3000);
            
        }     
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
        show.showMessage('Missign data, check the form and try again', 'error');
    } else {

        const results = document.querySelector('#result div');
        if(results != null) {
            results.remove();
        }

        const insurance = new Insurance(selectedBrand, selectedYear, type);
        //console.log(insurance);

        const expens = insurance.calculateInsurance();

        show.showResult(insurance, expens);
        show.showMessage('Calculating', 'correct');
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
