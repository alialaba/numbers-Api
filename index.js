window.addEventListener('load', () => {


    fetch('https://emajency.com/js/numbers.json')

    .then((res) => {
            if (true) {
                return res.json();
            } else {
                alert('there is an error in dialing this number');
            }
        })
        .then((data) => {
            let output = ``;

            data.forEach(item => {
                const { name, number } = item
                output += `
                <div class="list">
                <ul>
                <li>Name: ${name}</li>
                <li>Phone No: ${number}</li>
                <li><a href="Tel:${number}"><i class="fas fa-phone phone-icon"></i></a></li>
                
                </ul>
                
                
                </div>

                
                `

                // console.log(item)
                displayNumber(output);
            })


        }).catch((err) => console.log(err))
})

const displayNumber = (output) => {
    document.querySelector('.lists').innerHTML = output;

}

// const search = document.getElementById('search')
// const searchName = async searchText => {
//     const response = await fetch('https://emajency.com/js/numbers.json')
//     const names = await response.json();
//     let matches = names.filter(nam => {
//         const regex = new RegExp(`^${searchText}`, 'gi');
//         return nam.name.match(regex);
//     })
//     if (searchText.length === 0) {
//         matches = [];
//     }
//     displayNumber(matches)

// }
// search.addEventListener('input', () => searchName(search.value));


const searchInput = document.getElementById('search');
const listItem = document.querySelector('.lists');
// console.log(listItem);

searchInput.addEventListener('keyup', (event) => {
    // console.log(event)
    const match = event.target.value;
    listItem.forEach((el) => {
        el.querySelector('li').textContent.toLowerCase().startsWith(match) ?
            null : listItem.getElementsByClassName.display = "none";
    })
})