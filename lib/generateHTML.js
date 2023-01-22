// create Manager card
const generateManager = function (manager) {
    return `
    <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${manager.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                    <p class="card-text">ID: ${manager.id}</p>
                    <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                    <p class="card-text">Office Number: ${manager.officeNumber}</p>
                </div>
            </div>
    `;
}

// create Engineer card
const generateEngineer = function (engineer) {
    return `
    <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${engineer.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                    <p class="card-text">ID: ${engineer.id}</p>
                    <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p class="card-text">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
                </div>
            </div>
    `
}

// create Intern card 
const generateIntern = function (intern) {
    return `
    <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${intern.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
                    <p class="card-text">ID: ${intern.id}</p>
                    <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                    <p class="card-text">School: ${intern.school}</p>
                </div>
            </div>
    `
};

// push array to page 
generateHTML = (data) => {

    // array for cards 
    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        // call manager function
        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        // call engineer function
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        // call intern function 
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
        
    }

    // joining strings 
    const employeeCards = pageArray.join('')

    // return to generated page
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

}

// generate html page 
const generateTeamPage = function (employeeCards) {   
  return`
  <!doctype html>
  <html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Team Profile</title>
    <!--links-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
  </head>
  <body>
    <!-- header -->
    <nav class="navbar navbar-light bg-light px-4 py-6 flex justify-start items-end">
        <a class="navbar-brand justify-start items-end">
          <img src="./assets/team logo.png" width="100" height="60" alt="Image">
        </a>
        <h1 class="navbar justify-start ml-3 display-3">Team Viewer</h1>
    </nav>
    <!--card container-->
    <div class="container">
        <div class="row justify-content-center" id="team-cards">     
            <!--card template-->                   
            ${employeeCards}
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
  </body>
  </html>
`;
}

// export to index
module.exports = generateHTML; 