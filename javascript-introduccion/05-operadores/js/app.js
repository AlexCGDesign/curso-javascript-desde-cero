/* 

Operadores aritméticos
+ ← suma
- ← resta
* ← multiplicación
/ ← división
% ← resto o residuo
** ← exponente

*/

/* 

Operadores Unarios
++ ← incrementador
-- ← decrementador
! ← negación


*/


/* 

Operadores asignación
= ← asignación
+= ← asignación con suma
-= ← asignación con resta
*= ← asignación con multiplicación
/= ← asignación con división

*/

/*

Operadores de comparación

> ← mayor qué
>= ← mayor qué o igual
< ← menor qué
<= ← menor qué o igual
== ← igualdad
=== ← igualdad estricta
!= ← diferente qué
!== ← diferente qué estricto

*/

/*

Operadores lógicos

&& ← AND
|| <- OR
?? <- Nullish coalescing

*/


/*
let edad = Number(prompt("Dame tu edad."));

let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Lo siento, edad no valida";

alert(mensaje);

*/

//(condición) ? casoVerdadero : casoFalso

let nombre1 = "Jordan";
let nombre2 = "Alexander";

let nombreIngresar = prompt("Ingresa un nombre");

let mensaje =
    (nombre1 === nombreIngresar || nombre2 === nombreIngresar)

    ? `Bienvenido ${nombreIngresar}, Usuario Valido`

    : (nombre2 === nombreIngresar);

alert(mensaje);