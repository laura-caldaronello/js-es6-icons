$(document).ready(function() {
    
    // Milestone 1
    // definizione array
    const icons = [
        {
            name: 'cat',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'crow',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'dog',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'dove',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'dragon',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'horse',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'hippo',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'fish',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'carrot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'apple-alt',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'lemon',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'pepper-hot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'user-astronaut',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'user-graduate',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'user-ninja',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'user-secret',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'laptop',
            prefix: 'fa-',
            type: 'tech',
            family: 'fas'
        }

    ];
    
    // Partendo dalla struttura dati che troviamo sopra, mostriamo in pagina tutte le icone disponibili come da layout.
    const container = $('#icons-container');
    print(icons,container);

    // Milestone 2
    // Coloriamo le icone per tipo
    // 1. isoliamo i tipi
    const iconsTypes = getTypes(icons);
    // 2. generiamo tanti colori quanti tipi abbiamo: di base saranno 3, se vengono aggiunti tipi verranno aggiunti altrettanti colori casuali, anche se mi rendo conto che questo ha dei limiti perchè ogni volta che ricarico la pagina un eventuale quarto tipo avrà sempre un colore diverso, mentre i colori dovrebbero generarsi con un criterio più preciso che magari elaborerò più tardi, dunque il problema si ricondurrà a trovare un ordinamento arbitrario ma fisso dei colori di tipo rgb
    const typesColors = generateColors(iconsTypes);
    // 3. generiamo un array di icone colorate
    const coloredIcons = associateColors(icons,iconsTypes,typesColors);
    print(coloredIcons,container);
    
});

function print(array,where) {
    where.html('');
    array.forEach((item) => {
        let {name,prefix,family,color} = item;
        where.append(`<div><i class="${family} ${prefix}${name}" style="color: ${color}"></i> ${name.toUpperCase()}</div>`);
    });
};

function getTypes(array) {
    const types = [];
    array.forEach((item) => {
        let {type} = item;
        if (types.indexOf(type) == -1) {
            types.push(type);
        }
    });
    return types;
};

function generateColors(featuresArray) {
    const colors = ['rgb(255,0,0)','rgb(0,255,0)','rgb(0,0,255)'];
    while (colors.length < featuresArray.length) {
        colors.push(randomColorRGB());
    }
    const generatedColors = [];
    featuresArray.forEach((feature) => {
        generatedColors.push(colors[featuresArray.indexOf(feature)]);
    });
    return generatedColors;
};

function randomColorRGB() {
    var colorString = 'rgb(';
    for (let i = 0; i < 3; i++) {
        n = Math.floor(Math.random() * 256);
        if (i < 2) {
            colorString = colorString.concat(n,',');
        }
        else {
            colorString = colorString.concat(n,')');
        }
    }
    return colorString;
};

function associateColors(array,featuresArray,generatedColors) {
    const newArray = [];
    array.forEach((item) => {
        const {name,prefix,type,family} = item;
        const icon = {name: name,prefix: prefix,type: type,family: family};
        icon.color = generatedColors[featuresArray.indexOf(icon.type)];
        newArray.push(icon);
    });
    return newArray;
}
