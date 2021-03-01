# Emoji Dice (Frontend)

## Added Dependencies
* Core: ``create-react-app . --template typescript``
* State Management: 
    * ``redux`` (does not need any extra @types package)
    * ``react-redux`` (plus ``@types/react-redux`` )
    * ``redux-thunk`` (A middleware for Redux to add async functionalities)
* Ajax Requests: ``axios``


## x Errors:

### x.1. mapDispatchToProps
If you want to use short hand it's going to be only an object containing dispatch-functions like this:

```TS
const mapDispatchToProps = {
    setDice: () => (dispatchSetDice())
};
```

and NOT an arrow function like ``mapStateToPros`` !!!:

```TS
// WRONG!!!
// const mapDispatchToProps = () => {
//      setDice: () => (dispatchSetDice())
// };
```
___

___
