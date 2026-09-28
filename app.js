fetch("menu.json")

    .then(response => response.json())

    .then(data => {

        let menu = document.getElementById("menu");

        for (let i = 0; i < data.length; i++) {

            let div = document.createElement("div");

            div.innerHTML = `
                <h3>${data[i].meal}</h3>
                <p>Price: ${data[i].price} JD</p>
                <p>Available: ${data[i].available}</p>
                <hr>
            `;

            menu.appendChild(div);

        }

    })

    .catch(error => {
        console.log("Error: ", error);
    });