
    const button = document.querySelectorAll("button[data-order]")
    //console.log(button)
    button.forEach(item => {
        item.addEventListener("click", function(e) {
            const btn = e.currentTarget
            const parent = btn.parentNode
            const order = {
                id: btn.getAttribute("data-order"),
                 price: parent.querySelector(".price").innerHTML,
                desc: parent.querySelector(".desc").innerHTML,
               
                
            }
           //console.log(order.desc)
            
            localStorage.setItem("order", JSON.stringify(order))
            const url = window.location.href.replace("index.html", "data.html")
            window.location.href=url

        })
    })
