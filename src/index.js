import "./style.css"

import {clearContent, loadFrontPageContent, loadBestillBord } from "./main_content"

loadFrontPageContent()

const index = document.querySelector('.home');
const bestillBordKnapp = document.querySelector('.bestillBordKnapp');
const tiderKnapp = document.querySelector('.tiderKnapp');
const gavekortKnapp = document.querySelector('.gavekortKnapp');
const menyKnapp = document.querySelector('.menyKnapp');

//Event listener for 'Logo'
index.addEventListener('click', ()=> {
    clearContent();
    loadFrontPageContent();
})

// Event listener for "BESTILL BORD"
bestillBord.forEach(knapp => {
    knapp.addEventListener('click', () => {
        clearContent();
        loadBestillBord();
    });
});

// Event listener for "ÅPNINGTIDER"
tiderKnapp.addEventListener('click', () => {
    clearContent();
    loadTider();
});

// Event listener for "GAVEKORT"
gavekortKnapp.addEventListener('click', () => {
    clearContent();
    loadGavekort();
});

// Event listener for "MENY"
menyKnapp.addEventListener('click', () => {
    clearContent();
    loadMeny();
});

