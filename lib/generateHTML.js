//generating each card 

const genManager = function (Manager) {
    return `
    <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${Manager.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Job Role</h6>
                    <p class="card-text">ID: ${Manager.id}</p>
                    <p class="card-text">Email: <a href="mailto:${Manager.email}">${Manager.email}</a></p>
                    <p class="card-text">Office Number: ${Manager.officeNumber}</p>
                </div>
            </div>
    `;
};

const genEngineer = function (Engineer) {
    return `
    <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${Engineer.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Job Role</h6>
                    <p class="card-text">ID: ${Engineer.id}</p>
                    <p class="card-text">Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a></p>
                    <p class="card-text">GitHub: <a href"https://github.com/${Engineer.github}">${Engineer.github}</a></p>
                </div>
            </div>
    `;
};

const genIntern = function (Intern) {
    return `
    <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${Intern.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Job Role</h6>
                    <p class="card-text">ID: ${Intern.id}</p>
                    <p class="card-text">Email: <a href="mailto:${Intern.email}">${Intern.email}</a></p>
                    <p class="card-text">School: ${Intern.school}</p>
                </div>
            </div>
    `;
};

//array push to page
genHTML = (data) => {
    //card array
    pageArray = [];
    //loop over employee length 
    for(let i = 0; i < data.length; i++) {
        const Employee = data[i];
        const Role = Employee.getRole();


        //call manager function and push card
        if(Role === 'Manager') {
            const ManagerCard = genManager(Employee);
            pageArray.push(ManagerCard);
        }
        //call engineer function and push card
        if(Role === 'Engineer') {
            const EngineerCard = genEngineer(Employee);
            pageArray.push(EngineerCard);
        }
        //call intern function and push card
        if(Role === 'Intern') {
            const InternCard = genIntern(Employee);
            pageArray.push(InternCard);
        }
    };
    //join cards in array
    const employeeCards = pageArray.join('');

    //return
    const genTeam = genTeam(employeeCards);
    return genTeam;

};

// generate html page 

const generateTeamHtml = function (employeeCards) {
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
        <a class="navbar-brand">
          <img src="teamLogo.png" width="100" height="60" class="d-inline-block align-top" alt="Image">
          
        </a>
        <p class="navbar">Team Viewer</p>
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
};

module.exports = genHTML; 