import React from 'react'
import { FadeLoader } from 'react-spinners'

export const SpinnerComponent = ({ loading }) => {
  const clase = loading ? 'modal is-active' : 'modal'

  return (
    <div className={clase}>
      <div
        className="modal-background"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <FadeLoader
          sizeUnit={'px'}
          size={300}
          color={'white'}
          loading={loading}
        />
      </div>
    </div>
  )
}
