makeHtml = (empList) => {
    const htmlLayout = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Hello Employees!</title>
    </head>
    <body>
        <header>

            <div class="container p-5 mb-5">
                <h1 class="display-2 text-center">Your Team</h1>
            </div>

        </header>
    
        <main>

            <div class="container d-flex justify-content-center flex-wrap">
                ${makeCard(empList)}
            </div>
            
        </main>
        
           
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </html>`


    
    return htmlLayout;
}

makeCard = (empList) => {
    let card = '';
    empList.forEach(member => {
        card += 
        `
            <div class="card m-2" style="width: 18rem;">
                <div class="card-header text-center">
                    <h4 class="card-title">${member.name}</h4>
                    <h5 class="card-subtitle mb-2 text-muted">${member.role}</h5>
                </div>
                <div class="list-group list-group-flush">
                    <li class="list-group-item">Employee ID: ${member.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:member.email">${member.email}</a></li>
                    </div>
                    </div>
                    `
                })
                return card;
            }
            
            // <li class="list-group-item">Office Number if Provided: ${manager.officeNum}</li>
            // <li class="list-group-item">School if Provided: ${manager.school}</li>
            // <li class="list-group-item">GitHub if Provided: <a href="${member.gitHub}"></a></li>







module.exports = makeHtml;