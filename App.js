//STATEFULL structur, because this class can save a data and as a parrent component

import React, { Component } from 'react';   //import Component from react

class App extends Component {  // name of the class. class App is a Component
    state = {               // Variabel can  save a value, like string, object, number,array
        key: 'value'        
    }

    render() {              //render for show the code
        return (            //to return the code to render, so it will show in the browser
            <div>           // tag wrapper in html, but this is important thing. You must keep all of your code inside this tag

            </div>
        )
    }

}

expoort default App;            // to export class App
