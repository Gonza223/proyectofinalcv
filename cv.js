document.getElementById('btncv').addEventListener('click', getData);

function getData() {
    fetch('https://randomuser.me/api/?results=1')
        .then(res => res.json())
        .then(data => {
    
           let author = data.results;
           author.forEach(function (lists) {
                output += `
                <div class="container">
                    <div class="card mt-4 bg-light">
                        <ul class="list-group">
                            <li class="list-group-item">Nombre: ${lists.name.first}</li>
                            <li class="list-group-item"><img src="${lists.picture.large}"></li>
                            <li class="list-group-item">Celular: ${lists.cell}</li>
                            <li class="list-group-item">DOB: ${lists.dob.date}</li>
                            <li class="list-group-item">Edad: ${lists.dob.age}</li>
                            <li class="list-group-item">Email ID: ${lists.email}</li>
                            <li class="list-group-item">Genero: ${lists.gender}</li>
                            <li class="list-group-item">Ciudad: ${lists.location.city}</li>
                            <li class="list-group-item">Pais: ${lists.location.country}</li>
                            <li class="list-group-item">Code zip: ${lists.location.postcode}</li>
                        </ul>
                    </div>
                </div> `;
            });

         
            document.getElementById('output').innerHTML = output;

        });
};