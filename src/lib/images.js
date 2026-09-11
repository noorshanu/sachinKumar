const imageModules = import.meta.glob('../assets/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
});

export function getImage(filename) {
  const entry = Object.entries(imageModules).find(([path]) =>
    path.toLowerCase().includes(filename.toLowerCase()),
  );
  return entry ? entry[1] : null;
}

export const personImage = getImage('person');
export const bookImage = getImage('book');
export const signatureImage = getImage('sign');
export const heroBackgroundImage = getImage('backgroundhero');
export const mobileHeroImage = getImage('mobileview');
