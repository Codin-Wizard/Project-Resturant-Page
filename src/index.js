import "./style.css"

import {clearContent, setActiveButton, loadFrontPageContent, loadBestillBord, loadTider, loadGavekort, loadMeny } from "./main_content"

loadFrontPageContent();

const index = document.querySelector('.home');
const bestillBordKnapp = document.querySelectorAll('.bestillBordKnapp');
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
        setActiveButton(knapp);
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

