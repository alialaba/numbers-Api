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

const searchName = () => {
    const searchInput = document.getElementById('search');
    const listItem = document.querySelector('.lists');
    // console.log(listItem);

    searchInput.addEventListener('keyup', (event) => {
        // console.log(event)
        const searchLetter = event.target.value.toLowerCase()
        listItem.forEach((el) => {
            el.querySelector('li').textContent.toLowerCase().startsWith(searchLetter) ?
                el.style.display = "" : el.style.display = "none";
        })
    })
}