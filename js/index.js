const palabras = ["al", "ajsfgao", "ajgdoafg", "a l", "joel joan"];
const indice = 2;
console.log(`Paraules: ${palabras}`);

/* 1 */
function cuantasPalabrasMayoresA(palabras, indice) {
  return palabras.filter(
    (palabra) => palabra.replaceAll(/[\s-]/g, "").length > indice
  ).length;
}
console.log(
  `Número de paraules de més de ${indice} lletres: ${cuantasPalabrasMayoresA(
    palabras,
    indice
  )}`
);

/* 2 */
function longitudMedia(palabras) {
  return +palabras
    .reduce(
      (acumulador, palabra, i, palabras) =>
        palabra.length / palabras.length + acumulador,
      0
    )
    .toFixed(2);
}
console.log(
  `Longitud mitjana de les paraules: ${longitudMedia(palabras)} lletres`
);

/* 3 */
function palabrasConEspacios(palabras) {
  return palabras
    .filter((palabra) => palabra.includes(" "))
    .map((palabra) => palabra.toUpperCase());
}
console.log(`Paraules amb espais: ${palabrasConEspacios(palabras)}`);

/* 4 */
const personas = [
  {
    nombre: "Aran",
    edad: 2,
    sexo: "M",
  },
  {
    nombre: "Wenceslao",
    edad: 18,
    sexo: "H",
  },
  {
    nombre: "Sigismunda",
    edad: 109,
    sexo: "M",
  },
];
function totales(personas) {
  const totales = {
    totalMujeres: personas.filter(
      (persona) => persona.sexo.toLowerCase() === "m"
    ).length,
    totalHombres: personas.filter(
      (persona) => persona.sexo.toLowerCase() === "h"
    ).length,
    totalMayoresEdad: personas.filter((persona) => persona.edad >= 18).length,
  };
  return totales;
}
console.log(personas);
console.log(totales(personas));

/* 5 */
const empresas = [
  {
    empresa: "MierdaSet",
    empleados: [
      {
        nombre: "Jaume Roures Júnior",
        edad: 5,
        sueldo: 300000,
      },
      {
        nombre: "Florentino Miérdez",
        edad: 110,
        sueldo: 1000000,
      },
    ],
  },
  {
    empresa: "ETT Màfia",
    empleados: [
      {
        nombre: "Elon Musk",
        edad: 31,
        sueldo: 12000,
      },
      {
        nombre: "Amancio Ortega",
        edad: 69,
        sueldo: 20000,
      },
      {
        nombre: "Propietari Explotador",
        edad: 16,
        sueldo: 10000,
      },
    ],
  },
];
function sueldoMedioEmpresa(empresas, nombreEmpresa) {
  return +empresas
    .filter(
      (empresa) =>
        empresa.empresa.toLowerCase().replaceAll(" ", "") ===
        nombreEmpresa.toLowerCase().replaceAll(" ", "")
    )
    .map((empresa) =>
      empresa.empleados
        .filter((empleado) => empleado.edad > 30)
        .reduce(
          (acumulador, empleado, i, empleados) =>
            empleado.sueldo / empleados.length + acumulador,
          0
        )
        .toFixed(2)
    );
}
console.log(empresas);
const nombreEmpresa = "ettmàfia";
console.log(
  `El sou mig de l'empresa ${nombreEmpresa} és de ${sueldoMedioEmpresa(
    empresas,
    nombreEmpresa
  )}€ anuals`
);
