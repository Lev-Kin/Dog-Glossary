document.getElementById('button-random-dog').addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const contentDiv = document.getElementById('content');
            contentDiv.innerHTML = '';
            const dogImage = document.createElement('img');
            dogImage.src = data.message;
            dogImage.alt = "Random Dog";
            contentDiv.appendChild(dogImage);
        })
        .catch(error => {
            console.error("Error fetching the dog image:", error);
        });
});

document.getElementById('button-show-breed').addEventListener('click', () => {
    const breed = document.getElementById('input-breed').value.toLowerCase();
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => response.json())
        .then(data => {
            const contentDiv = document.getElementById('content');
            contentDiv.innerHTML = '';
            if (data.status === "error") {
                contentDiv.innerHTML = '<p>Breed not found!</p>';
                return;
            }
            const dogImage = document.createElement('img');
            dogImage.src = data.message;
            dogImage.alt = breed;
            contentDiv.appendChild(dogImage);
        })
        .catch(error => {
            console.error("Error fetching the dog image:", error);
        });
});

document.getElementById('button-show-sub-breed').addEventListener('click', () => {
    const breed = document.getElementById('input-breed').value.toLowerCase();
    fetch(`https://dog.ceo/api/breed/${breed}/list`)
        .then(response => response.json())
        .then(data => {
            const contentDiv = document.getElementById('content');
            contentDiv.innerHTML = '';
            if (data.status === "error") {
                contentDiv.innerHTML = '<p>Breed not found!</p>';
                return;
            }
            if (data.message.length === 0) {
                contentDiv.innerHTML = '<p>No sub-breeds found!</p>';
                return;
            }
            const ol = document.createElement('ol');
            data.message.forEach(subBreed => {
                const li = document.createElement('li');
                li.textContent = subBreed;
                ol.appendChild(li);
            });
            contentDiv.appendChild(ol);
        })
        .catch(error => {
            console.error("Error fetching the sub-breeds:", error);
        });
});

document.getElementById('button-show-all').addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(data => {
            const contentDiv = document.getElementById('content');
            contentDiv.innerHTML = '';
            const ol = document.createElement('ol');
            for (const breed in data.message) {
                const li = document.createElement('li');
                li.textContent = breed;
                if (data.message[breed].length > 0) {
                    const ul = document.createElement('ul');
                    data.message[breed].forEach(subBreed => {
                        const subLi = document.createElement('li');
                        subLi.textContent = subBreed;
                        ul.appendChild(subLi);
                    });
                    li.appendChild(ul);
                }
                ol.appendChild(li);
            }
            contentDiv.appendChild(ol);
        })
        .catch(error => {
            console.error("Error fetching the breeds:", error);
        });
});
