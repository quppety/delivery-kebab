const React = require('react');
const Layout = require('./Layout');
module.exports = function Home({ user, read }) {
  return (
    <Layout user={user}>
      {read.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {read.map((product) => (
            <div className="card" style={{ width: '18rem', margin: '10px' }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                  Цена со скидкой: {product.price / 2}
                </p>
                <p
                  style={{ textDecoration: 'line-through' }}
                  className="card-text"
                >
                  Цена: {product.price}
                </p>
                {user ? (
                  <>
                    <a href="#" className="btn btn-primary">
                      В корзину
                    </a>

                    <a
                      style={{ marginLeft: '30px' }}
                      href="#"
                      className="btn btn-primary"
                    >
                      Подробнее
                    </a>
                  </>
                ) : (
                  <a
                    style={{ display: 'flex', justifyContent: 'center' }}
                    href="#"
                    className="btn btn-primary"
                  >
                    Подробнее
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h3>Продукты еще не добавлены</h3>
      )}
    </Layout>
  );
};
