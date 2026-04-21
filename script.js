const styleLink = document.getElementById('theme-style');

const toggleBtn = document.getElementById('toggle-btn');
const mySection = document.getElementById('umiejetnosci');



document.getElementById('btn-red').onclick = function() 
{
    styleLink.href = 'red.css'; 
};


document.getElementById('btn-green').onclick = function()
{
    styleLink.href = 'green.css';
};


toggleBtn.onclick = function() {
    if (mySection.style.display === 'none') 
    {
        mySection.style.display = 'block';      
        toggleBtn.textContent = 'Ukryj sekcję'; 
    }
     else 
    {
        mySection.style.display = 'none';       
        toggleBtn.textContent = 'Pokaż sekcję'; 
    }
}







document.getElementById('contact-form').onsubmit = function(event) {
    // Zapobiegamy domyślnej akcji formularza (przeładowaniu strony)
    event.preventDefault();

   // Pobieramy wartości z pól formularza
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorBox = document.getElementById('error-message');

    // Czyścimy poprzednie komunikaty błędów
    errorBox.textContent = '';

    
    
   //czy wszystkie pola są wypełnione
    if (!firstName || !lastName || !email || !message) {
        errorBox.textContent = 'Wszystkie pola są wymagane!';
        return;
    }

    //nie zawierają cyfr
    const nameRegex = /\d/;
    if (nameRegex.test(firstName) || nameRegex.test(lastName)) {
        errorBox.textContent = 'Imię i nazwisko nie mogą zawierać cyfr!';
        return;
    }

    
    if (!email.includes('@') || !email.includes('.')) {
        errorBox.textContent = 'Podaj poprawny adres e-mail!';
        return;
    }

    
    alert('Formularz wysłany poprawnie!');
   // this.reset(); //nie jest koniecznie
};








//za 6
window.onload = function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            
            const skillsSection = document.getElementById('umiejetnosci');

            //h2 from json
            const h2 = document.createElement('h2');
            h2.textContent = data.umiejetnosci.tytul;
            skillsSection.appendChild(h2);

            // ul
            const ul = document.createElement('ul');
            
            // repeat for each skill in json
            data.umiejetnosci.lista.forEach(skill => 
            {
                const li = document.createElement('li');
                li.textContent = skill; 
                ul.appendChild(li);      //li inside ul
            });

            // ul inside section
            skillsSection.appendChild(ul);
        })
        .catch(error => console.error("Błąd:", error)); 
};