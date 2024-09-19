function loadContent() {
    const content = document.getElementById('content');

    const frontPageBakgrunnsBilde = document.createElement('div');
    frontPageBakgrunnsBilde.id = 'bestillBord';

    const bestillBord = document.createElement('button');
    bestillBord.textContent = 'BESTILL BORD';

    frontPageBakgrunnsBilde.appendChild(bestillBord);

    const omOss = document.createElement('div');
    omOss.id = 'omOss';

    const vaarLocationBilde = document.createElement('img');
    vaarLocationBilde.src = './Images/bravo-location.png';
    vaarLocationBilde.alt = 'Google Maps';

    const omOssTekst = document.createElement('div');
    omOssTekst.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat accusamus, nihil sit optio vero eius quis, perspiciatis eaque et, quos quae consectetur est ut vitae ipsum voluptatibus exercitationem vel atque!';

    omOss.append(vaarLocationBilde, omOssTekst);

    content.append(frontPageBakgrunnsBilde, omOss);
}

// Kall funksjonen når vinduet er lastet
window.addEventListener('load', loadContent);

export { loadContent };
