/**
 * WHATNOTS
 */
const target = document.getElementById('projects');
const replacement = document.getElementById('replacementEl');

const createLink = (linkText, link, alt) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const text = document.createTextNode(linkText);
    a.setAttribute('href', link);
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');
    if (alt) {
        a.setAttribute('alt', alt);
    }
    a.appendChild(text);
    li.appendChild(a);
    return li;
}

axios.get('https://powerful-hollows-49108.herokuapp.com')
    .then(result => {
        target.removeChild(replacement);
        const data = result.data;
        data.map(project => Object.assign({}, project, { stars: project.stars.length ? project.stars : 0 }))
            .sort((a, b) => b.stars - a.stars)
            .forEach(project => {
                const link = createLink(`${project.name}`, project.href, `${project.user}/${project.name}`);
                target.appendChild(link);
            });
    })
    .catch(err => {
        target.removeChild(replacement);
        const link = createLink('cannot load pinned repos', 'https://github.com/maman');
        target.appendChild(link);
        console.error(err);
    })
