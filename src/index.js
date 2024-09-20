import "./style.css"

import {clearContent, loadFrontPageContent, loadBestillBord } from "./main_content"

loadFrontPageContent()

const index = document.querySelector('.home');
index.addEventListener('click', ()=> {
    clearContent();
    loadFrontPageContent();
})


const bestillBord = document.querySelectorAll('.bestillBordKnapp');
bestillBord.forEach(knapp => {
    knapp.addEventListener('click', () => {
        clearContent();
        loadBestillBord();
    });
});



