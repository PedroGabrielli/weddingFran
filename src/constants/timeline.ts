export const primeraLinea = "PRIMERA LINEA";
export const segundaLinea = "SEGUNDA LINEA";
export const tercerLinea = "TERCERA LINEA";
export const cuartaLinea = "CUARTA LINEA";
export const primerFecha = "19/09/2021";
export const segundaFecha = "18/12/2021";
export const tercerFecha = "16/03/2022";
export const cuartaFecha = "19/08/2024";
export const titulo = "Titulo timeline";
export const parallaxAnimation = {
  x: 0,
  playScale: [0.05, 0.3] as [number, number]
};

export const parallaxAnimationLast = {
  x: 0,
  playScale: [0, 0.1] as [number, number]
};

export const getParallaxStyle = (index: number) => ({
  transform: `translateX(${index % 2 === 0 ? '100px' : '-100px'})`,
  margin: '10px auto'
});