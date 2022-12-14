# React intro

React gjør brukergrensesnittet til en funksjon av data og state. Du gir
data inn til en funksjon og får DOM ut.

React baserer seg på at man kan bygge grensesnittet av mange små funksjoner.
Disse funkjsonen kalles i React komponenter.

En komponent mottar ett arugment som vi kaller for `props`. Dette er en
forkortelse for Properties.

En komponent kan se slik ut:

```js
function Title(props) {
  return <h1>Hello World</h1>;
}
```

Syntaksen man ofte returnerer fra React-komponenter heter JSX. Dette ligner på
HTML, men er ikke det. Det er syntakssukker for React sin funksjon `createElement`.
Når man "bygger" en React-applikasjon, vil JSX-syntaksen omgjøres til `createElement`

Komponenten i eksempelet over vil se slik ut uten JSX:

```js
function Title(props) {
  return React.createElement("h1", {}, "Hello world");
}
```

Det er gyldig å skrive React på denne måten, men "alle" bruker JSX fordi
detter gjør koden både enklere å lese og skrive.

Vi har nå sett hvordan vi definerer en komponent. Nå skal vi se hvordan vi "rendrer"
denne komponenten i applikasjonen vår.

I React lager man en root-komponent som ofte bare kalles `App`.

Vi definerer vår root-komponen til å se slik ut:

```js
function App() {
  return <div>Dette er vår app!</div>;
}
```

Denne putter vi inn i HTML-filen vår, ved å hente frem et spesifikt
DOM-element med en vanlig javascript-selector `document.getElementById("root")`

```js
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

Når vi har fått 

```js
function Title(props) {
  return <h1>{props.text}</h1>;
}
```
