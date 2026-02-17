const urlAPI =
  "https://backend-chacarita.up.railway.app/api/comunicados?sort=id:DESC&populate=*&pagination[pageSize]=10";
const contenedor = document.getElementById("contenedor");

function obtenerTitulos() {
  fetch(urlAPI)
    .then((res) => res.json())
    .then((data) => {
      // assuming data is an array
      data.data.forEach((noticia) => {
        let cantidadFotos = 0;
        if (noticia.attributes.imagenes.data != null)
          cantidadFotos = noticia.attributes.imagenes.data.length;

        let Comunicado = noticia.attributes.Comunicado.replace(
          /(?:\r\n|\r|\n)/g,
          "<br>"
        );

        if (cantidadFotos != 0) {
          if (cantidadFotos === 1) {
            const article = document.createRange().createContextualFragment(
              `<div class="card mt-3" >
                                <div class="card-body letraChaca">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <p class="text-end text-xs mt-3">${noticia.attributes.Fecha}</p>
                                                    <p class="category mb-0"><b> ${noticia.attributes.Titulo} </b></p>
                                                    <p class="category mb-0">
                                                        ${Comunicado}
                                                        </p>
                                                    
                                                </div>
                                                <div class="col-md-12">
                                                    <p class="text-center mt-3">
                                                    <img 
                                                        
                                                        src="${noticia.attributes.imagenes.data[0].attributes.url}"
                                                        class="img-fluid shadow border-radius-lg"
                                                        alt="noticia"
                                                        height ="100" 
                                                        width  ="600" 
                                                    />  
                                                    </p>
                                                    </div>

                                            </div>
                                    </div>
                                    </div>
                                `
            );
            contenedor.append(article);
          } else {
            if (cantidadFotos === 2) {
              const article = document.createRange().createContextualFragment(
                `<div class="card mt-3" >
                                        <div class="card-body letraChaca">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <p class="text-end text-xs mt-3">${noticia.attributes.Fecha}</p>
                                                            <p class="category mb-0"><b> ${noticia.attributes.Titulo} </b></p>
                                                    <p class="category mb-0">
                                                        ${noticia.attributes.Comunicado}
                                                        </p>
                                                            
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p class="text-center mt-3">
                                                            <img 
                                                                
                                                                src="${noticia.attributes.imagenes.data[0].attributes.url}"
                                                                class="img-fluid shadow border-radius-lg"
                                                                alt="noticia"
                                                                height ="100" 
                                                                width  ="450" 
                                                            
                                                            />  
                                                            </p>
                                                            </div>
                                                            <div class="col-md-6">
                                                            <p class="text-center mt-3">
                                                            <img 
                                                                
                                                                src="${noticia.attributes.imagenes.data[1].attributes.url}"
                                                                class="img-fluid shadow border-radius-lg"
                                                                alt="noticia"
                                                                height ="100" 
                                                                width  ="450" 
                                                            />  
                                                            </p>
                                                            </div>


                                                    </div>
                                            </div>
                                            </div>
                                        `
              );
              contenedor.append(article);
            } else {
              if (cantidadFotos === 3) {
                const article = document.createRange().createContextualFragment(
                  `<div class="card mt-3" >
                                            <div class="card-body letraChaca">
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                 <p class="text-end text-xs mt-3">${noticia.attributes.Fecha}</p>
                                                                 <p class="category mb-0"><b> ${noticia.attributes.Titulo} </b></p>
                                                    <p class="category mb-0">
                                                         ${Comunicado}
                                                        </p>
                                                                
                                                            </div>
                                                            <div class="col-md-4">
                                                                <p class="text-center mt-3">
                                                                <img 
                                                                    
                                                                    src="${noticia.attributes.imagenes.data[0].attributes.url}"
                                                                    class="img-fluid shadow border-radius-lg"
                                                                    alt="noticia"
                                                                    height ="100" 
                                                                    width  ="450" 
                                                                
                                                                />  
                                                                </p>
                                                                </div>
                                                            <div class="col-md-4">
                                                                <p class="text-center mt-3">
                                                                <img 
                                                                    
                                                                    src="${noticia.attributes.imagenes.data[1].attributes.url}"
                                                                    class="img-fluid shadow border-radius-lg"
                                                                    alt="noticia"
                                                                    height ="100" 
                                                                    width  ="450" 
                                                                />  
                                                                </p>
                                                                </div>
                                                            <div class="col-md-4">
                                                                <p class="text-center mt-3">
                                                                <img 
                                                                    
                                                                    src="${noticia.attributes.imagenes.data[2].attributes.url}"
                                                                    class="img-fluid shadow border-radius-lg"
                                                                    alt="noticia"
                                                                    height ="100" 
                                                                    width  ="450" 
                                                                />  
                                                                </p>
                                                                </div>


                                                        </div>
                                                </div>
                                                </div>
                                            `
                );
                contenedor.append(article);
              } else {
                const article = document.createRange().createContextualFragment(
                  `<div class="card mt-3" >
                                            <div class="card-body letraChaca">
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                 <p class="text-end text-xs mt-3">${noticia.attributes.Fecha}</p>
                                                                 <p class="category mb-0"><b> ${noticia.attributes.Titulo} </b></p>
                                                    <p class="category mb-0">
                                                         ${Comunicado}
                                                        </p>
                                                                
                                                            </div>
                                                            <div class="col-md-4">
                                                                <p class="text-center mt-3">
                                                                <img 
                                                                    
                                                                    src="${noticia.attributes.imagenes.data[0].attributes.url}"
                                                                    class="img-fluid shadow border-radius-lg"
                                                                    alt="noticia"
                                                                    height ="100" 
                                                                    width  ="450" 
                                                                
                                                                />  
                                                                </p>
                                                                </div>
                                                                <div class="col-md-4">
                                                                <p class="text-center mt-3">
                                                                <img 
                                                                    
                                                                    src="${noticia.attributes.imagenes.data[1].attributes.url}"
                                                                    class="img-fluid shadow border-radius-lg"
                                                                    alt="noticia"
                                                                    height ="100" 
                                                                    width  ="450" 
                                                                />  
                                                                </p>
                                                                </div>

                                                                <div class="col-md-4">
                                                                <p class="text-center mt-3">
                                                                <img 
                                                                    
                                                                    src="${noticia.attributes.imagenes.data[2].attributes.url}"
                                                                    class="img-fluid shadow border-radius-lg"
                                                                    alt="noticia"
                                                                    height ="100" 
                                                                    width  ="450" 
                                                                
                                                                />  
                                                                </p>
                                                                </div>
                                                                <div class="col-md-4">
                                                                <p class="text-center mt-3">
                                                                <img 
                                                                    
                                                                    src="${noticia.attributes.imagenes.data[3].attributes.url}"
                                                                    class="img-fluid shadow border-radius-lg"
                                                                    alt="noticia"
                                                                    height ="100" 
                                                                    width  ="450" 
                                                                />  
                                                                </p>
                                                                </div>


                                                        </div>
                                                </div>
                                                </div>
                                            `
                );
              }
            }
          }
        } else {
          const article = document.createRange().createContextualFragment(
            `<div class="card mt-3" >
                                <div class="card-body letraChaca">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <p class="text-end text-xs mt-3">${noticia.attributes.Fecha}</p>
                                                    <p class="category mb-0"> ${noticia.attributes.Titulo} </p>
                                                    <p class="category mb-0">
                                                         ${Comunicado}
                                                        </p>
                                                    
                                                </div>
                                                
                                            </div>
                                    </div>
                                    </div>
                                `
          );
          contenedor.append(article);
        }
      });
    });
}

obtenerTitulos();
