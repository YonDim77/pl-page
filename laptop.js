

	let list = document.getElementById('list');
    let filter = document.querySelector('.filter');
	let sort = document.querySelector('.sort');
    let count = document.getElementById('count');
	
	let listLaptopProducts = [
		{
			id: 1,
			name: 'ACER Aspire 3',
			price: 990,
			starCount: 3,
			image: 'lt1.jpg',
			desc: {	
				brand: 'ACER',
				screenSize: '15,6',
				info: 'RAM 8 GB, SSD 256 GB'
			}
		},
		{
			id: 2,
			name: 'ACER Aspire 5',
			price: 890,
			starCount: 4,
			image: 'lt2.jpg',
			desc: {	
				brand: 'ACER',
				screenSize: '14',
				info: 'RAM 8 GB, SSD 512 GB'
			}
		},
		{
			id: 3,
			name: 'ACER Nitro 5',
			price: 1090,
			starCount: 2,
			image: 'lt3.jpg',
			desc: {	
				brand: 'ACER',
				screenSize: '15,6',
				info: 'RAM 8 GB, SSD 512 GB'
			}
		},
		{
			id: 4,
			name: 'ACER Swift 3',
			price: 1890,
			starCount: 5,
			image: 'lt4.jpg',
			desc: {	
				brand: 'ACER',
				screenSize: '17',
				info: 'RAM 16 GB, SSD 512 GB'
			}
		},
		{
			id: 5,
			name: 'HP 15S-FQ0005NU',
			price: 1599,
			starCount: 1,
			image: 'lt5.jpg',
			desc: {	
				brand: 'HP',
				screenSize: '15,6',
				info: 'RAM 4 GB, SSD 256 GB'
			}
		},
		{
			id: 6,
			name: 'HP PAVILION',
			price: 1699,
			starCount: 3,
			image: 'lt6.jpg',
			desc: {	
				brand: 'HP',
				screenSize: '17',
				info: 'RAM 8 GB, SSD 256 GB'
			}
		},
		{
			id: 7,
			name: 'HP VICTUS',
			price: 1799,
			starCount: 3,
			image: 'lt7.jpg',
			desc: {	
				brand: 'HP',
				screenSize: '18',
				info: 'RAM 16 GB, SSD 512 GB'
			}
		},
		{
			id: 8,
			name: 'HP ENVY X360',
			price: 1899,
			starCount: 4,
			image: 'lt8.jpg',
			desc: {	
				brand: 'HP',
				screenSize: '17',
				info: 'RAM 8 GB, SSD 512 GB'
			}
		},
		{
			id: 9,
			name: 'DELL Vostro 3515',
			price: 1655,
			starCount: 5,
			image: 'lt5.jpg',
			desc: {	
				brand: 'DELL',
				screenSize: '14',
				info: 'RAM 8 GB, SSD 512 GB'
			}
		},
		{
			id: 10,
			name: 'DELL Vostro 3500',
			price: 1750,
			starCount: 3,
			image: 'lt6.jpg',
			desc: {	
				brand: 'DELL',
				screenSize: '18',
				info: 'RAM 8 GB, SSD 256 GB'
			}
		},
		{
			id: 11,
			name: 'DELL G5 5515',
			price: 1450,
			starCount: 4,
			image: 'lt7.jpg',
			desc: {	
				brand: 'DELL',
				screenSize: '17',
				info: 'RAM 8 GB, SSD 256 GB'
			}
		},
		{
			id: 12,
			name: 'DELL Vostro 5515',
			price: 1950,
			starCount: 5,
			image: 'lt8.jpg',
			desc: {	
				brand: 'DELL',
				screenSize: '15,6',
				info: 'RAM 16 GB, SSD 512 GB'
			}
		},
		
    
	];
	
	let productFilter = listLaptopProducts;
	let saveProductFilterLength;
	//let sliced = productFilter;
    //showProduct(productFilter);
	
	function compareAsc( a, b ) {
		if ( a.price < b.price ){
			return -1;
		}
		if ( a.price > b.price ){
			return 1;
		}
		return 0;
	}
	
	function compareDesc( a, b ) {
		if ( b.price < a.price ){
			return -1;
		}
		if ( b.price > a.price ){
			return 1;
		}
		return 0;
	}
	
	function compareAZ( a, b ) {
		if ( a.name < b.name ){
			return -1;
		}
		if ( a.name > b.name ){
			return 1;
		}
		return 0;
	}
	
	function compareZA( a, b ) {
		if ( b.name < a.name ){
			return -1;
		}
		if ( b.name > a.name ){
			return 1;
		}
		return 0;
	}
	
	function displayPriceAscending() {
		productFilter.sort(compareAsc);
		displayFirstFour();
	}
	
	function displayPriceDescending() {
		productFilter.sort(compareDesc);
		displayFirstFour();
	}
	
	function displayNameAZ() {
		productFilter.sort(compareAZ);
		displayFirstFour();
	}
	
	function displayNameZA() {
		productFilter.sort(compareZA);
		displayFirstFour();
	}

	function sortType() {
		let sortValue = document.getElementById('sort').value;
		
		switch(sortValue){
			case "Price ascending":
				displayPriceAscending();
				break;
			case "Price descending":
				displayPriceDescending();
				break;
			case "Names A to Z":
				displayNameAZ();
				break;
			case "Names Z to A":
				displayNameZA();
				break;
			default:
				alert("Please choose sort option!");
				break;
		}
	
	}
	
	sort.addEventListener('submit', function(event){
		event.preventDefault();
		sortType();
	});
	
	
	let current_index = 0;
	function showProduct(productFilter) {
		//count.innerText = productFilter.length;
        list.innerHTML = '';
		//let itemCounter = 0;
        productFilter.forEach(item => {
            let newItem = document.createElement('div');
            newItem.classList.add('item');
    
            // create image
            let newImage = new Image();
            newImage.src = item.image;
            newItem.appendChild(newImage);
			
            // create name product
            let newTitle = document.createElement('div');
            newTitle.classList.add('title');
            newTitle.innerText = item.name;
            newItem.appendChild(newTitle);
			
			//create short description
			let newDesc = document.createElement('div');
            newDesc.classList.add('desc');
            newDesc.innerText = item.desc.info;
            newItem.appendChild(newDesc);
			
            // create price
            let newPrice = document.createElement('div');
            newPrice.classList.add('price');
            newPrice.innerText = item.price.toLocaleString() + ' lv';
            newItem.appendChild(newPrice);
			
			// create rating stars
            let newRatingStars = document.createElement('div');
			newRatingStars.setAttribute("align", "center");
			newRatingStars.innerText = 'Rating: ';
			let starCount = item.starCount;
			
			for (let i = 0; i < 5; i++) {				
				const star = document.createElement("SPAN"); 
				if(i < starCount)
					star.className = "fa fa-star checked";  
				else
					star.className = "fa fa-star"; 
				newRatingStars.appendChild(star);
			}      
            newItem.appendChild(newRatingStars);
			
			// create button
			const newButton = document.createElement("button");
			newButton.innerHTML = '<i style = "margin-top: 6px;" class="material-icons">add_shopping_cart</i> ADD TO CART'
			newButton.style.border = "none";
			newButton.onclick = function(){
				alert('Product added to cart');
				//return false;
			};
			newItem.appendChild(newButton);
    
            list.appendChild(newItem);
        });
		
	}
	
	function displayNextFour(){
	    const loadProducts = 4;
		showProduct(productFilter.slice(0, current_index + loadProducts));
		if(current_index + loadProducts <= productFilter.length)
		{
			current_index += loadProducts;
			if(current_index < saveProductFilterLength)
				count.innerText = current_index + " of " + saveProductFilterLength;
			else{
				count.innerText = saveProductFilterLength + " of " + saveProductFilterLength;
				//document.getElementById('btnLoad').style.display = "none";
				document.getElementById('btnLoad').innerHTML = "Load from begining";
				document.getElementById('btnLoad').onclick = function() {displayFirstFour()};
				current_index = 0;
			}
		}
	}
	
	function displayFirstFour(){
	    const loadProducts = 4;
		saveProductFilterLength = productFilter.length;
		showProduct(productFilter.slice(0, loadProducts));
		current_index = loadProducts;
		if(current_index < saveProductFilterLength){
				count.innerText = current_index + " of " + saveProductFilterLength;
				document.getElementById('btnLoad').style.display = "block";
				document.getElementById('btnLoad').innerHTML = "Load more";
				document.getElementById('btnLoad').onclick = function() {displayNextFour()};
		}
		else{
			count.innerText = saveProductFilterLength + " of " + saveProductFilterLength;
			if(saveProductFilterLength > loadProducts)
			{
			    document.getElementById('btnLoad').innerHTML = "Load from begining";
			    document.getElementById('btnLoad').onclick = function() {displayFirstFour()};
			}
			else
			    document.getElementById('btnLoad').style.display = "none";
		}
	}
	displayFirstFour();
	
	filter.addEventListener('submit', function(event){
        event.preventDefault();
        let valueFilter = event.target.elements;
        productFilter = listLaptopProducts.filter(item => {
            // check brand
            if(valueFilter.brand.value != ''){
                if(item.desc.brand != valueFilter.brand.value){					
                    return false;
                }
            }
            // check screen size
            if(valueFilter.screenSize.value != ''){
               if(!item.desc.screenSize.includes(valueFilter.screenSize.value)){
                   return false;
               }
            }
            if(valueFilter.brand.value == '' && valueFilter.screenSize.value == '')
            {
                productFilter = listLaptopProducts;
            }
            
            return true;
        });
		displayFirstFour();
    });
	