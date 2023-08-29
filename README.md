# Ejercicio hecho por midudev de prueba técnica con TypeScript y React

Enlaces de interés:
Repositorio original: https://github.com/midudev/aprendiendo-react/tree/master/projects/11-typescript-prueba-tecnica
Vídeo relacionado: https://www.youtube.com/watch?v=mNJOWXc83Y4&ab_channel=midulive

En este repositorio intentaré resolver la siguiente prueba por mi cuenta, recurriendo al vídeo y al repo con las respuestas únicamente cuando me
quede atascado.

El objetivo de esta prueba técnica es crear una aplicación similar a la que se proporciona en este enlace: https://midu-react-11.surge.sh/. Para lograr esto, debe usar la API proporcionada por https://randomuser.me/.

Partes del código resueltas siguiendo las instrucciones del vídeo en vez de por mi mismo:
Método toSorted y tipado para extender la interfaz de Array de typescript, originalmente lo hice haciendo una copia del array con el spread operator.

Los pasos a seguir:

- [x] Fetch 100 rows of data using the API.
- [x] Display the data in a table format, similar to the example.
- [x] Provide the option to color rows as shown in the example.
      - [x] Allow the data to be sorted by country as demonstrated in the example.
- [x] Enable the ability to delete a row as shown in the example.
- [x] Implement a feature that allows the user to restore the initial state, meaning that all deleted rows will be recovered.
- [x] Handle any potential errors that may occur.
- [x] Implement a feature that allows the user to filter the data by country.
- [] Avoid sorting users again the data when the user is changing filter by country.
- [] Sort by clicking on the column header.
