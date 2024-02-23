class Player {
    constructor(name, position) {
        this.name = name;
        if (position !== "Guard" && position !== "Forward" && position !== "Center") {
            this.position = 'Undefined';
        } else {
            this.position = position;
        }
    }
}

let playerList = [
    new Player('Michael Jordan', 'Guard'),
    new Player('Lebron James', 'Forward'),
    new Player('Kobe Bryant', 'Guard'),
    new Player('Shaquille O\'Neal', 'Center'),
    new Player('Kevin Durant', 'Forward'),
    new Player('Stephen Curry', 'Guard'),
    new Player('Kareem Abdul-Jabbar', 'Center'),
    new Player('Larry Bird', 'Forward'),
    new Player('Magic Johnson', 'Guard'),
    new Player('Tim Duncan', 'Forward'),
    new Player('Wilt Chamberlain', 'Center'),
    new Player('Dirk Nowitzki', 'Forward'),
    new Player('Hakeem Olajuwon', 'Center'),
    new Player('Oscar Robertson', 'Guard'),
    new Player('Bill Russell', 'Center'),
    new Player('Jerry West', 'Guard'),
    new Player('Elgin Baylor', 'Forward'),
    new Player('David Robinson', 'Center'),
    new Player('Scottie Pippen', 'Forward'),
    new Player('John Stockton', 'Guard'),
    new Player('Karl Malone', 'Forward'),
    new Player('Charles Barkley', 'Forward'),
    new Player('Patrick Ewing', 'Center'),
    new Player('Clyde Drexler', 'Guard'),
    new Player('Chris Paul', 'Guard'),
    new Player('Dwyane Wade', 'Guard'),
    new Player('Paul Pierce', 'Forward'),
    new Player('Ray Allen', 'Guard'),
    new Player('Kevin Garnett', 'Forward'),
    new Player('Steve Nash', 'Guard'),
    new Player('Jason Kidd', 'Guard'),
    new Player('Grant Hill', 'Forward'),
    new Player('Vince Carter', 'Forward'),
    new Player('Tracy McGrady', 'Forward'),
    new Player('Allen Iverson', 'Guard'),
    new Player('Yao Ming', 'Center'),
    new Player('Dwight Howard', 'Center'),
    new Player('Russell Westbrook', 'Guard'),
    new Player('James Harden', 'Guard'),
    new Player('Chris Bosh', 'Forward'),
    new Player('Carmelo Anthony', 'Forward'),
    new Player('Paul George', 'Forward'),
    new Player('DeMarcus Cousins', 'Center'),
    new Player('Anthony Davis', 'Forward'),
    new Player('Kawhi Leonard', 'Forward'),
    new Player('Kyrie Irving', 'Guard'),
    new Player('Damian Lillard', 'Guard'),
    new Player('Klay Thompson', 'Guard'),   
    new Player('Draymond Green', 'Forward'),
    new Player('Jimmy Butler', 'Guard'),
    new Player('Joel Embiid', 'Center'),
    new Player('Ben Simmons', 'Forward'),
    new Player('Devin Booker', 'Guard'),
    new Player('Deandre Ayton', 'Center'),
    new Player('Luka Doncic', 'Guard'),
    new Player('Trae Young', 'Guard'),
    new Player('Zion Williamson', 'Forward'),
    new Player('Ja Morant', 'Guard'),
    new Player('LaMelo Ball', 'Guard'),
    new Player('Anthony Edwards', 'Guard'),
    new Player('James Wiseman', 'Center'),
    new Player('Obi Toppin', 'Forward'),
    new Player('Killian Hayes', 'Guard'),
    new Player('Deni Avdija', 'Forward'),
    new Player('Onyeka Okongwu', 'Center'),
    new Player('Isaac Okoro', 'Forward'),
    new Player('Tyrese Haliburton', 'Guard'),
    new Player('Devin Vassell', 'Forward'),
    new Player('Patrick Williams', 'Forward'),
    new Player('Aaron Nesmith', 'Forward'),
    new Player('Cole Anthony', 'Guard'),
    new Player('RJ Hampton', 'Guard'),
    new Player('Immanuel Quickley', 'Guard'),
    new Player('Jaden McDaniels', 'Forward'),
    new Player('Saddiq Bey', 'Forward'),
    new Player('Tyrese Maxey', 'Guard'),
    new Player('Desmond Bane', 'Guard'),
    new Player('Payton Pritchard', 'Guard'),
    new Player('Leandro Bolmaro', 'Guard'),
    new Player('Theo Maledon', 'Guard'),
    new Player('Jahmi\'us Ramsey', 'Guard'),
    new Player('Zeke Nnaji', 'Forward'),
    new Player('Nico Mannion', 'Guard'),
    new Player('Isaiah Stewart', 'Center'),
    new Player('Jalen Smith', 'Forward'),
    new Player('Kira Lewis Jr.', 'Guard'),
    new Player('Precious Achiuwa', 'Forward'),
    new Player('Jalen Smith', 'Forward'),
];