const colorsBtn = document.getElementsByClassName('color-btn');
let selectedColor;
for(const colorBtn of colorsBtn){
    colorBtn.addEventListener('click',function(event){
        for(const otherBtn of colorsBtn){
            otherBtn.classList.remove('border-black','opacity-50');
            otherBtn.classList.add('border-gray-300','opacity-50')
        }
        event.target.classList.remove('border-gray-300','opacity-50')
        event.target.classList.add('border-black');
        const colorId = event.target.id.split('-')[0];
        selectedColor = colorId;
        document.getElementById('product-img').src = selectedColor+'.png';
    })
}
let selectedSize;
const sizes = document.querySelectorAll('.size');
for(let i =0;i<sizes.length;i++){
    const element = sizes[i];
    element.addEventListener('click',function(event){
        for(let j=0;j<sizes.length;j++){            
            sizes[j].classList.remove('bg-black','text-white')
        }
        element.classList.add('bg-black','text-white');
        const sizeId = event.target.id.split('-')[1];
        selectedSize = sizeId;
    })
}


let countQunatity = Number(document.getElementById('quantity-value').innerText);
function quantity(value){


        if(value === '+'){
            countQunatity +=1;
        }
        else if (value === '-' && countQunatity >0){
            countQunatity -=1
        }
        document.getElementById('quantity-value').innerText = countQunatity;
        
}
const products = [];
document.getElementById('buy-now-btn').addEventListener('click',function(){
    if(selectedColor){
        if(selectedSize){
            if(countQunatity > 0){
                products.push({
                    name : "Dr. Mauch Men's Sandal",
                    quantity: countQunatity,
                    size : selectedSize,
                    color : selectedColor,
                    img : selectedColor +'.png',
                    price : (countQunatity*2116)
                })
                for(const item of products){
                    const cardItemsContainer = document.getElementById('cart-items');
                const row = document.createElement('tr');
                row.classList.add('border-b','border-gray-300')
                row.innerHTML = `
                <td class="px-4 py-2 font-medium flex items-center gap-4">
                <img class="w-16" src="${item.img}" alt="">
                <p>${item.name}</p>
                </td>
                <td class="py-2 px-4">${item.color}</td>
                <td class="px-4 py-2">${item.size}</td>
                <td class="px-4 py-2">${item.quantity}</td>
                <td class="px-4 py-2 font-medium">৳ ${item.price}</td>
                `
                cardItemsContainer.appendChild(row);
                }
                
                const modal = document.getElementById('cart-modal');
                modal.classList.remove('hidden');




                //Continue Shopping Btn
                document.getElementById('continue-shopping').addEventListener('click',function(){
                    modal.classList.add('hidden')
                })
                document.getElementById('checkout').addEventListener('click',function(){
                    alert('Proceeding to Checkout')
                })
            }
            else{
                alert('select qunatity')
            }
        }
        else{
            alert('Select Your Size')
        }
    }
    else{
        alert('Please Select A Color')
    }
})






document.getElementById('add-to-cart-btn').addEventListener('click',function(){
    if(selectedColor){
        if(selectedSize){
            if(countQunatity > 0){
                for(const item of products){
                    const cardItemsContainer = document.getElementById('cart-items');
                const row = document.createElement('tr');
                row.classList.add('border-b','border-gray-300')
                row.innerHTML = `
                <td class="px-4 py-2 font-medium flex items-center gap-3">
                <img class="w-16" src="${item.img}" alt="">
                <p>${item.name}</p>
                </td>
                <td class="py-2 px-4">${item.color}</td>
                <td class="px-4 py-2">${item.size}</td>
                <td class="text-center py-2">${item.quantity}</td>
                <td class="px-4 py-2 font-medium">৳ ${item.price}</td>
                `
                cardItemsContainer.appendChild(row);
                }
            }
            else{
                alert('select qunatity')
            }
        }
        else{
            alert('Select Your Size')
        }
    }
    else{
        alert('Please Select A Color')
    }
})


// document.getElementById('child').addEventListener('click',function(){
//     console.log('Child Clicked');
// })