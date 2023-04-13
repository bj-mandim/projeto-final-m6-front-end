import Header from "../../components/header";

function Product() {
  return (
    <>
      <Header></Header>
      <main>
        <section className="background_purple"></section>
        <div className="infos">
          <section className="container-infos">
            <div className="image-car">
              <img
                src="https://revistacarro.com.br/wp-content/uploads/2018/05/619.png"
                alt="car_image"
              />
            </div>
            <div className="product-info">
              <h3>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200</h3>

              <div>
                <div>
                  <span>2013</span> <span>0 Km</span>
                </div>
                <div>
                  <span>R$: 70.000,00</span>
                </div>
              </div>
              <button>Comprar</button>
            </div>
            <div className="descrition-product">
              <h3>Descrição</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="comments">
              <h3>Comentários</h3>
              <div>espaço pra comentarios</div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Product;
