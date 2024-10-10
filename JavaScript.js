document.querySelector('.formone').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const dob = document.querySelector('#dob').value;
    const time = document.querySelector('#time').value;
    const place = document.querySelector('#place').value;

    let listItemOne = document.createElement('td');
    listItemOne.innerHTML = name

    let listItemTwo = document.createElement('td');
    listItemTwo.innerHTML = dob

    let listItemThree = document.createElement('td');
    listItemThree.innerHTML = time

    let listItemFour = document.createElement('td');
    listItemFour.innerHTML = place

    let listItemfive = document.createElement('td');
    listItemfive.innerHTML = `<button class = "edit"><i class="fa-solid fa-pen-to-square"></i></button> 
                                    <button class = "remove"><i class="fa-solid fa-trash"></i></button> `

    let listArr = document.createElement('tr')
    listArr.appendChild(listItemOne);
    listArr.appendChild(listItemTwo);
    listArr.appendChild(listItemThree);
    listArr.appendChild(listItemFour);
    listArr.appendChild(listItemfive);
    const userData = document.querySelector('#userData').appendChild(listArr)

    document.querySelector('.edit').addEventListener('click', (e) => {

        document.querySelector('#name').value = name
        document.querySelector('#dob').value = dob
        document.querySelector('#time').value = time
        document.querySelector('#place').value = place

        listArr.remove()

    })

    document.querySelector('.remove').addEventListener('click', (e) => {

        listArr.remove()
    })

    document.querySelector('.formone').reset();

})


