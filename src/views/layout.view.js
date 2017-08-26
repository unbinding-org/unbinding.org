const html = require('choo/html')

module.exports = function (state, emit) {
  return html`
    <body>

      <nav class="navbar">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">unbinding.org</a>
        </div>
      </nav>

      <section class="section">
          <div class="container">
            <div class="content has-text-center">
              <blockquote>
                This is peace, this is exquisite — the resolution of 
                all fabrications; the relinquishing of all acquisitions; 
                the ending of craving; dispassion; stopping; Unbinding.
              </blockquote>
            </div>
          </div>
      </section>
    </body>
  `
}