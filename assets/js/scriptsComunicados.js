 

const newURLAPI  = 
"https://chaca-backend.hc-app.com.ar/api/comunicados?fields[0]=titulo&fields[1]=comunicado&fields[2]=fecha&populate[imagenes][fields][0]=url&pagination[pageSize]=10&sort=id:DESC"

 const contenedor = document.getElementById("contenedor");
const baseURL = 'https://chaca-backend.hc-app.com.ar' 
function obtenerTitulos() {
  fetch(newURLAPI)
    .then((res) => res.json())
    .then((data) => {
      // assuming data is an array  
      data.data.forEach((noticia) => {

        //let imgURL = baseURL + noticia.imagenes[0].url
       

        let cantidadFotos = 0;
        if (noticia.imagenes != null)
          cantidadFotos = noticia.imagenes.length;

        let Comunicado = noticia.comunicado.replace(
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
                                                    <p class="text-end text-xs mt-3">${noticia.fecha}</p>
                                                    <p class="category mb-0"><b> ${noticia.titulo} </b></p>
                                                    <p class="category mb-0">
                                                        ${Comunicado}
                                                        </p>
                                                    
                                                </div>
                                                <div class="col-md-12">
                                                    <p class="text-center mt-3">
                                                    <img 
                                                        
                                                    src="${baseURL}${noticia.imagenes[0].url}"
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
                                                            <p class="text-end text-xs mt-3">${noticia.fecha}</p>
                                                            <p class="category mb-0"><b> ${noticia.titulo} </b></p>
                                                    <p class="category mb-0">
                                                        ${noticia.comunicado}
                                                        </p>
                                                            
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p class="text-center mt-3">
                                                            <img 
                                                                
                                                            src="${baseURL}${noticia.imagenes[0].url}"
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
                                                                
                                                            src="${baseURL}${noticia.imagenes[1].url}"
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
                                                                 <p class="text-end text-xs mt-3">${noticia.fecha}</p>
                                                                 <p class="category mb-0"><b> ${noticia.titulo} </b></p>
                                                    <p class="category mb-0">
                                                         ${Comunicado}
                                                        </p>
                                                                
                                                            </div>
                                                            <div class="col-md-4">
                                                                <p class="text-center mt-3">
                                                                <img 
                                                                    
                                                                src="${baseURL}${noticia.imagenes[0].url}"
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
                                                                    
                                                                src="${baseURL}${noticia.imagenes[1].url}"
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
                                                                    
                                                                src="${baseURL}${noticia.imagenes[2].url}"
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
                                                                 <p class="text-end text-xs mt-3">${noticia.fecha}</p>
                                                                 <p class="category mb-0"><b> ${noticia.titulo} </b></p>
                                                    <p class="category mb-0">
                                                         ${Comunicado}
                                                        </p>
                                                                
                                                            </div>
                                                            <div class="col-md-4">
                                                                <p class="text-center mt-3">
                                                                <img 
                                                                    
                                                                src="${baseURL}${noticia.imagenes[0].url}"
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
                                                                    
                                                                src="${baseURL}${noticia.imagenes[1].url}"
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
                                                                    
                                                                src="${baseURL}${noticia.imagenes[2].url}"
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
                                                                    
                                                                src="${baseURL}${noticia.imagenes[3].url}"
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
                                                    <p class="text-end text-xs mt-3">${noticia.fecha}</p>
                                                    <p class="category mb-0"> ${noticia.titulo} </p>
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