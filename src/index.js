import "./style.css"

import {clearContent, loadFrontPageContent, loadBestillBord } from "./main_content"

loadFrontPageContent();

//En funksjon for å fjerne klassen "active" fra alle knappene og legge den på den aktive knappen
function setActiveButton(knapp) {
        // Fjern "active" fra alle knapper
        document.querySelectorAll('.nav-knapp').forEach(button => {
            button.classList.remove('active');
        });
        // Legg til "active" på den klikkede knappen
        knapp.classList.add('active');
}

const index = document.querySelector('.home');
const bestillBordKnapp = document.querySelector('.bestillBordKnapp');
const tiderKnapp = document.querySelector('.tiderKnapp');
const gavekortKnapp = document.querySelector('.gavekortKnapp');
const menyKnapp = document.querySelector('.menyKnapp');

//Event listener for 'Logo'
index.addEventListener('click', ()=> {
    clearContent();
    loadFrontPageContent();
    setActiveButton(index);
})

// Event listener for "BESTILL BORD"
bestillBordKnapp.forEach(knapp => {
    knapp.addEventListener('click', () => {
        clearContent();
        loadBestillBord();
        setActiveButton(bestillBordKnapp);
    });
});

// Event listener for "ÅPNINGTIDER"
tiderKnapp.addEventListener('click', () => {
    clearContent();
    loadTider();
    setActiveButton(tiderKnapp);
});

// Event listener for "GAVEKORT"
gavekortKnapp.addEventListener('click', () => {
    clearContent();
    loadGavekort();
    setActiveButton(gavekortKnapp);
});

// Event listener for "MENY"
menyKnapp.addEventListener('click', () => {
    clearContent();
    loadMeny();
    setActiveButton(menyKnapp);
});

