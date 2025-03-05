import { useEffect } from 'react'

// Components
import Title from '@components/Title'

export default function HomePage() {
  useEffect(() => {
    document.title = 'Inicio | To Dos'
  }, [])

  return (
    <>
      <Title >Inicio</Title>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        corrupti optio rerum iure. Hic est maiores deleniti commodi cum eveniet,
        nulla temporibus perspiciatis quibusdam officia dicta, nam odit, esse
        corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laudantium corrupti optio rerum iure. Hic est maiores deleniti commodi
        cum eveniet, nulla temporibus perspiciatis quibusdam officia dicta, nam
        odit, esse corrupti.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        corrupti optio rerum iure. Hic est maiores deleniti commodi cum eveniet,
        nulla temporibus perspiciatis quibusdam officia dicta, nam odit, esse
        corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laudantium corrupti optio rerum iure. Hic est maiores deleniti commodi
        cum eveniet, nulla temporibus perspiciatis quibusdam officia dicta, nam
        odit, esse corrupti.
      </p>

      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        corrupti optio rerum iure. Hic est maiores deleniti commodi cum eveniet,
        nulla temporibus perspiciatis quibusdam officia dicta, nam odit, esse
        corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laudantium corrupti optio rerum iure. Hic est maiores deleniti commodi
        cum eveniet, nulla temporibus perspiciatis quibusdam officia dicta, nam
        odit, esse corrupti.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        corrupti optio rerum iure. Hic est maiores deleniti commodi cum eveniet,
        nulla temporibus perspiciatis quibusdam officia dicta, nam odit, esse
        corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laudantium corrupti optio rerum iure. Hic est maiores deleniti commodi
        cum eveniet, nulla temporibus perspiciatis quibusdam officia dicta, nam
        odit, esse corrupti.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        corrupti optio rerum iure. Hic est maiores deleniti commodi cum eveniet,
        nulla temporibus perspiciatis quibusdam officia dicta, nam odit, esse
        corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laudantium corrupti optio rerum iure. Hic est maiores deleniti commodi
        cum eveniet, nulla temporibus perspiciatis quibusdam officia dicta, nam
        odit, esse corrupti.
      </p> */}
    </>
  )
}
