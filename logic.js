function createWarrantyPage() {
    let element;
    let label;

    // Create h3 element
    element = document.createElement('h3');
    element.innerHTML = 'WhirlWind Warranty Registration by: Manny';
    document.body.appendChild(element);

    // Create paragraph
    element = document.createElement('p');
    element.innerHTML = 'Complete the Card';
    document.body.appendChild(element);

    // Create h2 element
    element = document.createElement('h2');
    element.innerHTML = 'Contact Information';
    document.body.appendChild(element);

    // First Name
    label = document.createElement('label');
    label.innerHTML = "First Name";
    label.classList.add('input-label');  // Apply label padding
    document.body.appendChild(label);

    document.body.appendChild(document.createElement('br'));

    
    element = document.createElement('input');
    element.setAttribute("type", "text");
    element.classList.add('input-field');  // Apply input padding
    document.body.appendChild(element);

    document.body.appendChild(document.createElement('br'));

    label = document.createElement('label');
    label.innerHTML = "Last Name";
    label.classList.add('input-label');  // Apply label padding
    document.body.appendChild(label);

    document.body.appendChild(document.createElement('br'));

    element = document.createElement('input');
    element.setAttribute("type", "text");
    element.classList.add('input-field');  // Apply input padding
    document.body.appendChild(element);

    document.body.appendChild(document.createElement('br'));

    label = document.createElement('label');
    label.innerHTML = "Company Name";
    label.classList.add('input-label');  // Apply label padding
    document.body.appendChild(label);

    document.body.appendChild(document.createElement('br'));

    element = document.createElement('input');
    element.setAttribute("type", "text");
    element.classList.add('input-field');  // Apply input padding
    document.body.appendChild(element);

    document.body.appendChild(document.createElement('br'));
}
