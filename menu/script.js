console.log("This is menu");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '',
		'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=1lb%20brisket%20with%20fries', options)
	.then(response => response.json())
	.then(response => {
        // console.log(response)
        response.forEach(menu => {
            let markup = `  <div class="items">
                                <div class="itemImg">
                                    <img src="/images/food1.png" alt="" height="200" width="200">
                                </div>
                                <div class="description">
                                    ${menu.name} is first Item in our menu <br>
                                    at rs 499.
                                    <ul>
                                        <li>calories : ${menu.calories}</li>
                                        <li>carbohydrates_total_g : ${menu.carbohydrates_total_g}</li>
                                        <li>cholesterol_mg : ${menu.cholesterol_mg}</li>
                                        <li>fat_saturated_g : ${menu.fat_saturated_g}</li>
                                        <li>fat_total_g : ${menu.fat_total_g}</li>
                                        <li>fiber_g : ${menu.fiber_g}</li>
                                        <li>potassium_mg : ${menu.potassium_mg}</li>
                                        <li>sodium_mg : ${menu.sodium_mg}</li>
                                        <li>sugar_g : ${menu.sugar_g}</li>
                                    </ul>
                                </div>
                            </div>`; 
            
            document.querySelector('.container').innerHTML += markup;  
        })
    })
	.catch(err => console.error(err));
