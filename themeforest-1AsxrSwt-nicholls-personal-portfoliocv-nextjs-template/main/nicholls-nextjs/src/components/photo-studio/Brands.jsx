import React from 'react'
import BRANDS from '@/constant/photo-studio/brand-items'
import BrabdItem from '@/components/photo-studio/BrandItem'

const Brands = () => {
  return (
    <section className="brands-area section-padding-top-bottom">
    <div className="container container--extend">
      <div className="row">
        <div className="col-12 section-mini-padding-bottom">
          <h2
            className="brands__title ff-six-caps fs-200 fw-normal title-stretch"
            data-stretch="stretch-up"
          >
            OUR PARTNERS
          </h2>
        </div>
        <div className="col-12">
          <div
            className="row brand-row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-6 g-3 g-lg-4 justify-content-center"
          >
            {BRANDS.map((brand, index) => (
                <BrabdItem key={brand?.id} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Brands