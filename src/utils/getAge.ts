export function getAge(birthDate: string) {
  const [day, month, year] = birthDate.split('-').map(Number);
  const date = new Date(year, month - 1, day); 
  const today = new Date();
  
  let age = today.getFullYear() - date.getFullYear();
  const monthActual = today.getMonth();
  const dayActual = today.getDate();

  if (monthActual < month - 1 || (monthActual === month - 1 && dayActual < day)) {
    age--;
  }

  return age;
}