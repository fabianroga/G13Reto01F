       // Datos de ejemplo
       const experiencias = [
        { puesto: "SRE DevOps Engineer", empresa: "ADL", periodo: "2024 - Presente", descripcion: " I have been working with AWS, CI/CD and Azure DevOps" },
        { puesto: "DevOps Engineer", empresa: "klym", periodo: "2023 - 2024", descripcion: " I have been working with AWS, CI/CD and Azure DevOps" }
    ];

    const educacion = [
        { titulo: "Grado en Ingeniería Sistemas", institucion: "Universidad Católica de Colombia", año: "2018 - 2022" },
        { titulo: "DEVELOPER", institucion: "globant", año: "2023-2024" }
    ];

    // Función para añadir experiencias
    function añadirExperiencias() {
        const listaExperiencia = document.getElementById('lista-experiencia');
        experiencias.forEach(exp => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${exp.puesto}</strong> en ${exp.empresa}<br>
                            ${exp.periodo}<br>
                            ${exp.descripcion}`;
            listaExperiencia.appendChild(li);
        });
    }

    // Función para añadir educación
    function añadirEducacion() {
        const listaEducacion = document.getElementById('lista-educacion');
        educacion.forEach(edu => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${edu.titulo}</strong><br>
                            ${edu.institucion}, ${edu.año}`;
            listaEducacion.appendChild(li);
        });
    }