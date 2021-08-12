const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;
const HashRouter = ReactRouterDOM.HashRouter;


class App extends React.Component {

    render(){
        return (
                <HashRouter>

                    <header class="p-3 bg-dark text-white">
                        <div class="container">
                            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                                <img src="/imagenes/beer 1.svg" width="40px" height="40px" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"></img>
                                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                                    <li><Link to="/" class="nav-link px-2 text-white">Brew Bros</Link></li>
                                    <li><Link to="/Productos" class="nav-link px-2 text-white">Nuestros Productos</Link></li>
                                    <li><a href="#about" class="nav-link px-2 text-white">About</a></li>
                                </ul>
                                <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                                    <input type="search" class="form-control form-control-dark" placeholder="Buscar..." aria-label="Search"></input>
                                </form>
                                <div class="text-end">
                                    <button type="button" class="btn btn-outline-light me-2">Login</button>
                                    <button type="button" class="btn btn-light">Registrate</button>
                                </div>
                            </div>
                        </div>
                    </header>

                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/Productos" component={Productos} />
                    </Switch>

                </HashRouter>

        )
    }
}


class Carrusel extends React.Component{

    render(){

        return(
            <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-label="Slide 1" aria-current="true"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="tamañoIMG" src="/imagenes/raw-barley-grain-in-wooden-background.jpg" alt=""></img>
                        <div class="container">
                            <div class="carousel-caption text-start">
                                <h1>Insumos elaboración</h1>
                                <p>Cebadas, lúpulos y levaduras</p>
                                <p><Link to="/Productos" class="btn btn-lg btn-dark">Ver Galería</Link></p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="tamañoIMG" src="/imagenes/equipment-of-contemporary-winery.jpg" alt=""></img>        
                        <div class="container">
                            <div class="carousel-caption">
                                <h1>Materiales</h1>
                                <p>Ollas, mangueras, botellas</p>
                                <p><Link to="/Productos" class="btn btn-lg btn-dark">Ver Galería</Link></p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="tamañoIMG" src="/imagenes/tasty-american-beer-composition.jpg" alt=""></img>      
                        <div class="container">
                            <div class="carousel-caption text-end">
                                <h1>Cervezas</h1>
                                <p>IPAS, Laggers, Rojas, Negras</p>
                                <p><Link to="/Productos" class="btn btn-lg btn-dark">Ver Galería</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        )
    }
}


class Footer extends React.Component{

