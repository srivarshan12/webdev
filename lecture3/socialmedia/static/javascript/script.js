
    var checkbox = document.querySelector('input[name=mode]');
    // var result = prompt("enter instagram username");
    document.getElementById("heading").innerHTML=result
    checkbox.addEventListener('change', function() {
            if(this.checked) {
                trans()
                var element = document.body;
                element.classList.toggle("dark-mode");
            } else {
                trans()
               var element = document.body;
                element.classList.toggle("dark-mode");
            }
        })
        let trans = () => {
            document.documentElement.classList.add('transition');
            window.setTimeout(() => {
                document.documentElement.classList.remove('transition');
            }, 1000)
        }