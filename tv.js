

	let list = document.getElementById('list');
    let filter = document.querySelector('.filter');
	let sort = document.querySelector('.sort');
    let count = document.getElementById('count');
	
	let listTvProducts = [
		{
			id: 1,
			name: 'SMARTTECH 43FN919D',
			price: 590,
			discountPrice: 500,
			starCount: 3,
			image: 'tv1.jpg',
			desc: {	
				brand: 'SMARTTECH',
				screenSize: '43',
				info: 'LED 43.0 ", 109.0 см'
			}
		},
		{
			id: 2,
			name: 'SMARTTECH 50FN919D',
			price: 690,
			discountPrice: '',
			starCount: 4,
			image: 'tv2.jpg',
			desc: {	
				brand: 'SMARTTECH',
				screenSize: '50',
				info: 'LED 50.0 ", 127.0 см'
			}
		},
		{
			id: 3,
			name: 'SMARTTECH 55FN919D',
			price: 790,
			discountPrice: '',
			starCount: 2,
			image: 'tv3.jpg',
			desc: {	
				brand: 'SMARTTECH',
				screenSize: '55',
				info: 'LED 55.0 ", 139.0 см'
			}
		},
		{
			id: 4,
			name: 'SMARTTECH 60FN919D',
			price: 890,
			discountPrice: '',
			starCount: 5,
			image: 'tv4.jpg',
			desc: {	
				brand: 'SMARTTECH',
				screenSize: '60',
				info: 'LED 60.0 ", 152.0 см'
			}
		},
		{
			id: 5,
			name: 'SMARTTECH 43FN919Е',
			price: 599,
			discountPrice: '',
			starCount: 1,
			image: 'tv1.jpg',
			desc: {	
				brand: 'SMARTTECH',
				screenSize: '43',
				info: 'LED 43.0 ", 109.0 см'
			}
		},
		{
			id: 6,
			name: 'SMARTTECH 50FN919Е',
			price: 699,
			discountPrice: '',
			starCount: 3,
			image: 'tv2.jpg',
			desc: {	
				brand: 'SMARTTECH',
				screenSize: '50',
				info: 'LED 50.0 ", 127.0 см'
			}
		},
		{
			id: 7,
			name: 'SMARTTECH 55FN919Е',
			price: 799,
			discountPrice: '700',
			starCount: 3,
			image: 'tv3.jpg',
			desc: {	
				brand: 'SMARTTECH',
				screenSize: '55',
				info: 'LED 55.0 ", 139.0 см'
			}
		},
		{
			id: 8,
			name: 'SMARTTECH 60FN919Е',
			price: 899,
			discountPrice: '',
			starCount: 4,
			image: 'tv4.jpg',
			desc: {	
				brand: 'SMARTTECH',
				screenSize: '60',
				info: 'LED 60.0 ", 152.0 см'
			}
		},
		{
			id: 9,
			name: 'SONY KD-43W800P',
			price: 650,
			discountPrice: '',
			starCount: 5,
			image: 'tv5.jpg',
			desc: {	
				brand: 'SONY',
				screenSize: '43',
				info: 'LED 43.0 ", 109.0 см'
			}
		},
		{
			id: 10,
			name: 'SONY KD-50W800P',
			price: 750,
			discountPrice: '',
			starCount: 3,
			image: 'tv6.jpg',
			desc: {	
				brand: 'SONY',
				screenSize: '50',
				info: 'LED 50.0 ", 127.0 см'
			}
		},
		{
			id: 11,
			name: 'SONY KD-55W800P',
			price: 850,
			discountPrice: '',
			starCount: 4,
			image: 'tv7.jpg',
			desc: {	
				brand: 'SONY',
				screenSize: '55',
				info: 'LED 55.0 ", 139.0 см'
			}
		},
		{
			id: 12,
			name: 'SONY KD-60W800P',
			price: 950,
			discountPrice: '',
			starCount: 5,
			image: 'tv8.jpg',
			desc: {	
				brand: 'SONY',
				screenSize: '60',
				info: 'LED 60.0 ", 152.0 см'
			}
		},
		
    
	];
	
	let productFilter = listTvProducts;
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
        list.innerHTML = '';
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
            if(item.discountPrice != '')
                newPrice.innerText = item.price + ' lv -> new price ' + item.discountPrice +' lv';
            else
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
			newButton.innerHTML = '<i style = "margin-top: 6px;" class="material-icons">add_shopping_cart</i> ADD TO CART';
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
				document.getElementById('btnLoad').innerHTML = "Load from beginning";
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
        productFilter = listTvProducts.filter(item => {
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
                productFilter = listTvProducts;
            }

            return true;
        });
		displayFirstFour();
    });
	