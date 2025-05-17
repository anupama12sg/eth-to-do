 App = {
    load: async () => {
        //load app...
        console.log("App Loading...")
    }
}

    $(() => {
        $(window).load(() => {
            App.load()
        })
    })
 
