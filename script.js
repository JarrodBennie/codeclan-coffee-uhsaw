fetch('http://codeclan-coffees.herokuapp.com')
    .then(res => res.json())
    .then(coffees => {
        const menu = document.querySelector('#menu')
        coffees.forEach((coffee) => {
            const coffeeName = document.createElement('p')
            coffeeName.textContent = coffee.name
            menu.appendChild(coffeeName)
        })
    })