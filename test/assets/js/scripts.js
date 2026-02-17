const urlAPIetiqueta =
  "https://backend-chacarita.up.railway.app/api/etiquetas?sort=id";
const etiquetasDiv = document.getElementById("etiquetas");
const etiquetasBotones = document.getElementById("etiquetasBotones");

const urlAPI =
  "https://backend-chacarita.up.railway.app/api/posts?sort=id:DESC&populate=*&pagination[pageSize]=50";
const contenedor = document.getElementById("contenedor");

function obtenerEtiquetas() {
  fetch(urlAPIetiqueta)
    .then((res) => res.json())
    .then((data) => {
      // assuming data is an array
      data.data.forEach((etiquetas) => {
        let etiqueta = etiquetas.attributes.etiqueta.toString();
        if (etiqueta === "Limpiar") {
          const article = document.createRange().createContextualFragment(
            ` <button type="button" class="btn btn-danger w-auto me-2 rounded-pill text-dark" id="${etiqueta}" 
                                            onclick="obtenerTitulos2(${etiqueta})">${etiqueta}</button>                                
                                            `
          );
          etiquetasDiv.append(article);
        } else {
          const article = document.createRange().createContextualFragment(
            ` <button type="button" class="btn btn-outline-danger w-auto me-2 rounded-pill text-dark" id="${etiqueta}" 
                                onclick="obtenerTitulos2(${etiqueta})">${etiqueta}</button>                                
                                `
          );
          etiquetasDiv.append(article);
        }
      });
    });
}

obtenerEtiquetas();

