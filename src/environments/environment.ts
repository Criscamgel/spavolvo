// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  /* Options */
  documentos:[    
    {value:null, name:"Selecciona tu tipo de Identificación"},
    {value:1, name:"Cédula de Ciudadanía"},
    {value:2, name:"Cédula de Extranjería"},
    {value:3, name:"NIT"}
   ],

   ocupaciones:[
    {value:null, name:"Selecciona tu ocupación"},
    {value:1, name:"Pensionado"}, /* 15 */
    {value:11, name:"Empleado"}, /* 16 */
    {value:2, name:"Independiente"} /* 3 */
   ],
  

  /* Regex */
  patternLetter: "^[a-zA-Z áéíóúñÁÉÍÓÚÑ]+$",
  patternNumber: "^[0-9]+$",
  patternMail:"^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$"

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
