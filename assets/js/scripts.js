const newURLAPI =
  "https://chaca-backend.hc-app.com.ar/api/noticias?fields[0]=titulo&fields[1]=noticia&fields[2]=fecha&populate[video][fields][0]=url&populate[imagenes][fields]=url&pagination[pageSize]=100&sort=id:DESC";

const contenedor = document.getElementById("contenedor");
const baseURL = "https://chaca-backend.hc-app.com.ar";
//obtenerEtiquetas();

function obtenerTitulos() {
  fetch(newURLAPI)
    .then((res) => res.json())
    .then((data) => {
      // assuming data is an array
      data.data.forEach((noticia) => {
        let cantidadFotos = 0;
        if (noticia.imagenes != null) cantidadFotos = noticia.imagenes.length;

        let cantidadvideos = 0;
        if (noticia.video != null) cantidadvideos = 1;

        console.log(cantidadFotos, cantidadvideos);

        let cuerpo_posteo = noticia.noticia.replace(/(?:\r\n|\r|\n)/g, "<br>");

        if (cantidadFotos != 0) {
          if (cantidadFotos === 1) {
            const article = document.createRange().createContextualFragment(
              `<div class="card mt-3" >
                                <div class="card-body letraChaca">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <p class="text-end text-xs mt-3">${noticia.fecha}</p>
                                                    <p class="category mb-0"> <b>${noticia.titulo} </b></p>
                                                    <p class="category mb-0">
                                                       ${cuerpo_posteo}
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
                                                            <p class="category mb-0"> <b>${noticia.titulo} </b></p>
                                                            <p class="category mb-0">
                                                                ${cuerpo_posteo}
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
                                                                <p class="category mb-0"> <b>${noticia.titulo} </b></p>
                                                                <p class="category mb-0">
                                                                     ${cuerpo_posteo}
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
                                                                <p class="category mb-0"> <b>${noticia.titulo} </b></p>
                                                                <p class="category mb-0">
                                                                    ${cuerpo_posteo}
                                                                    </p>
                                                                
                                                            </div>
                                                            <div class="col-md-3">
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
                                                                <div class="col-md-3">
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

                                                                <div class="col-md-3">
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
                                                                <div class="col-md-3">
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
                contenedor.append(article);
              }
            }
          }
        } else {
          if (cantidadvideos > 0) {
            const article = document.createRange().createContextualFragment(
              `<div class="card mt-3" >
                                                    <div class="card-body letraChaca">
                                                                <div class="row">
                                                                    <div class="col-md-12">
                                                                        <p class="text-end text-xs mt-3">${noticia.fecha}</p>
                                                                        <p class="category mb-0"> <b>${noticia.titulo} </b></p>
                                                                        <p class="category mb-0">
                                                                           ${cuerpo_posteo}
                                                                            </p>
                                                                        
                                                                    </div>

                                                                       <div class="col-md-12">
                                                                <p class="text-center mt-3">
                                                                <video width="640" height="480" controls   class="img-fluid shadow border-radius-lg" >
                                                                    <source src="${baseURL}${noticia.video.url}" type="video/mp4">
                                                                    
                                                                    </video>
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
                                                    <p class="category mb-0"> <b>${noticia.titulo} </b></p>
                                                    <p class="category mb-0">
                                                         ${cuerpo_posteo}
                                                        </p>
                                                    
                                                </div>
                                                
                                            </div>
                                    </div>
                                    </div>
                                `
            );
            contenedor.append(article);
          }
        }
      });
    });
}

obtenerTitulos();
