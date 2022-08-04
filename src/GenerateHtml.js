class CreateHtml {
    static generateManager(managerObj) {
        return `
            <div class="card">
                <div class="card-title">
                    <h2> ${managerObj.getName()}</h2>
                    <h3>  ${managerObj.getRole()}</h3>
                </div>
                <div class="info-container">
                    <div class="info">
                        <p><span>ID</span>: ${managerObj.getId()}</p>
                        <p><span>Email:</span> <a href="mailto:${managerObj.getEmail()}">${managerObj.getEmail()}</a></p>
                        <p><span>Office number:</span> ${managerObj.getOfficeNumber()}</p>
                    </div>
                </div>
            </div>
    `
    }


    static generateEngineer(engineerObj) {
        return `
            <div class="card">
                <div class="card-title">
                    <h2> ${engineerObj.getName()}</h2>
                    <h3>  ${engineerObj.getRole()}</h3>
                </div>
                <div class="info-container">
                    <div class="info">
                        <p><span>ID</span>: ${engineerObj.getId()}</p>
                        <p><span>Email:</span> <a href="mailto:${engineerObj.getEmail()}">${engineerObj.getEmail()}</a></p>
                        <p><span>Github:</span> <a href="https://github.com/${engineerObj.getGitHub()}" target="_blank">${engineerObj.getGitHub()}</a></p>
                    </div>
                </div>
            </div>
    `
    }

    static generateIntern(internObj) {
        return `
            <div class="card">
                <div class="card-title">
                    <h2> ${internObj.getName()}</h2>
                    <h3>  ${internObj.getRole()}</h3>
                </div>
                <div class="info-container">
                    <div class="info">
                        <p><span>ID</span>: ${internObj.getId()}</p>
                        <p><span>Email:</span> <a href="mailto:${internObj.getEmail()}">${internObj.getEmail()}</a></p>
                        <p><span>School:</span> ${internObj.getSchool()}</p>
                    </div>
                </div>
            </div>
    `
    }

    static generateFile(teamArr) {
        let stringCards = "";


        for (let i = 0; i < teamArr.length; i++) {
            if (teamArr[i].getRole() == "Manager") {
                const managerCard = this.generateManager(teamArr[i]);
                stringCards = `${stringCards}${managerCard}`;
            }
            if (teamArr[i].getRole() == "Engineer") {
                const engineerCard = this.generateEngineer(teamArr[i]);
                stringCards = `${stringCards}${engineerCard}`;
            }
            if (teamArr[i].getRole() == "Intern") {
                const internCard = this.generateIntern(teamArr[i]);
                stringCards = `${stringCards}${internCard}`;
            }
        }
        return stringCards;
    }

    static generateString(teamArr) {
        return `
<!DOCTYPE html> 
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="reset.css" />
    <link rel="stylesheet" href="style.css" />
    <title>My-team</title>
</head>

<body>
    <header>
        <h1> My team</h1>
    </header>
    <main>
        <div class="team-container">
            ${this.generateFile(teamArr)}
        </div>
    </main>
</body>

<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
</html>
    `
    }
}

module.exports = CreateHtml