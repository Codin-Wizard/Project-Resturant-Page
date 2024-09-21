function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}


function loadFrontPageContent() {
    const content = document.getElementById('content');

    const frontPageBakgrunnsBilde = document.createElement('div');

    frontPageBakgrunnsBilde.id = 'frontPageBilde';

    const bestillBordKnapp = document.createElement('button');
    bestillBordKnapp.textContent = 'BESTILL BORD';
    bestillBordKnapp.className = 'bestillBordKnapp';

    frontPageBakgrunnsBilde.appendChild(bestillBordKnapp);

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

function loadBestillBord() {
    const content = document.getElementById('content');

    const p = document.createElement('p');
    p.className = 'tekst';
    p.textContent = 'Hvis du har spørsmål eller ikke finner ledig bord i onlinebookingen, send mail på post@restaurant-bravo.no eller ring 92070337 (telefon besvares fra 10.00 onsdag-lørdag).'

    content.append(p)
}

function loadTider() {
    const content = document.getElementById('content');

    const p = document.createElement('p');
    p.className = 'tekst';
    p.textContent = 'Hvis du har spørsmål eller ikke finner ledig bord i onlinebookingen, send mail på post@restaurant-bravo.no eller ring 92070337 (telefon besvares fra 10.00 onsdag-lørdag).'

    content.append(p)
}

function loadGavekort(){
    const content = document.getElementById('content');

    const p = document.createElement('p');
    p.className = 'tekst';
    p.textContent = 'Hvis du har spørsmål eller ikke finner ledig bord i onlinebookingen, send mail på post@restaurant-bravo.no eller ring 92070337 (telefon besvares fra 10.00 onsdag-lørdag).'

    content.append(p)
}

function loadMeny() {
    const content = document.getElementById('content');

    const p = document.createElement('p');
    p.className = 'tekst';
    p.textContent = 'Hvis du har spørsmål eller ikke finner ledig bord i onlinebookingen, send mail på post@restaurant-bravo.no eller ring 92070337 (telefon besvares fra 10.00 onsdag-lørdag).'

    content.append(p)
}
export { clearContent, loadFrontPageContent, loadBestillBord, loadTider, loadGavekort, loadMeny};
