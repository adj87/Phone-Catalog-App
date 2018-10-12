import React from 'react'

export const PhoneListContainer = ({ phones }) => {
  return (
    <div className="container">
      <div className="columns">
        {phones.map(phone => {
          const srcImage =
            'http://localhost:3000/images/' + phone['product-image']
          return (
            <div className="card column">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={srcImage} alt={phone.name} />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="https://bulma.io/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">{phone.name}</p>
                    <p className="subtitle is-6">@johnsmith</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