    render(){

        return(
            <footer id="about" class="p-3 bg-dark text-white">
                <div class="container border-top py-3">
                    <div class="row mb-3 ">
                        <div class="col-6 col-sm-4 ">
                            <h4>Redes</h4>
                            <div class="btn-group mb-3">
                                <button type="button" class="btn btn-outline-secondary">
                                    <a class=" text-light" href="https://www.facebook.com/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                                    </svg>
                                    <span class="visually-hidden">Button</span>
                                    </a>
                                </button>
                                <button type="button" class="btn btn-outline-secondary">
                                    <a class=" text-light" href="https://www.instagram.com/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                                    </svg>
                                    <span class="visually-hidden">Button</span>
                                    </a>
                                </button>
                                <button type="button" class="btn btn-outline-secondary">
                                    <a class="text-light" href="https://www.twitter.com/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                    </svg>
                                    <span class="visually-hidden">Button</span>
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div class="col-6 col-sm-4 ">
                            <h4>Medios de pago</h4>
                            <img width="75" src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png" alt="visa"></img>  
                            <img width="75" src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png" alt="mastercard"></img>            
                            <img width="75" src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png" alt="amex"></img>        
                            <img width="75" src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png" alt="mercadopago"></img>        
                        </div>
                        <div class="col-6 col-sm-4 ">
                            <h4>Contactanos</h4>
                            <p>Mail@mail.com</p>
                            <p>11-1111 1111</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

class Destacados extends React.Component{


    constructor(props){
        super(props);
        this.state = {productos:[]}
    }
   

    componentDidMount(){
        let resp = axios.get("http://uade.cdnapp.xyz/productos");
        resp.then(x => {
            this.setState({productos: x.data})
        })
        .catch(err => {console.log(err)})

    }

    filtroDestacado(prod){
        return prod.rating === 5;
    }

     renderProd(){
        let {productos} = this.state;
        productos = productos.filter(this.filtroDestacado)
        productos = productos.sort(()=> Math.random()-0.5)
        productos = productos.slice(0,4)
            return productos.map(producto => <ProductoIndividual id={producto.id} nombre={producto.nombre} precio={producto.precio} imagenes={producto.imagenes}/>)
    }

    render(){

        return(
            <div class="album py-5 bg-dark">
                <div class="container">
                    <div class="row pb-2 border-bottom mb-3">
                        <h2 class="text-white">Productos destacados</h2>
                        <Link to="/Productos" class="text-white ">Ver más</Link>
                    </div>
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 py-3">
                        {this.renderProd()}
                    </div>
                </div>
            </div>
        )
    }
}

class ProductoIndividual extends React.Component{

    render(){

        return(
                <div class="col ">
                    <div class="card shadow-sm tamañoCard ">
                        <a class="text-dark" href={"/ProductoIndividual.html?id=" + this.props.id}>
                            <img class="imagenesProd" src={this.props.imagenes} alt="imagen producto"></img>        
                            <div class="card-body ">  
                            <h5>$ {this.props.precio}</h5> 
                            <p class="text-justify">{this.props.nombre}</p>
                            </div>
                        </a>
                    </div>
                </div>
        )
    }
}
class Banner extends React.Component{

    render(){

        return(
            <div class="imagenAlmbum">
                <div class="py-5 text-center container">
                    <div class="row py-lg-5">
                        <div class="col-lg-6 col-md-8 mx-auto">
                            <h1 class="">Brew Bros</h1>
                            <h3 class="font-weight-bold">Comprometidos con veladas grandiosas</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class ListadoProductos extends React.Component{

    constructor(props){
        super(props);
        this.state = {productos:[],stock:false,envio:false,categoria:null,orden:null}
    }

    componentDidMount(){
        let resp = axios.get("http://uade.cdnapp.xyz/productos");
        resp.then(x => {
            this.setState({productos: x.data})
        })
        .catch(err => {console.log(err)})
    }

    filtroDestacado(prod){
        return prod.rating === 5;
    }
    filtroEnvio(prod){
        return prod.seEnvia === true;
    }
    filtroStock(prod){
        return prod.stock > 0;
    }
    filtroInsumo(prod){
        return prod.categoria === 1;
    }
    filtroMateriales(prod){
        return prod.categoria === 2;
    }
    filtroCervezas(prod){
        return prod.categoria === 3;
    }
    handlerStock(){
        this.setState({stock:true})
    }
    handlerEnvio(){
        this.setState({envio:true})
    }
    handlerLimpiar(){
        this.setState({stock:false,envio:false,categoria:null,orden:null})
    }
    handlerCategoria1(){
        this.setState({categoria: 1})
    }
    handlerCategoria2(){
        this.setState({categoria: 2})
    }
    handlerCategoria3(){
        this.setState({categoria: 3})
    }
    handlerRelevantes(){
        this.setState({orden: 1})
    }
    handlerAlfabetico(){
        this.setState({orden: 2})
    }
    handlerMenor(){
        this.setState({orden: 3})
    }
    handlerMayor(){
        this.setState({orden: 4})
    }

    renderProd(){
        let {productos} = this.state;
        if(this.state.stock===true){
            productos = productos.filter(this.filtroStock)
        }
        if(this.state.envio===true){
            productos = productos.filter(this.filtroEnvio)
        }
        switch (this.state.categoria){
            case 1:    
                productos = productos.filter(this.filtroInsumo)
                break;
            case 2:
                productos = productos.filter(this.filtroMateriales)
                break;
            case 3:
                productos = productos.filter(this.filtroCervezas)
                break;
        }
        switch (this.state.orden){
            case 1:    
                productos.sort((a,b)=>b.rating - a.rating)
                break;
            case 2:
                productos.sort(function (a, b) {
                    if (a.nombre > b.nombre) {
                      return 1;
                    }
                    if (a.nombre < b.nombre) {
                      return -1;
                    }
                    return 0;
                })
                break;
            case 3:
                productos.sort((a,b)=>a.precio - b.precio)
                break;
            case 4:
                productos.sort((a,b)=>b.precio - a.precio)
                break;
        }
        return productos.map(producto => <ProductoIndividual id={producto.id} nombre={producto.nombre} precio={producto.precio} imagenes={producto.imagenes}/>)
        
    }



    render(){

        return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom mb-3" aria-label="Tenth navbar example">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="dropdown08" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
                                <ul class="dropdown-menu" aria-labelledby="dropdown08">
                                    <li><button onClick={this.handlerCategoria1.bind(this)} class="dropdown-item correctorBoton">Insumos</button></li>
                                    <li><button onClick={this.handlerCategoria2.bind(this)} class="dropdown-item correctorBoton">Materiales</button></li>
                                    <li><button onClick={this.handlerCategoria3.bind(this)} class="dropdown-item correctorBoton">Cervezas</button></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="dropdown08" data-bs-toggle="dropdown" aria-expanded="false">Ordenar por</a>
                                <ul class="dropdown-menu" aria-labelledby="dropdown08">
                                    <li><button onClick={this.handlerRelevantes.bind(this)} class="dropdown-item correctorBoton" >Más relevantes</button></li>
                                    <li><button onClick={this.handlerAlfabetico.bind(this)} class="dropdown-item correctorBoton" >Alfabético</button></li>
                                    <li><button onClick={this.handlerMenor.bind(this)} class="dropdown-item correctorBoton" >Menor precio</button></li>
                                    <li><button onClick={this.handlerMayor.bind(this)} class="dropdown-item correctorBoton" >Mayor precio</button></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <button onClick={this.handlerEnvio.bind(this)} class="nav-link correctorBoton">Con envios</button>
                            </li>
                            <li class="nav-item">
                                <button onClick={this.handlerStock.bind(this)} class="nav-link correctorBoton">Quitar sin stock</button>
                            </li>
                            <li class="nav-item">
                                <button onClick={this.handlerLimpiar.bind(this)} class="nav-link correctorBoton">Limpiar filtros</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="bg-dark">
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 py-3">
                        {this.renderProd()}
                    </div>
                </div>
            </div>
        </div>
    
        )
    }

}

class Home extends React.Component{
    render(){
        return (
            <div>
                <Carrusel/>
                <Destacados/>
                <Footer/>
            </div>
        )
    }
}

class Productos extends React.Component{
    render(){
        return (
            <div>
                <Banner/>
                <ListadoProductos/>
                <Footer/>
            </div>
        )
    }

}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);