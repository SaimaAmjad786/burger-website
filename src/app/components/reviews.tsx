import React from 'react'

function Reviews() {
  return (
    <div>
        <section className="review" id='services'>
  <h2>People say about us</h2>
  <p className="text">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  </p>
  <div className="cards">
    <div className="card">
      <img src="/person-1.jpg" alt="person 1" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        debitis dolor. Omnis id facere in labore delectus ab eum obcaecati?
      </p>
      <p className="person-name">William Black</p>
    </div>
    <div className="card">
      <img src="/person-2.jpg" alt="person 2" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        debitis dolor. Omnis id facere in labore delectus ab eum obcaecati?
      </p>
      <p className="person-name">Jennifer Tilly</p>
    </div>
    <div className="card">
      <img src="/person-3.jpg" alt="person 3" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        debitis dolor. Omnis id facere in labore delectus ab eum obcaecati?
      </p>
      <p className="person-name">Robert Haggerty</p>
    </div>
  </div>
</section>

    </div>
  )
}

export default Reviews