function obtenerTitulos2(test) {
  contenedor.innerHTML = "";
  let valorEtiqueta = test.innerHTML;

  if (valorEtiqueta === "Limpiar") {
    obtenerTitulos();
  } else {
    fetch(urlAPI)
      .then((res) => res.json())
      .then((data) => {
        // assuming data is an array
        data.data.forEach((noticia) => {
          let cantidadFotos = 0;
          if (noticia.attributes.imagenes.data != null)
            cantidadFotos = noticia.attributes.imagenes.data.length;

          let cantidadvideos = 0;
          if (noticia.attributes.video.data != null) cantidadvideos = 1;

          let cuerpo_posteo = noticia.attributes.cuerpo_posteo.replace(
            /(?:\r\n|\r|\n)/g,
            "<br>"
          );
          if (noticia.attributes.etiqueta.data != null) {
            if (
              noticia.attributes.etiqueta.data.attributes.etiqueta ===
              valorEtiqueta
            ) {
              console.log(valorEtiqueta);
              if (cantidadFotos != 0) {
                if (cantidadFotos === 1) {
                  const article = document
                    .createRange()
                    .createContextualFragment(
                      `<div class="card mt-3" >
                                    <div class="card-body letraChaca">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <p class="text-end text-xs mt-3">${noticia.attributes.fecha}</p>
                                                        <p class="category text-md mb-0">${noticia.attributes.titulo}</p>
                                                        <p class="category mb-0">
                                                        ${cuerpo_posteo}
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
                    const article = document
                      .createRange()
                      .createContextualFragment(
                        `<div class="card mt-3" >
                                            <div class="card-body letraChaca">
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <p class="text-end text-xs mt-3">${noticia.attributes.fecha}</p>
                                                                <p class="category mb-0"><b>${noticia.attributes.titulo} </b> </p>
                                                                <p class="category mb-0">
                                                                    ${cuerpo_posteo}
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
                      const article = document
                        .createRange()
                        .createContextualFragment(
                          `<div class="card mt-3" >
                                                <div class="card-body letraChaca">
                                                            <div class="row">
                                                                <div class="col-md-12">
                                                                    <p class="text-end text-xs mt-3">${noticia.attributes.fecha}</p>
                                                                    <p class="category mb-0"><b>${noticia.attributes.titulo} </b> </p>
                                                                    <p class="category mb-0">
                                                                        ${cuerpo_posteo}
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
                      const article = document
                        .createRange()
                        .createContextualFragment(
                          `<div class="card mt-3" >
                                                <div class="card-body letraChaca">
                                                            <div class="row">
                                                                <div class="col-md-12">
                                                                    <p class="text-end text-xs mt-3">${noticia.attributes.fecha}</p>
                                                                    <p class="category mb-0"><b>${noticia.attributes.titulo} </b> </p>
                                                                    <p class="category mb-0">
                                                                        ${cuerpo_posteo}
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
                if (cantidadvideos > 0) {
                  const article = document
                    .createRange()
                    .createContextualFragment(
                      `<div class="card mt-3" >
                                                        <div class="card-body letraChaca">
                                                                    <div class="row">
                                                                        <div class="col-md-12">
                                                                            <p class="text-end text-xs mt-3">${noticia.attributes.fecha}</p>
                                                                            <p class="category mb-0"><b>${noticia.attributes.titulo} </b> </p>
                                                                            <p class="category mb-0">
                                                                            ${cuerpo_posteo}
                                                                                </p>
                                                                            
                                                                        </div>

                                                                        <div class="col-md-12">
                                                                    <p class="text-center mt-3">
                                                                    <video width="640" height="480" controls   class="img-fluid shadow border-radius-lg" >
                                                                        <source src="${noticia.attributes.video.data.attributes.url}" type="video/mp4">
                                                                        
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
                  const article = document
                    .createRange()
                    .createContextualFragment(
                      `<div class="card mt-3" >
                                    <div class="card-body letraChaca">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <p class="text-end text-xs mt-3">${noticia.attributes.fecha}</p>
                                                        <p class="category mb-0"><b>${noticia.attributes.titulo} </b> </p>
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
            }
          }
        });
      });
  }
}

function obtenerTitulos() {
  fetch(urlAPI)
    .then((res) => res.json())
    .then((data) => {
      // assuming data is an array
      data.data.forEach((noticia) => {
        let cantidadFotos = 0;
        if (noticia.attributes.imagenes.data != null)
          cantidadFotos = noticia.attributes.imagenes.data.length;

        let cantidadvideos = 0;
        if (noticia.attributes.video.data != null) cantidadvideos = 1;

        let cuerpo_posteo = noticia.attributes.cuerpo_posteo.replace(
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
                                                    <p class="text-end text-xs mt-3">${noticia.attributes.fecha}</p>
                                                    <p class="category mb-0"> <b>${noticia.attributes.titulo} </b></p>
                                                    <p class="category mb-0">
                                                       ${cuerpo_posteo}
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
                                                            <p class="text-end text-xs mt-3">${noticia.attributes.fecha}</p>
                                                            <p class="category mb-0"> <b>${noticia.attributes.titulo} </b></p>
                                                            <p class="category mb-0">
                                                                ${cuerpo_posteo}
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
                                                                <p class="text-end text-xs mt-3">${noticia.attributes.fecha}</p>
                                                                <p class="category mb-0"> <b>${noticia.attributes.titulo} </b></p>
                                                                <p class="category mb-0">
                                                                     ${cuerpo_posteo}
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
                                                                <p class="text-end text-xs mt-3">${noticia.attributes.fecha}</p>
                                                                <p class="category mb-0"> <b>${noticia.attributes.titulo} </b></p>
                                                                <p class="category mb-0">
                                                                    ${cuerpo_posteo}
                                                                    </p>
                                                                
                                                            </div>
                                                            <div class="col-md-3">
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
                                                                <div class="col-md-3">
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

                                                                <div class="col-md-3">
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
                                                                <div class="col-md-3">
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
          if (cantidadvideos > 0) {
            const article = document.createRange().createContextualFragment(
              `<div class="card mt-3" >
                                                    <div class="card-body letraChaca">
                                                                <div class="row">
                                                                    <div class="col-md-12">
                                                                        <p class="text-end text-xs mt-3">${noticia.attributes.fecha}</p>
                                                                        <p class="category mb-0"> <b>${noticia.attributes.titulo} </b></p>
                                                                        <p class="category mb-0">
                                                                           ${cuerpo_posteo}
                                                                            </p>
                                                                        
                                                                    </div>

                                                                       <div class="col-md-12">
                                                                <p class="text-center mt-3">
                                                                <video width="640" height="480" controls   class="img-fluid shadow border-radius-lg" >
                                                                    <source src="${noticia.attributes.video.data.attributes.url}" type="video/mp4">
                                                                    
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
                                                    <p class="text-end text-xs mt-3">${noticia.attributes.fecha}</p>
                                                    <p class="category mb-0"> <b>${noticia.attributes.titulo} </b></p>
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

etiquetasBotones.remove();
