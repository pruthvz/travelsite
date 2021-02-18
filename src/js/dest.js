const data = [
    {
      id: 1,
      pic:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Riverfront_Ahmedabad.jpg",
      name: "Ahmedabad",
      desc: "One of the largest city and former capital of Gujarat, Ahmedabad is also known as Amdavad. It is situated on the banks of Sabarmati river, mostly known for its tourist attractions. It is famous for its cotton textiles, street food places, diamond cutting and much more.",
      price: 423,
      plan:"London Heathrow → Ahmedabad",
      offer: false,

    },
    {
      id: 2,
      pic:
        "https://images.unsplash.com/photo-1562979314-bee7453e911c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
      name: "Mumbai",
      desc: "Mumbai is the commercial capital of India. It is also known as the city that never sleeps. Mumbai is the perfect blend of culture, customs and lifestyles. Mumbai is India’s most cosmopolitan city, its financial powerhouse and the nerve center of India’s fashion industry.",
      price: 390,
      plan:"London Heathrow → Mumbai",
      offer: false,

 
    },
    {
      id: 3,
      pic:
        "https://imgk.timesnownews.com/story/1551426666-GettyImages-154010161.jpg?tr=w-1200,h-900",
      name: "Rajkot",
      desc: "Rajkot is the 35th-largest metropolitan area in India, with a population of more than 1.8 million as of 2018. Rajkot is the second-cleanest city of India.",
      price: 415,
      plan:"London Heathrow → Rajkot",
      offer: false,

     
    },
    {
      id: 4,
      pic:
        "https://static.toiimg.com/photo/78805433.cms",
      name: "Goa",
      desc: "Goa -- Silver sands, sparkling blue waters, the sky mirroring the sea below, white churches resting against green paddy fields and coconut trees lining the coastal streets. ",
      price: 419,
      plan:"London Heathrow → Goa",
      offer: false,

    
    },
    {
      id: 5,
      pic:
        "https://images.unsplash.com/photo-1501952476817-d7ae22e8ee4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
      name: "Germany",
      desc: "With an interesting and rich history narrated by the old-fashion and colorful architecture, castles, palaces, cathedrals and monuments themselves, its landscapes, mountains and forests, delicious food and beer, Germany remains one of the top destinations in the world for travelers.",
      price: 298,
      plan:"London Heathrow → Germany",
      offer: false,

    
    },
    {
      id: 6,
      pic:
        "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      name: "Portugal",
      desc: "An enchantingly diverse country filled with gorgeous Mediterranean beaches, rolling hills, dramatic mountain scenery and a myriad charming towns, Portugal is brimming with beauty, both in its natural and urban spaces.",
      price: 88,
      plan: "London Heathrow → Portugal",
      offer: false,



    },
    {
      id: 7,
      pic:
        "https://images.unsplash.com/photo-1470470558828-e00ad9dbbc13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      name: "France",
      desc: "France is one of the world's leading tourist destinations. If you have all the time in the world, you may not need to plan your holiday in France, you can just wander along at your own leisurely pace, and it will be a wonderful and varied experience.",
      price: 320,
      plan: " London Heathrow → France",
      offer: false,


    },
    {
      id: 8,
      pic:
        "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZG9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      name: "London",
      desc: "London Heathrow, Heathrow Airport in London is the UK's largest and busiest airport as well as being the busiest airport in Europe and the seventh busiest in the world based on passenger traffic.",
      price: 390 ,
      plan: "India → London Heathrow",
      offer: false,
    }
  ];



const container = document.createElement('div')
const row = document.createElement('div')


const allDestiniations = (dest) => {
    const div = document.createElement('div')
    const img = document.createElement('img')
    const div2 = document.createElement('div')
    const h5 = document.createElement('h5')
    const p = document.createElement('p')
    const p2 = document.createElement('p')
    const space = document.createElement('br')
    const space2= document.createElement('p')
    const span = document.createElement('span')
    const offer = document.createElement('span')
    const body = document.querySelector('section')
    
    // adding to the html file
    // p.innerHTML = dest.desc
    h5.innerHTML = dest.name
    span.innerHTML = "£" + dest.price
    p2.innerHTML = dest.plan
    offer.innerHTML = dest.offer
    
    
    
    body.append(container)
    container.append(row)
    row.append(div)
    
    div.append(img)
    div.append(div2)
    div2.append(h5)
    div2.append(p)
    div2.append(p2)
    div2.append(space)
    div2.append(span)
    div2.append(space2)
    div2.append(offer)

    
    
    
    
    img.setAttribute('src', dest.pic)
    container.setAttribute('class', 'container ')
    row.setAttribute('class', 'row justify-content-center')
    div.setAttribute('class', 'card')
    img.setAttribute('class', 'img-fluid')
    div2.setAttribute('class', 'card-body')
    h5.setAttribute('class', 'card-title')
    p.setAttribute('class', 'card-text')
    span.setAttribute('class', 'badge badge-warning rounded-pill text-dark')
    p2.setAttribute('class', 'badge light text-dark')
    offer.setAttribute('class' , 'offerTag badge badge-danger rounded-pill p-2')

    // Stylings here
    div.style.width = "20rem"
    div.style.margin = "20px"
    span.style.fontSize = "16px"
    
    if (dest.offer == true){
      offer.innerHTML = "Special Offer"
    }
    else{
      offer.innerHTML = ""
    }
    
    
}

data.forEach(dest => allDestiniations(dest))



/*

MODAL 


<div class="container pt-5">
        <div class="row col d-flex justify-content-center" id="cardinfohere">
          <div class="card" style="width: 18rem; margin: 20px">
            <img
              src="https://images.unsplash.com/photo-1431274172761-fca41d930114?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              class="img-fluid"
              alt=""
            />

            <div class="card-body">
              <h5 class="card-title">Paris</h5>
              <p class="card-text">
                Quick sample text to create the card title and make up the body
                of the card's content.
              </p>
              <span class="badge badge-warning text-dark">£1000</span>
            </div>
          </div>


*/