const names = ['world', 'Svelte', 'React', 'Dan', 'Rich', 'Triple', 'SwiftUI'];
const randomName = () => {
    const index = Math.round(Math.random() * 10) % names.length;
    return names[index];
}

export default randomName;
